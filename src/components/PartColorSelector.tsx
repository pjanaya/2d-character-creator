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
}

export const PartColorSelector = (props: PartColorSelectorProps) => {
  return (
    <div className={classes.PartColorSelector}>
      {props.partsArray
        .filter(part => part.partTypeId === props.partType)
        .map(part => (
          <div className={classes.PartColorSelectorPart}>
            <div>{part.name}</div>
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
                    onClick={() => {
                      props.addPart(other);
                    }}
                  >
                    {color.hex.map(color => (
                      <div style={{ backgroundColor: color }}></div>
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
                    onClick={() => {
                      props.addPart(other);
                    }}
                    style={{ backgroundColor: color.hex }}
                  ></div>
                );
              })}
          </div>
        ))}
    </div>
  );
};
