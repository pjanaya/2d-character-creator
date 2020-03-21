import React from "react";
import { ConfigPartType } from "../interfaces/Config";

import classes from "./PartTypes.module.scss";

interface PartTypesProps {
  partTypes: ConfigPartType[];
  setPartType: (partTypeId: number) => void;
  partType: number | undefined;
}

export const PartTypes = (props: PartTypesProps) => {
  return (
    <div>
      <div>Part Types:</div>
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
            {partType.name}
          </div>
        ))}
      </div>
    </div>
  );
};
