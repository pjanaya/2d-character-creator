import { ConfigPartType } from "../interfaces/Config";

const configPartTypes: ConfigPartType[] = [
  {
    id: 0,
    name: "Body",
    useSkinTone: true,
    iconFilename: "icon_body"
  },
  {
    id: 1,
    name: "Head",
    useSkinTone: true,
    iconFilename: "icon_head"
  },
  {
    id: 7,
    name: "Eyes",
    iconFilename: "icon_eyes"
  },
  {
    id: 14,
    name: "Eyebrows",
    iconFilename: "icon_eyebrows"
  },
  {
    id: 8,
    name: "Nose",
    useSkinTone: true,
    iconFilename: "icon_nose"
  },
  {
    id: 9,
    name: "Mouth",
    iconFilename: "icon_mouth"
  },
  {
    id: 5,
    name: "Hair",
    iconFilename: "icon_hair"
  },
  {
    id: 6,
    name: "Facial Hair",
    iconFilename: "icon_facialhair"
  },
  {
    id: 13,
    name: "Marks",
    iconFilename: "icon_marks",
    allowsMultipleSelection: true
  },
  {
    id: 15,
    name: "Piercings",
    iconFilename: "icon_piercings",
    allowsMultipleSelection: true
  },
  {
    id: 2,
    name: "Inner layer",
    boundToBodyShape: true,
    iconFilename: "icon_innerlayer"
  },
  {
    id: 3,
    name: "Second Layer",
    boundToBodyShape: true,
    iconFilename: "icon_secondlayer"
  },
  {
    id: 4,
    name: "Third Layer",
    boundToBodyShape: true,
    iconFilename: "icon_thirdlayer"
  },
  {
    id: 16,
    name: "Pants",
    boundToBodyShape: true,
    iconFilename: "icon_pants"
  },
  {
    id: 10,
    name: "Accesories",
    boundToBodyShape: true,
    iconFilename: "icon_accesories"
  },
  {
    id: 11,
    name: "Glasses",
    iconFilename: "icon_glasses"
  },
  {
    id: 12,
    name: "Back Hair",
    iconFilename: "icon_backhair",
    allowsMultipleSelection: true
  },
  {
    id: 17,
    name: "Shoes",
    boundToBodyShape: true,
    iconFilename: "icon_shoes"
  }
];

export default configPartTypes;
