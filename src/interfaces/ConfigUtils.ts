import Config, { ConfigPart } from "./Config";

export default interface ConfigUtils {
  partType: {
    usesSkinTone: (partTypeId: number) => boolean;
  };
  part: {
    replacePart: (oldPart: ConfigPart, newPart: ConfigPart) => void;
  };
}
