import React from "react";

import classes from "./PartLayer.module.scss";
import { ConfigImage } from "../interfaces/Config";

interface PartLayerProps {
  image: ConfigImage;
}

const PartLayer = (props: PartLayerProps) => {
  const urlPrefix = process.env.PUBLIC_URL + "/character_parts";
  return (
    <div
      className={classes.Layer}
      style={{ zIndex: props.image.zIndex }}
      data-part={props.image.filename}
    >
      <img
        className={"characterLayer"}
        src={urlPrefix + "/" + props.image.filename + ".png"}
        alt={props.image.filename}
      />
    </div>
  );
};

export default PartLayer;
