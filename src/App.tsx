import React from "react";

import Character from "./containers/Character";
import Selector from "./containers/Selector";
import classes from "./App.module.scss";
import config from "./config";
import { ConfigPart } from "./interfaces/Config";
import configUtils from "./utils/configUtils";

function App() {
  const [partInfoArray, setPartInfoArray] = React.useState<ConfigPart[]>([]);
  const firstSkinToneId = config.colors.filter(color => color.isSkinTone)[0].id;
  const [skinTone, setSkinTone] = React.useState<number>(firstSkinToneId);

  const addPart = (newPart: ConfigPart) => {
    setPartInfoArray(prevState => {
      return [{ ...newPart }, ...prevState];
    });
  };

  const changeSkinTone = (newSkinTone: number) => {
    setSkinTone(newSkinTone);

    setPartInfoArray(prevState => {
      console.log("newSkinTone:", newSkinTone);
      console.log("original state:", prevState);
      const newState = [...prevState];

      newState.forEach(part => {
        console.log("Checking part:", part);
        const usesSkinTone = configUtils.partType.usesSkinTone(part.partTypeId);
        console.log("usesSkinTone?", usesSkinTone);
        if (usesSkinTone) {
          console.log("Found part that uses global skin:", part);
          const relatedPart = config.parts.find(
            newPart =>
              newPart.id !== part.id &&
              newPart.partTypeId === part.partTypeId &&
              newPart.name === part.name &&
              newPart.colorId === newSkinTone
          );

          if (!!relatedPart) {
            console.log("relatedPart:", relatedPart);
            part.id = relatedPart.id;
            part.images = relatedPart.images;
          } else {
            console.log(
              "relatedPart not found:",
              config.parts.filter(newPart => newPart.name === part.name)
            );
          }
        }
      });

      console.log("final state:", newState);
      return [...newState];
    });
  };

  return (
    <div className={classes.App}>
      <Character partsArray={partInfoArray}></Character>
      <Selector
        addPart={addPart}
        changeSkinTone={changeSkinTone}
        skinTone={skinTone}
      ></Selector>
    </div>
  );
}

export default App;
