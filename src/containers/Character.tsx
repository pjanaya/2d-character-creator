import React from "react";
import PartLayer from "../components/PartLayer";

import classes from "./Character.module.scss";
import { ConfigImage, ConfigPart } from "../interfaces/Config";

interface CharacterProps {
  partsArray: ConfigPart[];
}

const Character = (props: CharacterProps) => {
  return (
    <React.Fragment>
      <div className={classes.Character}>
        {props.partsArray.map((part: ConfigPart) =>
          part.images.map((image: ConfigImage, index: number) => (
            <PartLayer key={index} image={image}></PartLayer>
          ))
        )}
      </div>
    </React.Fragment>
  );
};

export default Character;
