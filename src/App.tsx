import React from "react";

import * as _ from "underscore";
import html2canvas from "html2canvas";

import Character from "./containers/Character";
import Selector from "./containers/Selector";
import classes from "./App.module.scss";
import config from "./config";
import { ConfigPart, ConfigColor } from "./interfaces/Config";
import configUtils from "./utils/configUtils";

function App() {
  const firstSkinToneId = config.colors.filter(color => color.isSkinTone)[0].id;

  const [partInfoArray, setPartInfoArray] = React.useState<ConfigPart[]>(
    configUtils.part.getDefaultSelection(firstSkinToneId)
  );
  const [skinTone, setSkinTone] = React.useState<number>(firstSkinToneId);
  const [changing, setChanging] = React.useState<boolean>(false);

  React.useEffect(() => {
    loadPartsFromUrl();
  }, []);

  const loadPartsFromUrl = () => {
    const characterBase64 = window.location.hash.split("#")[1];
    if (characterBase64) {
      console.log(characterBase64);
      const savedPartInfoArray: ConfigPart[] = JSON.parse(
        atob(characterBase64)
      );
      setChanging(true);
      setTimeout(() => setChanging(false), 500);
      setPartInfoArray([...savedPartInfoArray]);

      const newSkinTone = savedPartInfoArray.find(part =>
        configUtils.partType.usesSkinTone(part.partTypeId)
      )?.colorId;
      if (newSkinTone) setSkinTone(newSkinTone);
    }
  };

  const removePart = (removedPart: ConfigPart) => {
    cleanUrl();

    setPartInfoArray(prevState => {
      const newState = [...prevState];

      if (!configUtils.part.isBodyPart(removedPart)) {
        const index = newState.findIndex(
          part => part.name === removedPart.name
        );
        if (index !== -1) newState.splice(index, 1);
      }

      return [...newState];
    });
  };

  const addPart = (newPart: ConfigPart) => {
    cleanUrl();

    setPartInfoArray(prevState => {
      const newState = [...prevState];
      let shouldAdd = true;
      const bodyShapeHasChanged = configUtils.part.isBodyPart(newPart);

      prevState.forEach(part => {
        if (
          part.partTypeId === newPart.partTypeId &&
          (!configUtils.part.allowsMultipleSelection(part) ||
            part.name === newPart.name)
        ) {
          // Example: Changing hair types
          // Needs to be: same partType, with no multipleSelection, or same name
          configUtils.part.replacePart(part, newPart);
          shouldAdd = false;
        } else if (
          bodyShapeHasChanged &&
          configUtils.partType.boundToBodyShape(part.partTypeId)
        ) {
          // Example: Changing body shape or head
          const partForNewBody = configUtils.part.findPartBoundToBodyShape(
            config,
            part,
            newPart.bodyShapeId as number
          );
          if (partForNewBody) {
            configUtils.part.replacePart(part, partForNewBody);
          }
        }
      });

      if (shouldAdd) {
        newState.push({ ...newPart });
      }

      return [...newState];
    });
  };

  const changeSkinTone = (newSkinTone: number) => {
    cleanUrl();
    setSkinTone(newSkinTone);

    setPartInfoArray(prevState => {
      const newState = [...prevState];

      newState.forEach(part => {
        const usesSkinTone = configUtils.partType.usesSkinTone(part.partTypeId);

        if (usesSkinTone) {
          const relatedPart = config.parts.find(
            newPart =>
              newPart.partTypeId === part.partTypeId &&
              newPart.name === part.name &&
              newPart.colorId === newSkinTone
          );

          if (!!relatedPart) {
            configUtils.part.replacePart(part, relatedPart);
          }
        }
      });

      return [...newState];
    });
  };

  const randomize = () => {
    cleanUrl();
    const randomSelection: ConfigPart[] = [];

    const randomSkinTone: ConfigColor = _.sample(
      config.colors.filter(color => color.isSkinTone)
    );

    const randomBodyShape: ConfigPart = _.sample(
      config.parts
        .filter(part => configUtils.part.isBodyPart(part))
        .filter(part => part.colorId === randomSkinTone.id)
    );
    randomSelection.push({ ...randomBodyShape });

    config.partTypes.forEach(partType => {
      const randomPart: ConfigPart = _.sample(
        config.parts
          .filter(part => !configUtils.part.isBodyPart(part))
          .filter(part => part.partTypeId === partType.id)
          .filter(part =>
            partType.useSkinTone ? part.colorId === randomSkinTone.id : true
          )
          .filter(part =>
            partType.boundToBodyShape
              ? part.bodyShapeId === randomBodyShape.bodyShapeId
              : true
          )
      );

      if (randomPart) randomSelection.push({ ...randomPart });
    });

    setSkinTone(randomSkinTone.id);
    setChanging(true);
    setTimeout(() => setChanging(false), 500);
    setPartInfoArray([...randomSelection]);
  };

  const save = () => {
    const container = document.querySelector("#character");
    const image = document.querySelector(".characterLayer");
    if (container !== null && image !== null) {
      const xOffset = container.clientWidth - image.clientWidth;
      const yOffset = container.clientHeight - image.clientHeight;

      html2canvas(container as any, {
        x: xOffset,
        y: yOffset,
        height: image.clientHeight,
        width: image.clientWidth
      }).then((canvas: HTMLCanvasElement) => {
        document.body.appendChild(canvas);
        const dt = canvas.toDataURL();
        const element = document.createElement("a");
        element.href = dt;
        element.download = "character.png";
        element.click();
        canvas.remove();
      });
    }
  };

  const share = () => {
    const partInfoArrayBase64 = btoa(JSON.stringify(partInfoArray));
    window.location.href =
      window.location.href.split("#")[0] + "#" + partInfoArrayBase64;
  };

  const refresh = () => {
    cleanUrl();
    const defaultParts = configUtils.part.getDefaultSelection(firstSkinToneId);
    setChanging(true);
    setTimeout(() => setChanging(false), 500);
    setPartInfoArray([...defaultParts]);
    setSkinTone(firstSkinToneId);
  };

  const cleanUrl = () =>
    (window.location.href = window.location.href.split("#")[0] + "#");

  return (
    <div className={classes.App}>
      <Character partsArray={partInfoArray} changing={changing}></Character>
      <Selector
        addPart={addPart}
        removePart={removePart}
        changeSkinTone={changeSkinTone}
        skinTone={skinTone}
        partsArray={partInfoArray}
        randomize={randomize}
        save={save}
        share={share}
        refresh={refresh}
      ></Selector>
    </div>
  );
}

export default App;
