import Config from "./interfaces/Config";

const config: Config = {
  colors: [
    {
      id: 0,
      name: "Skin 1",
      isSkinTone: true,
      hex: "#FBF1E0"
    },
    {
      id: 1,
      name: "Skin 2",
      isSkinTone: true,
      hex: "#FADDB0"
    },
    {
      id: 2,
      name: "Skin 3",
      isSkinTone: true,
      hex: "#F5C08C"
    },
    {
      id: 3,
      name: "Skin 4",
      isSkinTone: true,
      hex: "#C98F75"
    },
    {
      id: 4,
      name: "Skin 5",
      isSkinTone: true,
      hex: "#6F4B3B"
    },
    {
      id: 5,
      name: "Clothing Black",
      hex: "#EFF1F2"
    },
    {
      id: 6,
      name: "Clothing White",
      hex: "#616161"
    },
    {
      id: 7,
      name: "Clothing Red",
      hex: "#D55D53"
    },
    {
      id: 8,
      name: "Clothing Yellow",
      hex: "#E4C069"
    },
    {
      id: 9,
      name: "Clothing Pink",
      hex: "#E6B4E3"
    },
    {
      id: 10,
      name: "Clothing Blue",
      hex: "#8FB3B3"
    },
    {
      id: 11,
      name: "Clothing Green",
      hex: "#91C27F"
    },
    {
      id: 12,
      name: "Clothing Orange",
      hex: "#d97d57"
    },
    {
      id: 13,
      name: "Hair Black",
      isHairColor: true,
      hex: "#2E2E2E"
    },
    {
      id: 14,
      name: "Hair Brown",
      isHairColor: true,
      hex: "#ab7d4d"
    },
    {
      id: 15,
      name: "Hair Yellow",
      isHairColor: true,
      hex: "#EDC879"
    },
    {
      id: 16,
      name: "Hair Orange",
      isHairColor: true,
      hex: "#EAA05F"
    },
    {
      id: 17,
      name: "Hair Dark Orange",
      isHairColor: true,
      hex: "#D97D57"
    },
    {
      id: 18,
      name: "Hair Grey",
      isHairColor: true,
      hex: "#868686"
    },
    {
      id: 19,
      name: "Hair White",
      isHairColor: true,
      hex: "#E4E4E4"
    },
    {
      id: 20,
      name: "Hair Pink",
      isHairColor: true,
      hex: "#E48888"
    },
    {
      id: 21,
      name: "Hair Red",
      isHairColor: true,
      hex: "#E95353"
    },
    {
      id: 22,
      name: "Hair Light Blue",
      isHairColor: true,
      hex: "#8AB2D7"
    },
    {
      id: 23,
      name: "Hair Blue",
      isHairColor: true,
      hex: "#1FB2FF"
    },
    {
      id: 24,
      name: "Hair Green",
      isHairColor: true,
      hex: "#91C27F"
    },
    {
      id: 25,
      name: "Eyes Black",
      hex: "#000000"
    },
    {
      id: 26,
      name: "Eyes Grey",
      hex: "#616161"
    },
    {
      id: 27,
      name: "Eyes Blue",
      hex: "#8FB3B3"
    },
    {
      id: 28,
      name: "Eyes Green",
      hex: "#91C27F"
    },
    {
      id: 29,
      name: "Eyes Brown",
      hex: "#AB7D4D"
    },
    {
      id: 30,
      name: "Eyes Yellow",
      hex: "#E4C069"
    },
    {
      id: 31,
      name: "Eyes Orange",
      hex: "#D97D57"
    },
    {
      id: 32,
      name: "Eyes Red",
      hex: "#E95353"
    },
    {
      id: 33,
      name: "Lips Dark Brown",
      hex: ["#4C3329", "#C98F75"]
    },
    {
      id: 34,
      name: "Lips Red",
      hex: ["#AA0017", "#FF0822"]
    },
    {
      id: 35,
      name: "Lips Pink",
      hex: ["#F38997", "#FFA0AB"]
    },
    {
      id: 36,
      name: "Lips Brown",
      hex: ["#A46950", "#AB7860"]
    },
    {
      id: 37,
      name: "Lips Black",
      hex: ["#2E2425", "#47383A"]
    },
    {
      id: 38,
      name: "Lips Purple",
      hex: ["#847188", "#D2A4DB"]
    }
  ],
  partTypes: [
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
      useHairColor: true,
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
      useHairColor: true,
      iconFilename: "icon_hair"
    },
    {
      id: 6,
      name: "Facial Hair",
      useHairColor: true,
      iconFilename: "icon_facialhair"
    },
    {
      id: 13,
      name: "Marks",
      iconFilename: "icon_marks"
    },
    {
      id: 15,
      name: "Piercings",
      iconFilename: "icon_piercings"
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
      useHairColor: true,
      iconFilename: "icon_backhair"
    }
  ],
  parts: [
    {
      id: 0,
      name: "Body 1",
      bodyShapeId: 1,
      partTypeId: 0,
      colorId: 0,
      images: [
        {
          filename: "cuerpo_01_01",
          zIndex: 10
        },
        {
          filename: "brazob_01_01",
          zIndex: 5
        },
        {
          filename: "brazof_01_01",
          zIndex: 16
        },
        {
          filename: "cuello_01_01",
          zIndex: 11
        }
      ]
    },
    {
      id: 1,
      name: "Body 2",
      bodyShapeId: 2,
      partTypeId: 0,
      colorId: 0,
      images: [
        {
          filename: "cuerpo_02_01",
          zIndex: 10
        },
        {
          filename: "brazob_02_01",
          zIndex: 5
        },
        {
          filename: "brazof_02_01",
          zIndex: 16
        },
        {
          filename: "cuello_02_01",
          zIndex: 11
        }
      ]
    },
    {
      id: 2,
      name: "Body 3",
      bodyShapeId: 3,
      partTypeId: 0,
      colorId: 0,
      images: [
        {
          filename: "cuerpo_03a_01",
          zIndex: 10
        },
        {
          filename: "brazob_03_01",
          zIndex: 5
        },
        {
          filename: "brazof_03_01",
          zIndex: 16
        },
        {
          filename: "cuello_03_01",
          zIndex: 11
        }
      ]
    },
    {
      id: 3,
      name: "Body 4",
      bodyShapeId: 4,
      partTypeId: 0,
      colorId: 0,
      images: [
        {
          filename: "cuerpo_03b_01",
          zIndex: 10
        },
        {
          filename: "brazob_03_01",
          zIndex: 5
        },
        {
          filename: "brazof_03_01",
          zIndex: 16
        },
        {
          filename: "cuello_03_01",
          zIndex: 11
        }
      ]
    },
    {
      id: 4,
      name: "Body 5",
      bodyShapeId: 5,
      partTypeId: 0,
      colorId: 0,
      images: [
        {
          filename: "cuerpo_04a_01",
          zIndex: 10
        },
        {
          filename: "brazob_04_01",
          zIndex: 5
        },
        {
          filename: "brazof_04_01",
          zIndex: 16
        },
        {
          filename: "cuello_04_01",
          zIndex: 11
        }
      ]
    },
    {
      id: 5,
      name: "Body 6",
      bodyShapeId: 6,
      partTypeId: 0,
      colorId: 0,
      images: [
        {
          filename: "cuerpo_04b_01",
          zIndex: 10
        },
        {
          filename: "brazob_04_01",
          zIndex: 5
        },
        {
          filename: "brazof_04_01",
          zIndex: 16
        },
        {
          filename: "cuello_04_01",
          zIndex: 11
        }
      ]
    },
    {
      id: 6,
      name: "Body 7",
      bodyShapeId: 7,
      partTypeId: 0,
      colorId: 0,
      images: [
        {
          filename: "cuerpo_05a_01",
          zIndex: 10
        },
        {
          filename: "brazob_05_01",
          zIndex: 5
        },
        {
          filename: "brazof_05_01",
          zIndex: 16
        },
        {
          filename: "cuello_05_01",
          zIndex: 11
        }
      ]
    },
    {
      id: 7,
      name: "Body 8",
      bodyShapeId: 8,
      partTypeId: 0,
      colorId: 0,
      images: [
        {
          filename: "cuerpo_05b_01",
          zIndex: 10
        },
        {
          filename: "brazob_05_01",
          zIndex: 5
        },
        {
          filename: "brazof_05_01",
          zIndex: 16
        },
        {
          filename: "cuello_05_01",
          zIndex: 11
        }
      ]
    },
    {
      id: 8,
      name: "Body 9",
      bodyShapeId: 9,
      partTypeId: 0,
      colorId: 0,
      images: [
        {
          filename: "cuerpo_06a_01",
          zIndex: 10
        },
        {
          filename: "brazob_06_01",
          zIndex: 5
        },
        {
          filename: "brazof_06_01",
          zIndex: 16
        },
        {
          filename: "cuello_06_01",
          zIndex: 11
        }
      ]
    },
    {
      id: 9,
      name: "Body 10",
      bodyShapeId: 10,
      partTypeId: 0,
      colorId: 0,
      images: [
        {
          filename: "cuerpo_06b_01",
          zIndex: 10
        },
        {
          filename: "brazob_06_01",
          zIndex: 5
        },
        {
          filename: "brazof_06_01",
          zIndex: 16
        },
        {
          filename: "cuello_06_01",
          zIndex: 11
        }
      ]
    },
    {
      id: 10,
      name: "Body 11",
      bodyShapeId: 11,
      partTypeId: 0,
      colorId: 0,
      images: [
        {
          filename: "cuerpo_07a_01",
          zIndex: 10
        },
        {
          filename: "brazob_07_01",
          zIndex: 5
        },
        {
          filename: "brazof_07_01",
          zIndex: 16
        },
        {
          filename: "cuello_07_01",
          zIndex: 11
        }
      ]
    },
    {
      id: 11,
      name: "Body 12",
      bodyShapeId: 12,
      partTypeId: 0,
      colorId: 0,
      images: [
        {
          filename: "cuerpo_07b_01",
          zIndex: 10
        },
        {
          filename: "brazob_07_01",
          zIndex: 5
        },
        {
          filename: "brazof_07_01",
          zIndex: 16
        },
        {
          filename: "cuello_07_01",
          zIndex: 11
        }
      ]
    },
    {
      id: 12,
      name: "Body 1",
      bodyShapeId: 1,
      partTypeId: 0,
      colorId: 1,
      images: [
        {
          filename: "cuerpo_01_02",
          zIndex: 10
        },
        {
          filename: "brazob_01_02",
          zIndex: 5
        },
        {
          filename: "brazof_01_02",
          zIndex: 16
        },
        {
          filename: "cuello_01_02",
          zIndex: 11
        }
      ]
    },
    {
      id: 13,
      name: "Body 2",
      bodyShapeId: 2,
      partTypeId: 0,
      colorId: 1,
      images: [
        {
          filename: "cuerpo_02_02",
          zIndex: 10
        },
        {
          filename: "brazob_02_02",
          zIndex: 5
        },
        {
          filename: "brazof_02_02",
          zIndex: 16
        },
        {
          filename: "cuello_02_02",
          zIndex: 11
        }
      ]
    },
    {
      id: 14,
      name: "Body 3",
      bodyShapeId: 3,
      partTypeId: 0,
      colorId: 1,
      images: [
        {
          filename: "cuerpo_03a_02",
          zIndex: 10
        },
        {
          filename: "brazob_03_02",
          zIndex: 5
        },
        {
          filename: "brazof_03_02",
          zIndex: 16
        },
        {
          filename: "cuello_03_02",
          zIndex: 11
        }
      ]
    },
    {
      id: 15,
      name: "Body 4",
      bodyShapeId: 4,
      partTypeId: 0,
      colorId: 1,
      images: [
        {
          filename: "cuerpo_03b_02",
          zIndex: 10
        },
        {
          filename: "brazob_03_02",
          zIndex: 5
        },
        {
          filename: "brazof_03_02",
          zIndex: 16
        },
        {
          filename: "cuello_03_02",
          zIndex: 11
        }
      ]
    },
    {
      id: 16,
      name: "Body 5",
      bodyShapeId: 5,
      partTypeId: 0,
      colorId: 1,
      images: [
        {
          filename: "cuerpo_04a_02",
          zIndex: 10
        },
        {
          filename: "brazob_04_02",
          zIndex: 5
        },
        {
          filename: "brazof_04_02",
          zIndex: 16
        },
        {
          filename: "cuello_04_02",
          zIndex: 11
        }
      ]
    },
    {
      id: 17,
      name: "Body 6",
      bodyShapeId: 6,
      partTypeId: 0,
      colorId: 1,
      images: [
        {
          filename: "cuerpo_04b_02",
          zIndex: 10
        },
        {
          filename: "brazob_04_02",
          zIndex: 5
        },
        {
          filename: "brazof_04_02",
          zIndex: 16
        },
        {
          filename: "cuello_04_02",
          zIndex: 11
        }
      ]
    },
    {
      id: 18,
      name: "Body 7",
      bodyShapeId: 7,
      partTypeId: 0,
      colorId: 1,
      images: [
        {
          filename: "cuerpo_05a_02",
          zIndex: 10
        },
        {
          filename: "brazob_05_02",
          zIndex: 5
        },
        {
          filename: "brazof_05_02",
          zIndex: 16
        },
        {
          filename: "cuello_05_02",
          zIndex: 11
        }
      ]
    },
    {
      id: 19,
      name: "Body 8",
      bodyShapeId: 8,
      partTypeId: 0,
      colorId: 1,
      images: [
        {
          filename: "cuerpo_05b_02",
          zIndex: 10
        },
        {
          filename: "brazob_05_02",
          zIndex: 5
        },
        {
          filename: "brazof_05_02",
          zIndex: 16
        },
        {
          filename: "cuello_05_02",
          zIndex: 11
        }
      ]
    },
    {
      id: 20,
      name: "Body 9",
      bodyShapeId: 9,
      partTypeId: 0,
      colorId: 1,
      images: [
        {
          filename: "cuerpo_06a_02",
          zIndex: 10
        },
        {
          filename: "brazob_06_02",
          zIndex: 5
        },
        {
          filename: "brazof_06_02",
          zIndex: 16
        },
        {
          filename: "cuello_06_02",
          zIndex: 11
        }
      ]
    },
    {
      id: 21,
      name: "Body 10",
      bodyShapeId: 10,
      partTypeId: 0,
      colorId: 1,
      images: [
        {
          filename: "cuerpo_06b_02",
          zIndex: 10
        },
        {
          filename: "brazob_06_02",
          zIndex: 5
        },
        {
          filename: "brazof_06_02",
          zIndex: 16
        },
        {
          filename: "cuello_06_02",
          zIndex: 11
        }
      ]
    },
    {
      id: 22,
      name: "Body 11",
      bodyShapeId: 11,
      partTypeId: 0,
      colorId: 1,
      images: [
        {
          filename: "cuerpo_07a_02",
          zIndex: 10
        },
        {
          filename: "brazob_07_02",
          zIndex: 5
        },
        {
          filename: "brazof_07_02",
          zIndex: 16
        },
        {
          filename: "cuello_07_02",
          zIndex: 11
        }
      ]
    },
    {
      id: 23,
      name: "Body 12",
      bodyShapeId: 12,
      partTypeId: 0,
      colorId: 1,
      images: [
        {
          filename: "cuerpo_07b_02",
          zIndex: 10
        },
        {
          filename: "brazob_07_02",
          zIndex: 5
        },
        {
          filename: "brazof_07_02",
          zIndex: 16
        },
        {
          filename: "cuello_07_02",
          zIndex: 11
        }
      ]
    },
    {
      id: 24,
      name: "Body 1",
      bodyShapeId: 1,
      partTypeId: 0,
      colorId: 2,
      images: [
        {
          filename: "cuerpo_01_03",
          zIndex: 10
        },
        {
          filename: "brazob_01_03",
          zIndex: 5
        },
        {
          filename: "brazof_01_03",
          zIndex: 16
        },
        {
          filename: "cuello_01_03",
          zIndex: 11
        }
      ]
    },
    {
      id: 25,
      name: "Body 2",
      bodyShapeId: 2,
      partTypeId: 0,
      colorId: 2,
      images: [
        {
          filename: "cuerpo_02_03",
          zIndex: 10
        },
        {
          filename: "brazob_02_03",
          zIndex: 5
        },
        {
          filename: "brazof_02_03",
          zIndex: 16
        },
        {
          filename: "cuello_02_03",
          zIndex: 11
        }
      ]
    },
    {
      id: 26,
      name: "Body 3",
      bodyShapeId: 3,
      partTypeId: 0,
      colorId: 2,
      images: [
        {
          filename: "cuerpo_03a_03",
          zIndex: 10
        },
        {
          filename: "brazob_03_03",
          zIndex: 5
        },
        {
          filename: "brazof_03_03",
          zIndex: 16
        },
        {
          filename: "cuello_03_03",
          zIndex: 11
        }
      ]
    },
    {
      id: 27,
      name: "Body 4",
      bodyShapeId: 4,
      partTypeId: 0,
      colorId: 2,
      images: [
        {
          filename: "cuerpo_03b_03",
          zIndex: 10
        },
        {
          filename: "brazob_03_03",
          zIndex: 5
        },
        {
          filename: "brazof_03_03",
          zIndex: 16
        },
        {
          filename: "cuello_03_03",
          zIndex: 11
        }
      ]
    },
    {
      id: 28,
      name: "Body 5",
      bodyShapeId: 5,
      partTypeId: 0,
      colorId: 2,
      images: [
        {
          filename: "cuerpo_04a_03",
          zIndex: 10
        },
        {
          filename: "brazob_04_03",
          zIndex: 5
        },
        {
          filename: "brazof_04_03",
          zIndex: 16
        },
        {
          filename: "cuello_04_03",
          zIndex: 11
        }
      ]
    },
    {
      id: 29,
      name: "Body 6",
      bodyShapeId: 6,
      partTypeId: 0,
      colorId: 2,
      images: [
        {
          filename: "cuerpo_04b_03",
          zIndex: 10
        },
        {
          filename: "brazob_04_03",
          zIndex: 5
        },
        {
          filename: "brazof_04_03",
          zIndex: 16
        },
        {
          filename: "cuello_04_03",
          zIndex: 11
        }
      ]
    },
    {
      id: 30,
      name: "Body 7",
      bodyShapeId: 7,
      partTypeId: 0,
      colorId: 2,
      images: [
        {
          filename: "cuerpo_05a_03",
          zIndex: 10
        },
        {
          filename: "brazob_05_03",
          zIndex: 5
        },
        {
          filename: "brazof_05_03",
          zIndex: 16
        },
        {
          filename: "cuello_05_03",
          zIndex: 11
        }
      ]
    },
    {
      id: 31,
      name: "Body 8",
      bodyShapeId: 8,
      partTypeId: 0,
      colorId: 2,
      images: [
        {
          filename: "cuerpo_05b_03",
          zIndex: 10
        },
        {
          filename: "brazob_05_03",
          zIndex: 5
        },
        {
          filename: "brazof_05_03",
          zIndex: 16
        },
        {
          filename: "cuello_05_03",
          zIndex: 11
        }
      ]
    },
    {
      id: 32,
      name: "Body 9",
      bodyShapeId: 9,
      partTypeId: 0,
      colorId: 2,
      images: [
        {
          filename: "cuerpo_06a_03",
          zIndex: 10
        },
        {
          filename: "brazob_06_03",
          zIndex: 5
        },
        {
          filename: "brazof_06_03",
          zIndex: 16
        },
        {
          filename: "cuello_06_03",
          zIndex: 11
        }
      ]
    },
    {
      id: 33,
      name: "Body 10",
      bodyShapeId: 10,
      partTypeId: 0,
      colorId: 2,
      images: [
        {
          filename: "cuerpo_06b_03",
          zIndex: 10
        },
        {
          filename: "brazob_06_03",
          zIndex: 5
        },
        {
          filename: "brazof_06_03",
          zIndex: 16
        },
        {
          filename: "cuello_06_03",
          zIndex: 11
        }
      ]
    },
    {
      id: 34,
      name: "Body 11",
      bodyShapeId: 11,
      partTypeId: 0,
      colorId: 2,
      images: [
        {
          filename: "cuerpo_07a_03",
          zIndex: 10
        },
        {
          filename: "brazob_07_03",
          zIndex: 5
        },
        {
          filename: "brazof_07_03",
          zIndex: 16
        },
        {
          filename: "cuello_07_03",
          zIndex: 11
        }
      ]
    },
    {
      id: 35,
      name: "Body 12",
      bodyShapeId: 12,
      partTypeId: 0,
      colorId: 2,
      images: [
        {
          filename: "cuerpo_07b_03",
          zIndex: 10
        },
        {
          filename: "brazob_07_03",
          zIndex: 5
        },
        {
          filename: "brazof_07_03",
          zIndex: 16
        },
        {
          filename: "cuello_07_03",
          zIndex: 11
        }
      ]
    },
    {
      id: 36,
      name: "Body 1",
      bodyShapeId: 1,
      partTypeId: 0,
      colorId: 3,
      images: [
        {
          filename: "cuerpo_01_04",
          zIndex: 10
        },
        {
          filename: "brazob_01_04",
          zIndex: 5
        },
        {
          filename: "brazof_01_04",
          zIndex: 16
        },
        {
          filename: "cuello_01_04",
          zIndex: 11
        }
      ]
    },
    {
      id: 37,
      name: "Body 2",
      bodyShapeId: 2,
      partTypeId: 0,
      colorId: 3,
      images: [
        {
          filename: "cuerpo_02_04",
          zIndex: 10
        },
        {
          filename: "brazob_02_04",
          zIndex: 5
        },
        {
          filename: "brazof_02_04",
          zIndex: 16
        },
        {
          filename: "cuello_02_04",
          zIndex: 11
        }
      ]
    },
    {
      id: 38,
      name: "Body 3",
      bodyShapeId: 3,
      partTypeId: 0,
      colorId: 3,
      images: [
        {
          filename: "cuerpo_03a_04",
          zIndex: 10
        },
        {
          filename: "brazob_03_04",
          zIndex: 5
        },
        {
          filename: "brazof_03_04",
          zIndex: 16
        },
        {
          filename: "cuello_03_04",
          zIndex: 11
        }
      ]
    },
    {
      id: 39,
      name: "Body 4",
      bodyShapeId: 4,
      partTypeId: 0,
      colorId: 3,
      images: [
        {
          filename: "cuerpo_03b_04",
          zIndex: 10
        },
        {
          filename: "brazob_03_04",
          zIndex: 5
        },
        {
          filename: "brazof_03_04",
          zIndex: 16
        },
        {
          filename: "cuello_03_04",
          zIndex: 11
        }
      ]
    },
    {
      id: 40,
      name: "Body 5",
      bodyShapeId: 5,
      partTypeId: 0,
      colorId: 3,
      images: [
        {
          filename: "cuerpo_04a_04",
          zIndex: 10
        },
        {
          filename: "brazob_04_04",
          zIndex: 5
        },
        {
          filename: "brazof_04_04",
          zIndex: 16
        },
        {
          filename: "cuello_04_04",
          zIndex: 11
        }
      ]
    },
    {
      id: 41,
      name: "Body 6",
      bodyShapeId: 6,
      partTypeId: 0,
      colorId: 3,
      images: [
        {
          filename: "cuerpo_04b_04",
          zIndex: 10
        },
        {
          filename: "brazob_04_04",
          zIndex: 5
        },
        {
          filename: "brazof_04_04",
          zIndex: 16
        },
        {
          filename: "cuello_04_04",
          zIndex: 11
        }
      ]
    },
    {
      id: 42,
      name: "Body 7",
      bodyShapeId: 7,
      partTypeId: 0,
      colorId: 3,
      images: [
        {
          filename: "cuerpo_05a_04",
          zIndex: 10
        },
        {
          filename: "brazob_05_04",
          zIndex: 5
        },
        {
          filename: "brazof_05_04",
          zIndex: 16
        },
        {
          filename: "cuello_05_04",
          zIndex: 11
        }
      ]
    },
    {
      id: 43,
      name: "Body 8",
      bodyShapeId: 8,
      partTypeId: 0,
      colorId: 3,
      images: [
        {
          filename: "cuerpo_05b_04",
          zIndex: 10
        },
        {
          filename: "brazob_05_04",
          zIndex: 5
        },
        {
          filename: "brazof_05_04",
          zIndex: 16
        },
        {
          filename: "cuello_05_04",
          zIndex: 11
        }
      ]
    },
    {
      id: 44,
      name: "Body 9",
      bodyShapeId: 9,
      partTypeId: 0,
      colorId: 3,
      images: [
        {
          filename: "cuerpo_06a_04",
          zIndex: 10
        },
        {
          filename: "brazob_06_04",
          zIndex: 5
        },
        {
          filename: "brazof_06_04",
          zIndex: 16
        },
        {
          filename: "cuello_06_04",
          zIndex: 11
        }
      ]
    },
    {
      id: 45,
      name: "Body 10",
      bodyShapeId: 10,
      partTypeId: 0,
      colorId: 3,
      images: [
        {
          filename: "cuerpo_06b_04",
          zIndex: 10
        },
        {
          filename: "brazob_06_04",
          zIndex: 5
        },
        {
          filename: "brazof_06_04",
          zIndex: 16
        },
        {
          filename: "cuello_06_04",
          zIndex: 11
        }
      ]
    },
    {
      id: 46,
      name: "Body 11",
      bodyShapeId: 11,
      partTypeId: 0,
      colorId: 3,
      images: [
        {
          filename: "cuerpo_07a_04",
          zIndex: 10
        },
        {
          filename: "brazob_07_04",
          zIndex: 5
        },
        {
          filename: "brazof_07_04",
          zIndex: 16
        },
        {
          filename: "cuello_07_04",
          zIndex: 11
        }
      ]
    },
    {
      id: 47,
      name: "Body 12",
      bodyShapeId: 12,
      partTypeId: 0,
      colorId: 3,
      images: [
        {
          filename: "cuerpo_07b_04",
          zIndex: 10
        },
        {
          filename: "brazob_07_04",
          zIndex: 5
        },
        {
          filename: "brazof_07_04",
          zIndex: 16
        },
        {
          filename: "cuello_07_04",
          zIndex: 11
        }
      ]
    },
    {
      id: 48,
      name: "Body 1",
      bodyShapeId: 1,
      partTypeId: 0,
      colorId: 4,
      images: [
        {
          filename: "cuerpo_01_05",
          zIndex: 10
        },
        {
          filename: "brazob_01_05",
          zIndex: 5
        },
        {
          filename: "brazof_01_05",
          zIndex: 16
        },
        {
          filename: "cuello_01_05",
          zIndex: 11
        }
      ]
    },
    {
      id: 49,
      name: "Body 2",
      bodyShapeId: 2,
      partTypeId: 0,
      colorId: 4,
      images: [
        {
          filename: "cuerpo_02_05",
          zIndex: 10
        },
        {
          filename: "brazob_02_05",
          zIndex: 5
        },
        {
          filename: "brazof_02_05",
          zIndex: 16
        },
        {
          filename: "cuello_02_05",
          zIndex: 11
        }
      ]
    },
    {
      id: 51,
      name: "Body 3",
      bodyShapeId: 3,
      partTypeId: 0,
      colorId: 4,
      images: [
        {
          filename: "cuerpo_03a_05",
          zIndex: 10
        },
        {
          filename: "brazob_03_05",
          zIndex: 5
        },
        {
          filename: "brazof_03_05",
          zIndex: 16
        },
        {
          filename: "cuello_03_05",
          zIndex: 11
        }
      ]
    },
    {
      id: 52,
      name: "Body 4",
      bodyShapeId: 4,
      partTypeId: 0,
      colorId: 4,
      images: [
        {
          filename: "cuerpo_03b_05",
          zIndex: 10
        },
        {
          filename: "brazob_03_05",
          zIndex: 5
        },
        {
          filename: "brazof_03_05",
          zIndex: 16
        },
        {
          filename: "cuello_03_05",
          zIndex: 11
        }
      ]
    },
    {
      id: 53,
      name: "Body 5",
      bodyShapeId: 5,
      partTypeId: 0,
      colorId: 4,
      images: [
        {
          filename: "cuerpo_04a_05",
          zIndex: 10
        },
        {
          filename: "brazob_04_05",
          zIndex: 5
        },
        {
          filename: "brazof_04_05",
          zIndex: 16
        },
        {
          filename: "cuello_04_05",
          zIndex: 11
        }
      ]
    },
    {
      id: 54,
      name: "Body 6",
      bodyShapeId: 6,
      partTypeId: 0,
      colorId: 4,
      images: [
        {
          filename: "cuerpo_04b_05",
          zIndex: 10
        },
        {
          filename: "brazob_04_05",
          zIndex: 5
        },
        {
          filename: "brazof_04_05",
          zIndex: 16
        },
        {
          filename: "cuello_04_05",
          zIndex: 11
        }
      ]
    },
    {
      id: 55,
      name: "Body 7",
      bodyShapeId: 7,
      partTypeId: 0,
      colorId: 4,
      images: [
        {
          filename: "cuerpo_05a_05",
          zIndex: 10
        },
        {
          filename: "brazob_05_05",
          zIndex: 5
        },
        {
          filename: "brazof_05_05",
          zIndex: 16
        },
        {
          filename: "cuello_05_05",
          zIndex: 11
        }
      ]
    },
    {
      id: 56,
      name: "Body 8",
      bodyShapeId: 8,
      partTypeId: 0,
      colorId: 4,
      images: [
        {
          filename: "cuerpo_05b_05",
          zIndex: 10
        },
        {
          filename: "brazob_05_05",
          zIndex: 5
        },
        {
          filename: "brazof_05_05",
          zIndex: 16
        },
        {
          filename: "cuello_05_05",
          zIndex: 11
        }
      ]
    },
    {
      id: 57,
      name: "Body 9",
      bodyShapeId: 9,
      partTypeId: 0,
      colorId: 4,
      images: [
        {
          filename: "cuerpo_06a_05",
          zIndex: 10
        },
        {
          filename: "brazob_06_05",
          zIndex: 5
        },
        {
          filename: "brazof_06_05",
          zIndex: 16
        },
        {
          filename: "cuello_06_05",
          zIndex: 11
        }
      ]
    },
    {
      id: 58,
      name: "Body 10",
      bodyShapeId: 10,
      partTypeId: 0,
      colorId: 4,
      images: [
        {
          filename: "cuerpo_06b_05",
          zIndex: 10
        },
        {
          filename: "brazob_06_05",
          zIndex: 5
        },
        {
          filename: "brazof_06_05",
          zIndex: 16
        },
        {
          filename: "cuello_06_05",
          zIndex: 11
        }
      ]
    },
    {
      id: 59,
      name: "Body 11",
      bodyShapeId: 11,
      partTypeId: 0,
      colorId: 4,
      images: [
        {
          filename: "cuerpo_07a_05",
          zIndex: 10
        },
        {
          filename: "brazob_07_05",
          zIndex: 5
        },
        {
          filename: "brazof_07_05",
          zIndex: 16
        },
        {
          filename: "cuello_07_05",
          zIndex: 11
        }
      ]
    },
    {
      id: 60,
      name: "Body 12",
      bodyShapeId: 12,
      partTypeId: 0,
      colorId: 4,
      images: [
        {
          filename: "cuerpo_07b_05",
          zIndex: 10
        },
        {
          filename: "brazob_07_05",
          zIndex: 5
        },
        {
          filename: "brazof_07_05",
          zIndex: 16
        },
        {
          filename: "cuello_07_05",
          zIndex: 11
        }
      ]
    },
    {
      id: 61,
      name: "Face 1",
      partTypeId: 1,
      colorId: 0,
      images: [
        {
          filename: "cara_01_01",
          zIndex: 21
        }
      ]
    },
    {
      id: 62,
      name: "Face 2",
      partTypeId: 1,
      colorId: 0,
      images: [
        {
          filename: "cara_02_01",
          zIndex: 21
        }
      ]
    },
    {
      id: 63,
      name: "Face 3",
      partTypeId: 1,
      colorId: 0,
      images: [
        {
          filename: "cara_03_01",
          zIndex: 21
        }
      ]
    },
    {
      id: 64,
      name: "Face 4",
      partTypeId: 1,
      colorId: 0,
      images: [
        {
          filename: "cara_04_01",
          zIndex: 21
        }
      ]
    },
    {
      id: 65,
      name: "Face 5",
      partTypeId: 1,
      colorId: 0,
      images: [
        {
          filename: "cara_05_01",
          zIndex: 21
        }
      ]
    },
    {
      id: 66,
      name: "Face 6",
      partTypeId: 1,
      colorId: 0,
      images: [
        {
          filename: "cara_06_01",
          zIndex: 21
        }
      ]
    },
    {
      id: 67,
      name: "Face 7",
      partTypeId: 1,
      colorId: 0,
      images: [
        {
          filename: "cara_07_01",
          zIndex: 21
        }
      ]
    },
    {
      id: 68,
      name: "Face 1",
      partTypeId: 1,
      colorId: 1,
      images: [
        {
          filename: "cara_01_02",
          zIndex: 21
        }
      ]
    },
    {
      id: 69,
      name: "Face 2",
      partTypeId: 1,
      colorId: 1,
      images: [
        {
          filename: "cara_02_02",
          zIndex: 21
        }
      ]
    },
    {
      id: 70,
      name: "Face 3",
      partTypeId: 1,
      colorId: 1,
      images: [
        {
          filename: "cara_03_02",
          zIndex: 21
        }
      ]
    },
    {
      id: 71,
      name: "Face 4",
      partTypeId: 1,
      colorId: 1,
      images: [
        {
          filename: "cara_04_02",
          zIndex: 21
        }
      ]
    },
    {
      id: 72,
      name: "Face 5",
      partTypeId: 1,
      colorId: 1,
      images: [
        {
          filename: "cara_05_02",
          zIndex: 21
        }
      ]
    },
    {
      id: 73,
      name: "Face 6",
      partTypeId: 1,
      colorId: 1,
      images: [
        {
          filename: "cara_06_02",
          zIndex: 21
        }
      ]
    },
    {
      id: 74,
      name: "Face 7",
      partTypeId: 1,
      colorId: 1,
      images: [
        {
          filename: "cara_07_02",
          zIndex: 21
        }
      ]
    },
    {
      id: 75,
      name: "Face 1",
      partTypeId: 1,
      colorId: 2,
      images: [
        {
          filename: "cara_01_03",
          zIndex: 21
        }
      ]
    },
    {
      id: 76,
      name: "Face 2",
      partTypeId: 1,
      colorId: 2,
      images: [
        {
          filename: "cara_02_03",
          zIndex: 21
        }
      ]
    },
    {
      id: 77,
      name: "Face 3",
      partTypeId: 1,
      colorId: 2,
      images: [
        {
          filename: "cara_03_03",
          zIndex: 21
        }
      ]
    },
    {
      id: 78,
      name: "Face 4",
      partTypeId: 1,
      colorId: 2,
      images: [
        {
          filename: "cara_04_03",
          zIndex: 21
        }
      ]
    },
    {
      id: 79,
      name: "Face 5",
      partTypeId: 1,
      colorId: 2,
      images: [
        {
          filename: "cara_05_03",
          zIndex: 21
        }
      ]
    },
    {
      id: 80,
      name: "Face 6",
      partTypeId: 1,
      colorId: 2,
      images: [
        {
          filename: "cara_06_03",
          zIndex: 21
        }
      ]
    },
    {
      id: 81,
      name: "Face 7",
      partTypeId: 1,
      colorId: 2,
      images: [
        {
          filename: "cara_07_03",
          zIndex: 21
        }
      ]
    },
    {
      id: 82,
      name: "Face 1",
      partTypeId: 1,
      colorId: 3,
      images: [
        {
          filename: "cara_01_04",
          zIndex: 21
        }
      ]
    },
    {
      id: 83,
      name: "Face 2",
      partTypeId: 1,
      colorId: 3,
      images: [
        {
          filename: "cara_02_04",
          zIndex: 21
        }
      ]
    },
    {
      id: 84,
      name: "Face 3",
      partTypeId: 1,
      colorId: 3,
      images: [
        {
          filename: "cara_03_04",
          zIndex: 21
        }
      ]
    },
    {
      id: 85,
      name: "Face 4",
      partTypeId: 1,
      colorId: 3,
      images: [
        {
          filename: "cara_04_04",
          zIndex: 21
        }
      ]
    },
    {
      id: 86,
      name: "Face 5",
      partTypeId: 1,
      colorId: 3,
      images: [
        {
          filename: "cara_05_04",
          zIndex: 21
        }
      ]
    },
    {
      id: 87,
      name: "Face 6",
      partTypeId: 1,
      colorId: 3,
      images: [
        {
          filename: "cara_06_04",
          zIndex: 21
        }
      ]
    },
    {
      id: 88,
      name: "Face 7",
      partTypeId: 1,
      colorId: 3,
      images: [
        {
          filename: "cara_07_04",
          zIndex: 21
        }
      ]
    },
    {
      id: 89,
      name: "Face 1",
      partTypeId: 1,
      colorId: 4,
      images: [
        {
          filename: "cara_01_05",
          zIndex: 21
        }
      ]
    },
    {
      id: 90,
      name: "Face 2",
      partTypeId: 1,
      colorId: 4,
      images: [
        {
          filename: "cara_02_05",
          zIndex: 21
        }
      ]
    },
    {
      id: 91,
      name: "Face 3",
      partTypeId: 1,
      colorId: 4,
      images: [
        {
          filename: "cara_03_05",
          zIndex: 21
        }
      ]
    },
    {
      id: 92,
      name: "Face 4",
      partTypeId: 1,
      colorId: 4,
      images: [
        {
          filename: "cara_04_05",
          zIndex: 21
        }
      ]
    },
    {
      id: 93,
      name: "Face 5",
      partTypeId: 1,
      colorId: 4,
      images: [
        {
          filename: "cara_05_05",
          zIndex: 21
        }
      ]
    },
    {
      id: 94,
      name: "Face 6",
      partTypeId: 1,
      colorId: 4,
      images: [
        {
          filename: "cara_06_05",
          zIndex: 21
        }
      ]
    },
    {
      id: 95,
      name: "Face 7",
      partTypeId: 1,
      colorId: 4,
      images: [
        {
          filename: "cara_07_05",
          zIndex: 21
        }
      ]
    },
    {
      id: 96,
      name: "Eyes 1",
      partTypeId: 7,
      colorId: 25,
      images: [
        {
          filename: "ojos_01_01",
          zIndex: 23
        }
      ]
    },
    {
      id: 97,
      name: "Eyes 1",
      partTypeId: 7,
      colorId: 26,
      images: [
        {
          filename: "ojos_01_02",
          zIndex: 23
        }
      ]
    },
    {
      id: 98,
      name: "Eyes 1",
      partTypeId: 7,
      colorId: 27,
      images: [
        {
          filename: "ojos_01_03",
          zIndex: 23
        }
      ]
    },
    {
      id: 99,
      name: "Eyes 1",
      partTypeId: 7,
      colorId: 28,
      images: [
        {
          filename: "ojos_01_04",
          zIndex: 23
        }
      ]
    },
    {
      id: 100,
      name: "Eyes 1",
      partTypeId: 7,
      colorId: 29,
      images: [
        {
          filename: "ojos_01_05",
          zIndex: 23
        }
      ]
    },
    {
      id: 101,
      name: "Eyes 1",
      partTypeId: 7,
      colorId: 30,
      images: [
        {
          filename: "ojos_01_06",
          zIndex: 23
        }
      ]
    },
    {
      id: 102,
      name: "Eyes 1",
      partTypeId: 7,
      colorId: 31,
      images: [
        {
          filename: "ojos_01_07",
          zIndex: 23
        }
      ]
    },
    {
      id: 103,
      name: "Eyes 1",
      partTypeId: 7,
      colorId: 32,
      images: [
        {
          filename: "ojos_01_08",
          zIndex: 23
        }
      ]
    },
    {
      id: 104,
      name: "Eyes 2",
      partTypeId: 7,
      colorId: 25,
      images: [
        {
          filename: "ojos_02_01",
          zIndex: 23
        }
      ]
    },
    {
      id: 105,
      name: "Eyes 2",
      partTypeId: 7,
      colorId: 26,
      images: [
        {
          filename: "ojos_02_02",
          zIndex: 23
        }
      ]
    },
    {
      id: 106,
      name: "Eyes 2",
      partTypeId: 7,
      colorId: 27,
      images: [
        {
          filename: "ojos_02_03",
          zIndex: 23
        }
      ]
    },
    {
      id: 107,
      name: "Eyes 2",
      partTypeId: 7,
      colorId: 28,
      images: [
        {
          filename: "ojos_02_04",
          zIndex: 23
        }
      ]
    },
    {
      id: 108,
      name: "Eyes 2",
      partTypeId: 7,
      colorId: 29,
      images: [
        {
          filename: "ojos_02_05",
          zIndex: 23
        }
      ]
    },
    {
      id: 109,
      name: "Eyes 2",
      partTypeId: 7,
      colorId: 30,
      images: [
        {
          filename: "ojos_02_06",
          zIndex: 23
        }
      ]
    },
    {
      id: 110,
      name: "Eyes 2",
      partTypeId: 7,
      colorId: 31,
      images: [
        {
          filename: "ojos_02_07",
          zIndex: 23
        }
      ]
    },
    {
      id: 111,
      name: "Eyes 2",
      partTypeId: 7,
      colorId: 31,
      images: [
        {
          filename: "ojos_02_08",
          zIndex: 23
        }
      ]
    },
    {
      id: 112,
      name: "Eyes 3",
      partTypeId: 7,
      colorId: 25,
      images: [
        {
          filename: "ojos_03_01",
          zIndex: 23
        }
      ]
    },
    {
      id: 113,
      name: "Eyes 3",
      partTypeId: 7,
      colorId: 26,
      images: [
        {
          filename: "ojos_03_02",
          zIndex: 23
        }
      ]
    },
    {
      id: 114,
      name: "Eyes 3",
      partTypeId: 7,
      colorId: 27,
      images: [
        {
          filename: "ojos_03_03",
          zIndex: 23
        }
      ]
    },
    {
      id: 115,
      name: "Eyes 3",
      partTypeId: 7,
      colorId: 28,
      images: [
        {
          filename: "ojos_03_04",
          zIndex: 23
        }
      ]
    },
    {
      id: 116,
      name: "Eyes 3",
      partTypeId: 7,
      colorId: 29,
      images: [
        {
          filename: "ojos_03_05",
          zIndex: 23
        }
      ]
    },
    {
      id: 117,
      name: "Eyes 3",
      partTypeId: 7,
      colorId: 30,
      images: [
        {
          filename: "ojos_03_06",
          zIndex: 23
        }
      ]
    },
    {
      id: 118,
      name: "Eyes 3",
      partTypeId: 7,
      colorId: 31,
      images: [
        {
          filename: "ojos_03_07",
          zIndex: 23
        }
      ]
    },
    {
      id: 119,
      name: "Eyes 3",
      partTypeId: 7,
      colorId: 32,
      images: [
        {
          filename: "ojos_03_08",
          zIndex: 23
        }
      ]
    },
    {
      id: 120,
      name: "Eyes 4",
      partTypeId: 7,
      colorId: 25,
      images: [
        {
          filename: "ojos_04_01",
          zIndex: 23
        }
      ]
    },
    {
      id: 121,
      name: "Eyes 4",
      partTypeId: 7,
      colorId: 26,
      images: [
        {
          filename: "ojos_04_02",
          zIndex: 23
        }
      ]
    },
    {
      id: 122,
      name: "Eyes 4",
      partTypeId: 7,
      colorId: 27,
      images: [
        {
          filename: "ojos_04_03",
          zIndex: 23
        }
      ]
    },
    {
      id: 123,
      name: "Eyes 4",
      partTypeId: 7,
      colorId: 28,
      images: [
        {
          filename: "ojos_04_04",
          zIndex: 23
        }
      ]
    },
    {
      id: 124,
      name: "Eyes 4",
      partTypeId: 7,
      colorId: 29,
      images: [
        {
          filename: "ojos_04_05",
          zIndex: 23
        }
      ]
    },
    {
      id: 125,
      name: "Eyes 4",
      partTypeId: 7,
      colorId: 30,
      images: [
        {
          filename: "ojos_04_06",
          zIndex: 23
        }
      ]
    },
    {
      id: 126,
      name: "Eyes 4",
      partTypeId: 7,
      colorId: 31,
      images: [
        {
          filename: "ojos_04_07",
          zIndex: 23
        }
      ]
    },
    {
      id: 127,
      name: "Eyes 4",
      partTypeId: 7,
      colorId: 31,
      images: [
        {
          filename: "ojos_04_08",
          zIndex: 23
        }
      ]
    },
    {
      id: 128,
      name: "Eyes 5",
      partTypeId: 7,
      colorId: 25,
      images: [
        {
          filename: "ojos_05_01",
          zIndex: 23
        }
      ]
    },
    {
      id: 129,
      name: "Eyes 5",
      partTypeId: 7,
      colorId: 26,
      images: [
        {
          filename: "ojos_05_02",
          zIndex: 23
        }
      ]
    },
    {
      id: 130,
      name: "Eyes 5",
      partTypeId: 7,
      colorId: 27,
      images: [
        {
          filename: "ojos_05_03",
          zIndex: 23
        }
      ]
    },
    {
      id: 131,
      name: "Eyes 5",
      partTypeId: 7,
      colorId: 28,
      images: [
        {
          filename: "ojos_05_04",
          zIndex: 23
        }
      ]
    },
    {
      id: 132,
      name: "Eyes 5",
      partTypeId: 7,
      colorId: 29,
      images: [
        {
          filename: "ojos_05_05",
          zIndex: 23
        }
      ]
    },
    {
      id: 133,
      name: "Eyes 5",
      partTypeId: 7,
      colorId: 30,
      images: [
        {
          filename: "ojos_05_06",
          zIndex: 23
        }
      ]
    },
    {
      id: 134,
      name: "Eyes 5",
      partTypeId: 7,
      colorId: 31,
      images: [
        {
          filename: "ojos_05_07",
          zIndex: 23
        }
      ]
    },
    {
      id: 135,
      name: "Eyes 5",
      partTypeId: 7,
      colorId: 32,
      images: [
        {
          filename: "ojos_05_08",
          zIndex: 23
        }
      ]
    },
    {
      id: 136,
      name: "Eyes 6",
      partTypeId: 7,
      colorId: 25,
      images: [
        {
          filename: "ojos_06_01",
          zIndex: 23
        }
      ]
    },
    {
      id: 137,
      name: "Eyes 6",
      partTypeId: 7,
      colorId: 26,
      images: [
        {
          filename: "ojos_06_02",
          zIndex: 23
        }
      ]
    },
    {
      id: 138,
      name: "Eyes 6",
      partTypeId: 7,
      colorId: 27,
      images: [
        {
          filename: "ojos_06_03",
          zIndex: 23
        }
      ]
    },
    {
      id: 139,
      name: "Eyes 6",
      partTypeId: 7,
      colorId: 28,
      images: [
        {
          filename: "ojos_06_04",
          zIndex: 23
        }
      ]
    },
    {
      id: 140,
      name: "Eyes 6",
      partTypeId: 7,
      colorId: 29,
      images: [
        {
          filename: "ojos_06_05",
          zIndex: 23
        }
      ]
    },
    {
      id: 141,
      name: "Eyes 6",
      partTypeId: 7,
      colorId: 30,
      images: [
        {
          filename: "ojos_06_06",
          zIndex: 23
        }
      ]
    },
    {
      id: 142,
      name: "Eyes 6",
      partTypeId: 7,
      colorId: 31,
      images: [
        {
          filename: "ojos_06_07",
          zIndex: 23
        }
      ]
    },
    {
      id: 143,
      name: "Eyes 6",
      partTypeId: 7,
      colorId: 31,
      images: [
        {
          filename: "ojos_06_08",
          zIndex: 23
        }
      ]
    },
    {
      id: 144,
      name: "Eyes 7",
      partTypeId: 7,
      colorId: 25,
      images: [
        {
          filename: "ojos_07_01",
          zIndex: 23
        }
      ]
    },
    {
      id: 145,
      name: "Eyes 7",
      partTypeId: 7,
      colorId: 26,
      images: [
        {
          filename: "ojos_07_02",
          zIndex: 23
        }
      ]
    },
    {
      id: 146,
      name: "Eyes 7",
      partTypeId: 7,
      colorId: 27,
      images: [
        {
          filename: "ojos_07_03",
          zIndex: 23
        }
      ]
    },
    {
      id: 147,
      name: "Eyes 7",
      partTypeId: 7,
      colorId: 28,
      images: [
        {
          filename: "ojos_07_04",
          zIndex: 23
        }
      ]
    },
    {
      id: 148,
      name: "Eyes 7",
      partTypeId: 7,
      colorId: 29,
      images: [
        {
          filename: "ojos_07_05",
          zIndex: 23
        }
      ]
    },
    {
      id: 149,
      name: "Eyes 7",
      partTypeId: 7,
      colorId: 30,
      images: [
        {
          filename: "ojos_07_06",
          zIndex: 23
        }
      ]
    },
    {
      id: 150,
      name: "Eyes 7",
      partTypeId: 7,
      colorId: 31,
      images: [
        {
          filename: "ojos_07_07",
          zIndex: 23
        }
      ]
    },
    {
      id: 151,
      name: "Eyes 7",
      partTypeId: 7,
      colorId: 32,
      images: [
        {
          filename: "ojos_07_08",
          zIndex: 23
        }
      ]
    },
    {
      id: 152,
      name: "Eyes 8",
      partTypeId: 7,
      colorId: 25,
      images: [
        {
          filename: "ojos_08_01",
          zIndex: 23
        }
      ]
    },
    {
      id: 153,
      name: "Eyes 8",
      partTypeId: 7,
      colorId: 26,
      images: [
        {
          filename: "ojos_08_02",
          zIndex: 23
        }
      ]
    },
    {
      id: 154,
      name: "Eyes 8",
      partTypeId: 7,
      colorId: 27,
      images: [
        {
          filename: "ojos_08_03",
          zIndex: 23
        }
      ]
    },
    {
      id: 155,
      name: "Eyes 8",
      partTypeId: 7,
      colorId: 28,
      images: [
        {
          filename: "ojos_08_04",
          zIndex: 23
        }
      ]
    },
    {
      id: 156,
      name: "Eyes 8",
      partTypeId: 7,
      colorId: 29,
      images: [
        {
          filename: "ojos_08_05",
          zIndex: 23
        }
      ]
    },
    {
      id: 157,
      name: "Eyes 8",
      partTypeId: 7,
      colorId: 30,
      images: [
        {
          filename: "ojos_08_06",
          zIndex: 23
        }
      ]
    },
    {
      id: 158,
      name: "Eyes 8",
      partTypeId: 7,
      colorId: 31,
      images: [
        {
          filename: "ojos_08_07",
          zIndex: 23
        }
      ]
    },
    {
      id: 159,
      name: "Eyes 8",
      partTypeId: 7,
      colorId: 31,
      images: [
        {
          filename: "ojos_08_08",
          zIndex: 23
        }
      ]
    },
    {
      id: 160,
      name: "Eyes 9",
      partTypeId: 7,
      colorId: 25,
      images: [
        {
          filename: "ojos_09_01",
          zIndex: 23
        }
      ]
    },
    {
      id: 161,
      name: "Eyes 9",
      partTypeId: 7,
      colorId: 26,
      images: [
        {
          filename: "ojos_09_02",
          zIndex: 23
        }
      ]
    },
    {
      id: 162,
      name: "Eyes 9",
      partTypeId: 7,
      colorId: 27,
      images: [
        {
          filename: "ojos_09_03",
          zIndex: 23
        }
      ]
    },
    {
      id: 163,
      name: "Eyes 9",
      partTypeId: 7,
      colorId: 28,
      images: [
        {
          filename: "ojos_09_04",
          zIndex: 23
        }
      ]
    },
    {
      id: 164,
      name: "Eyes 9",
      partTypeId: 7,
      colorId: 29,
      images: [
        {
          filename: "ojos_09_05",
          zIndex: 23
        }
      ]
    },
    {
      id: 165,
      name: "Eyes 9",
      partTypeId: 7,
      colorId: 30,
      images: [
        {
          filename: "ojos_09_06",
          zIndex: 23
        }
      ]
    },
    {
      id: 166,
      name: "Eyes 9",
      partTypeId: 7,
      colorId: 31,
      images: [
        {
          filename: "ojos_09_07",
          zIndex: 23
        }
      ]
    },
    {
      id: 167,
      name: "Eyes 9",
      partTypeId: 7,
      colorId: 32,
      images: [
        {
          filename: "ojos_09_08",
          zIndex: 23
        }
      ]
    },
    {
      id: 168,
      name: "Eyes 10",
      partTypeId: 7,
      colorId: 25,
      images: [
        {
          filename: "ojos_10_01",
          zIndex: 23
        }
      ]
    },
    {
      id: 169,
      name: "Eyes 10",
      partTypeId: 7,
      colorId: 26,
      images: [
        {
          filename: "ojos_10_02",
          zIndex: 23
        }
      ]
    },
    {
      id: 170,
      name: "Eyes 10",
      partTypeId: 7,
      colorId: 27,
      images: [
        {
          filename: "ojos_10_03",
          zIndex: 23
        }
      ]
    },
    {
      id: 171,
      name: "Eyes 10",
      partTypeId: 7,
      colorId: 28,
      images: [
        {
          filename: "ojos_10_04",
          zIndex: 23
        }
      ]
    },
    {
      id: 172,
      name: "Eyes 10",
      partTypeId: 7,
      colorId: 29,
      images: [
        {
          filename: "ojos_10_05",
          zIndex: 23
        }
      ]
    },
    {
      id: 173,
      name: "Eyes 10",
      partTypeId: 7,
      colorId: 30,
      images: [
        {
          filename: "ojos_10_06",
          zIndex: 23
        }
      ]
    },
    {
      id: 174,
      name: "Eyes 10",
      partTypeId: 7,
      colorId: 31,
      images: [
        {
          filename: "ojos_10_07",
          zIndex: 23
        }
      ]
    },
    {
      id: 175,
      name: "Eyes 10",
      partTypeId: 7,
      colorId: 31,
      images: [
        {
          filename: "ojos_10_08",
          zIndex: 23
        }
      ]
    },
    {
      id: 176,
      name: "Eyes 11",
      partTypeId: 7,
      colorId: 25,
      images: [
        {
          filename: "ojos_11_01",
          zIndex: 23
        }
      ]
    },
    {
      id: 177,
      name: "Eyes 11",
      partTypeId: 7,
      colorId: 26,
      images: [
        {
          filename: "ojos_11_02",
          zIndex: 23
        }
      ]
    },
    {
      id: 178,
      name: "Eyes 11",
      partTypeId: 7,
      colorId: 27,
      images: [
        {
          filename: "ojos_11_03",
          zIndex: 23
        }
      ]
    },
    {
      id: 179,
      name: "Eyes 11",
      partTypeId: 7,
      colorId: 28,
      images: [
        {
          filename: "ojos_11_04",
          zIndex: 23
        }
      ]
    },
    {
      id: 180,
      name: "Eyes 11",
      partTypeId: 7,
      colorId: 29,
      images: [
        {
          filename: "ojos_11_05",
          zIndex: 23
        }
      ]
    },
    {
      id: 181,
      name: "Eyes 11",
      partTypeId: 7,
      colorId: 30,
      images: [
        {
          filename: "ojos_11_06",
          zIndex: 23
        }
      ]
    },
    {
      id: 182,
      name: "Eyes 11",
      partTypeId: 7,
      colorId: 31,
      images: [
        {
          filename: "ojos_11_07",
          zIndex: 23
        }
      ]
    },
    {
      id: 183,
      name: "Eyes 11",
      partTypeId: 7,
      colorId: 32,
      images: [
        {
          filename: "ojos_11_08",
          zIndex: 23
        }
      ]
    },
    {
      id: 184,
      name: "Eyes 12",
      partTypeId: 7,
      colorId: 25,
      images: [
        {
          filename: "ojos_12_01",
          zIndex: 23
        }
      ]
    },
    {
      id: 185,
      name: "Eyes 12",
      partTypeId: 7,
      colorId: 26,
      images: [
        {
          filename: "ojos_12_02",
          zIndex: 23
        }
      ]
    },
    {
      id: 186,
      name: "Eyes 12",
      partTypeId: 7,
      colorId: 27,
      images: [
        {
          filename: "ojos_12_03",
          zIndex: 23
        }
      ]
    },
    {
      id: 187,
      name: "Eyes 12",
      partTypeId: 7,
      colorId: 28,
      images: [
        {
          filename: "ojos_12_04",
          zIndex: 23
        }
      ]
    },
    {
      id: 188,
      name: "Eyes 12",
      partTypeId: 7,
      colorId: 29,
      images: [
        {
          filename: "ojos_12_05",
          zIndex: 23
        }
      ]
    },
    {
      id: 189,
      name: "Eyes 12",
      partTypeId: 7,
      colorId: 30,
      images: [
        {
          filename: "ojos_12_06",
          zIndex: 23
        }
      ]
    },
    {
      id: 190,
      name: "Eyes 12",
      partTypeId: 7,
      colorId: 31,
      images: [
        {
          filename: "ojos_12_07",
          zIndex: 23
        }
      ]
    },
    {
      id: 191,
      name: "Eyes 12",
      partTypeId: 7,
      colorId: 31,
      images: [
        {
          filename: "ojos_12_08",
          zIndex: 23
        }
      ]
    },
    {
      id: 192,
      name: "Nose 1",
      partTypeId: 8,
      colorId: 0,
      images: [
        {
          filename: "nariz_01_01",
          zIndex: 26
        }
      ]
    },
    {
      id: 193,
      name: "Nose 1",
      partTypeId: 8,
      colorId: 1,
      images: [
        {
          filename: "nariz_01_02",
          zIndex: 26
        }
      ]
    },
    {
      id: 194,
      name: "Nose 1",
      partTypeId: 8,
      colorId: 2,
      images: [
        {
          filename: "nariz_01_03",
          zIndex: 26
        }
      ]
    },
    {
      id: 195,
      name: "Nose 1",
      partTypeId: 8,
      colorId: 3,
      images: [
        {
          filename: "nariz_01_04",
          zIndex: 26
        }
      ]
    },
    {
      id: 196,
      name: "Nose 1",
      partTypeId: 8,
      colorId: 4,
      images: [
        {
          filename: "nariz_01_05",
          zIndex: 26
        }
      ]
    },
    {
      id: 197,
      name: "Nose 2",
      partTypeId: 8,
      colorId: 0,
      images: [
        {
          filename: "nariz_02_01",
          zIndex: 26
        }
      ]
    },
    {
      id: 198,
      name: "Nose 2",
      partTypeId: 8,
      colorId: 1,
      images: [
        {
          filename: "nariz_02_02",
          zIndex: 26
        }
      ]
    },
    {
      id: 199,
      name: "Nose 2",
      partTypeId: 8,
      colorId: 2,
      images: [
        {
          filename: "nariz_02_03",
          zIndex: 26
        }
      ]
    },
    {
      id: 200,
      name: "Nose 2",
      partTypeId: 8,
      colorId: 3,
      images: [
        {
          filename: "nariz_02_04",
          zIndex: 26
        }
      ]
    },
    {
      id: 201,
      name: "Nose 2",
      partTypeId: 8,
      colorId: 4,
      images: [
        {
          filename: "nariz_02_05",
          zIndex: 26
        }
      ]
    },
    {
      id: 202,
      name: "Nose 3",
      partTypeId: 8,
      colorId: 0,
      images: [
        {
          filename: "nariz_03_01",
          zIndex: 26
        }
      ]
    },
    {
      id: 203,
      name: "Nose 3",
      partTypeId: 8,
      colorId: 1,
      images: [
        {
          filename: "nariz_03_02",
          zIndex: 26
        }
      ]
    },
    {
      id: 204,
      name: "Nose 3",
      partTypeId: 8,
      colorId: 2,
      images: [
        {
          filename: "nariz_03_03",
          zIndex: 26
        }
      ]
    },
    {
      id: 205,
      name: "Nose 3",
      partTypeId: 8,
      colorId: 3,
      images: [
        {
          filename: "nariz_03_04",
          zIndex: 26
        }
      ]
    },
    {
      id: 206,
      name: "Nose 3",
      partTypeId: 8,
      colorId: 4,
      images: [
        {
          filename: "nariz_03_05",
          zIndex: 26
        }
      ]
    },
    {
      id: 207,
      name: "Nose 4",
      partTypeId: 8,
      colorId: 0,
      images: [
        {
          filename: "nariz_04_01",
          zIndex: 26
        }
      ]
    },
    {
      id: 208,
      name: "Nose 4",
      partTypeId: 8,
      colorId: 1,
      images: [
        {
          filename: "nariz_04_02",
          zIndex: 26
        }
      ]
    },
    {
      id: 209,
      name: "Nose 4",
      partTypeId: 8,
      colorId: 2,
      images: [
        {
          filename: "nariz_04_03",
          zIndex: 26
        }
      ]
    },
    {
      id: 210,
      name: "Nose 4",
      partTypeId: 8,
      colorId: 3,
      images: [
        {
          filename: "nariz_04_04",
          zIndex: 26
        }
      ]
    },
    {
      id: 211,
      name: "Nose 4",
      partTypeId: 8,
      colorId: 4,
      images: [
        {
          filename: "nariz_04_05",
          zIndex: 26
        }
      ]
    },
    {
      id: 212,
      name: "Nose 5",
      partTypeId: 8,
      colorId: 0,
      images: [
        {
          filename: "nariz_05_01",
          zIndex: 26
        }
      ]
    },
    {
      id: 213,
      name: "Nose 5",
      partTypeId: 8,
      colorId: 1,
      images: [
        {
          filename: "nariz_05_02",
          zIndex: 26
        }
      ]
    },
    {
      id: 214,
      name: "Nose 5",
      partTypeId: 8,
      colorId: 2,
      images: [
        {
          filename: "nariz_05_03",
          zIndex: 26
        }
      ]
    },
    {
      id: 215,
      name: "Nose 5",
      partTypeId: 8,
      colorId: 3,
      images: [
        {
          filename: "nariz_05_04",
          zIndex: 26
        }
      ]
    },
    {
      id: 216,
      name: "Nose 5",
      partTypeId: 8,
      colorId: 4,
      images: [
        {
          filename: "nariz_05_05",
          zIndex: 26
        }
      ]
    },
    {
      id: 217,
      name: "Nose 6",
      partTypeId: 8,
      colorId: 0,
      images: [
        {
          filename: "nariz_06_01",
          zIndex: 26
        }
      ]
    },
    {
      id: 218,
      name: "Nose 6",
      partTypeId: 8,
      colorId: 1,
      images: [
        {
          filename: "nariz_06_02",
          zIndex: 26
        }
      ]
    },
    {
      id: 219,
      name: "Nose 6",
      partTypeId: 8,
      colorId: 2,
      images: [
        {
          filename: "nariz_06_03",
          zIndex: 26
        }
      ]
    },
    {
      id: 220,
      name: "Nose 6",
      partTypeId: 8,
      colorId: 3,
      images: [
        {
          filename: "nariz_06_04",
          zIndex: 26
        }
      ]
    },
    {
      id: 221,
      name: "Nose 6",
      partTypeId: 8,
      colorId: 4,
      images: [
        {
          filename: "nariz_06_05",
          zIndex: 26
        }
      ]
    },
    {
      id: 222,
      name: "Nose 7",
      partTypeId: 8,
      colorId: 0,
      images: [
        {
          filename: "nariz_07_01",
          zIndex: 26
        }
      ]
    },
    {
      id: 223,
      name: "Nose 7",
      partTypeId: 8,
      colorId: 1,
      images: [
        {
          filename: "nariz_07_02",
          zIndex: 26
        }
      ]
    },
    {
      id: 224,
      name: "Nose 7",
      partTypeId: 8,
      colorId: 2,
      images: [
        {
          filename: "nariz_07_03",
          zIndex: 26
        }
      ]
    },
    {
      id: 225,
      name: "Nose 7",
      partTypeId: 8,
      colorId: 3,
      images: [
        {
          filename: "nariz_07_04",
          zIndex: 26
        }
      ]
    },
    {
      id: 226,
      name: "Nose 7",
      partTypeId: 8,
      colorId: 4,
      images: [
        {
          filename: "nariz_07_05",
          zIndex: 26
        }
      ]
    },
    {
      id: 227,
      name: "Nose 8",
      partTypeId: 8,
      colorId: 0,
      images: [
        {
          filename: "nariz_08_01",
          zIndex: 26
        }
      ]
    },
    {
      id: 228,
      name: "Nose 8",
      partTypeId: 8,
      colorId: 1,
      images: [
        {
          filename: "nariz_08_02",
          zIndex: 26
        }
      ]
    },
    {
      id: 229,
      name: "Nose 8",
      partTypeId: 8,
      colorId: 2,
      images: [
        {
          filename: "nariz_08_03",
          zIndex: 26
        }
      ]
    },
    {
      id: 230,
      name: "Nose 8",
      partTypeId: 8,
      colorId: 3,
      images: [
        {
          filename: "nariz_08_04",
          zIndex: 26
        }
      ]
    },
    {
      id: 221,
      name: "Nose 8",
      partTypeId: 8,
      colorId: 4,
      images: [
        {
          filename: "nariz_08_05",
          zIndex: 26
        }
      ]
    },
    {
      id: 222,
      name: "Nose 9",
      partTypeId: 8,
      colorId: 0,
      images: [
        {
          filename: "nariz_09_01",
          zIndex: 26
        }
      ]
    },
    {
      id: 223,
      name: "Nose 9",
      partTypeId: 8,
      colorId: 1,
      images: [
        {
          filename: "nariz_09_02",
          zIndex: 26
        }
      ]
    },
    {
      id: 224,
      name: "Nose 9",
      partTypeId: 8,
      colorId: 2,
      images: [
        {
          filename: "nariz_09_03",
          zIndex: 26
        }
      ]
    },
    {
      id: 225,
      name: "Nose 9",
      partTypeId: 8,
      colorId: 3,
      images: [
        {
          filename: "nariz_09_04",
          zIndex: 26
        }
      ]
    },
    {
      id: 226,
      name: "Nose 9",
      partTypeId: 8,
      colorId: 4,
      images: [
        {
          filename: "nariz_09_05",
          zIndex: 26
        }
      ]
    },
    {
      id: 227,
      name: "Nose 10",
      partTypeId: 8,
      colorId: 0,
      images: [
        {
          filename: "nariz_10_01",
          zIndex: 26
        }
      ]
    },
    {
      id: 228,
      name: "Nose 10",
      partTypeId: 8,
      colorId: 1,
      images: [
        {
          filename: "nariz_10_02",
          zIndex: 26
        }
      ]
    },
    {
      id: 229,
      name: "Nose 10",
      partTypeId: 8,
      colorId: 2,
      images: [
        {
          filename: "nariz_10_03",
          zIndex: 26
        }
      ]
    },
    {
      id: 230,
      name: "Nose 10",
      partTypeId: 8,
      colorId: 3,
      images: [
        {
          filename: "nariz_10_04",
          zIndex: 26
        }
      ]
    },
    {
      id: 231,
      name: "Nose 10",
      partTypeId: 8,
      colorId: 4,
      images: [
        {
          filename: "nariz_10_05",
          zIndex: 26
        }
      ]
    },
    {
      id: 232,
      name: "Lips 1",
      partTypeId: 9,
      colorId: 25,
      images: [
        {
          filename: "boca_01",
          zIndex: 24
        }
      ]
    },
    {
      id: 233,
      name: "Lips 2",
      partTypeId: 9,
      colorId: 25,
      images: [
        {
          filename: "boca_02",
          zIndex: 24
        }
      ]
    },
    {
      id: 234,
      name: "Lips 3",
      partTypeId: 9,
      colorId: 25,
      images: [
        {
          filename: "boca_03",
          zIndex: 24
        }
      ]
    },
    {
      id: 235,
      name: "Lips 4",
      partTypeId: 9,
      colorId: 25,
      images: [
        {
          filename: "boca_04",
          zIndex: 24
        }
      ]
    },
    {
      id: 236,
      name: "Lips 5",
      partTypeId: 9,
      colorId: 25,
      images: [
        {
          filename: "boca_05",
          zIndex: 24
        }
      ]
    },
    {
      id: 237,
      name: "Lips 6",
      partTypeId: 9,
      colorId: 33,
      images: [
        {
          filename: "boca_06_01",
          zIndex: 24
        }
      ]
    },
    {
      id: 238,
      name: "Lips 6",
      partTypeId: 9,
      colorId: 34,
      images: [
        {
          filename: "boca_06_02",
          zIndex: 24
        }
      ]
    },
    {
      id: 239,
      name: "Lips 6",
      partTypeId: 9,
      colorId: 35,
      images: [
        {
          filename: "boca_06_03",
          zIndex: 24
        }
      ]
    },
    {
      id: 240,
      name: "Lips 6",
      partTypeId: 9,
      colorId: 36,
      images: [
        {
          filename: "boca_06_04",
          zIndex: 24
        }
      ]
    },
    {
      id: 241,
      name: "Lips 6",
      partTypeId: 9,
      colorId: 37,
      images: [
        {
          filename: "boca_06_05",
          zIndex: 24
        }
      ]
    },
    {
      id: 242,
      name: "Lips 6",
      partTypeId: 9,
      colorId: 38,
      images: [
        {
          filename: "boca_06_06",
          zIndex: 24
        }
      ]
    },
    {
      id: 243,
      name: "Lips 7",
      partTypeId: 9,
      colorId: 33,
      images: [
        {
          filename: "boca_07_01",
          zIndex: 24
        }
      ]
    },
    {
      id: 244,
      name: "Lips 7",
      partTypeId: 9,
      colorId: 34,
      images: [
        {
          filename: "boca_07_02",
          zIndex: 24
        }
      ]
    },
    {
      id: 245,
      name: "Lips 7",
      partTypeId: 9,
      colorId: 35,
      images: [
        {
          filename: "boca_07_03",
          zIndex: 24
        }
      ]
    },
    {
      id: 246,
      name: "Lips 7",
      partTypeId: 9,
      colorId: 36,
      images: [
        {
          filename: "boca_07_04",
          zIndex: 24
        }
      ]
    },
    {
      id: 247,
      name: "Lips 7",
      partTypeId: 9,
      colorId: 37,
      images: [
        {
          filename: "boca_07_05",
          zIndex: 24
        }
      ]
    },
    {
      id: 248,
      name: "Lips 7",
      partTypeId: 9,
      colorId: 38,
      images: [
        {
          filename: "boca_07_06",
          zIndex: 24
        }
      ]
    },
    {
      id: 249,
      name: "Lips 8",
      partTypeId: 9,
      colorId: 33,
      images: [
        {
          filename: "boca_08_01",
          zIndex: 24
        }
      ]
    },
    {
      id: 250,
      name: "Lips 8",
      partTypeId: 9,
      colorId: 34,
      images: [
        {
          filename: "boca_08_02",
          zIndex: 24
        }
      ]
    },
    {
      id: 251,
      name: "Lips 8",
      partTypeId: 9,
      colorId: 35,
      images: [
        {
          filename: "boca_08_03",
          zIndex: 24
        }
      ]
    },
    {
      id: 252,
      name: "Lips 8",
      partTypeId: 9,
      colorId: 36,
      images: [
        {
          filename: "boca_08_04",
          zIndex: 24
        }
      ]
    },
    {
      id: 253,
      name: "Lips 8",
      partTypeId: 9,
      colorId: 37,
      images: [
        {
          filename: "boca_08_05",
          zIndex: 24
        }
      ]
    },
    {
      id: 254,
      name: "Lips 8",
      partTypeId: 9,
      colorId: 38,
      images: [
        {
          filename: "boca_08_06",
          zIndex: 24
        }
      ]
    },
    {
      id: 255,
      name: "Lips 9",
      partTypeId: 9,
      colorId: 33,
      images: [
        {
          filename: "boca_09_01",
          zIndex: 24
        }
      ]
    },
    {
      id: 256,
      name: "Lips 9",
      partTypeId: 9,
      colorId: 34,
      images: [
        {
          filename: "boca_09_02",
          zIndex: 24
        }
      ]
    },
    {
      id: 257,
      name: "Lips 9",
      partTypeId: 9,
      colorId: 35,
      images: [
        {
          filename: "boca_09_03",
          zIndex: 24
        }
      ]
    },
    {
      id: 258,
      name: "Lips 9",
      partTypeId: 9,
      colorId: 36,
      images: [
        {
          filename: "boca_09_04",
          zIndex: 24
        }
      ]
    },
    {
      id: 259,
      name: "Lips 9",
      partTypeId: 9,
      colorId: 37,
      images: [
        {
          filename: "boca_09_05",
          zIndex: 24
        }
      ]
    },
    {
      id: 260,
      name: "Lips 9",
      partTypeId: 9,
      colorId: 38,
      images: [
        {
          filename: "boca_09_06",
          zIndex: 24
        }
      ]
    },
    {
      id: 261,
      name: "Lips 10",
      partTypeId: 9,
      colorId: 25,
      images: [
        {
          filename: "boca_10",
          zIndex: 24
        }
      ]
    },
    {
      id: 262,
      name: "Lips 11",
      partTypeId: 9,
      colorId: 33,
      images: [
        {
          filename: "boca_11_01",
          zIndex: 24
        }
      ]
    },
    {
      id: 263,
      name: "Lips 11",
      partTypeId: 9,
      colorId: 34,
      images: [
        {
          filename: "boca_11_02",
          zIndex: 24
        }
      ]
    },
    {
      id: 264,
      name: "Lips 11",
      partTypeId: 9,
      colorId: 35,
      images: [
        {
          filename: "boca_11_03",
          zIndex: 24
        }
      ]
    },
    {
      id: 265,
      name: "Lips 11",
      partTypeId: 9,
      colorId: 36,
      images: [
        {
          filename: "boca_11_04",
          zIndex: 24
        }
      ]
    },
    {
      id: 266,
      name: "Lips 11",
      partTypeId: 9,
      colorId: 37,
      images: [
        {
          filename: "boca_11_05",
          zIndex: 24
        }
      ]
    },
    {
      id: 267,
      name: "Lips 11",
      partTypeId: 9,
      colorId: 38,
      images: [
        {
          filename: "boca_11_06",
          zIndex: 24
        }
      ]
    },
    {
      id: 268,
      name: "Eyebrows 1",
      partTypeId: 14,
      colorId: 13,
      images: [
        {
          filename: "cejas_01_01",
          zIndex: 27
        }
      ]
    },
    {
      id: 269,
      name: "Eyebrows 1",
      partTypeId: 14,
      colorId: 14,
      images: [
        {
          filename: "cejas_01_02",
          zIndex: 27
        }
      ]
    },
    {
      id: 270,
      name: "Eyebrows 1",
      partTypeId: 14,
      colorId: 15,
      images: [
        {
          filename: "cejas_01_03",
          zIndex: 27
        }
      ]
    },
    {
      id: 271,
      name: "Eyebrows 1",
      partTypeId: 14,
      colorId: 16,
      images: [
        {
          filename: "cejas_01_04",
          zIndex: 27
        }
      ]
    },
    {
      id: 272,
      name: "Eyebrows 1",
      partTypeId: 14,
      colorId: 17,
      images: [
        {
          filename: "cejas_01_05",
          zIndex: 27
        }
      ]
    },
    {
      id: 273,
      name: "Eyebrows 1",
      partTypeId: 14,
      colorId: 18,
      images: [
        {
          filename: "cejas_01_06",
          zIndex: 27
        }
      ]
    },
    {
      id: 274,
      name: "Eyebrows 1",
      partTypeId: 14,
      colorId: 19,
      images: [
        {
          filename: "cejas_01_07",
          zIndex: 27
        }
      ]
    },
    {
      id: 275,
      name: "Eyebrows 1",
      partTypeId: 14,
      colorId: 20,
      images: [
        {
          filename: "cejas_01_08",
          zIndex: 27
        }
      ]
    },
    {
      id: 276,
      name: "Eyebrows 1",
      partTypeId: 14,
      colorId: 21,
      images: [
        {
          filename: "cejas_01_09",
          zIndex: 27
        }
      ]
    },
    {
      id: 277,
      name: "Eyebrows 1",
      partTypeId: 14,
      colorId: 22,
      images: [
        {
          filename: "cejas_01_10",
          zIndex: 27
        }
      ]
    },
    {
      id: 278,
      name: "Eyebrows 1",
      partTypeId: 14,
      colorId: 23,
      images: [
        {
          filename: "cejas_01_11",
          zIndex: 27
        }
      ]
    },
    {
      id: 279,
      name: "Eyebrows 1",
      partTypeId: 14,
      colorId: 24,
      images: [
        {
          filename: "cejas_01_12",
          zIndex: 27
        }
      ]
    },
    {
      id: 280,
      name: "Eyebrows 2",
      partTypeId: 14,
      colorId: 13,
      images: [
        {
          filename: "cejas_02_01",
          zIndex: 27
        }
      ]
    },
    {
      id: 281,
      name: "Eyebrows 2",
      partTypeId: 14,
      colorId: 14,
      images: [
        {
          filename: "cejas_02_02",
          zIndex: 27
        }
      ]
    },
    {
      id: 282,
      name: "Eyebrows 2",
      partTypeId: 14,
      colorId: 15,
      images: [
        {
          filename: "cejas_02_03",
          zIndex: 27
        }
      ]
    },
    {
      id: 283,
      name: "Eyebrows 2",
      partTypeId: 14,
      colorId: 16,
      images: [
        {
          filename: "cejas_02_04",
          zIndex: 27
        }
      ]
    },
    {
      id: 284,
      name: "Eyebrows 2",
      partTypeId: 14,
      colorId: 17,
      images: [
        {
          filename: "cejas_02_05",
          zIndex: 27
        }
      ]
    },
    {
      id: 285,
      name: "Eyebrows 2",
      partTypeId: 14,
      colorId: 18,
      images: [
        {
          filename: "cejas_02_06",
          zIndex: 27
        }
      ]
    },
    {
      id: 286,
      name: "Eyebrows 2",
      partTypeId: 14,
      colorId: 19,
      images: [
        {
          filename: "cejas_02_07",
          zIndex: 27
        }
      ]
    },
    {
      id: 287,
      name: "Eyebrows 2",
      partTypeId: 14,
      colorId: 20,
      images: [
        {
          filename: "cejas_02_08",
          zIndex: 27
        }
      ]
    },
    {
      id: 288,
      name: "Eyebrows 2",
      partTypeId: 14,
      colorId: 21,
      images: [
        {
          filename: "cejas_02_09",
          zIndex: 27
        }
      ]
    },
    {
      id: 289,
      name: "Eyebrows 2",
      partTypeId: 14,
      colorId: 22,
      images: [
        {
          filename: "cejas_02_10",
          zIndex: 27
        }
      ]
    },
    {
      id: 290,
      name: "Eyebrows 2",
      partTypeId: 14,
      colorId: 23,
      images: [
        {
          filename: "cejas_02_11",
          zIndex: 27
        }
      ]
    },
    {
      id: 291,
      name: "Eyebrows 2",
      partTypeId: 14,
      colorId: 24,
      images: [
        {
          filename: "cejas_02_12",
          zIndex: 27
        }
      ]
    },
    {
      id: 292,
      name: "Eyebrows 3",
      partTypeId: 14,
      colorId: 13,
      images: [
        {
          filename: "cejas_03_01",
          zIndex: 27
        }
      ]
    },
    {
      id: 293,
      name: "Eyebrows 3",
      partTypeId: 14,
      colorId: 14,
      images: [
        {
          filename: "cejas_03_02",
          zIndex: 27
        }
      ]
    },
    {
      id: 294,
      name: "Eyebrows 3",
      partTypeId: 14,
      colorId: 15,
      images: [
        {
          filename: "cejas_03_03",
          zIndex: 27
        }
      ]
    },
    {
      id: 295,
      name: "Eyebrows 3",
      partTypeId: 14,
      colorId: 16,
      images: [
        {
          filename: "cejas_03_04",
          zIndex: 27
        }
      ]
    },
    {
      id: 296,
      name: "Eyebrows 3",
      partTypeId: 14,
      colorId: 17,
      images: [
        {
          filename: "cejas_03_05",
          zIndex: 27
        }
      ]
    },
    {
      id: 297,
      name: "Eyebrows 3",
      partTypeId: 14,
      colorId: 18,
      images: [
        {
          filename: "cejas_03_06",
          zIndex: 27
        }
      ]
    },
    {
      id: 298,
      name: "Eyebrows 3",
      partTypeId: 14,
      colorId: 19,
      images: [
        {
          filename: "cejas_03_07",
          zIndex: 27
        }
      ]
    },
    {
      id: 299,
      name: "Eyebrows 3",
      partTypeId: 14,
      colorId: 20,
      images: [
        {
          filename: "cejas_03_08",
          zIndex: 27
        }
      ]
    },
    {
      id: 300,
      name: "Eyebrows 3",
      partTypeId: 14,
      colorId: 21,
      images: [
        {
          filename: "cejas_03_09",
          zIndex: 27
        }
      ]
    },
    {
      id: 301,
      name: "Eyebrows 3",
      partTypeId: 14,
      colorId: 22,
      images: [
        {
          filename: "cejas_03_10",
          zIndex: 27
        }
      ]
    },
    {
      id: 302,
      name: "Eyebrows 3",
      partTypeId: 14,
      colorId: 23,
      images: [
        {
          filename: "cejas_03_11",
          zIndex: 27
        }
      ]
    },
    {
      id: 303,
      name: "Eyebrows 3",
      partTypeId: 14,
      colorId: 24,
      images: [
        {
          filename: "cejas_03_12",
          zIndex: 27
        }
      ]
    },
    {
      id: 304,
      name: "Eyebrows 4",
      partTypeId: 14,
      colorId: 13,
      images: [
        {
          filename: "cejas_04_01",
          zIndex: 27
        }
      ]
    },
    {
      id: 305,
      name: "Eyebrows 4",
      partTypeId: 14,
      colorId: 14,
      images: [
        {
          filename: "cejas_04_02",
          zIndex: 27
        }
      ]
    },
    {
      id: 306,
      name: "Eyebrows 4",
      partTypeId: 14,
      colorId: 15,
      images: [
        {
          filename: "cejas_04_03",
          zIndex: 27
        }
      ]
    },
    {
      id: 307,
      name: "Eyebrows 4",
      partTypeId: 14,
      colorId: 16,
      images: [
        {
          filename: "cejas_04_04",
          zIndex: 27
        }
      ]
    },
    {
      id: 308,
      name: "Eyebrows 4",
      partTypeId: 14,
      colorId: 17,
      images: [
        {
          filename: "cejas_04_05",
          zIndex: 27
        }
      ]
    },
    {
      id: 309,
      name: "Eyebrows 4",
      partTypeId: 14,
      colorId: 18,
      images: [
        {
          filename: "cejas_04_06",
          zIndex: 27
        }
      ]
    },
    {
      id: 310,
      name: "Eyebrows 4",
      partTypeId: 14,
      colorId: 19,
      images: [
        {
          filename: "cejas_04_07",
          zIndex: 27
        }
      ]
    },
    {
      id: 311,
      name: "Eyebrows 4",
      partTypeId: 14,
      colorId: 20,
      images: [
        {
          filename: "cejas_04_08",
          zIndex: 27
        }
      ]
    },
    {
      id: 312,
      name: "Eyebrows 4",
      partTypeId: 14,
      colorId: 21,
      images: [
        {
          filename: "cejas_04_09",
          zIndex: 27
        }
      ]
    },
    {
      id: 313,
      name: "Eyebrows 4",
      partTypeId: 14,
      colorId: 22,
      images: [
        {
          filename: "cejas_04_10",
          zIndex: 27
        }
      ]
    },
    {
      id: 314,
      name: "Eyebrows 4",
      partTypeId: 14,
      colorId: 23,
      images: [
        {
          filename: "cejas_04_11",
          zIndex: 27
        }
      ]
    },
    {
      id: 315,
      name: "Eyebrows 4",
      partTypeId: 14,
      colorId: 24,
      images: [
        {
          filename: "cejas_04_12",
          zIndex: 27
        }
      ]
    },
    {
      id: 316,
      name: "Eyebrows 5",
      partTypeId: 14,
      colorId: 13,
      images: [
        {
          filename: "cejas_05_01",
          zIndex: 27
        }
      ]
    },
    {
      id: 317,
      name: "Eyebrows 5",
      partTypeId: 14,
      colorId: 14,
      images: [
        {
          filename: "cejas_05_02",
          zIndex: 27
        }
      ]
    },
    {
      id: 318,
      name: "Eyebrows 5",
      partTypeId: 14,
      colorId: 15,
      images: [
        {
          filename: "cejas_05_03",
          zIndex: 27
        }
      ]
    },
    {
      id: 319,
      name: "Eyebrows 5",
      partTypeId: 14,
      colorId: 16,
      images: [
        {
          filename: "cejas_05_04",
          zIndex: 27
        }
      ]
    },
    {
      id: 320,
      name: "Eyebrows 5",
      partTypeId: 14,
      colorId: 17,
      images: [
        {
          filename: "cejas_05_05",
          zIndex: 27
        }
      ]
    },
    {
      id: 321,
      name: "Eyebrows 5",
      partTypeId: 14,
      colorId: 18,
      images: [
        {
          filename: "cejas_05_06",
          zIndex: 27
        }
      ]
    },
    {
      id: 322,
      name: "Eyebrows 5",
      partTypeId: 14,
      colorId: 19,
      images: [
        {
          filename: "cejas_05_07",
          zIndex: 27
        }
      ]
    },
    {
      id: 323,
      name: "Eyebrows 5",
      partTypeId: 14,
      colorId: 20,
      images: [
        {
          filename: "cejas_05_08",
          zIndex: 27
        }
      ]
    },
    {
      id: 324,
      name: "Eyebrows 5",
      partTypeId: 14,
      colorId: 21,
      images: [
        {
          filename: "cejas_05_09",
          zIndex: 27
        }
      ]
    },
    {
      id: 325,
      name: "Eyebrows 5",
      partTypeId: 14,
      colorId: 22,
      images: [
        {
          filename: "cejas_05_10",
          zIndex: 27
        }
      ]
    },
    {
      id: 326,
      name: "Eyebrows 5",
      partTypeId: 14,
      colorId: 23,
      images: [
        {
          filename: "cejas_05_11",
          zIndex: 27
        }
      ]
    },
    {
      id: 327,
      name: "Eyebrows 5",
      partTypeId: 14,
      colorId: 24,
      images: [
        {
          filename: "cejas_05_12",
          zIndex: 27
        }
      ]
    },
    {
      id: 328,
      name: "Eyebrows 6",
      partTypeId: 14,
      colorId: 25,
      images: [
        {
          filename: "cejas_06",
          zIndex: 27
        }
      ]
    },
    {
      id: 329,
      name: "Eyebrows 7",
      partTypeId: 14,
      colorId: 25,
      images: [
        {
          filename: "cejas_07",
          zIndex: 27
        }
      ]
    },
    {
      id: 330,
      name: "eyebrows8",
      partTypeId: 14,
      colorId: 13,
      images: [
        {
          filename: "cejas_08_01",
          zIndex: 27
        }
      ]
    },
    {
      id: 331,
      name: "eyebrows8",
      partTypeId: 14,
      colorId: 14,
      images: [
        {
          filename: "cejas_08_02",
          zIndex: 27
        }
      ]
    },
    {
      id: 332,
      name: "eyebrows8",
      partTypeId: 14,
      colorId: 15,
      images: [
        {
          filename: "cejas_08_03",
          zIndex: 27
        }
      ]
    },
    {
      id: 333,
      name: "Eyebrows 8",
      partTypeId: 14,
      colorId: 16,
      images: [
        {
          filename: "cejas_08_04",
          zIndex: 27
        }
      ]
    },
    {
      id: 334,
      name: "Eyebrows 8",
      partTypeId: 14,
      colorId: 17,
      images: [
        {
          filename: "cejas_08_05",
          zIndex: 27
        }
      ]
    },
    {
      id: 335,
      name: "Eyebrows 8",
      partTypeId: 14,
      colorId: 18,
      images: [
        {
          filename: "cejas_08_06",
          zIndex: 27
        }
      ]
    },
    {
      id: 336,
      name: "Eyebrows 8",
      partTypeId: 14,
      colorId: 19,
      images: [
        {
          filename: "cejas_08_07",
          zIndex: 27
        }
      ]
    },
    {
      id: 337,
      name: "Eyebrows 8",
      partTypeId: 14,
      colorId: 20,
      images: [
        {
          filename: "cejas_08_08",
          zIndex: 27
        }
      ]
    },
    {
      id: 338,
      name: "Eyebrows 8",
      partTypeId: 14,
      colorId: 21,
      images: [
        {
          filename: "cejas_08_09",
          zIndex: 27
        }
      ]
    },
    {
      id: 339,
      name: "Eyebrows 8",
      partTypeId: 14,
      colorId: 22,
      images: [
        {
          filename: "cejas_08_10",
          zIndex: 27
        }
      ]
    },
    {
      id: 340,
      name: "Eyebrows 8",
      partTypeId: 14,
      colorId: 23,
      images: [
        {
          filename: "cejas_08_11",
          zIndex: 27
        }
      ]
    },
    {
      id: 341,
      name: "Eyebrows 8",
      partTypeId: 14,
      colorId: 24,
      images: [
        {
          filename: "cejas_08_12",
          zIndex: 27
        }
      ]
    },
    {
      id: 342,
      name: "Eyebrows 9",
      partTypeId: 14,
      colorId: 25,
      images: [
        {
          filename: "cejas_09",
          zIndex: 27
        }
      ]
    },
    {
      id: 343,
      name: "Marks Lines",
      partTypeId: 13,
      colorId: 25,
      images: [
        {
          filename: "marcas_01",
          zIndex: 22
        }
      ]
    },
    {
      id: 344,
      name: "Marks Scar 1",
      partTypeId: 13,
      colorId: 25,
      images: [
        {
          filename: "marcas_02",
          zIndex: 22
        }
      ]
    },
    {
      id: 345,
      name: "Marks Scar 2",
      partTypeId: 13,
      colorId: 25,
      images: [
        {
          filename: "marcas_03",
          zIndex: 22
        }
      ]
    },
    {
      id: 346,
      name: "Marks Scar 3",
      partTypeId: 13,
      colorId: 25,
      images: [
        {
          filename: "marcas_04",
          zIndex: 22
        }
      ]
    },
    {
      id: 347,
      name: "Marks Dark Eyes",
      partTypeId: 13,
      colorId: 25,
      images: [
        {
          filename: "marcas_05",
          zIndex: 22
        }
      ]
    },
    {
      id: 348,
      name: "Hair 1",
      partTypeId: 5,
      colorId: 13,
      images: [
        {
          filename: "pelo_01_01",
          zIndex: 29
        }
      ]
    },
    {
      id: 349,
      name: "Hair 1",
      partTypeId: 5,
      colorId: 14,
      images: [
        {
          filename: "pelo_01_02",
          zIndex: 29
        }
      ]
    },
    {
      id: 350,
      name: "Hair 1",
      partTypeId: 5,
      colorId: 15,
      images: [
        {
          filename: "pelo_01_03",
          zIndex: 29
        }
      ]
    },
    {
      id: 351,
      name: "Hair 1",
      partTypeId: 5,
      colorId: 16,
      images: [
        {
          filename: "pelo_01_04",
          zIndex: 29
        }
      ]
    },
    {
      id: 352,
      name: "Hair 1",
      partTypeId: 5,
      colorId: 17,
      images: [
        {
          filename: "pelo_01_05",
          zIndex: 29
        }
      ]
    },
    {
      id: 353,
      name: "Hair 1",
      partTypeId: 5,
      colorId: 18,
      images: [
        {
          filename: "pelo_01_06",
          zIndex: 29
        }
      ]
    },
    {
      id: 354,
      name: "Hair 1",
      partTypeId: 5,
      colorId: 19,
      images: [
        {
          filename: "pelo_01_07",
          zIndex: 29
        }
      ]
    },
    {
      id: 355,
      name: "Hair 1",
      partTypeId: 5,
      colorId: 20,
      images: [
        {
          filename: "pelo_01_08",
          zIndex: 29
        }
      ]
    },
    {
      id: 356,
      name: "Hair 1",
      partTypeId: 5,
      colorId: 21,
      images: [
        {
          filename: "pelo_01_09",
          zIndex: 29
        }
      ]
    },
    {
      id: 357,
      name: "Hair 1",
      partTypeId: 5,
      colorId: 22,
      images: [
        {
          filename: "pelo_01_10",
          zIndex: 29
        }
      ]
    },
    {
      id: 358,
      name: "Hair 1",
      partTypeId: 5,
      colorId: 23,
      images: [
        {
          filename: "pelo_01_11",
          zIndex: 29
        }
      ]
    },
    {
      id: 359,
      name: "Hair 1",
      partTypeId: 5,
      colorId: 24,
      images: [
        {
          filename: "pelo_01_12",
          zIndex: 29
        }
      ]
    },
    {
      id: 360,
      name: "Hair 2",
      partTypeId: 5,
      colorId: 13,
      images: [
        {
          filename: "pelo_02_01",
          zIndex: 29
        }
      ]
    },
    {
      id: 361,
      name: "Hair 2",
      partTypeId: 5,
      colorId: 14,
      images: [
        {
          filename: "pelo_02_02",
          zIndex: 29
        }
      ]
    },
    {
      id: 362,
      name: "Hair 2",
      partTypeId: 5,
      colorId: 15,
      images: [
        {
          filename: "pelo_02_03",
          zIndex: 29
        }
      ]
    },
    {
      id: 363,
      name: "Hair 2",
      partTypeId: 5,
      colorId: 16,
      images: [
        {
          filename: "pelo_02_04",
          zIndex: 29
        }
      ]
    },
    {
      id: 364,
      name: "Hair 2",
      partTypeId: 5,
      colorId: 17,
      images: [
        {
          filename: "pelo_02_05",
          zIndex: 29
        }
      ]
    },
    {
      id: 365,
      name: "Hair 2",
      partTypeId: 5,
      colorId: 18,
      images: [
        {
          filename: "pelo_02_06",
          zIndex: 29
        }
      ]
    },
    {
      id: 366,
      name: "Hair 2",
      partTypeId: 5,
      colorId: 19,
      images: [
        {
          filename: "pelo_02_07",
          zIndex: 29
        }
      ]
    },
    {
      id: 367,
      name: "Hair 2",
      partTypeId: 5,
      colorId: 20,
      images: [
        {
          filename: "pelo_02_08",
          zIndex: 29
        }
      ]
    },
    {
      id: 368,
      name: "Hair 2",
      partTypeId: 5,
      colorId: 21,
      images: [
        {
          filename: "pelo_02_09",
          zIndex: 29
        }
      ]
    },
    {
      id: 369,
      name: "Hair 2",
      partTypeId: 5,
      colorId: 22,
      images: [
        {
          filename: "pelo_02_10",
          zIndex: 29
        }
      ]
    },
    {
      id: 370,
      name: "Hair 2",
      partTypeId: 5,
      colorId: 23,
      images: [
        {
          filename: "pelo_02_11",
          zIndex: 29
        }
      ]
    },
    {
      id: 371,
      name: "Hair 2",
      partTypeId: 5,
      colorId: 24,
      images: [
        {
          filename: "pelo_02_12",
          zIndex: 29
        }
      ]
    },
    {
      id: 372,
      name: "Hair 3",
      partTypeId: 5,
      colorId: 13,
      images: [
        {
          filename: "pelo_03_01",
          zIndex: 29
        }
      ]
    },
    {
      id: 373,
      name: "Hair 3",
      partTypeId: 5,
      colorId: 14,
      images: [
        {
          filename: "pelo_03_02",
          zIndex: 29
        }
      ]
    },
    {
      id: 374,
      name: "Hair 3",
      partTypeId: 5,
      colorId: 15,
      images: [
        {
          filename: "pelo_03_03",
          zIndex: 29
        }
      ]
    },
    {
      id: 375,
      name: "Hair 3",
      partTypeId: 5,
      colorId: 16,
      images: [
        {
          filename: "pelo_03_04",
          zIndex: 29
        }
      ]
    },
    {
      id: 376,
      name: "Hair 3",
      partTypeId: 5,
      colorId: 17,
      images: [
        {
          filename: "pelo_03_05",
          zIndex: 29
        }
      ]
    },
    {
      id: 377,
      name: "Hair 3",
      partTypeId: 5,
      colorId: 18,
      images: [
        {
          filename: "pelo_03_06",
          zIndex: 29
        }
      ]
    },
    {
      id: 378,
      name: "Hair 3",
      partTypeId: 5,
      colorId: 19,
      images: [
        {
          filename: "pelo_03_07",
          zIndex: 29
        }
      ]
    },
    {
      id: 379,
      name: "Hair 3",
      partTypeId: 5,
      colorId: 20,
      images: [
        {
          filename: "pelo_03_08",
          zIndex: 29
        }
      ]
    },
    {
      id: 380,
      name: "Hair 3",
      partTypeId: 5,
      colorId: 21,
      images: [
        {
          filename: "pelo_03_09",
          zIndex: 29
        }
      ]
    },
    {
      id: 381,
      name: "Hair 3",
      partTypeId: 5,
      colorId: 22,
      images: [
        {
          filename: "pelo_03_10",
          zIndex: 29
        }
      ]
    },
    {
      id: 382,
      name: "Hair 3",
      partTypeId: 5,
      colorId: 23,
      images: [
        {
          filename: "pelo_03_11",
          zIndex: 29
        }
      ]
    },
    {
      id: 383,
      name: "Hair 3",
      partTypeId: 5,
      colorId: 24,
      images: [
        {
          filename: "pelo_03_12",
          zIndex: 29
        }
      ]
    },
    {
      id: 384,
      name: "Hair 4",
      partTypeId: 5,
      colorId: 13,
      images: [
        {
          filename: "pelo_04_01",
          zIndex: 29
        }
      ]
    },
    {
      id: 385,
      name: "Hair 4",
      partTypeId: 5,
      colorId: 14,
      images: [
        {
          filename: "pelo_04_02",
          zIndex: 29
        }
      ]
    },
    {
      id: 386,
      name: "Hair 4",
      partTypeId: 5,
      colorId: 15,
      images: [
        {
          filename: "pelo_04_03",
          zIndex: 29
        }
      ]
    },
    {
      id: 387,
      name: "Hair 4",
      partTypeId: 5,
      colorId: 16,
      images: [
        {
          filename: "pelo_04_04",
          zIndex: 29
        }
      ]
    },
    {
      id: 388,
      name: "Hair 4",
      partTypeId: 5,
      colorId: 17,
      images: [
        {
          filename: "pelo_04_05",
          zIndex: 29
        }
      ]
    },
    {
      id: 389,
      name: "Hair 4",
      partTypeId: 5,
      colorId: 18,
      images: [
        {
          filename: "pelo_04_06",
          zIndex: 29
        }
      ]
    },
    {
      id: 390,
      name: "Hair 4",
      partTypeId: 5,
      colorId: 19,
      images: [
        {
          filename: "pelo_04_07",
          zIndex: 29
        }
      ]
    },
    {
      id: 391,
      name: "Hair 4",
      partTypeId: 5,
      colorId: 20,
      images: [
        {
          filename: "pelo_04_08",
          zIndex: 29
        }
      ]
    },
    {
      id: 392,
      name: "Hair 4",
      partTypeId: 5,
      colorId: 21,
      images: [
        {
          filename: "pelo_04_09",
          zIndex: 29
        }
      ]
    },
    {
      id: 393,
      name: "Hair 4",
      partTypeId: 5,
      colorId: 22,
      images: [
        {
          filename: "pelo_04_10",
          zIndex: 29
        }
      ]
    },
    {
      id: 394,
      name: "Hair 4",
      partTypeId: 5,
      colorId: 23,
      images: [
        {
          filename: "pelo_04_11",
          zIndex: 29
        }
      ]
    },
    {
      id: 395,
      name: "Hair 4",
      partTypeId: 5,
      colorId: 24,
      images: [
        {
          filename: "pelo_04_12",
          zIndex: 29
        }
      ]
    },
    {
      id: 396,
      name: "Hair 5",
      partTypeId: 5,
      colorId: 13,
      images: [
        {
          filename: "pelo_05_01",
          zIndex: 29
        }
      ]
    },
    {
      id: 397,
      name: "Hair 5",
      partTypeId: 5,
      colorId: 14,
      images: [
        {
          filename: "pelo_05_02",
          zIndex: 29
        }
      ]
    },
    {
      id: 398,
      name: "Hair 5",
      partTypeId: 5,
      colorId: 15,
      images: [
        {
          filename: "pelo_05_03",
          zIndex: 29
        }
      ]
    },
    {
      id: 399,
      name: "Hair 5",
      partTypeId: 5,
      colorId: 16,
      images: [
        {
          filename: "pelo_05_04",
          zIndex: 29
        }
      ]
    },
    {
      id: 400,
      name: "Hair 5",
      partTypeId: 5,
      colorId: 17,
      images: [
        {
          filename: "pelo_05_05",
          zIndex: 29
        }
      ]
    },
    {
      id: 401,
      name: "Hair 5",
      partTypeId: 5,
      colorId: 18,
      images: [
        {
          filename: "pelo_05_06",
          zIndex: 29
        }
      ]
    },
    {
      id: 402,
      name: "Hair 5",
      partTypeId: 5,
      colorId: 19,
      images: [
        {
          filename: "pelo_05_07",
          zIndex: 29
        }
      ]
    },
    {
      id: 403,
      name: "Hair 5",
      partTypeId: 5,
      colorId: 20,
      images: [
        {
          filename: "pelo_05_08",
          zIndex: 29
        }
      ]
    },
    {
      id: 404,
      name: "Hair 5",
      partTypeId: 5,
      colorId: 21,
      images: [
        {
          filename: "pelo_05_09",
          zIndex: 29
        }
      ]
    },
    {
      id: 405,
      name: "Hair 5",
      partTypeId: 5,
      colorId: 22,
      images: [
        {
          filename: "pelo_05_10",
          zIndex: 29
        }
      ]
    },
    {
      id: 406,
      name: "Hair 5",
      partTypeId: 5,
      colorId: 23,
      images: [
        {
          filename: "pelo_05_11",
          zIndex: 29
        }
      ]
    },
    {
      id: 407,
      name: "Hair 5",
      partTypeId: 5,
      colorId: 24,
      images: [
        {
          filename: "pelo_05_12",
          zIndex: 29
        }
      ]
    },
    {
      id: 408,
      name: "Hair 6",
      partTypeId: 5,
      colorId: 13,
      images: [
        {
          filename: "pelo_06_01",
          zIndex: 29
        }
      ]
    },
    {
      id: 409,
      name: "Hair 6",
      partTypeId: 5,
      colorId: 14,
      images: [
        {
          filename: "pelo_06_02",
          zIndex: 29
        }
      ]
    },
    {
      id: 410,
      name: "Hair 6",
      partTypeId: 5,
      colorId: 15,
      images: [
        {
          filename: "pelo_06_03",
          zIndex: 29
        }
      ]
    },
    {
      id: 411,
      name: "Hair 6",
      partTypeId: 5,
      colorId: 16,
      images: [
        {
          filename: "pelo_06_04",
          zIndex: 29
        }
      ]
    },
    {
      id: 412,
      name: "Hair 6",
      partTypeId: 5,
      colorId: 17,
      images: [
        {
          filename: "pelo_06_05",
          zIndex: 29
        }
      ]
    },
    {
      id: 413,
      name: "Hair 6",
      partTypeId: 5,
      colorId: 18,
      images: [
        {
          filename: "pelo_06_06",
          zIndex: 29
        }
      ]
    },
    {
      id: 414,
      name: "Hair 6",
      partTypeId: 5,
      colorId: 19,
      images: [
        {
          filename: "pelo_06_07",
          zIndex: 29
        }
      ]
    },
    {
      id: 415,
      name: "Hair 6",
      partTypeId: 5,
      colorId: 20,
      images: [
        {
          filename: "pelo_06_08",
          zIndex: 29
        }
      ]
    },
    {
      id: 416,
      name: "Hair 6",
      partTypeId: 5,
      colorId: 21,
      images: [
        {
          filename: "pelo_06_09",
          zIndex: 29
        }
      ]
    },
    {
      id: 417,
      name: "Hair 6",
      partTypeId: 5,
      colorId: 22,
      images: [
        {
          filename: "pelo_06_10",
          zIndex: 29
        }
      ]
    },
    {
      id: 418,
      name: "Hair 6",
      partTypeId: 5,
      colorId: 23,
      images: [
        {
          filename: "pelo_06_11",
          zIndex: 29
        }
      ]
    },
    {
      id: 419,
      name: "Hair 6",
      partTypeId: 5,
      colorId: 24,
      images: [
        {
          filename: "pelo_06_12",
          zIndex: 29
        }
      ]
    },
    {
      id: 420,
      name: "Hair 7",
      partTypeId: 5,
      colorId: 13,
      images: [
        {
          filename: "pelo_07_01",
          zIndex: 29
        }
      ]
    },
    {
      id: 421,
      name: "Hair 7",
      partTypeId: 5,
      colorId: 14,
      images: [
        {
          filename: "pelo_07_02",
          zIndex: 29
        }
      ]
    },
    {
      id: 422,
      name: "Hair 7",
      partTypeId: 5,
      colorId: 15,
      images: [
        {
          filename: "pelo_07_03",
          zIndex: 29
        }
      ]
    },
    {
      id: 423,
      name: "Hair 7",
      partTypeId: 5,
      colorId: 16,
      images: [
        {
          filename: "pelo_07_04",
          zIndex: 29
        }
      ]
    },
    {
      id: 424,
      name: "Hair 7",
      partTypeId: 5,
      colorId: 17,
      images: [
        {
          filename: "pelo_07_05",
          zIndex: 29
        }
      ]
    },
    {
      id: 425,
      name: "Hair 7",
      partTypeId: 5,
      colorId: 18,
      images: [
        {
          filename: "pelo_07_06",
          zIndex: 29
        }
      ]
    },
    {
      id: 426,
      name: "Hair 7",
      partTypeId: 5,
      colorId: 19,
      images: [
        {
          filename: "pelo_07_07",
          zIndex: 29
        }
      ]
    },
    {
      id: 427,
      name: "Hair 7",
      partTypeId: 5,
      colorId: 20,
      images: [
        {
          filename: "pelo_07_08",
          zIndex: 29
        }
      ]
    },
    {
      id: 428,
      name: "Hair 7",
      partTypeId: 5,
      colorId: 21,
      images: [
        {
          filename: "pelo_07_09",
          zIndex: 29
        }
      ]
    },
    {
      id: 429,
      name: "Hair 7",
      partTypeId: 5,
      colorId: 22,
      images: [
        {
          filename: "pelo_07_10",
          zIndex: 29
        }
      ]
    },
    {
      id: 430,
      name: "Hair 7",
      partTypeId: 5,
      colorId: 23,
      images: [
        {
          filename: "pelo_07_11",
          zIndex: 29
        }
      ]
    },
    {
      id: 431,
      name: "Hair 7",
      partTypeId: 5,
      colorId: 24,
      images: [
        {
          filename: "pelo_07_12",
          zIndex: 29
        }
      ]
    },
    {
      id: 432,
      name: "Hair 8",
      partTypeId: 5,
      colorId: 13,
      images: [
        {
          filename: "pelo_08_01",
          zIndex: 29
        }
      ]
    },
    {
      id: 433,
      name: "Hair 8",
      partTypeId: 5,
      colorId: 14,
      images: [
        {
          filename: "pelo_08_02",
          zIndex: 29
        }
      ]
    },
    {
      id: 434,
      name: "Hair 8",
      partTypeId: 5,
      colorId: 15,
      images: [
        {
          filename: "pelo_08_03",
          zIndex: 29
        }
      ]
    },
    {
      id: 435,
      name: "Hair 8",
      partTypeId: 5,
      colorId: 16,
      images: [
        {
          filename: "pelo_08_04",
          zIndex: 29
        }
      ]
    },
    {
      id: 436,
      name: "Hair 8",
      partTypeId: 5,
      colorId: 17,
      images: [
        {
          filename: "pelo_08_05",
          zIndex: 29
        }
      ]
    },
    {
      id: 437,
      name: "Hair 8",
      partTypeId: 5,
      colorId: 18,
      images: [
        {
          filename: "pelo_08_06",
          zIndex: 29
        }
      ]
    },
    {
      id: 438,
      name: "Hair 8",
      partTypeId: 5,
      colorId: 19,
      images: [
        {
          filename: "pelo_08_07",
          zIndex: 29
        }
      ]
    },
    {
      id: 439,
      name: "Hair 8",
      partTypeId: 5,
      colorId: 20,
      images: [
        {
          filename: "pelo_08_08",
          zIndex: 29
        }
      ]
    },
    {
      id: 440,
      name: "Hair 8",
      partTypeId: 5,
      colorId: 21,
      images: [
        {
          filename: "pelo_08_09",
          zIndex: 29
        }
      ]
    },
    {
      id: 441,
      name: "Hair 8",
      partTypeId: 5,
      colorId: 22,
      images: [
        {
          filename: "pelo_08_10",
          zIndex: 29
        }
      ]
    },
    {
      id: 442,
      name: "Hair 8",
      partTypeId: 5,
      colorId: 23,
      images: [
        {
          filename: "pelo_08_11",
          zIndex: 29
        }
      ]
    },
    {
      id: 443,
      name: "Hair 8",
      partTypeId: 5,
      colorId: 24,
      images: [
        {
          filename: "pelo_08_12",
          zIndex: 29
        }
      ]
    },
    {
      id: 444,
      name: "Hair 9",
      partTypeId: 5,
      colorId: 13,
      images: [
        {
          filename: "pelo_09_01",
          zIndex: 29
        }
      ]
    },
    {
      id: 445,
      name: "Hair 9",
      partTypeId: 5,
      colorId: 14,
      images: [
        {
          filename: "pelo_09_02",
          zIndex: 29
        }
      ]
    },
    {
      id: 446,
      name: "Hair 9",
      partTypeId: 5,
      colorId: 15,
      images: [
        {
          filename: "pelo_09_03",
          zIndex: 29
        }
      ]
    },
    {
      id: 447,
      name: "Hair 9",
      partTypeId: 5,
      colorId: 16,
      images: [
        {
          filename: "pelo_09_04",
          zIndex: 29
        }
      ]
    },
    {
      id: 448,
      name: "Hair 9",
      partTypeId: 5,
      colorId: 17,
      images: [
        {
          filename: "pelo_09_05",
          zIndex: 29
        }
      ]
    },
    {
      id: 449,
      name: "Hair 9",
      partTypeId: 5,
      colorId: 18,
      images: [
        {
          filename: "pelo_09_06",
          zIndex: 29
        }
      ]
    },
    {
      id: 450,
      name: "Hair 9",
      partTypeId: 5,
      colorId: 19,
      images: [
        {
          filename: "pelo_09_07",
          zIndex: 29
        }
      ]
    },
    {
      id: 451,
      name: "Hair 9",
      partTypeId: 5,
      colorId: 20,
      images: [
        {
          filename: "pelo_09_08",
          zIndex: 29
        }
      ]
    },
    {
      id: 452,
      name: "Hair 9",
      partTypeId: 5,
      colorId: 21,
      images: [
        {
          filename: "pelo_09_09",
          zIndex: 29
        }
      ]
    },
    {
      id: 453,
      name: "Hair 9",
      partTypeId: 5,
      colorId: 22,
      images: [
        {
          filename: "pelo_09_10",
          zIndex: 29
        }
      ]
    },
    {
      id: 454,
      name: "Hair 9",
      partTypeId: 5,
      colorId: 23,
      images: [
        {
          filename: "pelo_09_11",
          zIndex: 29
        }
      ]
    },
    {
      id: 455,
      name: "Hair 9",
      partTypeId: 5,
      colorId: 24,
      images: [
        {
          filename: "pelo_09_12",
          zIndex: 29
        }
      ]
    },
    {
      id: 456,
      name: "Hair 10",
      partTypeId: 5,
      colorId: 13,
      images: [
        {
          filename: "pelo_10_01",
          zIndex: 29
        }
      ]
    },
    {
      id: 457,
      name: "Hair 10",
      partTypeId: 5,
      colorId: 14,
      images: [
        {
          filename: "pelo_10_02",
          zIndex: 29
        }
      ]
    },
    {
      id: 458,
      name: "Hair 10",
      partTypeId: 5,
      colorId: 15,
      images: [
        {
          filename: "pelo_10_03",
          zIndex: 29
        }
      ]
    },
    {
      id: 459,
      name: "Hair 10",
      partTypeId: 5,
      colorId: 16,
      images: [
        {
          filename: "pelo_10_04",
          zIndex: 29
        }
      ]
    },
    {
      id: 460,
      name: "Hair 10",
      partTypeId: 5,
      colorId: 17,
      images: [
        {
          filename: "pelo_10_05",
          zIndex: 29
        }
      ]
    },
    {
      id: 461,
      name: "Hair 10",
      partTypeId: 5,
      colorId: 18,
      images: [
        {
          filename: "pelo_10_06",
          zIndex: 29
        }
      ]
    },
    {
      id: 462,
      name: "Hair 10",
      partTypeId: 5,
      colorId: 19,
      images: [
        {
          filename: "pelo_10_07",
          zIndex: 29
        }
      ]
    },
    {
      id: 463,
      name: "Hair 10",
      partTypeId: 5,
      colorId: 20,
      images: [
        {
          filename: "pelo_10_08",
          zIndex: 29
        }
      ]
    },
    {
      id: 464,
      name: "Hair 10",
      partTypeId: 5,
      colorId: 21,
      images: [
        {
          filename: "pelo_10_09",
          zIndex: 29
        }
      ]
    },
    {
      id: 465,
      name: "Hair 10",
      partTypeId: 5,
      colorId: 22,
      images: [
        {
          filename: "pelo_10_10",
          zIndex: 29
        }
      ]
    },
    {
      id: 466,
      name: "Hair 10",
      partTypeId: 5,
      colorId: 23,
      images: [
        {
          filename: "pelo_10_11",
          zIndex: 29
        }
      ]
    },
    {
      id: 467,
      name: "Hair 10",
      partTypeId: 5,
      colorId: 24,
      images: [
        {
          filename: "pelo_10_12",
          zIndex: 29
        }
      ]
    },
    {
      id: 468,
      name: "Hair 11",
      partTypeId: 5,
      colorId: 13,
      images: [
        {
          filename: "pelo_11_01",
          zIndex: 29
        }
      ]
    },
    {
      id: 469,
      name: "Hair 11",
      partTypeId: 5,
      colorId: 14,
      images: [
        {
          filename: "pelo_11_02",
          zIndex: 29
        }
      ]
    },
    {
      id: 470,
      name: "Hair 11",
      partTypeId: 5,
      colorId: 15,
      images: [
        {
          filename: "pelo_11_03",
          zIndex: 29
        }
      ]
    },
    {
      id: 471,
      name: "Hair 11",
      partTypeId: 5,
      colorId: 16,
      images: [
        {
          filename: "pelo_11_04",
          zIndex: 29
        }
      ]
    },
    {
      id: 472,
      name: "Hair 11",
      partTypeId: 5,
      colorId: 17,
      images: [
        {
          filename: "pelo_11_05",
          zIndex: 29
        }
      ]
    },
    {
      id: 473,
      name: "Hair 11",
      partTypeId: 5,
      colorId: 18,
      images: [
        {
          filename: "pelo_11_06",
          zIndex: 29
        }
      ]
    },
    {
      id: 474,
      name: "Hair 11",
      partTypeId: 5,
      colorId: 19,
      images: [
        {
          filename: "pelo_11_07",
          zIndex: 29
        }
      ]
    },
    {
      id: 475,
      name: "Hair 11",
      partTypeId: 5,
      colorId: 20,
      images: [
        {
          filename: "pelo_11_08",
          zIndex: 29
        }
      ]
    },
    {
      id: 476,
      name: "Hair 11",
      partTypeId: 5,
      colorId: 21,
      images: [
        {
          filename: "pelo_11_09",
          zIndex: 29
        }
      ]
    },
    {
      id: 477,
      name: "Hair 11",
      partTypeId: 5,
      colorId: 22,
      images: [
        {
          filename: "pelo_11_10",
          zIndex: 29
        }
      ]
    },
    {
      id: 478,
      name: "Hair 11",
      partTypeId: 5,
      colorId: 23,
      images: [
        {
          filename: "pelo_11_11",
          zIndex: 29
        }
      ]
    },
    {
      id: 479,
      name: "Hair 11",
      partTypeId: 5,
      colorId: 24,
      images: [
        {
          filename: "pelo_11_12",
          zIndex: 29
        }
      ]
    },
    {
      id: 480,
      name: "Hair 12",
      partTypeId: 5,
      colorId: 13,
      images: [
        {
          filename: "pelo_12_01",
          zIndex: 29
        }
      ]
    },
    {
      id: 481,
      name: "Hair 12",
      partTypeId: 5,
      colorId: 14,
      images: [
        {
          filename: "pelo_12_02",
          zIndex: 29
        }
      ]
    },
    {
      id: 482,
      name: "Hair 12",
      partTypeId: 5,
      colorId: 15,
      images: [
        {
          filename: "pelo_12_03",
          zIndex: 29
        }
      ]
    },
    {
      id: 483,
      name: "Hair 12",
      partTypeId: 5,
      colorId: 16,
      images: [
        {
          filename: "pelo_12_04",
          zIndex: 29
        }
      ]
    },
    {
      id: 484,
      name: "Hair 12",
      partTypeId: 5,
      colorId: 17,
      images: [
        {
          filename: "pelo_12_05",
          zIndex: 29
        }
      ]
    },
    {
      id: 485,
      name: "Hair 12",
      partTypeId: 5,
      colorId: 18,
      images: [
        {
          filename: "pelo_12_06",
          zIndex: 29
        }
      ]
    },
    {
      id: 486,
      name: "Hair 12",
      partTypeId: 5,
      colorId: 19,
      images: [
        {
          filename: "pelo_12_07",
          zIndex: 29
        }
      ]
    },
    {
      id: 487,
      name: "Hair 12",
      partTypeId: 5,
      colorId: 20,
      images: [
        {
          filename: "pelo_12_08",
          zIndex: 29
        }
      ]
    },
    {
      id: 488,
      name: "Hair 12",
      partTypeId: 5,
      colorId: 21,
      images: [
        {
          filename: "pelo_12_09",
          zIndex: 29
        }
      ]
    },
    {
      id: 489,
      name: "Hair 12",
      partTypeId: 5,
      colorId: 22,
      images: [
        {
          filename: "pelo_12_10",
          zIndex: 29
        }
      ]
    },
    {
      id: 490,
      name: "Hair 12",
      partTypeId: 5,
      colorId: 23,
      images: [
        {
          filename: "pelo_12_11",
          zIndex: 29
        }
      ]
    },
    {
      id: 491,
      name: "Hair 12",
      partTypeId: 5,
      colorId: 24,
      images: [
        {
          filename: "pelo_12_12",
          zIndex: 29
        }
      ]
    },
    {
      id: 492,
      name: "Hair 13",
      partTypeId: 5,
      colorId: 13,
      images: [
        {
          filename: "pelo_13_01",
          zIndex: 29
        }
      ]
    },
    {
      id: 493,
      name: "Hair 13",
      partTypeId: 5,
      colorId: 14,
      images: [
        {
          filename: "pelo_13_02",
          zIndex: 29
        }
      ]
    },
    {
      id: 494,
      name: "Hair 13",
      partTypeId: 5,
      colorId: 15,
      images: [
        {
          filename: "pelo_13_03",
          zIndex: 29
        }
      ]
    },
    {
      id: 495,
      name: "Hair 13",
      partTypeId: 5,
      colorId: 16,
      images: [
        {
          filename: "pelo_13_04",
          zIndex: 29
        }
      ]
    },
    {
      id: 496,
      name: "Hair 13",
      partTypeId: 5,
      colorId: 17,
      images: [
        {
          filename: "pelo_13_05",
          zIndex: 29
        }
      ]
    },
    {
      id: 497,
      name: "Hair 13",
      partTypeId: 5,
      colorId: 18,
      images: [
        {
          filename: "pelo_13_06",
          zIndex: 29
        }
      ]
    },
    {
      id: 498,
      name: "Hair 13",
      partTypeId: 5,
      colorId: 19,
      images: [
        {
          filename: "pelo_13_07",
          zIndex: 29
        }
      ]
    },
    {
      id: 499,
      name: "Hair 13",
      partTypeId: 5,
      colorId: 20,
      images: [
        {
          filename: "pelo_13_08",
          zIndex: 29
        }
      ]
    },
    {
      id: 500,
      name: "Hair 13",
      partTypeId: 5,
      colorId: 21,
      images: [
        {
          filename: "pelo_13_09",
          zIndex: 29
        }
      ]
    },
    {
      id: 501,
      name: "Hair 13",
      partTypeId: 5,
      colorId: 22,
      images: [
        {
          filename: "pelo_13_10",
          zIndex: 29
        }
      ]
    },
    {
      id: 502,
      name: "Hair 13",
      partTypeId: 5,
      colorId: 23,
      images: [
        {
          filename: "pelo_13_11",
          zIndex: 29
        }
      ]
    },
    {
      id: 503,
      name: "Hair 13",
      partTypeId: 5,
      colorId: 24,
      images: [
        {
          filename: "pelo_13_12",
          zIndex: 29
        }
      ]
    },
    {
      id: 504,
      name: "Hair 14",
      partTypeId: 5,
      colorId: 13,
      images: [
        {
          filename: "pelo_14_01",
          zIndex: 29
        }
      ]
    },
    {
      id: 505,
      name: "Hair 14",
      partTypeId: 5,
      colorId: 14,
      images: [
        {
          filename: "pelo_14_02",
          zIndex: 29
        }
      ]
    },
    {
      id: 506,
      name: "Hair 14",
      partTypeId: 5,
      colorId: 15,
      images: [
        {
          filename: "pelo_14_03",
          zIndex: 29
        }
      ]
    },
    {
      id: 507,
      name: "Hair 14",
      partTypeId: 5,
      colorId: 16,
      images: [
        {
          filename: "pelo_14_04",
          zIndex: 29
        }
      ]
    },
    {
      id: 508,
      name: "Hair 14",
      partTypeId: 5,
      colorId: 17,
      images: [
        {
          filename: "pelo_14_05",
          zIndex: 29
        }
      ]
    },
    {
      id: 509,
      name: "Hair 14",
      partTypeId: 5,
      colorId: 18,
      images: [
        {
          filename: "pelo_14_06",
          zIndex: 29
        }
      ]
    },
    {
      id: 510,
      name: "Hair 14",
      partTypeId: 5,
      colorId: 19,
      images: [
        {
          filename: "pelo_14_07",
          zIndex: 29
        }
      ]
    },
    {
      id: 511,
      name: "Hair 14",
      partTypeId: 5,
      colorId: 20,
      images: [
        {
          filename: "pelo_14_08",
          zIndex: 29
        }
      ]
    },
    {
      id: 512,
      name: "Hair 14",
      partTypeId: 5,
      colorId: 21,
      images: [
        {
          filename: "pelo_14_09",
          zIndex: 29
        }
      ]
    },
    {
      id: 513,
      name: "Hair 14",
      partTypeId: 5,
      colorId: 22,
      images: [
        {
          filename: "pelo_14_10",
          zIndex: 29
        }
      ]
    },
    {
      id: 514,
      name: "Hair 14",
      partTypeId: 5,
      colorId: 23,
      images: [
        {
          filename: "pelo_14_11",
          zIndex: 29
        }
      ]
    },
    {
      id: 515,
      name: "Hair 14",
      partTypeId: 5,
      colorId: 24,
      images: [
        {
          filename: "pelo_14_12",
          zIndex: 29
        }
      ]
    },
    {
      id: 516,
      name: "Hair 15",
      partTypeId: 5,
      colorId: 13,
      images: [
        {
          filename: "pelo_15_01",
          zIndex: 29
        }
      ]
    },
    {
      id: 517,
      name: "Hair 15",
      partTypeId: 5,
      colorId: 14,
      images: [
        {
          filename: "pelo_15_02",
          zIndex: 29
        }
      ]
    },
    {
      id: 518,
      name: "Hair 15",
      partTypeId: 5,
      colorId: 15,
      images: [
        {
          filename: "pelo_15_03",
          zIndex: 29
        }
      ]
    },
    {
      id: 519,
      name: "Hair 15",
      partTypeId: 5,
      colorId: 16,
      images: [
        {
          filename: "pelo_15_04",
          zIndex: 29
        }
      ]
    },
    {
      id: 520,
      name: "Hair 15",
      partTypeId: 5,
      colorId: 17,
      images: [
        {
          filename: "pelo_15_05",
          zIndex: 29
        }
      ]
    },
    {
      id: 521,
      name: "Hair 15",
      partTypeId: 5,
      colorId: 18,
      images: [
        {
          filename: "pelo_15_06",
          zIndex: 29
        }
      ]
    },
    {
      id: 522,
      name: "Hair 15",
      partTypeId: 5,
      colorId: 19,
      images: [
        {
          filename: "pelo_15_07",
          zIndex: 29
        }
      ]
    },
    {
      id: 523,
      name: "Hair 15",
      partTypeId: 5,
      colorId: 20,
      images: [
        {
          filename: "pelo_15_08",
          zIndex: 29
        }
      ]
    },
    {
      id: 524,
      name: "Hair 15",
      partTypeId: 5,
      colorId: 21,
      images: [
        {
          filename: "pelo_15_09",
          zIndex: 29
        }
      ]
    },
    {
      id: 525,
      name: "Hair 15",
      partTypeId: 5,
      colorId: 22,
      images: [
        {
          filename: "pelo_15_10",
          zIndex: 29
        }
      ]
    },
    {
      id: 526,
      name: "Hair 15",
      partTypeId: 5,
      colorId: 23,
      images: [
        {
          filename: "pelo_15_11",
          zIndex: 29
        }
      ]
    },
    {
      id: 527,
      name: "Hair 15",
      partTypeId: 5,
      colorId: 24,
      images: [
        {
          filename: "pelo_15_12",
          zIndex: 29
        }
      ]
    },
    {
      id: 528,
      name: "Hair 16",
      partTypeId: 5,
      colorId: 13,
      images: [
        {
          filename: "pelo_16_01",
          zIndex: 29
        }
      ]
    },
    {
      id: 529,
      name: "Hair 16",
      partTypeId: 5,
      colorId: 14,
      images: [
        {
          filename: "pelo_16_02",
          zIndex: 29
        }
      ]
    },
    {
      id: 530,
      name: "Hair 16",
      partTypeId: 5,
      colorId: 15,
      images: [
        {
          filename: "pelo_16_03",
          zIndex: 29
        }
      ]
    },
    {
      id: 531,
      name: "Hair 16",
      partTypeId: 5,
      colorId: 16,
      images: [
        {
          filename: "pelo_16_04",
          zIndex: 29
        }
      ]
    },
    {
      id: 532,
      name: "Hair 16",
      partTypeId: 5,
      colorId: 17,
      images: [
        {
          filename: "pelo_16_05",
          zIndex: 29
        }
      ]
    },
    {
      id: 533,
      name: "Hair 16",
      partTypeId: 5,
      colorId: 18,
      images: [
        {
          filename: "pelo_16_06",
          zIndex: 29
        }
      ]
    },
    {
      id: 534,
      name: "Hair 16",
      partTypeId: 5,
      colorId: 19,
      images: [
        {
          filename: "pelo_16_07",
          zIndex: 29
        }
      ]
    },
    {
      id: 535,
      name: "Hair 16",
      partTypeId: 5,
      colorId: 20,
      images: [
        {
          filename: "pelo_16_08",
          zIndex: 29
        }
      ]
    },
    {
      id: 536,
      name: "Hair 16",
      partTypeId: 5,
      colorId: 21,
      images: [
        {
          filename: "pelo_16_09",
          zIndex: 29
        }
      ]
    },
    {
      id: 537,
      name: "Hair 16",
      partTypeId: 5,
      colorId: 22,
      images: [
        {
          filename: "pelo_16_10",
          zIndex: 29
        }
      ]
    },
    {
      id: 538,
      name: "Hair 16",
      partTypeId: 5,
      colorId: 23,
      images: [
        {
          filename: "pelo_16_11",
          zIndex: 29
        }
      ]
    },
    {
      id: 539,
      name: "Hair 16",
      partTypeId: 5,
      colorId: 24,
      images: [
        {
          filename: "pelo_16_12",
          zIndex: 29
        }
      ]
    },
    {
      id: 540,
      name: "Hair 17",
      partTypeId: 5,
      colorId: 13,
      images: [
        {
          filename: "pelo_17_01",
          zIndex: 29
        }
      ]
    },
    {
      id: 541,
      name: "Hair 17",
      partTypeId: 5,
      colorId: 14,
      images: [
        {
          filename: "pelo_17_02",
          zIndex: 29
        }
      ]
    },
    {
      id: 542,
      name: "Hair 17",
      partTypeId: 5,
      colorId: 15,
      images: [
        {
          filename: "pelo_17_03",
          zIndex: 29
        }
      ]
    },
    {
      id: 543,
      name: "Hair 17",
      partTypeId: 5,
      colorId: 16,
      images: [
        {
          filename: "pelo_17_04",
          zIndex: 29
        }
      ]
    },
    {
      id: 544,
      name: "Hair 17",
      partTypeId: 5,
      colorId: 17,
      images: [
        {
          filename: "pelo_17_05",
          zIndex: 29
        }
      ]
    },
    {
      id: 545,
      name: "Hair 17",
      partTypeId: 5,
      colorId: 18,
      images: [
        {
          filename: "pelo_17_06",
          zIndex: 29
        }
      ]
    },
    {
      id: 546,
      name: "Hair 17",
      partTypeId: 5,
      colorId: 19,
      images: [
        {
          filename: "pelo_17_07",
          zIndex: 29
        }
      ]
    },
    {
      id: 547,
      name: "Hair 17",
      partTypeId: 5,
      colorId: 20,
      images: [
        {
          filename: "pelo_17_08",
          zIndex: 29
        }
      ]
    },
    {
      id: 548,
      name: "Hair 17",
      partTypeId: 5,
      colorId: 21,
      images: [
        {
          filename: "pelo_17_09",
          zIndex: 29
        }
      ]
    },
    {
      id: 549,
      name: "Hair 17",
      partTypeId: 5,
      colorId: 22,
      images: [
        {
          filename: "pelo_17_10",
          zIndex: 29
        }
      ]
    },
    {
      id: 550,
      name: "Hair 17",
      partTypeId: 5,
      colorId: 23,
      images: [
        {
          filename: "pelo_17_11",
          zIndex: 29
        }
      ]
    },
    {
      id: 551,
      name: "Hair 17",
      partTypeId: 5,
      colorId: 24,
      images: [
        {
          filename: "pelo_17_12",
          zIndex: 29
        }
      ]
    },
    {
      id: 552,
      name: "Hair 18",
      partTypeId: 5,
      colorId: 13,
      images: [
        {
          filename: "pelo_18+_01",
          zIndex: 29
        },
        {
          filename: "peloa_18+_01",
          zIndex: 4
        }
      ]
    },
    {
      id: 553,
      name: "Hair 18",
      partTypeId: 5,
      colorId: 14,
      images: [
        {
          filename: "pelo_18+_02",
          zIndex: 29
        },
        {
          filename: "peloa_18+_02",
          zIndex: 4
        }
      ]
    },
    {
      id: 554,
      name: "Hair 18",
      partTypeId: 5,
      colorId: 15,
      images: [
        {
          filename: "pelo_18+_03",
          zIndex: 29
        },
        {
          filename: "peloa_18+_03",
          zIndex: 4
        }
      ]
    },
    {
      id: 555,
      name: "Hair 18",
      partTypeId: 5,
      colorId: 16,
      images: [
        {
          filename: "pelo_18+_04",
          zIndex: 29
        },
        {
          filename: "peloa_18+_04",
          zIndex: 4
        }
      ]
    },
    {
      id: 556,
      name: "Hair 18",
      partTypeId: 5,
      colorId: 17,
      images: [
        {
          filename: "pelo_18+_05",
          zIndex: 29
        },
        {
          filename: "peloa_18+_05",
          zIndex: 4
        }
      ]
    },
    {
      id: 557,
      name: "Hair 18",
      partTypeId: 5,
      colorId: 18,
      images: [
        {
          filename: "pelo_18+_06",
          zIndex: 29
        },
        {
          filename: "peloa_18+_06",
          zIndex: 4
        }
      ]
    },
    {
      id: 558,
      name: "Hair 18",
      partTypeId: 5,
      colorId: 19,
      images: [
        {
          filename: "pelo_18+_07",
          zIndex: 29
        },
        {
          filename: "peloa_18+_07",
          zIndex: 4
        }
      ]
    },
    {
      id: 559,
      name: "Hair 18",
      partTypeId: 5,
      colorId: 20,
      images: [
        {
          filename: "pelo_18+_08",
          zIndex: 29
        },
        {
          filename: "peloa_18+_08",
          zIndex: 4
        }
      ]
    },
    {
      id: 560,
      name: "Hair 18",
      partTypeId: 5,
      colorId: 21,
      images: [
        {
          filename: "pelo_18+_09",
          zIndex: 29
        },
        {
          filename: "peloa_18+_09",
          zIndex: 4
        }
      ]
    },
    {
      id: 561,
      name: "Hair 18",
      partTypeId: 5,
      colorId: 22,
      images: [
        {
          filename: "pelo_18+_10",
          zIndex: 29
        },
        {
          filename: "peloa_18+_10",
          zIndex: 4
        }
      ]
    },
    {
      id: 562,
      name: "Hair 18",
      partTypeId: 5,
      colorId: 23,
      images: [
        {
          filename: "pelo_18+_11",
          zIndex: 29
        },
        {
          filename: "peloa_18+_11",
          zIndex: 4
        }
      ]
    },
    {
      id: 563,
      name: "Hair 18",
      partTypeId: 5,
      colorId: 24,
      images: [
        {
          filename: "pelo_18+_12",
          zIndex: 29
        },
        {
          filename: "peloa_18+_12",
          zIndex: 4
        }
      ]
    },
    {
      id: 564,
      name: "Hair 19",
      partTypeId: 5,
      colorId: 13,
      images: [
        {
          filename: "pelo_19_01",
          zIndex: 29
        }
      ]
    },
    {
      id: 565,
      name: "Hair 19",
      partTypeId: 5,
      colorId: 14,
      images: [
        {
          filename: "pelo_19_02",
          zIndex: 29
        }
      ]
    },
    {
      id: 566,
      name: "Hair 19",
      partTypeId: 5,
      colorId: 15,
      images: [
        {
          filename: "pelo_19_03",
          zIndex: 29
        }
      ]
    },
    {
      id: 567,
      name: "Hair 19",
      partTypeId: 5,
      colorId: 16,
      images: [
        {
          filename: "pelo_19_04",
          zIndex: 29
        }
      ]
    },
    {
      id: 568,
      name: "Hair 19",
      partTypeId: 5,
      colorId: 17,
      images: [
        {
          filename: "pelo_19_05",
          zIndex: 29
        }
      ]
    },
    {
      id: 569,
      name: "Hair 19",
      partTypeId: 5,
      colorId: 18,
      images: [
        {
          filename: "pelo_19_06",
          zIndex: 29
        }
      ]
    },
    {
      id: 570,
      name: "Hair 19",
      partTypeId: 5,
      colorId: 19,
      images: [
        {
          filename: "pelo_19_07",
          zIndex: 29
        }
      ]
    },
    {
      id: 571,
      name: "Hair 19",
      partTypeId: 5,
      colorId: 20,
      images: [
        {
          filename: "pelo_19_08",
          zIndex: 29
        }
      ]
    },
    {
      id: 572,
      name: "Hair 19",
      partTypeId: 5,
      colorId: 21,
      images: [
        {
          filename: "pelo_19_09",
          zIndex: 29
        }
      ]
    },
    {
      id: 573,
      name: "Hair 19",
      partTypeId: 5,
      colorId: 22,
      images: [
        {
          filename: "pelo_19_10",
          zIndex: 29
        }
      ]
    },
    {
      id: 574,
      name: "Hair 19",
      partTypeId: 5,
      colorId: 23,
      images: [
        {
          filename: "pelo_19_11",
          zIndex: 29
        }
      ]
    },
    {
      id: 575,
      name: "Hair 19",
      partTypeId: 5,
      colorId: 24,
      images: [
        {
          filename: "pelo_19_12",
          zIndex: 29
        }
      ]
    },
    {
      id: 576,
      name: "Back Hair 1",
      partTypeId: 12,
      colorId: 13,
      images: [
        {
          filename: "peloa_01_01",
          zIndex: 4
        }
      ]
    },
    {
      id: 577,
      name: "Back Hair 1",
      partTypeId: 12,
      colorId: 14,
      images: [
        {
          filename: "peloa_01_02",
          zIndex: 4
        }
      ]
    },
    {
      id: 578,
      name: "Back Hair 1",
      partTypeId: 12,
      colorId: 15,
      images: [
        {
          filename: "peloa_01_03",
          zIndex: 4
        }
      ]
    },
    {
      id: 579,
      name: "Back Hair 1",
      partTypeId: 12,
      colorId: 16,
      images: [
        {
          filename: "peloa_01_04",
          zIndex: 4
        }
      ]
    },
    {
      id: 580,
      name: "Back Hair 1",
      partTypeId: 12,
      colorId: 17,
      images: [
        {
          filename: "peloa_01_05",
          zIndex: 4
        }
      ]
    },
    {
      id: 581,
      name: "Back Hair 1",
      partTypeId: 12,
      colorId: 18,
      images: [
        {
          filename: "peloa_01_06",
          zIndex: 4
        }
      ]
    },
    {
      id: 582,
      name: "Back Hair 1",
      partTypeId: 12,
      colorId: 19,
      images: [
        {
          filename: "peloa_01_07",
          zIndex: 4
        }
      ]
    },
    {
      id: 583,
      name: "Back Hair 1",
      partTypeId: 12,
      colorId: 20,
      images: [
        {
          filename: "peloa_01_08",
          zIndex: 4
        }
      ]
    },
    {
      id: 584,
      name: "Back Hair 1",
      partTypeId: 12,
      colorId: 21,
      images: [
        {
          filename: "peloa_01_09",
          zIndex: 4
        }
      ]
    },
    {
      id: 585,
      name: "Back Hair 1",
      partTypeId: 12,
      colorId: 22,
      images: [
        {
          filename: "peloa_01_10",
          zIndex: 4
        }
      ]
    },
    {
      id: 586,
      name: "Back Hair 1",
      partTypeId: 12,
      colorId: 23,
      images: [
        {
          filename: "peloa_01_11",
          zIndex: 4
        }
      ]
    },
    {
      id: 587,
      name: "Back Hair 1",
      partTypeId: 12,
      colorId: 24,
      images: [
        {
          filename: "peloa_01_12",
          zIndex: 4
        }
      ]
    },
    {
      id: 588,
      name: "Back Hair 2",
      partTypeId: 12,
      colorId: 13,
      images: [
        {
          filename: "peloa_02_01",
          zIndex: 4
        }
      ]
    },
    {
      id: 589,
      name: "Back Hair 2",
      partTypeId: 12,
      colorId: 14,
      images: [
        {
          filename: "peloa_02_02",
          zIndex: 4
        }
      ]
    },
    {
      id: 590,
      name: "Back Hair 2",
      partTypeId: 12,
      colorId: 15,
      images: [
        {
          filename: "peloa_02_03",
          zIndex: 4
        }
      ]
    },
    {
      id: 591,
      name: "Back Hair 2",
      partTypeId: 12,
      colorId: 16,
      images: [
        {
          filename: "peloa_02_04",
          zIndex: 4
        }
      ]
    },
    {
      id: 592,
      name: "Back Hair 2",
      partTypeId: 12,
      colorId: 17,
      images: [
        {
          filename: "peloa_02_05",
          zIndex: 4
        }
      ]
    },
    {
      id: 593,
      name: "Back Hair 2",
      partTypeId: 12,
      colorId: 18,
      images: [
        {
          filename: "peloa_02_06",
          zIndex: 4
        }
      ]
    },
    {
      id: 594,
      name: "Back Hair 2",
      partTypeId: 12,
      colorId: 19,
      images: [
        {
          filename: "peloa_02_07",
          zIndex: 4
        }
      ]
    },
    {
      id: 595,
      name: "Back Hair 2",
      partTypeId: 12,
      colorId: 20,
      images: [
        {
          filename: "peloa_02_08",
          zIndex: 4
        }
      ]
    },
    {
      id: 596,
      name: "Back Hair 2",
      partTypeId: 12,
      colorId: 21,
      images: [
        {
          filename: "peloa_02_09",
          zIndex: 4
        }
      ]
    },
    {
      id: 597,
      name: "Back Hair 2",
      partTypeId: 12,
      colorId: 22,
      images: [
        {
          filename: "peloa_02_10",
          zIndex: 4
        }
      ]
    },
    {
      id: 598,
      name: "Back Hair 2",
      partTypeId: 12,
      colorId: 23,
      images: [
        {
          filename: "peloa_02_11",
          zIndex: 4
        }
      ]
    },
    {
      id: 599,
      name: "Back Hair 2",
      partTypeId: 12,
      colorId: 24,
      images: [
        {
          filename: "peloa_02_12",
          zIndex: 4
        }
      ]
    },
    {
      id: 600,
      name: "Back Hair 3",
      partTypeId: 12,
      colorId: 13,
      images: [
        {
          filename: "peloa_03_01",
          zIndex: 4
        }
      ]
    },
    {
      id: 601,
      name: "Back Hair 3",
      partTypeId: 12,
      colorId: 14,
      images: [
        {
          filename: "peloa_03_02",
          zIndex: 4
        }
      ]
    },
    {
      id: 602,
      name: "Back Hair 3",
      partTypeId: 12,
      colorId: 15,
      images: [
        {
          filename: "peloa_03_03",
          zIndex: 4
        }
      ]
    },
    {
      id: 603,
      name: "Back Hair 3",
      partTypeId: 12,
      colorId: 16,
      images: [
        {
          filename: "peloa_03_04",
          zIndex: 4
        }
      ]
    },
    {
      id: 604,
      name: "Back Hair 3",
      partTypeId: 12,
      colorId: 17,
      images: [
        {
          filename: "peloa_03_05",
          zIndex: 4
        }
      ]
    },
    {
      id: 605,
      name: "Back Hair 3",
      partTypeId: 12,
      colorId: 18,
      images: [
        {
          filename: "peloa_03_06",
          zIndex: 4
        }
      ]
    },
    {
      id: 606,
      name: "Back Hair 3",
      partTypeId: 12,
      colorId: 19,
      images: [
        {
          filename: "peloa_03_07",
          zIndex: 4
        }
      ]
    },
    {
      id: 607,
      name: "Back Hair 3",
      partTypeId: 12,
      colorId: 20,
      images: [
        {
          filename: "peloa_03_08",
          zIndex: 4
        }
      ]
    },
    {
      id: 608,
      name: "Back Hair 3",
      partTypeId: 12,
      colorId: 21,
      images: [
        {
          filename: "peloa_03_09",
          zIndex: 4
        }
      ]
    },
    {
      id: 609,
      name: "Back Hair 3",
      partTypeId: 12,
      colorId: 22,
      images: [
        {
          filename: "peloa_03_10",
          zIndex: 4
        }
      ]
    },
    {
      id: 610,
      name: "Back Hair 3",
      partTypeId: 12,
      colorId: 23,
      images: [
        {
          filename: "peloa_03_11",
          zIndex: 4
        }
      ]
    },
    {
      id: 611,
      name: "Back Hair 3",
      partTypeId: 12,
      colorId: 24,
      images: [
        {
          filename: "peloa_03_12",
          zIndex: 4
        }
      ]
    },
    {
      id: 612,
      name: "Back Hair 4",
      partTypeId: 12,
      colorId: 13,
      images: [
        {
          filename: "peloa_04_01",
          zIndex: 4
        }
      ]
    },
    {
      id: 613,
      name: "Back Hair 4",
      partTypeId: 12,
      colorId: 14,
      images: [
        {
          filename: "peloa_04_02",
          zIndex: 4
        }
      ]
    },
    {
      id: 614,
      name: "Back Hair 4",
      partTypeId: 12,
      colorId: 15,
      images: [
        {
          filename: "peloa_04_03",
          zIndex: 4
        }
      ]
    },
    {
      id: 615,
      name: "Back Hair 4",
      partTypeId: 12,
      colorId: 16,
      images: [
        {
          filename: "peloa_04_04",
          zIndex: 4
        }
      ]
    },
    {
      id: 616,
      name: "Back Hair 4",
      partTypeId: 12,
      colorId: 17,
      images: [
        {
          filename: "peloa_04_05",
          zIndex: 4
        }
      ]
    },
    {
      id: 617,
      name: "Back Hair 4",
      partTypeId: 12,
      colorId: 18,
      images: [
        {
          filename: "peloa_04_06",
          zIndex: 4
        }
      ]
    },
    {
      id: 618,
      name: "Back Hair 4",
      partTypeId: 12,
      colorId: 19,
      images: [
        {
          filename: "peloa_04_07",
          zIndex: 4
        }
      ]
    },
    {
      id: 619,
      name: "Back Hair 4",
      partTypeId: 12,
      colorId: 20,
      images: [
        {
          filename: "peloa_04_08",
          zIndex: 4
        }
      ]
    },
    {
      id: 620,
      name: "Back Hair 4",
      partTypeId: 12,
      colorId: 21,
      images: [
        {
          filename: "peloa_04_09",
          zIndex: 4
        }
      ]
    },
    {
      id: 621,
      name: "Back Hair 4",
      partTypeId: 12,
      colorId: 22,
      images: [
        {
          filename: "peloa_04_10",
          zIndex: 4
        }
      ]
    },
    {
      id: 622,
      name: "Back Hair 4",
      partTypeId: 12,
      colorId: 23,
      images: [
        {
          filename: "peloa_04_11",
          zIndex: 4
        }
      ]
    },
    {
      id: 623,
      name: "Back Hair 4",
      partTypeId: 12,
      colorId: 24,
      images: [
        {
          filename: "peloa_04_12",
          zIndex: 4
        }
      ]
    },
    {
      id: 624,
      name: "Back Hair 5",
      partTypeId: 12,
      colorId: 13,
      images: [
        {
          filename: "peloa_05_01",
          zIndex: 4
        }
      ]
    },
    {
      id: 625,
      name: "Back Hair 5",
      partTypeId: 12,
      colorId: 14,
      images: [
        {
          filename: "peloa_05_02",
          zIndex: 4
        }
      ]
    },
    {
      id: 626,
      name: "Back Hair 5",
      partTypeId: 12,
      colorId: 15,
      images: [
        {
          filename: "peloa_05_03",
          zIndex: 4
        }
      ]
    },
    {
      id: 627,
      name: "Back Hair 5",
      partTypeId: 12,
      colorId: 16,
      images: [
        {
          filename: "peloa_05_04",
          zIndex: 4
        }
      ]
    },
    {
      id: 628,
      name: "Back Hair 5",
      partTypeId: 12,
      colorId: 17,
      images: [
        {
          filename: "peloa_05_05",
          zIndex: 4
        }
      ]
    },
    {
      id: 629,
      name: "Back Hair 5",
      partTypeId: 12,
      colorId: 18,
      images: [
        {
          filename: "peloa_05_06",
          zIndex: 4
        }
      ]
    },
    {
      id: 630,
      name: "Back Hair 5",
      partTypeId: 12,
      colorId: 19,
      images: [
        {
          filename: "peloa_05_07",
          zIndex: 4
        }
      ]
    },
    {
      id: 631,
      name: "Back Hair 5",
      partTypeId: 12,
      colorId: 20,
      images: [
        {
          filename: "peloa_05_08",
          zIndex: 4
        }
      ]
    },
    {
      id: 632,
      name: "Back Hair 5",
      partTypeId: 12,
      colorId: 21,
      images: [
        {
          filename: "peloa_05_09",
          zIndex: 4
        }
      ]
    },
    {
      id: 633,
      name: "Back Hair 5",
      partTypeId: 12,
      colorId: 22,
      images: [
        {
          filename: "peloa_05_10",
          zIndex: 4
        }
      ]
    },
    {
      id: 634,
      name: "Back Hair 5",
      partTypeId: 12,
      colorId: 23,
      images: [
        {
          filename: "peloa_05_11",
          zIndex: 4
        }
      ]
    },
    {
      id: 635,
      name: "Back Hair 5",
      partTypeId: 12,
      colorId: 24,
      images: [
        {
          filename: "peloa_05_12",
          zIndex: 4
        }
      ]
    },
    {
      id: 636,
      name: "Back Hair 6",
      partTypeId: 12,
      colorId: 13,
      images: [
        {
          filename: "peloa_06_01",
          zIndex: 4
        }
      ]
    },
    {
      id: 637,
      name: "Back Hair 6",
      partTypeId: 12,
      colorId: 14,
      images: [
        {
          filename: "peloa_06_02",
          zIndex: 4
        }
      ]
    },
    {
      id: 638,
      name: "Back Hair 6",
      partTypeId: 12,
      colorId: 15,
      images: [
        {
          filename: "peloa_06_03",
          zIndex: 4
        }
      ]
    },
    {
      id: 639,
      name: "Back Hair 6",
      partTypeId: 12,
      colorId: 16,
      images: [
        {
          filename: "peloa_06_04",
          zIndex: 4
        }
      ]
    },
    {
      id: 640,
      name: "Back Hair 6",
      partTypeId: 12,
      colorId: 17,
      images: [
        {
          filename: "peloa_06_05",
          zIndex: 4
        }
      ]
    },
    {
      id: 641,
      name: "Back Hair 6",
      partTypeId: 12,
      colorId: 18,
      images: [
        {
          filename: "peloa_06_06",
          zIndex: 4
        }
      ]
    },
    {
      id: 642,
      name: "Back Hair 6",
      partTypeId: 12,
      colorId: 19,
      images: [
        {
          filename: "peloa_06_07",
          zIndex: 4
        }
      ]
    },
    {
      id: 643,
      name: "Back Hair 6",
      partTypeId: 12,
      colorId: 20,
      images: [
        {
          filename: "peloa_06_08",
          zIndex: 4
        }
      ]
    },
    {
      id: 644,
      name: "Back Hair 6",
      partTypeId: 12,
      colorId: 21,
      images: [
        {
          filename: "peloa_06_09",
          zIndex: 4
        }
      ]
    },
    {
      id: 645,
      name: "Back Hair 6",
      partTypeId: 12,
      colorId: 22,
      images: [
        {
          filename: "peloa_06_10",
          zIndex: 4
        }
      ]
    },
    {
      id: 646,
      name: "Back Hair 6",
      partTypeId: 12,
      colorId: 23,
      images: [
        {
          filename: "peloa_06_11",
          zIndex: 4
        }
      ]
    },
    {
      id: 647,
      name: "Back Hair 6",
      partTypeId: 12,
      colorId: 24,
      images: [
        {
          filename: "peloa_06_12",
          zIndex: 4
        }
      ]
    },
    {
      id: 648,
      name: "Back Hair 7",
      partTypeId: 12,
      colorId: 13,
      images: [
        {
          filename: "peloa_07_01",
          zIndex: 4
        }
      ]
    },
    {
      id: 649,
      name: "Back Hair 7",
      partTypeId: 12,
      colorId: 14,
      images: [
        {
          filename: "peloa_07_02",
          zIndex: 4
        }
      ]
    },
    {
      id: 650,
      name: "Back Hair 7",
      partTypeId: 12,
      colorId: 15,
      images: [
        {
          filename: "peloa_07_03",
          zIndex: 4
        }
      ]
    },
    {
      id: 651,
      name: "Back Hair 7",
      partTypeId: 12,
      colorId: 16,
      images: [
        {
          filename: "peloa_07_04",
          zIndex: 4
        }
      ]
    },
    {
      id: 652,
      name: "Back Hair 7",
      partTypeId: 12,
      colorId: 17,
      images: [
        {
          filename: "peloa_07_05",
          zIndex: 4
        }
      ]
    },
    {
      id: 653,
      name: "Back Hair 7",
      partTypeId: 12,
      colorId: 18,
      images: [
        {
          filename: "peloa_07_06",
          zIndex: 4
        }
      ]
    },
    {
      id: 654,
      name: "Back Hair 7",
      partTypeId: 12,
      colorId: 19,
      images: [
        {
          filename: "peloa_07_07",
          zIndex: 4
        }
      ]
    },
    {
      id: 655,
      name: "Back Hair 7",
      partTypeId: 12,
      colorId: 20,
      images: [
        {
          filename: "peloa_07_08",
          zIndex: 4
        }
      ]
    },
    {
      id: 656,
      name: "Back Hair 7",
      partTypeId: 12,
      colorId: 21,
      images: [
        {
          filename: "peloa_07_09",
          zIndex: 4
        }
      ]
    },
    {
      id: 657,
      name: "Back Hair 7",
      partTypeId: 12,
      colorId: 22,
      images: [
        {
          filename: "peloa_07_10",
          zIndex: 4
        }
      ]
    },
    {
      id: 658,
      name: "Back Hair 7",
      partTypeId: 12,
      colorId: 23,
      images: [
        {
          filename: "peloa_07_11",
          zIndex: 4
        }
      ]
    },
    {
      id: 659,
      name: "Back Hair 7",
      partTypeId: 12,
      colorId: 24,
      images: [
        {
          filename: "peloa_07_12",
          zIndex: 4
        }
      ]
    },
    {
      id: 660,
      name: "Back Hair 8",
      partTypeId: 12,
      colorId: 13,
      images: [
        {
          filename: "peloa_08_01",
          zIndex: 4
        }
      ]
    },
    {
      id: 661,
      name: "Back Hair 8",
      partTypeId: 12,
      colorId: 14,
      images: [
        {
          filename: "peloa_08_02",
          zIndex: 4
        }
      ]
    },
    {
      id: 662,
      name: "Back Hair 8",
      partTypeId: 12,
      colorId: 15,
      images: [
        {
          filename: "peloa_08_03",
          zIndex: 4
        }
      ]
    },
    {
      id: 663,
      name: "Back Hair 8",
      partTypeId: 12,
      colorId: 16,
      images: [
        {
          filename: "peloa_08_04",
          zIndex: 4
        }
      ]
    },
    {
      id: 664,
      name: "Back Hair 8",
      partTypeId: 12,
      colorId: 17,
      images: [
        {
          filename: "peloa_08_05",
          zIndex: 4
        }
      ]
    },
    {
      id: 665,
      name: "Back Hair 8",
      partTypeId: 12,
      colorId: 18,
      images: [
        {
          filename: "peloa_08_06",
          zIndex: 4
        }
      ]
    },
    {
      id: 666,
      name: "Back Hair 8",
      partTypeId: 12,
      colorId: 19,
      images: [
        {
          filename: "peloa_08_07",
          zIndex: 4
        }
      ]
    },
    {
      id: 667,
      name: "Back Hair 8",
      partTypeId: 12,
      colorId: 20,
      images: [
        {
          filename: "peloa_08_08",
          zIndex: 4
        }
      ]
    },
    {
      id: 668,
      name: "Back Hair 8",
      partTypeId: 12,
      colorId: 21,
      images: [
        {
          filename: "peloa_08_09",
          zIndex: 4
        }
      ]
    },
    {
      id: 669,
      name: "Back Hair 8",
      partTypeId: 12,
      colorId: 22,
      images: [
        {
          filename: "peloa_08_10",
          zIndex: 4
        }
      ]
    },
    {
      id: 670,
      name: "Back Hair 8",
      partTypeId: 12,
      colorId: 23,
      images: [
        {
          filename: "peloa_08_11",
          zIndex: 4
        }
      ]
    },
    {
      id: 671,
      name: "Back Hair 8",
      partTypeId: 12,
      colorId: 24,
      images: [
        {
          filename: "peloa_08_12",
          zIndex: 4
        }
      ]
    },
    {
      id: 672,
      name: "Back Hair 9",
      partTypeId: 12,
      colorId: 13,
      images: [
        {
          filename: "peloa_09_01",
          zIndex: 4
        }
      ]
    },
    {
      id: 673,
      name: "Back Hair 9",
      partTypeId: 12,
      colorId: 14,
      images: [
        {
          filename: "peloa_09_02",
          zIndex: 4
        }
      ]
    },
    {
      id: 674,
      name: "Back Hair 9",
      partTypeId: 12,
      colorId: 15,
      images: [
        {
          filename: "peloa_09_03",
          zIndex: 4
        }
      ]
    },
    {
      id: 675,
      name: "Back Hair 9",
      partTypeId: 12,
      colorId: 16,
      images: [
        {
          filename: "peloa_09_04",
          zIndex: 4
        }
      ]
    },
    {
      id: 676,
      name: "Back Hair 9",
      partTypeId: 12,
      colorId: 17,
      images: [
        {
          filename: "peloa_09_05",
          zIndex: 4
        }
      ]
    },
    {
      id: 677,
      name: "Back Hair 9",
      partTypeId: 12,
      colorId: 18,
      images: [
        {
          filename: "peloa_09_06",
          zIndex: 4
        }
      ]
    },
    {
      id: 678,
      name: "Back Hair 9",
      partTypeId: 12,
      colorId: 19,
      images: [
        {
          filename: "peloa_09_07",
          zIndex: 4
        }
      ]
    },
    {
      id: 679,
      name: "Back Hair 9",
      partTypeId: 12,
      colorId: 20,
      images: [
        {
          filename: "peloa_09_08",
          zIndex: 4
        }
      ]
    },
    {
      id: 680,
      name: "Back Hair 9",
      partTypeId: 12,
      colorId: 21,
      images: [
        {
          filename: "peloa_09_09",
          zIndex: 4
        }
      ]
    },
    {
      id: 681,
      name: "Back Hair 9",
      partTypeId: 12,
      colorId: 22,
      images: [
        {
          filename: "peloa_09_10",
          zIndex: 4
        }
      ]
    },
    {
      id: 682,
      name: "Back Hair 9",
      partTypeId: 12,
      colorId: 23,
      images: [
        {
          filename: "peloa_09_11",
          zIndex: 4
        }
      ]
    },
    {
      id: 683,
      name: "Back Hair 9",
      partTypeId: 12,
      colorId: 24,
      images: [
        {
          filename: "peloa_09_12",
          zIndex: 4
        }
      ]
    },
    {
      id: 684,
      name: "Back Hair 10",
      partTypeId: 12,
      colorId: 13,
      images: [
        {
          filename: "peloa_10_01",
          zIndex: 4
        }
      ]
    },
    {
      id: 685,
      name: "Back Hair 10",
      partTypeId: 12,
      colorId: 14,
      images: [
        {
          filename: "peloa_10_02",
          zIndex: 4
        }
      ]
    },
    {
      id: 686,
      name: "Back Hair 10",
      partTypeId: 12,
      colorId: 15,
      images: [
        {
          filename: "peloa_10_03",
          zIndex: 4
        }
      ]
    },
    {
      id: 687,
      name: "Back Hair 10",
      partTypeId: 12,
      colorId: 16,
      images: [
        {
          filename: "peloa_10_04",
          zIndex: 4
        }
      ]
    },
    {
      id: 688,
      name: "Back Hair 10",
      partTypeId: 12,
      colorId: 17,
      images: [
        {
          filename: "peloa_10_05",
          zIndex: 4
        }
      ]
    },
    {
      id: 689,
      name: "Back Hair 10",
      partTypeId: 12,
      colorId: 18,
      images: [
        {
          filename: "peloa_10_06",
          zIndex: 4
        }
      ]
    },
    {
      id: 690,
      name: "Back Hair 10",
      partTypeId: 12,
      colorId: 19,
      images: [
        {
          filename: "peloa_10_07",
          zIndex: 4
        }
      ]
    },
    {
      id: 691,
      name: "Back Hair 10",
      partTypeId: 12,
      colorId: 20,
      images: [
        {
          filename: "peloa_10_08",
          zIndex: 4
        }
      ]
    },
    {
      id: 692,
      name: "Back Hair 10",
      partTypeId: 12,
      colorId: 21,
      images: [
        {
          filename: "peloa_10_09",
          zIndex: 4
        }
      ]
    },
    {
      id: 693,
      name: "Back Hair 10",
      partTypeId: 12,
      colorId: 22,
      images: [
        {
          filename: "peloa_10_10",
          zIndex: 4
        }
      ]
    },
    {
      id: 694,
      name: "Back Hair 10",
      partTypeId: 12,
      colorId: 23,
      images: [
        {
          filename: "peloa_10_11",
          zIndex: 4
        }
      ]
    },
    {
      id: 695,
      name: "Back Hair 10",
      partTypeId: 12,
      colorId: 24,
      images: [
        {
          filename: "peloa_10_12",
          zIndex: 4
        }
      ]
    },
    {
      id: 696,
      name: "Back Hair 11",
      partTypeId: 12,
      colorId: 13,
      images: [
        {
          filename: "peloa_11_01",
          zIndex: 4
        }
      ]
    },
    {
      id: 697,
      name: "Back Hair 11",
      partTypeId: 12,
      colorId: 14,
      images: [
        {
          filename: "peloa_11_02",
          zIndex: 4
        }
      ]
    },
    {
      id: 698,
      name: "Back Hair 11",
      partTypeId: 12,
      colorId: 15,
      images: [
        {
          filename: "peloa_11_03",
          zIndex: 4
        }
      ]
    },
    {
      id: 699,
      name: "Back Hair 11",
      partTypeId: 12,
      colorId: 16,
      images: [
        {
          filename: "peloa_11_04",
          zIndex: 4
        }
      ]
    },
    {
      id: 700,
      name: "Back Hair 11",
      partTypeId: 12,
      colorId: 17,
      images: [
        {
          filename: "peloa_11_05",
          zIndex: 4
        }
      ]
    },
    {
      id: 701,
      name: "Back Hair 11",
      partTypeId: 12,
      colorId: 18,
      images: [
        {
          filename: "peloa_11_06",
          zIndex: 4
        }
      ]
    },
    {
      id: 702,
      name: "Back Hair 11",
      partTypeId: 12,
      colorId: 19,
      images: [
        {
          filename: "peloa_11_07",
          zIndex: 4
        }
      ]
    },
    {
      id: 703,
      name: "Back Hair 11",
      partTypeId: 12,
      colorId: 20,
      images: [
        {
          filename: "peloa_11_08",
          zIndex: 4
        }
      ]
    },
    {
      id: 704,
      name: "Back Hair 11",
      partTypeId: 12,
      colorId: 21,
      images: [
        {
          filename: "peloa_11_09",
          zIndex: 4
        }
      ]
    },
    {
      id: 705,
      name: "Back Hair 11",
      partTypeId: 12,
      colorId: 22,
      images: [
        {
          filename: "peloa_11_10",
          zIndex: 4
        }
      ]
    },
    {
      id: 706,
      name: "Back Hair 11",
      partTypeId: 12,
      colorId: 23,
      images: [
        {
          filename: "peloa_11_11",
          zIndex: 4
        }
      ]
    },
    {
      id: 707,
      name: "Back Hair 11",
      partTypeId: 12,
      colorId: 24,
      images: [
        {
          filename: "peloa_11_12",
          zIndex: 4
        }
      ]
    },
    {
      id: 708,
      name: "Facial Hair 1",
      partTypeId: 6,
      colorId: 13,
      images: [
        {
          filename: "vellofacial_01_01",
          zIndex: 25
        }
      ]
    },
    {
      id: 709,
      name: "Facial Hair 1",
      partTypeId: 6,
      colorId: 14,
      images: [
        {
          filename: "vellofacial_01_02",
          zIndex: 25
        }
      ]
    },
    {
      id: 710,
      name: "Facial Hair 1",
      partTypeId: 6,
      colorId: 15,
      images: [
        {
          filename: "vellofacial_01_03",
          zIndex: 25
        }
      ]
    },
    {
      id: 711,
      name: "Facial Hair 1",
      partTypeId: 6,
      colorId: 16,
      images: [
        {
          filename: "vellofacial_01_04",
          zIndex: 25
        }
      ]
    },
    {
      id: 712,
      name: "Facial Hair 1",
      partTypeId: 6,
      colorId: 17,
      images: [
        {
          filename: "vellofacial_01_05",
          zIndex: 25
        }
      ]
    },
    {
      id: 713,
      name: "Facial Hair 1",
      partTypeId: 6,
      colorId: 18,
      images: [
        {
          filename: "vellofacial_01_06",
          zIndex: 25
        }
      ]
    },
    {
      id: 714,
      name: "Facial Hair 1",
      partTypeId: 6,
      colorId: 19,
      images: [
        {
          filename: "vellofacial_01_07",
          zIndex: 25
        }
      ]
    },
    {
      id: 715,
      name: "Facial Hair 1",
      partTypeId: 6,
      colorId: 20,
      images: [
        {
          filename: "vellofacial_01_08",
          zIndex: 25
        }
      ]
    },
    {
      id: 716,
      name: "Facial Hair 1",
      partTypeId: 6,
      colorId: 21,
      images: [
        {
          filename: "vellofacial_01_09",
          zIndex: 25
        }
      ]
    },
    {
      id: 717,
      name: "Facial Hair 1",
      partTypeId: 6,
      colorId: 22,
      images: [
        {
          filename: "vellofacial_01_10",
          zIndex: 25
        }
      ]
    },
    {
      id: 718,
      name: "Facial Hair 1",
      partTypeId: 6,
      colorId: 23,
      images: [
        {
          filename: "vellofacial_01_11",
          zIndex: 25
        }
      ]
    },
    {
      id: 719,
      name: "Facial Hair 1",
      partTypeId: 6,
      colorId: 24,
      images: [
        {
          filename: "vellofacial_01_12",
          zIndex: 25
        }
      ]
    },
    {
      id: 720,
      name: "Facial Hair 2",
      partTypeId: 6,
      colorId: 13,
      images: [
        {
          filename: "vellofacial_02_01",
          zIndex: 25
        }
      ]
    },
    {
      id: 721,
      name: "Facial Hair 2",
      partTypeId: 6,
      colorId: 14,
      images: [
        {
          filename: "vellofacial_02_02",
          zIndex: 25
        }
      ]
    },
    {
      id: 722,
      name: "Facial Hair 2",
      partTypeId: 6,
      colorId: 15,
      images: [
        {
          filename: "vellofacial_02_03",
          zIndex: 25
        }
      ]
    },
    {
      id: 723,
      name: "Facial Hair 2",
      partTypeId: 6,
      colorId: 16,
      images: [
        {
          filename: "vellofacial_02_04",
          zIndex: 25
        }
      ]
    },
    {
      id: 724,
      name: "Facial Hair 2",
      partTypeId: 6,
      colorId: 17,
      images: [
        {
          filename: "vellofacial_02_05",
          zIndex: 25
        }
      ]
    },
    {
      id: 725,
      name: "Facial Hair 2",
      partTypeId: 6,
      colorId: 18,
      images: [
        {
          filename: "vellofacial_02_06",
          zIndex: 25
        }
      ]
    },
    {
      id: 726,
      name: "Facial Hair 2",
      partTypeId: 6,
      colorId: 19,
      images: [
        {
          filename: "vellofacial_02_07",
          zIndex: 25
        }
      ]
    },
    {
      id: 727,
      name: "Facial Hair 2",
      partTypeId: 6,
      colorId: 20,
      images: [
        {
          filename: "vellofacial_02_08",
          zIndex: 25
        }
      ]
    },
    {
      id: 728,
      name: "Facial Hair 2",
      partTypeId: 6,
      colorId: 21,
      images: [
        {
          filename: "vellofacial_02_09",
          zIndex: 25
        }
      ]
    },
    {
      id: 729,
      name: "Facial Hair 2",
      partTypeId: 6,
      colorId: 22,
      images: [
        {
          filename: "vellofacial_02_10",
          zIndex: 25
        }
      ]
    },
    {
      id: 730,
      name: "Facial Hair 2",
      partTypeId: 6,
      colorId: 23,
      images: [
        {
          filename: "vellofacial_02_11",
          zIndex: 25
        }
      ]
    },
    {
      id: 731,
      name: "Facial Hair 2",
      partTypeId: 6,
      colorId: 24,
      images: [
        {
          filename: "vellofacial_02_12",
          zIndex: 25
        }
      ]
    },
    {
      id: 732,
      name: "Facial Hair 3",
      partTypeId: 6,
      colorId: 13,
      images: [
        {
          filename: "vellofacial_03_01",
          zIndex: 25
        }
      ]
    },
    {
      id: 733,
      name: "Facial Hair 3",
      partTypeId: 6,
      colorId: 14,
      images: [
        {
          filename: "vellofacial_03_02",
          zIndex: 25
        }
      ]
    },
    {
      id: 734,
      name: "Facial Hair 3",
      partTypeId: 6,
      colorId: 15,
      images: [
        {
          filename: "vellofacial_03_03",
          zIndex: 25
        }
      ]
    },
    {
      id: 735,
      name: "Facial Hair 3",
      partTypeId: 6,
      colorId: 16,
      images: [
        {
          filename: "vellofacial_03_04",
          zIndex: 25
        }
      ]
    },
    {
      id: 736,
      name: "Facial Hair 3",
      partTypeId: 6,
      colorId: 17,
      images: [
        {
          filename: "vellofacial_03_05",
          zIndex: 25
        }
      ]
    },
    {
      id: 737,
      name: "Facial Hair 3",
      partTypeId: 6,
      colorId: 18,
      images: [
        {
          filename: "vellofacial_03_06",
          zIndex: 25
        }
      ]
    },
    {
      id: 738,
      name: "Facial Hair 3",
      partTypeId: 6,
      colorId: 19,
      images: [
        {
          filename: "vellofacial_03_07",
          zIndex: 25
        }
      ]
    },
    {
      id: 739,
      name: "Facial Hair 3",
      partTypeId: 6,
      colorId: 20,
      images: [
        {
          filename: "vellofacial_03_08",
          zIndex: 25
        }
      ]
    },
    {
      id: 740,
      name: "Facial Hair 3",
      partTypeId: 6,
      colorId: 21,
      images: [
        {
          filename: "vellofacial_03_09",
          zIndex: 25
        }
      ]
    },
    {
      id: 741,
      name: "Facial Hair 3",
      partTypeId: 6,
      colorId: 22,
      images: [
        {
          filename: "vellofacial_03_10",
          zIndex: 25
        }
      ]
    },
    {
      id: 742,
      name: "Facial Hair 3",
      partTypeId: 6,
      colorId: 23,
      images: [
        {
          filename: "vellofacial_03_11",
          zIndex: 25
        }
      ]
    },
    {
      id: 743,
      name: "Facial Hair 3",
      partTypeId: 6,
      colorId: 24,
      images: [
        {
          filename: "vellofacial_03_12",
          zIndex: 25
        }
      ]
    },
    {
      id: 744,
      name: "Facial Hair 4",
      partTypeId: 6,
      colorId: 13,
      images: [
        {
          filename: "vellofacial_04_01",
          zIndex: 25
        }
      ]
    },
    {
      id: 745,
      name: "Facial Hair 4",
      partTypeId: 6,
      colorId: 14,
      images: [
        {
          filename: "vellofacial_04_02",
          zIndex: 25
        }
      ]
    },
    {
      id: 746,
      name: "Facial Hair 4",
      partTypeId: 6,
      colorId: 15,
      images: [
        {
          filename: "vellofacial_04_03",
          zIndex: 25
        }
      ]
    },
    {
      id: 747,
      name: "Facial Hair 4",
      partTypeId: 6,
      colorId: 16,
      images: [
        {
          filename: "vellofacial_04_04",
          zIndex: 25
        }
      ]
    },
    {
      id: 748,
      name: "Facial Hair 4",
      partTypeId: 6,
      colorId: 17,
      images: [
        {
          filename: "vellofacial_04_05",
          zIndex: 25
        }
      ]
    },
    {
      id: 749,
      name: "Facial Hair 4",
      partTypeId: 6,
      colorId: 18,
      images: [
        {
          filename: "vellofacial_04_06",
          zIndex: 25
        }
      ]
    },
    {
      id: 750,
      name: "Facial Hair 4",
      partTypeId: 6,
      colorId: 19,
      images: [
        {
          filename: "vellofacial_04_07",
          zIndex: 25
        }
      ]
    },
    {
      id: 751,
      name: "Facial Hair 4",
      partTypeId: 6,
      colorId: 20,
      images: [
        {
          filename: "vellofacial_04_08",
          zIndex: 25
        }
      ]
    },
    {
      id: 752,
      name: "Facial Hair 4",
      partTypeId: 6,
      colorId: 21,
      images: [
        {
          filename: "vellofacial_04_09",
          zIndex: 25
        }
      ]
    },
    {
      id: 753,
      name: "Facial Hair 4",
      partTypeId: 6,
      colorId: 22,
      images: [
        {
          filename: "vellofacial_04_10",
          zIndex: 25
        }
      ]
    },
    {
      id: 754,
      name: "Facial Hair 4",
      partTypeId: 6,
      colorId: 23,
      images: [
        {
          filename: "vellofacial_04_11",
          zIndex: 25
        }
      ]
    },
    {
      id: 755,
      name: "Facial Hair 4",
      partTypeId: 6,
      colorId: 24,
      images: [
        {
          filename: "vellofacial_04_12",
          zIndex: 25
        }
      ]
    },
    {
      id: 756,
      name: "Facial Hair 5",
      partTypeId: 6,
      colorId: 13,
      images: [
        {
          filename: "vellofacial_05_01",
          zIndex: 25
        }
      ]
    },
    {
      id: 757,
      name: "Facial Hair 5",
      partTypeId: 6,
      colorId: 14,
      images: [
        {
          filename: "vellofacial_05_02",
          zIndex: 25
        }
      ]
    },
    {
      id: 758,
      name: "Facial Hair 5",
      partTypeId: 6,
      colorId: 15,
      images: [
        {
          filename: "vellofacial_05_03",
          zIndex: 25
        }
      ]
    },
    {
      id: 759,
      name: "Facial Hair 5",
      partTypeId: 6,
      colorId: 16,
      images: [
        {
          filename: "vellofacial_05_04",
          zIndex: 25
        }
      ]
    },
    {
      id: 760,
      name: "Facial Hair 5",
      partTypeId: 6,
      colorId: 17,
      images: [
        {
          filename: "vellofacial_05_05",
          zIndex: 25
        }
      ]
    },
    {
      id: 761,
      name: "Facial Hair 5",
      partTypeId: 6,
      colorId: 18,
      images: [
        {
          filename: "vellofacial_05_06",
          zIndex: 25
        }
      ]
    },
    {
      id: 762,
      name: "Facial Hair 5",
      partTypeId: 6,
      colorId: 19,
      images: [
        {
          filename: "vellofacial_05_07",
          zIndex: 25
        }
      ]
    },
    {
      id: 763,
      name: "Facial Hair 5",
      partTypeId: 6,
      colorId: 20,
      images: [
        {
          filename: "vellofacial_05_08",
          zIndex: 25
        }
      ]
    },
    {
      id: 764,
      name: "Facial Hair 5",
      partTypeId: 6,
      colorId: 21,
      images: [
        {
          filename: "vellofacial_05_09",
          zIndex: 25
        }
      ]
    },
    {
      id: 765,
      name: "Facial Hair 5",
      partTypeId: 6,
      colorId: 22,
      images: [
        {
          filename: "vellofacial_05_10",
          zIndex: 25
        }
      ]
    },
    {
      id: 766,
      name: "Facial Hair 5",
      partTypeId: 6,
      colorId: 23,
      images: [
        {
          filename: "vellofacial_05_11",
          zIndex: 25
        }
      ]
    },
    {
      id: 767,
      name: "Facial Hair 5",
      partTypeId: 6,
      colorId: 24,
      images: [
        {
          filename: "vellofacial_05_12",
          zIndex: 25
        }
      ]
    },
    {
      id: 768,
      name: "Inner Shirt 1",
      bodyShapeId: 1,
      partTypeId: 2,
      colorId: 5,
      images: [
        {
          filename: "tirantas_01_01",
          zIndex: 12
        }
      ]
    },
    {
      id: 769,
      name: "Inner Shirt 1",
      bodyShapeId: 1,
      partTypeId: 2,
      colorId: 6,
      images: [
        {
          filename: "tirantas_01_02",
          zIndex: 12
        }
      ]
    },
    {
      id: 770,
      name: "Inner Shirt 1",
      bodyShapeId: 1,
      partTypeId: 2,
      colorId: 7,
      images: [
        {
          filename: "tirantas_01_03",
          zIndex: 12
        }
      ]
    },
    {
      id: 771,
      name: "Inner Shirt 1",
      bodyShapeId: 1,
      partTypeId: 2,
      colorId: 8,
      images: [
        {
          filename: "tirantas_01_04",
          zIndex: 12
        }
      ]
    },
    {
      id: 772,
      name: "Inner Shirt 1",
      bodyShapeId: 1,
      partTypeId: 2,
      colorId: 9,
      images: [
        {
          filename: "tirantas_01_05",
          zIndex: 12
        }
      ]
    },
    {
      id: 773,
      name: "Inner Shirt 1",
      bodyShapeId: 1,
      partTypeId: 2,
      colorId: 10,
      images: [
        {
          filename: "tirantas_01_06",
          zIndex: 12
        }
      ]
    },
    {
      id: 774,
      name: "Inner Shirt 1",
      bodyShapeId: 1,
      partTypeId: 2,
      colorId: 11,
      images: [
        {
          filename: "tirantas_01_07",
          zIndex: 12
        }
      ]
    },
    {
      id: 775,
      name: "Inner Shirt 1",
      bodyShapeId: 1,
      partTypeId: 2,
      colorId: 12,
      images: [
        {
          filename: "tirantas_01_08",
          zIndex: 12
        }
      ]
    },
    {
      id: 776,
      name: "Inner Shirt 2",
      bodyShapeId: 2,
      partTypeId: 2,
      colorId: 5,
      images: [
        {
          filename: "tirantas_02_01",
          zIndex: 12
        }
      ]
    },
    {
      id: 777,
      name: "Inner Shirt 2",
      bodyShapeId: 2,
      partTypeId: 2,
      colorId: 6,
      images: [
        {
          filename: "tirantas_02_02",
          zIndex: 12
        }
      ]
    },
    {
      id: 778,
      name: "Inner Shirt 2",
      bodyShapeId: 2,
      partTypeId: 2,
      colorId: 7,
      images: [
        {
          filename: "tirantas_02_03",
          zIndex: 12
        }
      ]
    },
    {
      id: 779,
      name: "Inner Shirt 2",
      bodyShapeId: 2,
      partTypeId: 2,
      colorId: 8,
      images: [
        {
          filename: "tirantas_02_04",
          zIndex: 12
        }
      ]
    },
    {
      id: 780,
      name: "Inner Shirt 2",
      bodyShapeId: 2,
      partTypeId: 2,
      colorId: 9,
      images: [
        {
          filename: "tirantas_02_05",
          zIndex: 12
        }
      ]
    },
    {
      id: 781,
      name: "Inner Shirt 2",
      bodyShapeId: 2,
      partTypeId: 2,
      colorId: 10,
      images: [
        {
          filename: "tirantas_02_06",
          zIndex: 12
        }
      ]
    },
    {
      id: 782,
      name: "Inner Shirt 2",
      bodyShapeId: 2,
      partTypeId: 2,
      colorId: 11,
      images: [
        {
          filename: "tirantas_02_07",
          zIndex: 12
        }
      ]
    },
    {
      id: 783,
      name: "Inner Shirt 2",
      bodyShapeId: 2,
      partTypeId: 2,
      colorId: 12,
      images: [
        {
          filename: "tirantas_02_08",
          zIndex: 12
        }
      ]
    },
    {
      id: 784,
      name: "Inner Shirt 3",
      bodyShapeId: 3,
      partTypeId: 2,
      colorId: 5,
      images: [
        {
          filename: "tirantas_03a_01",
          zIndex: 12
        }
      ]
    },
    {
      id: 785,
      name: "Inner Shirt 3",
      bodyShapeId: 3,
      partTypeId: 2,
      colorId: 6,
      images: [
        {
          filename: "tirantas_03a_02",
          zIndex: 12
        }
      ]
    },
    {
      id: 786,
      name: "Inner Shirt 3",
      bodyShapeId: 3,
      partTypeId: 2,
      colorId: 7,
      images: [
        {
          filename: "tirantas_03a_03",
          zIndex: 12
        }
      ]
    },
    {
      id: 787,
      name: "Inner Shirt 3",
      bodyShapeId: 3,
      partTypeId: 2,
      colorId: 8,
      images: [
        {
          filename: "tirantas_03a_04",
          zIndex: 12
        }
      ]
    },
    {
      id: 788,
      name: "Inner Shirt 3",
      bodyShapeId: 3,
      partTypeId: 2,
      colorId: 9,
      images: [
        {
          filename: "tirantas_03a_05",
          zIndex: 12
        }
      ]
    },
    {
      id: 789,
      name: "Inner Shirt 3",
      bodyShapeId: 3,
      partTypeId: 2,
      colorId: 10,
      images: [
        {
          filename: "tirantas_03a_06",
          zIndex: 12
        }
      ]
    },
    {
      id: 790,
      name: "Inner Shirt 3",
      bodyShapeId: 3,
      partTypeId: 2,
      colorId: 11,
      images: [
        {
          filename: "tirantas_03a_07",
          zIndex: 12
        }
      ]
    },
    {
      id: 791,
      name: "Inner Shirt 3",
      bodyShapeId: 3,
      partTypeId: 2,
      colorId: 12,
      images: [
        {
          filename: "tirantas_03a_08",
          zIndex: 12
        }
      ]
    },
    {
      id: 792,
      name: "Inner Shirt 4",
      bodyShapeId: 4,
      partTypeId: 2,
      colorId: 5,
      images: [
        {
          filename: "tirantas_03b_01",
          zIndex: 12
        }
      ]
    },
    {
      id: 793,
      name: "Inner Shirt 4",
      bodyShapeId: 4,
      partTypeId: 2,
      colorId: 6,
      images: [
        {
          filename: "tirantas_03b_02",
          zIndex: 12
        }
      ]
    },
    {
      id: 794,
      name: "Inner Shirt 4",
      bodyShapeId: 4,
      partTypeId: 2,
      colorId: 7,
      images: [
        {
          filename: "tirantas_03b_03",
          zIndex: 12
        }
      ]
    },
    {
      id: 795,
      name: "Inner Shirt 4",
      bodyShapeId: 4,
      partTypeId: 2,
      colorId: 8,
      images: [
        {
          filename: "tirantas_03b_04",
          zIndex: 12
        }
      ]
    },
    {
      id: 796,
      name: "Inner Shirt 4",
      bodyShapeId: 4,
      partTypeId: 2,
      colorId: 9,
      images: [
        {
          filename: "tirantas_03b_05",
          zIndex: 12
        }
      ]
    },
    {
      id: 797,
      name: "Inner Shirt 4",
      bodyShapeId: 4,
      partTypeId: 2,
      colorId: 10,
      images: [
        {
          filename: "tirantas_03b_06",
          zIndex: 12
        }
      ]
    },
    {
      id: 798,
      name: "Inner Shirt 4",
      bodyShapeId: 4,
      partTypeId: 2,
      colorId: 11,
      images: [
        {
          filename: "tirantas_03b_07",
          zIndex: 12
        }
      ]
    },
    {
      id: 799,
      name: "Inner Shirt 4",
      bodyShapeId: 4,
      partTypeId: 2,
      colorId: 12,
      images: [
        {
          filename: "tirantas_03b_08",
          zIndex: 12
        }
      ]
    },
    {
      id: 800,
      name: "Inner Shirt 5",
      bodyShapeId: 5,
      partTypeId: 2,
      colorId: 5,
      images: [
        {
          filename: "tirantas_04a_01",
          zIndex: 12
        }
      ]
    },
    {
      id: 801,
      name: "Inner Shirt 5",
      bodyShapeId: 5,
      partTypeId: 2,
      colorId: 6,
      images: [
        {
          filename: "tirantas_04a_02",
          zIndex: 12
        }
      ]
    },
    {
      id: 802,
      name: "Inner Shirt 5",
      bodyShapeId: 5,
      partTypeId: 2,
      colorId: 7,
      images: [
        {
          filename: "tirantas_04a_03",
          zIndex: 12
        }
      ]
    },
    {
      id: 803,
      name: "Inner Shirt 5",
      bodyShapeId: 5,
      partTypeId: 2,
      colorId: 8,
      images: [
        {
          filename: "tirantas_04a_04",
          zIndex: 12
        }
      ]
    },
    {
      id: 804,
      name: "Inner Shirt 5",
      bodyShapeId: 5,
      partTypeId: 2,
      colorId: 9,
      images: [
        {
          filename: "tirantas_04a_05",
          zIndex: 12
        }
      ]
    },
    {
      id: 805,
      name: "Inner Shirt 5",
      bodyShapeId: 5,
      partTypeId: 2,
      colorId: 10,
      images: [
        {
          filename: "tirantas_04a_06",
          zIndex: 12
        }
      ]
    },
    {
      id: 806,
      name: "Inner Shirt 5",
      bodyShapeId: 5,
      partTypeId: 2,
      colorId: 11,
      images: [
        {
          filename: "tirantas_04a_07",
          zIndex: 12
        }
      ]
    },
    {
      id: 807,
      name: "Inner Shirt 5",
      bodyShapeId: 5,
      partTypeId: 2,
      colorId: 12,
      images: [
        {
          filename: "tirantas_04a_08",
          zIndex: 12
        }
      ]
    },
    {
      id: 808,
      name: "Inner Shirt 6",
      bodyShapeId: 6,
      partTypeId: 2,
      colorId: 5,
      images: [
        {
          filename: "tirantas_04b_01",
          zIndex: 12
        }
      ]
    },
    {
      id: 809,
      name: "Inner Shirt 6",
      bodyShapeId: 6,
      partTypeId: 2,
      colorId: 6,
      images: [
        {
          filename: "tirantas_04b_02",
          zIndex: 12
        }
      ]
    },
    {
      id: 810,
      name: "Inner Shirt 6",
      bodyShapeId: 6,
      partTypeId: 2,
      colorId: 7,
      images: [
        {
          filename: "tirantas_04b_03",
          zIndex: 12
        }
      ]
    },
    {
      id: 811,
      name: "Inner Shirt 6",
      bodyShapeId: 6,
      partTypeId: 2,
      colorId: 8,
      images: [
        {
          filename: "tirantas_04b_04",
          zIndex: 12
        }
      ]
    },
    {
      id: 812,
      name: "Inner Shirt 6",
      bodyShapeId: 6,
      partTypeId: 2,
      colorId: 9,
      images: [
        {
          filename: "tirantas_04b_05",
          zIndex: 12
        }
      ]
    },
    {
      id: 813,
      name: "Inner Shirt 6",
      bodyShapeId: 6,
      partTypeId: 2,
      colorId: 10,
      images: [
        {
          filename: "tirantas_04b_06",
          zIndex: 12
        }
      ]
    },
    {
      id: 814,
      name: "Inner Shirt 6",
      bodyShapeId: 6,
      partTypeId: 2,
      colorId: 11,
      images: [
        {
          filename: "tirantas_04b_07",
          zIndex: 12
        }
      ]
    },
    {
      id: 815,
      name: "Inner Shirt 6",
      bodyShapeId: 6,
      partTypeId: 2,
      colorId: 12,
      images: [
        {
          filename: "tirantas_04b_08",
          zIndex: 12
        }
      ]
    },
    {
      id: 816,
      name: "Inner Shirt 7",
      bodyShapeId: 7,
      partTypeId: 2,
      colorId: 5,
      images: [
        {
          filename: "tirantas_05a_01",
          zIndex: 12
        }
      ]
    },
    {
      id: 817,
      name: "Inner Shirt 7",
      bodyShapeId: 7,
      partTypeId: 2,
      colorId: 6,
      images: [
        {
          filename: "tirantas_05a_02",
          zIndex: 12
        }
      ]
    },
    {
      id: 818,
      name: "Inner Shirt 7",
      bodyShapeId: 7,
      partTypeId: 2,
      colorId: 7,
      images: [
        {
          filename: "tirantas_05a_03",
          zIndex: 12
        }
      ]
    },
    {
      id: 819,
      name: "Inner Shirt 7",
      bodyShapeId: 7,
      partTypeId: 2,
      colorId: 8,
      images: [
        {
          filename: "tirantas_05a_04",
          zIndex: 12
        }
      ]
    },
    {
      id: 820,
      name: "Inner Shirt 7",
      bodyShapeId: 7,
      partTypeId: 2,
      colorId: 9,
      images: [
        {
          filename: "tirantas_05a_05",
          zIndex: 12
        }
      ]
    },
    {
      id: 821,
      name: "Inner Shirt 7",
      bodyShapeId: 7,
      partTypeId: 2,
      colorId: 10,
      images: [
        {
          filename: "tirantas_05a_06",
          zIndex: 12
        }
      ]
    },
    {
      id: 822,
      name: "Inner Shirt 7",
      bodyShapeId: 7,
      partTypeId: 2,
      colorId: 11,
      images: [
        {
          filename: "tirantas_05a_07",
          zIndex: 12
        }
      ]
    },
    {
      id: 823,
      name: "Inner Shirt 7",
      bodyShapeId: 7,
      partTypeId: 2,
      colorId: 12,
      images: [
        {
          filename: "tirantas_05a_08",
          zIndex: 12
        }
      ]
    },
    {
      id: 824,
      name: "Inner Shirt 8",
      bodyShapeId: 8,
      partTypeId: 2,
      colorId: 5,
      images: [
        {
          filename: "tirantas_05b_01",
          zIndex: 12
        }
      ]
    },
    {
      id: 825,
      name: "Inner Shirt 8",
      bodyShapeId: 8,
      partTypeId: 2,
      colorId: 6,
      images: [
        {
          filename: "tirantas_05b_02",
          zIndex: 12
        }
      ]
    },
    {
      id: 826,
      name: "Inner Shirt 8",
      bodyShapeId: 8,
      partTypeId: 2,
      colorId: 7,
      images: [
        {
          filename: "tirantas_05b_03",
          zIndex: 12
        }
      ]
    },
    {
      id: 827,
      name: "Inner Shirt 8",
      bodyShapeId: 8,
      partTypeId: 2,
      colorId: 8,
      images: [
        {
          filename: "tirantas_05b_04",
          zIndex: 12
        }
      ]
    },
    {
      id: 828,
      name: "Inner Shirt 8",
      bodyShapeId: 8,
      partTypeId: 2,
      colorId: 9,
      images: [
        {
          filename: "tirantas_05b_05",
          zIndex: 12
        }
      ]
    },
    {
      id: 829,
      name: "Inner Shirt 8",
      bodyShapeId: 8,
      partTypeId: 2,
      colorId: 10,
      images: [
        {
          filename: "tirantas_05b_06",
          zIndex: 12
        }
      ]
    },
    {
      id: 830,
      name: "Inner Shirt 8",
      bodyShapeId: 8,
      partTypeId: 2,
      colorId: 11,
      images: [
        {
          filename: "tirantas_05b_07",
          zIndex: 12
        }
      ]
    },
    {
      id: 831,
      name: "Inner Shirt 8",
      bodyShapeId: 8,
      partTypeId: 2,
      colorId: 12,
      images: [
        {
          filename: "tirantas_05b_08",
          zIndex: 12
        }
      ]
    },
    {
      id: 832,
      name: "Inner Shirt 9",
      bodyShapeId: 9,
      partTypeId: 2,
      colorId: 5,
      images: [
        {
          filename: "tirantas_06a_01",
          zIndex: 12
        }
      ]
    },
    {
      id: 833,
      name: "Inner Shirt 9",
      bodyShapeId: 9,
      partTypeId: 2,
      colorId: 6,
      images: [
        {
          filename: "tirantas_06a_02",
          zIndex: 12
        }
      ]
    },
    {
      id: 834,
      name: "Inner Shirt 9",
      bodyShapeId: 9,
      partTypeId: 2,
      colorId: 7,
      images: [
        {
          filename: "tirantas_06a_03",
          zIndex: 12
        }
      ]
    },
    {
      id: 835,
      name: "Inner Shirt 9",
      bodyShapeId: 9,
      partTypeId: 2,
      colorId: 8,
      images: [
        {
          filename: "tirantas_06a_04",
          zIndex: 12
        }
      ]
    },
    {
      id: 836,
      name: "Inner Shirt 9",
      bodyShapeId: 9,
      partTypeId: 2,
      colorId: 9,
      images: [
        {
          filename: "tirantas_06a_05",
          zIndex: 12
        }
      ]
    },
    {
      id: 837,
      name: "Inner Shirt 9",
      bodyShapeId: 9,
      partTypeId: 2,
      colorId: 10,
      images: [
        {
          filename: "tirantas_06a_06",
          zIndex: 12
        }
      ]
    },
    {
      id: 838,
      name: "Inner Shirt 9",
      bodyShapeId: 9,
      partTypeId: 2,
      colorId: 11,
      images: [
        {
          filename: "tirantas_06a_07",
          zIndex: 12
        }
      ]
    },
    {
      id: 839,
      name: "Inner Shirt 9",
      bodyShapeId: 9,
      partTypeId: 2,
      colorId: 12,
      images: [
        {
          filename: "tirantas_06a_08",
          zIndex: 12
        }
      ]
    },
    {
      id: 840,
      name: "Inner Shirt 10",
      bodyShapeId: 10,
      partTypeId: 2,
      colorId: 5,
      images: [
        {
          filename: "tirantas_06b_01",
          zIndex: 12
        }
      ]
    },
    {
      id: 841,
      name: "Inner Shirt 10",
      bodyShapeId: 10,
      partTypeId: 2,
      colorId: 6,
      images: [
        {
          filename: "tirantas_06b_02",
          zIndex: 12
        }
      ]
    },
    {
      id: 842,
      name: "Inner Shirt 10",
      bodyShapeId: 10,
      partTypeId: 2,
      colorId: 7,
      images: [
        {
          filename: "tirantas_06b_03",
          zIndex: 12
        }
      ]
    },
    {
      id: 843,
      name: "Inner Shirt 10",
      bodyShapeId: 10,
      partTypeId: 2,
      colorId: 8,
      images: [
        {
          filename: "tirantas_06b_04",
          zIndex: 12
        }
      ]
    },
    {
      id: 844,
      name: "Inner Shirt 10",
      bodyShapeId: 10,
      partTypeId: 2,
      colorId: 9,
      images: [
        {
          filename: "tirantas_06b_05",
          zIndex: 12
        }
      ]
    },
    {
      id: 845,
      name: "Inner Shirt 10",
      bodyShapeId: 10,
      partTypeId: 2,
      colorId: 10,
      images: [
        {
          filename: "tirantas_06b_06",
          zIndex: 12
        }
      ]
    },
    {
      id: 846,
      name: "Inner Shirt 10",
      bodyShapeId: 10,
      partTypeId: 2,
      colorId: 11,
      images: [
        {
          filename: "tirantas_06b_07",
          zIndex: 12
        }
      ]
    },
    {
      id: 847,
      name: "Inner Shirt 10",
      bodyShapeId: 10,
      partTypeId: 2,
      colorId: 12,
      images: [
        {
          filename: "tirantas_06b_08",
          zIndex: 12
        }
      ]
    },
    {
      id: 848,
      name: "Inner Shirt 11",
      bodyShapeId: 11,
      partTypeId: 2,
      colorId: 5,
      images: [
        {
          filename: "tirantas_07a_01",
          zIndex: 12
        }
      ]
    },
    {
      id: 849,
      name: "Inner Shirt 11",
      bodyShapeId: 11,
      partTypeId: 2,
      colorId: 6,
      images: [
        {
          filename: "tirantas_07a_02",
          zIndex: 12
        }
      ]
    },
    {
      id: 850,
      name: "Inner Shirt 11",
      bodyShapeId: 11,
      partTypeId: 2,
      colorId: 7,
      images: [
        {
          filename: "tirantas_07a_03",
          zIndex: 12
        }
      ]
    },
    {
      id: 851,
      name: "Inner Shirt 11",
      bodyShapeId: 11,
      partTypeId: 2,
      colorId: 8,
      images: [
        {
          filename: "tirantas_07a_04",
          zIndex: 12
        }
      ]
    },
    {
      id: 852,
      name: "Inner Shirt 11",
      bodyShapeId: 11,
      partTypeId: 2,
      colorId: 9,
      images: [
        {
          filename: "tirantas_07a_05",
          zIndex: 12
        }
      ]
    },
    {
      id: 853,
      name: "Inner Shirt 11",
      bodyShapeId: 11,
      partTypeId: 2,
      colorId: 10,
      images: [
        {
          filename: "tirantas_07a_06",
          zIndex: 12
        }
      ]
    },
    {
      id: 854,
      name: "Inner Shirt 11",
      bodyShapeId: 11,
      partTypeId: 2,
      colorId: 11,
      images: [
        {
          filename: "tirantas_07a_07",
          zIndex: 12
        }
      ]
    },
    {
      id: 855,
      name: "Inner Shirt 11",
      bodyShapeId: 11,
      partTypeId: 2,
      colorId: 12,
      images: [
        {
          filename: "tirantas_07a_08",
          zIndex: 12
        }
      ]
    },
    {
      id: 856,
      name: "Inner Shirt 12",
      bodyShapeId: 12,
      partTypeId: 2,
      colorId: 5,
      images: [
        {
          filename: "tirantas_07b_01",
          zIndex: 12
        }
      ]
    },
    {
      id: 857,
      name: "Inner Shirt 12",
      bodyShapeId: 12,
      partTypeId: 2,
      colorId: 6,
      images: [
        {
          filename: "tirantas_07b_02",
          zIndex: 12
        }
      ]
    },
    {
      id: 858,
      name: "Inner Shirt 12",
      bodyShapeId: 12,
      partTypeId: 2,
      colorId: 7,
      images: [
        {
          filename: "tirantas_07b_03",
          zIndex: 12
        }
      ]
    },
    {
      id: 859,
      name: "Inner Shirt 12",
      bodyShapeId: 12,
      partTypeId: 2,
      colorId: 8,
      images: [
        {
          filename: "tirantas_07b_04",
          zIndex: 12
        }
      ]
    },
    {
      id: 860,
      name: "Inner Shirt 12",
      bodyShapeId: 12,
      partTypeId: 2,
      colorId: 9,
      images: [
        {
          filename: "tirantas_07b_05",
          zIndex: 12
        }
      ]
    },
    {
      id: 861,
      name: "Inner Shirt 12",
      bodyShapeId: 12,
      partTypeId: 2,
      colorId: 10,
      images: [
        {
          filename: "tirantas_07b_06",
          zIndex: 12
        }
      ]
    },
    {
      id: 862,
      name: "Inner Shirt 12",
      bodyShapeId: 12,
      partTypeId: 2,
      colorId: 11,
      images: [
        {
          filename: "tirantas_07b_07",
          zIndex: 12
        }
      ]
    },
    {
      id: 863,
      name: "Inner Shirt 12",
      bodyShapeId: 12,
      partTypeId: 2,
      colorId: 12,
      images: [
        {
          filename: "tirantas_07b_08",
          zIndex: 12
        }
      ]
    },
    {
      id: 864,
      name: "Shirt Buttoned 1",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_01_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_01_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_01_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 865,
      name: "Shirt Buttoned 1",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_01_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_01_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_01_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 866,
      name: "Shirt Buttoned 1",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_01_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_01_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_01_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 867,
      name: "Shirt Buttoned 1",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_01_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_01_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_01_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 868,
      name: "Shirt Buttoned 1",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_01_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_01_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_01_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 869,
      name: "Shirt Buttoned 1",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_01_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_01_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_01_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 870,
      name: "Shirt Buttoned 1",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_01_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_01_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_01_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 871,
      name: "Shirt Buttoned 1",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_01_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_01_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_01_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 872,
      name: "Shirt buttoned 1",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_02_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_02_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_02_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 873,
      name: "Shirt buttoned 1",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_02_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_02_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_02_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 874,
      name: "Shirt buttoned 1",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_02_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_02_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_02_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 875,
      name: "Shirt buttoned 1",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_02_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_02_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_02_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 876,
      name: "Shirt buttoned 1",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_02_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_02_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_02_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 877,
      name: "Shirt buttoned 1",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_02_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_02_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_02_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 878,
      name: "Shirt Buttoned 1",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_02_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_02_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_02_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 879,
      name: "Shirt Buttoned 1",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_02_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_02_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_02_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 880,
      name: "Shirt Buttoned 1",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_03a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 881,
      name: "Shirt Buttoned 1",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_03a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 882,
      name: "Shirt Buttoned 1",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_03a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 883,
      name: "Shirt Buttoned 1",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_03a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 884,
      name: "Shirt Buttoned 1",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_03a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 885,
      name: "Shirt Buttoned 1",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_03a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 886,
      name: "Shirt Buttoned 1",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_03a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 887,
      name: "Shirt Buttoned 1",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_03a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 888,
      name: "Shirt Buttoned 1",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_03b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 889,
      name: "Shirt Buttoned 1",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_03b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 890,
      name: "Shirt Buttoned 1",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_03b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 891,
      name: "Shirt Buttoned 1",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_03b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 892,
      name: "Shirt Buttoned 1",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_03b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 893,
      name: "Shirt Buttoned 1",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_03b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 894,
      name: "Shirt Buttoned 1",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_03b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 895,
      name: "Shirt Buttoned 1",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_03b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 896,
      name: "Shirt Buttoned 1",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_04a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 897,
      name: "Shirt Buttoned 1",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_04a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 898,
      name: "Shirt Buttoned 1",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_04a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 899,
      name: "Shirt Buttoned 1",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_04a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 900,
      name: "Shirt Buttoned 1",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_04a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 901,
      name: "Shirt Buttoned 1",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_04a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 902,
      name: "Shirt Buttoned 1",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_04a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 903,
      name: "Shirt Buttoned 1",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_04a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 904,
      name: "Shirt Buttoned 1",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_04b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 905,
      name: "Shirt Buttoned 1",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_04b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 906,
      name: "Shirt Buttoned 1",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_04b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 907,
      name: "Shirt Buttoned 1",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_04b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 908,
      name: "Shirt Buttoned 1",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_04b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 909,
      name: "Shirt Buttoned 1",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_04b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 910,
      name: "Shirt Buttoned 1",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_04b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 911,
      name: "Shirt Buttoned 1",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_04b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 912,
      name: "Shirt Buttoned 1",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_05a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 913,
      name: "Shirt Buttoned 1",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_05a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 914,
      name: "Shirt Buttoned 1",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_05a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 915,
      name: "Shirt Buttoned 1",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_05a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 916,
      name: "Shirt Buttoned 1",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_05a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 917,
      name: "Shirt Buttoned 1",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_05a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 918,
      name: "Shirt Buttoned 1",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_05a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 919,
      name: "Shirt Buttoned 1",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_05a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 920,
      name: "Shirt Buttoned 1",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_05b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 921,
      name: "Shirt Buttoned 1",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_05b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 922,
      name: "Shirt Buttoned 1",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_05b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 923,
      name: "Shirt Buttoned 1",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_05b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 924,
      name: "Shirt Buttoned 1",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_05b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 925,
      name: "Shirt Buttoned 1",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_05b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 926,
      name: "Shirt Buttoned 1",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_05b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 927,
      name: "Shirt Buttoned 1",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_05b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 928,
      name: "Shirt Buttoned 1",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_06a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 929,
      name: "Shirt Buttoned 1",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_06a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 930,
      name: "Shirt Buttoned 1",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_06a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 931,
      name: "Shirt Buttoned 1",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_06a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 932,
      name: "Shirt Buttoned 1",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_06a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 933,
      name: "Shirt Buttoned 1",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_06a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 934,
      name: "Shirt Buttoned 1",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_06a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 935,
      name: "Shirt Buttoned 1",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_06a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 936,
      name: "Shirt Buttoned 1",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_06b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 937,
      name: "Shirt Buttoned 1",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_06b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 938,
      name: "Shirt Buttoned 1",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_06b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 939,
      name: "Shirt Buttoned 1",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_06b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 940,
      name: "Shirt Buttoned 1",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_06b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 941,
      name: "Shirt Buttoned 1",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_06b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 942,
      name: "Shirt Buttoned 1",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_06b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 943,
      name: "Shirt Buttoned 1",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_06b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 944,
      name: "Shirt Buttoned 1",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_07a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 945,
      name: "Shirt Buttoned 1",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_07a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 946,
      name: "Shirt Buttoned 1",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_07a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 947,
      name: "Shirt Buttoned 1",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_07a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 948,
      name: "Shirt Buttoned 1",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_07a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 949,
      name: "Shirt Buttoned 1",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_07a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 950,
      name: "Shirt Buttoned 1",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_07a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 951,
      name: "Shirt Buttoned 1",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_07a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 952,
      name: "Shirt Buttoned 1",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_07b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 953,
      name: "Shirt Buttoned 1",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_07b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 954,
      name: "Shirt Buttoned 1",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_07b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 955,
      name: "Shirt Buttoned 1",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_07b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 956,
      name: "Shirt Buttoned 1",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_07b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 957,
      name: "Shirt Buttoned 1",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_07b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 958,
      name: "Shirt Buttoned 1",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_07b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 959,
      name: "Shirt Buttoned 1",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_07b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 960,
      name: "Shirt Buttoned 2",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_01_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_01_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_01_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 961,
      name: "Shirt Buttoned 2",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_01_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_01_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_01_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 962,
      name: "Shirt Buttoned 2",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_01_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_01_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_01_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 963,
      name: "Shirt Buttoned 2",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_01_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_01_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_01_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 964,
      name: "Shirt Buttoned 2",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_01_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_01_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_01_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 965,
      name: "Shirt Buttoned 2",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_01_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_01_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_01_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 966,
      name: "Shirt Buttoned 2",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_01_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_01_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_01_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 967,
      name: "Shirt Buttoned 2",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_01_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_01_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_01_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 968,
      name: "Shirt Buttoned 2",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_02_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_02_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_02_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 969,
      name: "Shirt Buttoned 2",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_02_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_02_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_02_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 970,
      name: "Shirt Buttoned 2",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_02_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_02_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_02_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 971,
      name: "Shirt Buttoned 2",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_02_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_02_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_02_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 972,
      name: "Shirt Buttoned 2",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_02_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_02_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_02_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 973,
      name: "Shirt Buttoned 2",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_02_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_02_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_02_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 974,
      name: "Shirt Buttoned 2",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_02_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_02_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_02_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 975,
      name: "Shirt Buttoned 2",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_02_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_02_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_02_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 976,
      name: "Shirt Buttoned 2",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_03a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 977,
      name: "Shirt Buttoned 2",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_03a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 978,
      name: "Shirt Buttoned 2",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_03a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 979,
      name: "Shirt Buttoned 2",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_03a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 980,
      name: "Shirt Buttoned 2",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_03a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 981,
      name: "Shirt Buttoned 2",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_03a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 982,
      name: "Shirt Buttoned 2",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_03a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 983,
      name: "Shirt Buttoned 2",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_03a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 984,
      name: "Shirt Buttoned 2",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_03b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 985,
      name: "Shirt Buttoned 2",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_03b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 986,
      name: "Shirt Buttoned 2",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_03b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 987,
      name: "Shirt Buttoned 2",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_03b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 988,
      name: "Shirt Buttoned 2",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_03b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 989,
      name: "Shirt Buttoned 2",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_03b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 990,
      name: "Shirt Buttoned 2",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_03b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 991,
      name: "Shirt Buttoned 2",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_03b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 992,
      name: "Shirt Buttoned 2",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_04a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 993,
      name: "Shirt Buttoned 2",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_04a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 994,
      name: "Shirt Buttoned 2",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_04a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 995,
      name: "Shirt Buttoned 2",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_04a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 996,
      name: "Shirt Buttoned 2",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_04a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 997,
      name: "Shirt Buttoned 2",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_04a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 998,
      name: "Shirt Buttoned 2",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_04a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 999,
      name: "Shirt Buttoned 2",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_04a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1000,
      name: "Shirt Buttoned 2",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_04b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1001,
      name: "Shirt Buttoned 2",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_04b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1002,
      name: "Shirt Buttoned 2",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_04b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1003,
      name: "Shirt Buttoned 2",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_04b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1004,
      name: "Shirt Buttoned 2",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_04b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1005,
      name: "Shirt Buttoned 2",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_04b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1006,
      name: "Shirt Buttoned 2",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_04b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1007,
      name: "Shirt Buttoned 2",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_04b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1008,
      name: "Shirt Buttoned 2",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_05a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1009,
      name: "Shirt Buttoned 2",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_05a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1010,
      name: "Shirt Buttoned 2",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_05a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1011,
      name: "Shirt Buttoned 2",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_05a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1012,
      name: "Shirt Buttoned 2",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_05a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1013,
      name: "Shirt Buttoned 2",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_05a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1014,
      name: "Shirt Buttoned 2",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_05a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1015,
      name: "Shirt Buttoned 2",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_05a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1016,
      name: "Shirt Buttoned 2",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_05b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1017,
      name: "Shirt Buttoned 2",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_05b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1018,
      name: "Shirt Buttoned 2",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_05b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1019,
      name: "Shirt Buttoned 2",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_05b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1020,
      name: "Shirt Buttoned 2",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_05b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1021,
      name: "Shirt Buttoned 2",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_05b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1022,
      name: "Shirt Buttoned 2",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_05b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1023,
      name: "Shirt Buttoned 2",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_05b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1024,
      name: "Shirt Buttoned 2",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_06a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1025,
      name: "Shirt Buttoned 2",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_06a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1026,
      name: "Shirt Buttoned 2",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_06a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1027,
      name: "Shirt Buttoned 2",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_06a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1028,
      name: "Shirt Buttoned 2",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_06a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1029,
      name: "Shirt Buttoned 2",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_06a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1030,
      name: "Shirt Buttoned 2",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_06a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1031,
      name: "Shirt Buttoned 2",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_06a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1032,
      name: "Shirt Buttoned 2",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_06b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1033,
      name: "Shirt Buttoned 2",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_06b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1034,
      name: "Shirt Buttoned 2",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_06b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1035,
      name: "Shirt Buttoned 2",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_06b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1036,
      name: "Shirt Buttoned 2",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_06b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1037,
      name: "Shirt Buttoned 2",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_06b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1038,
      name: "Shirt Buttoned 2",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_06b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1039,
      name: "Shirt Buttoned 2",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_06b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1040,
      name: "Shirt Buttoned 2",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_07a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1041,
      name: "Shirt Buttoned 2",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_07a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1042,
      name: "Shirt Buttoned 2",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_07a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1043,
      name: "Shirt Buttoned 2",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_07a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1044,
      name: "Shirt Buttoned 2",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_07a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1045,
      name: "Shirt Buttoned 2",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_07a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1046,
      name: "Shirt Buttoned 2",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_07a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1047,
      name: "Shirt Buttoned 2",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_07a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1048,
      name: "Shirt Buttoned 2",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_07b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1049,
      name: "Shirt Buttoned 2",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_07b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1050,
      name: "Shirt Buttoned 2",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_07b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1051,
      name: "Shirt Buttoned 2",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_07b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1052,
      name: "Shirt Buttoned 2",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_07b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1053,
      name: "Shirt Buttoned 2",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_07b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1054,
      name: "Shirt Buttoned 2",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_07b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1055,
      name: "Shirt Buttoned 2",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_07b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1056,
      name: "Shirt Buttoned 3",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_01_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_01_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_01_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1057,
      name: "Shirt Buttoned 3",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_01_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_01_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_01_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1058,
      name: "Shirt Buttoned 3",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_01_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_01_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_01_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1059,
      name: "Shirt Buttoned 3",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_01_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_01_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_01_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1060,
      name: "Shirt Buttoned 3",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_01_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_01_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_01_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1061,
      name: "Shirt Buttoned 3",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_01_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_01_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_01_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1062,
      name: "Shirt Buttoned 3",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_01_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_01_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_01_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1063,
      name: "Shirt Buttoned 3",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_01_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_01_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_01_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1064,
      name: "Shirt Buttoned 3",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_02_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_02_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_02_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1065,
      name: "Shirt Buttoned 3",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_02_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_02_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_02_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1066,
      name: "Shirt Buttoned 3",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_02_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_02_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_02_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1067,
      name: "Shirt Buttoned 3",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_02_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_02_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_02_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1068,
      name: "Shirt Buttoned 3",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_02_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_02_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_02_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1069,
      name: "Shirt Buttoned 3",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_02_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_02_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_02_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1070,
      name: "Shirt Buttoned 3",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_02_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_02_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_02_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1071,
      name: "Shirt Buttoned 3",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_02_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_02_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_02_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1072,
      name: "Shirt Buttoned 3",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_03a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1073,
      name: "Shirt Buttoned 3",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_03a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1074,
      name: "Shirt Buttoned 3",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_03a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1075,
      name: "Shirt Buttoned 3",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_03a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1076,
      name: "Shirt Buttoned 3",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_03a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1077,
      name: "Shirt Buttoned 3",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_03a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1078,
      name: "Shirt Buttoned 3",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_03a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1079,
      name: "Shirt Buttoned 3",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_03a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1080,
      name: "Shirt Buttoned 3",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_03b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1081,
      name: "Shirt Buttoned 3",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_03b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1082,
      name: "Shirt Buttoned 3",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_03b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1083,
      name: "Shirt Buttoned 3",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_03b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1084,
      name: "Shirt Buttoned 3",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_03b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1085,
      name: "Shirt Buttoned 3",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_03b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1086,
      name: "Shirt Buttoned 3",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_03b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1087,
      name: "Shirt Buttoned 3",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_03b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1088,
      name: "Shirt Buttoned 3",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_04a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1089,
      name: "Shirt Buttoned 3",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_04a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1090,
      name: "Shirt Buttoned 3",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_04a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1091,
      name: "Shirt Buttoned 3",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_04a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1092,
      name: "Shirt Buttoned 3",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_04a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1093,
      name: "Shirt Buttoned 3",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_04a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1094,
      name: "Shirt Buttoned 3",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_04a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1095,
      name: "Shirt Buttoned 3",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_04a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1096,
      name: "Shirt Buttoned 3",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_04b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1097,
      name: "Shirt Buttoned 3",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_04b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1098,
      name: "Shirt Buttoned 3",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_04b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1099,
      name: "Shirt Buttoned 3",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_04b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1100,
      name: "Shirt Buttoned 3",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_04b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1101,
      name: "Shirt Buttoned 3",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_04b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1102,
      name: "Shirt Buttoned 3",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_04b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1103,
      name: "Shirt Buttoned 3",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_04b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1104,
      name: "Shirt Buttoned 3",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_05a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1105,
      name: "Shirt Buttoned 3",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_05a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1106,
      name: "Shirt Buttoned 3",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_05a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1107,
      name: "Shirt Buttoned 3",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_05a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1108,
      name: "Shirt Buttoned 3",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_05a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1109,
      name: "Shirt Buttoned 3",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_05a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1110,
      name: "Shirt Buttoned 3",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_05a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1111,
      name: "Shirt Buttoned 3",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_05a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1112,
      name: "Shirt Buttoned 3",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_05b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1113,
      name: "Shirt Buttoned 3",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_05b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1114,
      name: "Shirt Buttoned 3",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_05b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1115,
      name: "Shirt Buttoned 3",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_05b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1116,
      name: "Shirt Buttoned 3",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_05b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1117,
      name: "Shirt Buttoned 3",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_05b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1118,
      name: "Shirt Buttoned 3",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_05b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1119,
      name: "Shirt Buttoned 3",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_05b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1120,
      name: "Shirt Buttoned 3",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_06a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1121,
      name: "Shirt Buttoned 3",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_06a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1122,
      name: "Shirt Buttoned 3",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_06a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1123,
      name: "Shirt Buttoned 3",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_06a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1124,
      name: "Shirt Buttoned 3",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_06a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1125,
      name: "Shirt Buttoned 3",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_06a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1126,
      name: "Shirt Buttoned 3",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_06a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1127,
      name: "Shirt Buttoned 3",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_06a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1128,
      name: "Shirt Buttoned 3",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_06b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1129,
      name: "Shirt Buttoned 3",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_06b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1130,
      name: "Shirt Buttoned 3",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_06b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1131,
      name: "Shirt Buttoned 3",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_06b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1132,
      name: "Shirt Buttoned 3",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_06b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1133,
      name: "Shirt Buttoned 3",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_06b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1134,
      name: "Shirt Buttoned 3",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_06b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1135,
      name: "Shirt Buttoned 3",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_06b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1136,
      name: "Shirt Buttoned 3",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_07a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1137,
      name: "Shirt Buttoned 3",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_07a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1138,
      name: "Shirt Buttoned 3",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_07a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1139,
      name: "Shirt Buttoned 3",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_07a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1140,
      name: "Shirt Buttoned 3",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_07a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1141,
      name: "Shirt Buttoned 3",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_07a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1142,
      name: "Shirt Buttoned 3",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_07a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1143,
      name: "Shirt Buttoned 3",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_07a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1144,
      name: "Shirt Buttoned 3",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsocerrada_07b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1145,
      name: "Shirt Buttoned 3",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsocerrada_07b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1146,
      name: "Shirt Buttoned 3",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsocerrada_07b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1147,
      name: "Shirt Buttoned 3",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsocerrada_07b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1148,
      name: "Shirt Buttoned 3",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsocerrada_07b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1149,
      name: "Shirt Buttoned 3",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsocerrada_07b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1150,
      name: "Shirt Buttoned 3",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsocerrada_07b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1151,
      name: "Shirt Buttoned 3",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsocerrada_07b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1152,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_01_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_01_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_01_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1153,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_01_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_01_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_01_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1154,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_01_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_01_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_01_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1155,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_01_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_01_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_01_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1156,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_01_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_01_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_01_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1157,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_01_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_01_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_01_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1158,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_01_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_01_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_01_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1159,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_01_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_01_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_01_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1160,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_02_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_02_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_02_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1161,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_02_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_02_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_02_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1162,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_02_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_02_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_02_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1163,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_02_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_02_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_02_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1164,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_02_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_02_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_02_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1165,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_02_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_02_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_02_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1166,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_02_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_02_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_02_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1167,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_02_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_02_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_02_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1168,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_03a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1169,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_03a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1170,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_03a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1171,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_03a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1172,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_03a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1173,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_03a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1174,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_03a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1175,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_03a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1176,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_03b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1177,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_03b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1178,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_03b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1179,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_03b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1180,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_03b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1181,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_03b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1182,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_03b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1183,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_03b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_03_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_03_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1184,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_04a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1185,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_04a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1186,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_04a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1187,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_04a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1188,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_04a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1189,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_04a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1190,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_04a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1191,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_04a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1192,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_04b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1193,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_04b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1194,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_04b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1195,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_04b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1196,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_04b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1197,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_04b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1198,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_04b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1199,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_04b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_04_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_04_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1200,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_05a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1201,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_05a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1202,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_05a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1203,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_05a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1204,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_05a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1205,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_05a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1206,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_05a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1207,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_05a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1208,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_05b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1209,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_05b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1210,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_05b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1211,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_05b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1212,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_05b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1213,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_05b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1214,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_05b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1215,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_05b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_05_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_05_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1216,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_06a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1217,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_06a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1218,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_06a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1219,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_06a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1220,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_06a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1221,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_06a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1222,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_06a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1223,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_06a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1224,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_06b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1225,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_06b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1226,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_06b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1227,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_06b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1228,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_06b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1229,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_06b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1230,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_06b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1231,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_06b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_06_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_06_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1232,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_07a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1233,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_07a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1234,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_07a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1235,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_07a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1236,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_07a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1237,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_07a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1238,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_07a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1239,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_07a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1240,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_07b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_01",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1241,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_07b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_02",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1242,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_07b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_03",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1243,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_07b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_04",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1244,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_07b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_05",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1245,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_07b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_06",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1246,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_07b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_07",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1247,
      name: "Shirt Unbuttoned 1",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_07b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazob_07_08",
          zIndex: 7
        },
        {
          filename: "camisabrazof_07_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1248,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_01_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_01_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_01_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1249,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_01_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_01_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_01_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1250,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_01_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_01_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_01_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1251,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_01_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_01_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_01_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1252,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_01_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_01_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_01_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1253,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_01_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_01_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_01_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1254,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_01_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_01_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_01_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1255,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_01_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_01_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_01_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1256,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_02_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_02_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_02_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1257,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_02_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_02_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_02_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1258,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_02_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_02_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_02_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1259,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_02_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_02_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_02_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1260,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_02_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_02_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_02_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1261,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_02_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_02_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_02_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1262,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_02_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_02_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_02_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1263,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_02_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_02_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_02_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1264,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_03a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1265,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_03a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1266,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_03a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1267,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_03a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1268,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_03a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1269,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_03a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1270,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_03a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1271,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_03a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1272,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_03b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1273,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_03b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1274,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_03b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1275,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_03b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1276,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_03b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1277,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_03b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1278,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_03b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1279,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_03b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_03_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_03_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1280,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_04a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1281,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_04a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1282,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_04a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1283,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_04a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1284,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_04a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1285,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_04a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1286,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_04a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1287,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_04a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1288,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_04b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1289,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_04b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1290,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_04b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1291,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_04b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1292,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_04b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1293,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_04b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1294,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_04b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1295,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_04b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_04_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_04_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1296,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_05a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1297,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_05a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1298,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_05a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1299,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_05a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1300,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_05a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1301,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_05a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1302,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_05a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1303,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_05a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1304,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_05b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1305,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_05b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1306,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_05b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1307,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_05b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1308,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_05b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1309,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_05b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1310,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_05b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1311,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_05b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_05_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_05_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1312,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_06a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1313,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_06a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1314,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_06a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1315,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_06a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1316,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_06a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1317,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_06a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1318,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_06a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1319,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_06a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1320,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_06b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1321,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_06b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1322,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_06b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1323,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_06b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1324,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_06b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1325,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_06b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1326,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_06b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1327,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_06b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_06_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_06_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1328,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_07a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1329,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_07a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1330,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_07a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1331,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_07a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1332,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_07a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1333,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_07a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1334,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_07a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1335,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_07a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1336,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_07b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_01",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1337,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_07b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_02",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1338,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_07b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_03",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1339,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_07b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_04",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1340,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_07b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_05",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1341,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_07b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_06",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1342,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_07b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_07",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1343,
      name: "Shirt Unbuttoned 2",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_07b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazomediab_07_08",
          zIndex: 7
        },
        {
          filename: "camisabrazomediaf_07_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1344,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_01_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_01_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_01_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1345,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_01_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_01_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_01_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1346,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_01_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_01_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_01_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1347,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_01_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_01_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_01_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1348,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_01_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_01_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_01_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1349,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_01_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_01_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_01_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1350,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_01_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_01_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_01_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1351,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 1,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_01_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_01_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_01_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1352,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_02_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_02_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_02_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1353,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_02_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_02_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_02_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1354,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_02_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_02_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_02_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1355,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_02_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_02_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_02_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1356,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_02_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_02_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_02_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1357,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_02_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_02_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_02_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1358,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_02_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_02_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_02_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1359,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 2,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_02_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_02_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_02_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1360,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_03a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1361,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_03a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1362,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_03a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1363,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_03a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1364,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_03a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1365,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_03a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1366,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_03a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1367,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 3,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_03a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1368,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_03b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1369,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_03b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1370,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_03b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1371,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_03b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1372,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_03b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1373,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_03b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1374,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_03b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1375,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 4,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_03b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_03_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_03_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1376,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_04a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1377,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_04a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1378,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_04a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1379,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_04a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1380,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_04a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1381,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_04a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1382,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_04a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1383,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 5,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_04a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1384,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_04b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1385,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_04b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1386,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_04b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1387,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_04b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1388,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_04b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1389,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_04b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1390,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_04b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1391,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 6,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_04b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_04_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_04_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1392,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_05a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1393,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_05a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1394,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_05a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1395,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_05a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1396,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_05a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1397,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_05a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1398,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_05a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1399,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 7,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_05a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1400,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_05b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1401,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_05b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1402,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_05b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1403,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_05b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1404,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_05b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1405,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_05b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1406,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_05b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1407,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 8,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_05b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_05_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_05_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1408,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_06a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1409,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_06a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1410,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_06a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1411,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_06a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1412,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_06a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1413,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_06a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1414,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_06a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1415,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 9,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_06a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1416,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_06b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1417,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_06b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1418,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_06b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1419,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_06b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1420,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_06b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1421,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_06b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1422,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_06b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1423,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 10,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_06b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_06_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_06_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1424,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_07a_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1425,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_07a_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1426,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_07a_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1427,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_07a_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1428,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_07a_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1429,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_07a_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1430,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_07a_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1431,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 11,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_07a_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1432,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 5,
      images: [
        {
          filename: "camisatorsoabierta_07b_01",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_01",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_01",
          zIndex: 18
        }
      ]
    },
    {
      id: 1433,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 6,
      images: [
        {
          filename: "camisatorsoabierta_07b_02",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_02",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_02",
          zIndex: 18
        }
      ]
    },
    {
      id: 1434,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 7,
      images: [
        {
          filename: "camisatorsoabierta_07b_03",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_03",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_03",
          zIndex: 18
        }
      ]
    },
    {
      id: 1435,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 8,
      images: [
        {
          filename: "camisatorsoabierta_07b_04",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_04",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_04",
          zIndex: 18
        }
      ]
    },
    {
      id: 1436,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 9,
      images: [
        {
          filename: "camisatorsoabierta_07b_05",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_05",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_05",
          zIndex: 18
        }
      ]
    },
    {
      id: 1437,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 10,
      images: [
        {
          filename: "camisatorsoabierta_07b_06",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_06",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_06",
          zIndex: 18
        }
      ]
    },
    {
      id: 1438,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 11,
      images: [
        {
          filename: "camisatorsoabierta_07b_07",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_07",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_07",
          zIndex: 18
        }
      ]
    },
    {
      id: 1439,
      name: "Shirt Unbuttoned 3",
      bodyShapeId: 12,
      partTypeId: 3,
      colorId: 12,
      images: [
        {
          filename: "camisatorsoabierta_07b_08",
          zIndex: 13
        },
        {
          filename: "camisabrazolargab_07_08",
          zIndex: 7
        },
        {
          filename: "camisabrazolargaf_07_08",
          zIndex: 18
        }
      ]
    },
    {
      id: 1440,
      name: "Piercings 1",
      partTypeId: 15,
      colorId: 18,
      images: [
        {
          filename: "complemento_01_01",
          zIndex: 30
        }
      ]
    },
    {
      id: 1441,
      name: "Piercings 1",
      partTypeId: 15,
      colorId: 5,
      images: [
        {
          filename: "complemento_01_02",
          zIndex: 30
        }
      ]
    },
    {
      id: 1442,
      name: "Piercings 1",
      partTypeId: 15,
      colorId: 15,
      images: [
        {
          filename: "complemento_01_03",
          zIndex: 30
        }
      ]
    },
    {
      id: 1443,
      name: "Piercings 2",
      partTypeId: 15,
      colorId: 15,
      images: [
        {
          filename: "complemento_02_01",
          zIndex: 30
        }
      ]
    },
    {
      id: 1444,
      name: "Piercings 2",
      partTypeId: 15,
      colorId: 18,
      images: [
        {
          filename: "complemento_02_02",
          zIndex: 30
        }
      ]
    },
    {
      id: 1445,
      name: "Piercings 3",
      partTypeId: 15,
      colorId: 18,
      images: [
        {
          filename: "complemento_03_01",
          zIndex: 30
        }
      ]
    },
    {
      id: 1446,
      name: "Piercings 3",
      partTypeId: 15,
      colorId: 5,
      images: [
        {
          filename: "complemento_03_02",
          zIndex: 30
        }
      ]
    },
    {
      id: 1447,
      name: "Piercings 3",
      partTypeId: 15,
      colorId: 15,
      images: [
        {
          filename: "complemento_03_03",
          zIndex: 30
        }
      ]
    },
    {
      id: 1448,
      name: "Glasses 1",
      partTypeId: 11,
      colorId: 5,
      images: [
        {
          filename: "gafas_01_01",
          zIndex: 31
        }
      ]
    },
    {
      id: 1449,
      name: "Glasses 1",
      partTypeId: 11,
      colorId: 6,
      images: [
        {
          filename: "gafas_01_02",
          zIndex: 31
        }
      ]
    },
    {
      id: 1450,
      name: "Glasses 1",
      partTypeId: 11,
      colorId: 7,
      images: [
        {
          filename: "gafas_01_03",
          zIndex: 31
        }
      ]
    },
    {
      id: 1451,
      name: "Glasses 1",
      partTypeId: 11,
      colorId: 8,
      images: [
        {
          filename: "gafas_01_04",
          zIndex: 31
        }
      ]
    },
    {
      id: 1452,
      name: "Glasses 1",
      partTypeId: 11,
      colorId: 9,
      images: [
        {
          filename: "gafas_01_05",
          zIndex: 31
        }
      ]
    },
    {
      id: 1453,
      name: "Glasses 1",
      partTypeId: 11,
      colorId: 10,
      images: [
        {
          filename: "gafas_01_06",
          zIndex: 31
        }
      ]
    },
    {
      id: 1454,
      name: "Glasses 1",
      partTypeId: 11,
      colorId: 11,
      images: [
        {
          filename: "gafas_01_07",
          zIndex: 31
        }
      ]
    },
    {
      id: 1455,
      name: "Glasses 1",
      partTypeId: 11,
      colorId: 12,
      images: [
        {
          filename: "gafas_01_08",
          zIndex: 31
        }
      ]
    },
    {
      id: 1456,
      name: "Glasses 2",
      partTypeId: 11,
      colorId: 5,
      images: [
        {
          filename: "gafas_02_01",
          zIndex: 31
        }
      ]
    },
    {
      id: 1457,
      name: "Glasses 2",
      partTypeId: 11,
      colorId: 6,
      images: [
        {
          filename: "gafas_02_02",
          zIndex: 31
        }
      ]
    },
    {
      id: 1458,
      name: "Glasses 2",
      partTypeId: 11,
      colorId: 7,
      images: [
        {
          filename: "gafas_02_03",
          zIndex: 31
        }
      ]
    },
    {
      id: 1459,
      name: "Glasses 2",
      partTypeId: 11,
      colorId: 8,
      images: [
        {
          filename: "gafas_02_04",
          zIndex: 31
        }
      ]
    },
    {
      id: 1460,
      name: "Glasses 2",
      partTypeId: 11,
      colorId: 9,
      images: [
        {
          filename: "gafas_02_05",
          zIndex: 31
        }
      ]
    },
    {
      id: 1461,
      name: "Glasses 2",
      partTypeId: 11,
      colorId: 10,
      images: [
        {
          filename: "gafas_02_06",
          zIndex: 31
        }
      ]
    },
    {
      id: 1462,
      name: "Glasses 2",
      partTypeId: 11,
      colorId: 11,
      images: [
        {
          filename: "gafas_02_07",
          zIndex: 31
        }
      ]
    },
    {
      id: 1463,
      name: "Glasses 2",
      partTypeId: 11,
      colorId: 12,
      images: [
        {
          filename: "gafas_02_08",
          zIndex: 31
        }
      ]
    },
    {
      id: 1464,
      name: "Glasses 3",
      partTypeId: 11,
      colorId: 5,
      images: [
        {
          filename: "gafas_03_01",
          zIndex: 31
        }
      ]
    },
    {
      id: 1465,
      name: "Glasses 3",
      partTypeId: 11,
      colorId: 6,
      images: [
        {
          filename: "gafas_03_02",
          zIndex: 31
        }
      ]
    },
    {
      id: 1466,
      name: "Glasses 3",
      partTypeId: 11,
      colorId: 7,
      images: [
        {
          filename: "gafas_03_03",
          zIndex: 31
        }
      ]
    },
    {
      id: 1467,
      name: "Glasses 3",
      partTypeId: 11,
      colorId: 8,
      images: [
        {
          filename: "gafas_03_04",
          zIndex: 31
        }
      ]
    },
    {
      id: 1468,
      name: "Glasses 3",
      partTypeId: 11,
      colorId: 9,
      images: [
        {
          filename: "gafas_03_05",
          zIndex: 31
        }
      ]
    },
    {
      id: 1469,
      name: "Glasses 3",
      partTypeId: 11,
      colorId: 10,
      images: [
        {
          filename: "gafas_03_06",
          zIndex: 31
        }
      ]
    },
    {
      id: 1470,
      name: "Glasses 3",
      partTypeId: 11,
      colorId: 11,
      images: [
        {
          filename: "gafas_03_07",
          zIndex: 31
        }
      ]
    },
    {
      id: 1471,
      name: "Glasses 3",
      partTypeId: 11,
      colorId: 12,
      images: [
        {
          filename: "gafas_03_08",
          zIndex: 31
        }
      ]
    },
    {
      id: 1472,
      name: "Glasses 4",
      partTypeId: 11,
      colorId: 5,
      images: [
        {
          filename: "gafas_04_01",
          zIndex: 31
        }
      ]
    },
    {
      id: 1473,
      name: "Glasses 4",
      partTypeId: 11,
      colorId: 6,
      images: [
        {
          filename: "gafas_04_02",
          zIndex: 31
        }
      ]
    },
    {
      id: 1474,
      name: "Glasses 4",
      partTypeId: 11,
      colorId: 7,
      images: [
        {
          filename: "gafas_04_03",
          zIndex: 31
        }
      ]
    },
    {
      id: 1475,
      name: "Glasses 4",
      partTypeId: 11,
      colorId: 8,
      images: [
        {
          filename: "gafas_04_04",
          zIndex: 31
        }
      ]
    },
    {
      id: 1476,
      name: "Glasses 4",
      partTypeId: 11,
      colorId: 9,
      images: [
        {
          filename: "gafas_04_05",
          zIndex: 31
        }
      ]
    },
    {
      id: 1477,
      name: "Glasses 4",
      partTypeId: 11,
      colorId: 10,
      images: [
        {
          filename: "gafas_04_06",
          zIndex: 31
        }
      ]
    },
    {
      id: 1478,
      name: "Glasses 4",
      partTypeId: 11,
      colorId: 11,
      images: [
        {
          filename: "gafas_04_07",
          zIndex: 31
        }
      ]
    },
    {
      id: 1479,
      name: "Glasses 4",
      partTypeId: 11,
      colorId: 12,
      images: [
        {
          filename: "gafas_04_08",
          zIndex: 31
        }
      ]
    }
  ]
};

export default config;
