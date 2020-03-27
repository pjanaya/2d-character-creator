import React from "react";
import { ConfigPartType } from "../interfaces/Config";

import classes from "./PartTypes.module.scss";
import { Actions } from "./Actions";

interface PartTypesProps {
  partTypes: ConfigPartType[];
  setPartType: (partTypeId: number) => void;
  partType: number | undefined;
  randomize: () => void;
  save: () => void;
}

export const PartTypes = (props: PartTypesProps) => {
  const urlPrefix = process.env.PUBLIC_URL + "/parts_icons";

  return (
    <div className={classes.root}>
      <div className={classes.actions}>
        <div
          className={classes.action}
          onClick={e => {
            props.save();
          }}
        >
          <img src={urlPrefix + "/save.png"} alt="random" />
        </div>
        <div
          className={classes.action}
          onClick={() => {
            props.randomize();
          }}
        >
          <img src={urlPrefix + "/random.png"} alt="random" />
        </div>
      </div>

      <div className={classes.partTypes}>
        {props.partTypes.map((partType, index) => (
          <div
            key={index}
            className={
              partType.id === props.partType
                ? classes.partTypeSelected
                : classes.partType
            }
            onClick={() => {
              props.setPartType(partType.id);
            }}
          >
            <img
              src={urlPrefix + "/" + partType.iconFilename + ".png"}
              alt={partType.iconFilename}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
