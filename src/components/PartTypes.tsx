import React from "react";
import { ConfigPartType } from "../interfaces/Config";

import classes from "./PartTypes.module.scss";

interface PartTypesProps {
  partTypes: ConfigPartType[];
  setPartType: (partTypeId: number) => void;
  partType: number | undefined;
}

export const PartTypes = (props: PartTypesProps) => {
  const urlPrefix = process.env.PUBLIC_URL + "/parts_icons";

  return (
    <div>
      <div>Part Types:</div>
      <div className={classes.partTypes}>
        {props.partTypes.map((partType, index) => (
          /*  <div
            key={index}
            className={
              partType.id === props.partType
                ? classes.partTypeSelected
                : classes.partType
            }
            onClick={() => {
              props.setPartType(partType.id);
            }}
          > */
          <img
            key={index}
            src={urlPrefix + "/" + partType.iconFilename + ".png"}
            alt={partType.iconFilename}
            className={
              partType.id === props.partType
                ? classes.partTypeSelected
                : classes.partType
            }
            onClick={() => {
              props.setPartType(partType.id);
            }}
          />
          /* </div> */
        ))}
      </div>
    </div>
  );
};
