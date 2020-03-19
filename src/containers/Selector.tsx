import React from "react";
import PartInfo from "../interfaces/PartInfo";
import config from "../config";

import { SkinTones } from "../components/SkinTones";
import { PartTypes } from "../components/PartTypes";
import { PartList } from "../components/PartList";

interface SelectorProps {
  addPart: (newPart: PartInfo[]) => void;
  changeSkinTone: (newSkinTone: number) => void;
  skinTone: number;
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
          skinTone={props.skinTone}
        ></PartList>
      )}
    </div>
  );
};

export default Selector;
