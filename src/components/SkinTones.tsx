import React from "react";
import { ConfigColor } from "../interfaces/Config";

import classes from "./SkinTones.module.scss";

interface SkinTonesProps {
  colors: ConfigColor[];
  setSkinTone: (newSkinTone: number) => void;
  skinTone: number;
}

export const SkinTones = (props: SkinTonesProps) => {
  return (
    <div>
      <div>Skin tone:</div>
      <div className={classes.skinTones}>
        {props.colors
          .filter(color => color.isSkinTone)
          .map((color, index) =>
            Array.isArray(color.hex) ? (
              <div
                key={index}
                className={
                  color.id === props.skinTone
                    ? classes.skinToneMultipleSelected
                    : classes.skinToneMultiple
                }
                onClick={() => {
                  props.setSkinTone(color.id);
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
                  color.id === props.skinTone
                    ? classes.skinToneSelected
                    : classes.skinTone
                }
                onClick={() => {
                  props.setSkinTone(color.id);
                }}
                style={{ backgroundColor: color.hex }}
              ></div>
            )
          )}
      </div>
    </div>
  );
};
