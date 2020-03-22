import ConfigUtils from "../interfaces/ConfigUtils";
import config from "../config";
import Config, { ConfigPart } from "../interfaces/Config";

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
      oldPart.bodyShapeId = newPart.bodyShapeId;
      oldPart.colorId = newPart.colorId;
    },
    selectedBodyShape: (selectedParts: ConfigPart[]) =>
      selectedParts.find(part => configUtils.part.isBodyPart(part))
        ?.bodyShapeId,
    findPartBoundToBodyShape: (
      config: Config,
      oldPart: ConfigPart,
      bodyGroupId: number
    ) =>
      config.parts.find(
        part =>
          part.partTypeId === oldPart.partTypeId &&
          part.bodyShapeId === bodyGroupId &&
          part.colorId === oldPart.colorId
      ),
    isBodyPart: (part: ConfigPart) => part.partTypeId === 0
  }
};

export default configUtils;
