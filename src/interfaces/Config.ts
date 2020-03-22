export interface ConfigColor {
  id: number;
  name: string;
  isSkinTone?: boolean;
  isHairColor?: boolean;
  hex: string | string[];
}

export interface ConfigPartType {
  id: number;
  name: string;
  useSkinTone?: boolean;
  useHairColor?: boolean;
  boundToBodyShape?: boolean;
}

export interface ConfigImage {
  filename: string;
  zIndex: number;
}

export interface ConfigPart {
  id: number;
  name: string;
  partTypeId: number;
  images: ConfigImage[];
  bodyShapeId?: number;
  colorId?: number;
}

export default interface Config {
  colors: ConfigColor[];
  partTypes: ConfigPartType[];
  parts: ConfigPart[];
}
