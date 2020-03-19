export interface ConfigColor {
  id: number;
  name: string;
  isSkinTone: boolean;
  hex: string | string[];
}

export interface ConfigPartType {
  id: number;
  name: string;
  useSkinColor?: boolean;
}

export interface ConfigPart {
  id: number;
  name: string;
  partTypeId: number;
  images: { filename: string; zIndex: number }[];
  bodyTypeId?: number;
  colorId?: number;
}

export default interface Config {
  colors: ConfigColor[];
  partTypes: ConfigPartType[];
  parts: ConfigPart[];
}
