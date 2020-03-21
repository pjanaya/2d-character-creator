import ConfigUtils from "../interfaces/ConfigUtils";
import config from "../config";

const configUtils: ConfigUtils = {
  partType: {
    usesSkinTone: (partTypeId: number) =>
      config.partTypes.find(partType => partType.id === partTypeId)
        ?.useSkinTone || false
  }
};

export default configUtils;
