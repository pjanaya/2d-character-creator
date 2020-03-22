import ConfigUtils from "../interfaces/ConfigUtils";
import config from "../config";
import { ConfigPart } from "../interfaces/Config";

const configUtils: ConfigUtils = {
  partType: {
    usesSkinTone: (partTypeId: number) =>
      config.partTypes.find(partType => partType.id === partTypeId)
        ?.useSkinTone || false,
    boundToBodyShape: (partTypeId: number) =>
      config.partTypes.find(partType => partType.id === partTypeId)
        ?.boundToBodyShape || false
  },
  part: {
    replacePart: (oldPart: ConfigPart, newPart: ConfigPart) => {
      oldPart.id = newPart.id;
      oldPart.images = newPart.images;
      oldPart.name = newPart.name;
      oldPart.partTypeId = newPart.partTypeId;
      oldPart.groupId = newPart.groupId;
      oldPart.colorId = newPart.colorId;
    },
    selectedBodyShape: (selectedParts: ConfigPart[]) =>
      selectedParts.find(part => part.partTypeId === 0)?.groupId
  }
};

export default configUtils;
