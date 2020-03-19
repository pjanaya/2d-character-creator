import React from "react";

import classes from "./PartLayer.module.scss";
import PartInfo from "../interfaces/PartInfo";

interface PartLayerProps {
  partInfo: PartInfo;
}

const PartLayer = (props: PartLayerProps) => {
  const urlPrefix = process.env.PUBLIC_URL + "/character_parts";
  return (
    <div
      className={classes.Layer}
      style={{ zIndex: props.partInfo.zIndex || 1 }}
    >
      <img src={urlPrefix + "/" + props.partInfo.filename + ".png"} />
    </div>
  );
};

export default PartLayer;
