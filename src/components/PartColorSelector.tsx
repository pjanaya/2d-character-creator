import React from "react";
import { ConfigPart, ConfigColor } from "../interfaces/Config";
import classes from "./PartColorSelector.module.scss";
import configUtils from "../utils/configUtils";

interface PartColorSelectorProps {
  parts: ConfigPart[];
  addPart: (newPart: ConfigPart) => void;
  partType: number;
  skinTone: number;
  partsArray: ConfigPart[];
  setSkinTone: (newSkinTone: number) => void;
}

export const PartColorSelector = (props: PartColorSelectorProps) => {
  const onClickColorHandler = (part: ConfigPart) => {
    if (configUtils.partType.usesSkinTone(part.partTypeId)) {
      props.setSkinTone(part.colorId as number);
    } else {
      props.addPart(part);
    }
  };

  return (
    <div className={classes.PartColorSelector}>
      {props.partsArray
        .filter(part => part.partTypeId === props.partType)
        .map((part: ConfigPart, index: number) => (
          <div className={classes.PartColorSelectorPart} key={index}>
            <div className={classes.partName}>{part.name}</div>
            <div className={classes.PartColorSelectorColors}>
              {props.parts
                .filter(
                  other =>
                    other.bodyShapeId === part.bodyShapeId &&
                    other.partTypeId === part.partTypeId &&
                    other.name === part.name
                )
                .map((other: ConfigPart, index: number) => {
                  const color = configUtils.color.getColor(
                    other.colorId as number
                  ) as ConfigColor;
                  return Array.isArray(color.hex) ? (
                    <div
                      key={index}
                      className={
                        color.id === part.colorId
                          ? classes.colorMultipleSelected
                          : classes.colorMultiple
                      }
                      style={
                        color.id === part.colorId
                          ? { borderColor: color.hex[0] }
                          : {}
                      }
                      onClick={() => onClickColorHandler(other)}
                    >
                      {color.hex.map((color: string, index: number) => (
                        <div
                          key={index}
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                  ) : (
                    <div
                      key={index}
                      className={
                        color.id === part.colorId
                          ? classes.colorSelected
                          : classes.color
                      }
                      style={
                        color.id === part.colorId
                          ? {
                              borderColor: color.hex,
                              backgroundColor: color.hex
                            }
                          : { backgroundColor: color.hex }
                      }
                      onClick={() => onClickColorHandler(other)}
                    ></div>
                  );
                })}
            </div>
          </div>
        ))}
    </div>
  );
};
