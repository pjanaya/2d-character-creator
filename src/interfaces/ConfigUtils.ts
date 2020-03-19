import Config from "./Config";

export default interface ConfigUtils {
  partType: {
    usesSkinTone: (partTypeId: number) => boolean;
  };
}
