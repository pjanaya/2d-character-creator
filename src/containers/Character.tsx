import React from "react";
import classnames from "classnames";

import PartLayer from "../components/PartLayer";

import classes from "./Character.module.scss";
import { ConfigImage, ConfigPart } from "../interfaces/Config";

interface CharacterProps {
  partsArray: ConfigPart[];
  changing: boolean;
}

const Character = (props: CharacterProps) => {
  return (
    <React.Fragment>
      <div
        id="character"
        className={classnames(classes.Character, {
          [classes.Changing]: props.changing
        })}
      >
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
