import Config, { ConfigPart, ConfigColor } from "./Config";

export default interface ConfigUtils {
  filter: {
    byPartType: (part: ConfigPart, partType: number) => boolean;
    bySkinTone: (part: ConfigPart, skinTone: number) => boolean;
    byBodyShape: (part: ConfigPart, partsArray: ConfigPart[]) => boolean;
  };
  reduce: {
    byPartName: (
      accumulator: ConfigPart[],
      currentValue: ConfigPart
    ) => ConfigPart[];
  };
  color: {
    getColor: (colorId: number) => ConfigColor | undefined;
  };
  partType: {
    usesSkinTone: (partTypeId: number) => boolean;
    boundToBodyShape: (partTypeId: number) => boolean;
    getPartIcon: (partTypeId: number) => string;
  };
  part: {
    replacePart: (oldPart: ConfigPart, newPart: ConfigPart) => void;
    isSamePart: (oldPart: ConfigPart, newPart: ConfigPart) => boolean;
    findSameColorPart: (
      oldPart: ConfigPart,
      newPart: ConfigPart
    ) => ConfigPart | undefined;
    selectedBodyShape: (selectedParts: ConfigPart[]) => number | undefined;
    findPartBoundToBodyShape: (
      config: Config,
      oldPart: ConfigPart,
      bodyShapeId: number
    ) => ConfigPart | undefined;
    isBodyPart: (part: ConfigPart) => boolean;
    getDefaultSelection: (skinToneId: number) => ConfigPart[];
    allowsMultipleSelection: (part: ConfigPart) => boolean;
  };
}
