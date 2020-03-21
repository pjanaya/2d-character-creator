export interface ConfigColor {
  id: number;
  name: string;
  isSkinTone: boolean;
  hex: string | string[];
}

export interface ConfigPartType {
  id: number;
  name: string;
  useSkinTone?: boolean;
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
  groupId?: number;
  colorId?: number;
}

export default interface Config {
  colors: ConfigColor[];
  partTypes: ConfigPartType[];
  parts: ConfigPart[];
}
