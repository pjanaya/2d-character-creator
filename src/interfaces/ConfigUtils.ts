import Config, { ConfigPart } from "./Config";

export default interface ConfigUtils {
  partType: {
    usesSkinTone: (partTypeId: number) => boolean;
    boundToBodyShape: (partTypeId: number) => boolean;
  };
  part: {
    replacePart: (oldPart: ConfigPart, newPart: ConfigPart) => void;
    selectedBodyShape: (selectedParts: ConfigPart[]) => number | undefined;
  };
}