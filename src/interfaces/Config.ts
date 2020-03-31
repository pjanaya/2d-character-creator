export interface ConfigColor {
  id: number;
  name: string;
  isSkinTone?: boolean;
  hex: string | string[];
}

export interface ConfigPartType {
  id: number;
  name: string;
  iconFilename: string;
  useSkinTone?: boolean;
  boundToBodyShape?: boolean;
  allowsMultipleSelection?: boolean;
}

export interface ConfigImage {
  filename: string;
  zIndex: number;
}

export interface ConfigPart {
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
