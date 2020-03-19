import React from "react";

import Character from "./containers/Character";
import Selector from "./containers/Selector";
import classes from "./App.module.scss";
import PartInfo from "./interfaces/PartInfo";
import config from "./config";
import configUtils from "./utils/configUtils";

function App() {
  const [partInfoArray, setPartInfoArray] = React.useState<PartInfo[]>([]);
  const firstSkinToneId = config.colors.filter(color => color.isSkinTone)[0].id;
  const [skinTone, setSkinTone] = React.useState<number>(firstSkinToneId);

  const addPart = (newPart: PartInfo[]) => {
    setPartInfoArray(prevState => {
      return [...newPart, ...prevState];
    });
  };

  const changeSkinTone = (newSkinTone: number) => {
    setSkinTone(newSkinTone);

    /* setPartInfoArray(prevState => {
      prevState.forEach(part=>{
        if(configUtils.partType.usesSkinTone(part.))
      });


      return [...newPart, ...prevState];
    }); */
  };

  return (
    <div className={classes.App}>
      <Character partInfoArray={partInfoArray}></Character>
      <Selector
        addPart={addPart}
        changeSkinTone={changeSkinTone}
        skinTone={skinTone}
      ></Selector>
    </div>
  );
}

export default App;
