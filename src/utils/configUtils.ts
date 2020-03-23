import ConfigUtils from "../interfaces/ConfigUtils";
import config from "../config";
import Config, {
  ConfigPart,
  ConfigPartType,
  ConfigColor
} from "../interfaces/Config";
import { PartColorSelector } from "../components/PartColorSelector";

const configUtils: ConfigUtils = {
  filter: {
    byPartType: (part: ConfigPart, partType: number) =>
      part.partTypeId === partType,
    bySkinTone: (part: ConfigPart, skinTone: number) =>
      configUtils.partType.usesSkinTone(part.partTypeId)
        ? part.colorId === skinTone
        : true,
    byBodyShape: (part: ConfigPart, partsArray: ConfigPart[]) =>
      configUtils.partType.boundToBodyShape(part.partTypeId)
        ? part.bodyShapeId === configUtils.part.selectedBodyShape(partsArray)
        : true
  },
  reduce: {
    byPartName: (accumulator: ConfigPart[], currentValue: ConfigPart) =>
      accumulator.some(part => part.name === currentValue.name)
        ? [...accumulator]
        : [...accumulator, currentValue]
  },
  color: {
    getColor: (colorId: number) =>
      config.colors.find(color => color.id === colorId)
  },
  partType: {
    usesSkinTone: (partTypeId: number) =>
      config.partTypes.find(partType => partType.id === partTypeId)
        ?.useSkinTone || false,
    boundToBodyShape: (partTypeId: number) =>
      config.partTypes.find(partType => partType.id === partTypeId)
        ?.boundToBodyShape || false,
    getPartIcon: (partTypeId: number) =>
      (config.partTypes.find(
        partType => partType.id === partTypeId
      ) as ConfigPartType).iconFilename
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
    isBodyPart: (part: ConfigPart) => part.partTypeId === 0,
    getDefaultSelection: (skinToneId: number) => {
      const defaultSelection: ConfigPart[] = [];

      const body = config.parts.find(
        part => configUtils.part.isBodyPart(part) && part.colorId === skinToneId
      );

      const head = config.parts.find(
        part => part.partTypeId === 1 && part.colorId === skinToneId
      );

      if (body) defaultSelection.push({ ...body });
      if (head) defaultSelection.push({ ...head });

      return defaultSelection;
    }
  }
};

export default configUtils;
