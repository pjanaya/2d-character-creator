import React from "react";
import { ConfigPart } from "../interfaces/Config";

import classes from "./PartList.module.scss";
import configUtils from "../utils/configUtils";

interface PartListProps {
  parts: ConfigPart[];
  addPart: (newPart: ConfigPart) => void;
  partType: number;
  skinTone: number;
  partsArray: ConfigPart[];
}

export const PartList = (props: PartListProps) => {
  return (
    <div>
      <div>Variants:</div>
      <div className={classes.partList}>
        {props.parts
          .filter(part => part.partTypeId === props.partType)
          .filter(part =>
            configUtils.partType.usesSkinTone(part.partTypeId)
              ? part.colorId === props.skinTone
              : true
          )
          .map((part, index) => (
            <div
              key={index}
              className={
                props.partsArray.some(layer => layer.id === part.id)
                  ? classes.partItemSelected
                  : classes.partItem
              }
              onClick={() => {
                props.addPart(part);
              }}
            >
              {part.name}
            </div>
          ))}
      </div>
    </div>
  );
};
