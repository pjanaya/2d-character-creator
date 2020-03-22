import Config, { ConfigPart } from "./Config";

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
  partType: {
    usesSkinTone: (partTypeId: number) => boolean;
    boundToBodyShape: (partTypeId: number) => boolean;
    getPartIcon: (partTypeId: number) => string;
  };
  part: {
    replacePart: (oldPart: ConfigPart, newPart: ConfigPart) => void;
    selectedBodyShape: (selectedParts: ConfigPart[]) => number | undefined;
    findPartBoundToBodyShape: (
      config: Config,
      oldPart: ConfigPart,
      bodyShapeId: number
    ) => ConfigPart | undefined;
    isBodyPart: (part: ConfigPart) => boolean;
  };
}
