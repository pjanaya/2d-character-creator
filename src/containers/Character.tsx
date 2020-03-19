import React from "react";
import PartLayer from "../components/PartLayer";
import PartInfo from "../interfaces/PartInfo";

import classes from "./Character.module.scss";

interface CharacterProps {
  partInfoArray: PartInfo[];
}

const Character = (props: CharacterProps) => {
  return (
    <React.Fragment>
      <div className={classes.Character}>
        {props.partInfoArray.map((partInfo: PartInfo) => (
          <PartLayer partInfo={partInfo}></PartLayer>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Character;
