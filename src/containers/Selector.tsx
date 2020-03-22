import React from "react";
import config from "../config";

import { SkinTones } from "../components/SkinTones";
import { PartTypes } from "../components/PartTypes";
import { PartList } from "../components/PartList";
import { ConfigPart } from "../interfaces/Config";

interface SelectorProps {
  addPart: (newPart: ConfigPart) => void;
  removePart: (removedPart: ConfigPart) => void;
  changeSkinTone: (newSkinTone: number) => void;
  skinTone: number;
  partsArray: ConfigPart[];
}

const Selector = (props: SelectorProps) => {
  const [partType, setPartType] = React.useState<number>();

  return (
    <div>
      <SkinTones
        colors={config.colors}
        setSkinTone={props.changeSkinTone}
        skinTone={props.skinTone}
      ></SkinTones>
      <PartTypes
        partTypes={config.partTypes}
        setPartType={setPartType}
        partType={partType}
      ></PartTypes>
      {partType !== undefined && (
        <PartList
          parts={config.parts}
          partType={partType}
          addPart={props.addPart}
          removePart={props.removePart}
          skinTone={props.skinTone}
          partsArray={props.partsArray}
        ></PartList>
      )}
    </div>
  );
};

export default Selector;
