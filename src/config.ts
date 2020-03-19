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
      isSkinTone: false,
      hex: "#EFF1F2"
    },
    {
      id: 6,
      name: "Clothing White",
      isSkinTone: false,
      hex: "#616161"
    },
    {
      id: 7,
      name: "Clothing Red",
      isSkinTone: false,
      hex: "#D55D53"
    },
    {
      id: 8,
      name: "Clothing Yellow",
      isSkinTone: false,
      hex: "#E4C069"
    },
    {
      id: 9,
      name: "Clothing Pink",
      isSkinTone: false,
      hex: "#DEEB6E0"
    },
    {
      id: 10,
      name: "Clothing Blue",
      isSkinTone: false,
      hex: "#8FB3B3"
    },
    {
      id: 11,
      name: "Clothing Green",
      isSkinTone: false,
      hex: "#91C27F"
    },
    {
      id: 12,
      name: "Clothing Orange",
      isSkinTone: false,
      hex: "#d97d57"
    },
    {
      id: 13,
      name: "Hair Black",
      isSkinTone: false,
      hex: "#2E2E2E"
    },
    {
      id: 14,
      name: "Hair Brown",
      isSkinTone: false,
      hex: "#ab7d4d"
    },
    {
      id: 15,
      name: "Hair Yellow",
      isSkinTone: false,
      hex: "#EDC879"
    },
    {
      id: 16,
      name: "Hair Orange",
      isSkinTone: false,
      hex: "#EAA05F"
    },
    {
      id: 17,
      name: "Hair Dark Orange",
      isSkinTone: false,
      hex: "#D97D57"
    },
    {
      id: 18,
      name: "Hair Grey",
      isSkinTone: false,
      hex: "#868686"
    },
    {
      id: 19,
      name: "Hair White",
      isSkinTone: false,
      hex: "#E4E4E4"
    },
    {
      id: 20,
      name: "Hair Pink",
      isSkinTone: false,
      hex: "#E48888"
    },
    {
      id: 21,
      name: "Hair Red",
      isSkinTone: false,
      hex: "#E95353"
    },
    {
      id: 22,
      name: "Hair Light Blue",
      isSkinTone: false,
      hex: "#8AB2D7"
    },
    {
      id: 23,
      name: "Hair Blue",
      isSkinTone: false,
      hex: "#1FB2FF"
    },
    {
      id: 24,
      name: "Hair Green",
      isSkinTone: false,
      hex: "#91C27F"
    },
    {
      id: 25,
      name: "Eyes Black",
      isSkinTone: false,
      hex: "#000000"
    },
    {
      id: 26,
      name: "Eyes Grey",
      isSkinTone: false,
      hex: "#616161"
    },
    {
      id: 27,
      name: "Eyes Blue",
      isSkinTone: false,
      hex: "#8FB3B3"
    },
    {
      id: 28,
      name: "Eyes Green",
      isSkinTone: false,
      hex: "#91C27F"
    },
    {
      id: 29,
      name: "Eyes Brown",
      isSkinTone: false,
      hex: "#AB7D4D"
    },
    {
      id: 30,
      name: "Eyes Yellow",
      isSkinTone: false,
      hex: "#E4C069"
    },
    {
      id: 31,
      name: "Eyes Orange",
      isSkinTone: false,
      hex: "#D97D57"
    },
    {
      id: 32,
      name: "Eyes Red",
      isSkinTone: false,
      hex: "#E95353"
    },
    {
      id: 33,
      name: "Lips Dark Brown",
      isSkinTone: false,
      hex: ["#4C3329", "#C98F75"]
    },
    {
      id: 34,
      name: "Lips Red",
      isSkinTone: false,
      hex: ["#AA0017", "#FF0822"]
    },
    {
      id: 35,
      name: "Lips Pink",
      isSkinTone: false,
      hex: ["#F38997", "#FFA0AB"]
    },
    {
      id: 36,
      name: "Lips Brown",
      isSkinTone: false,
      hex: ["#A46950", "#AB7860"]
    },
    {
      id: 37,
      name: "Lips Black",
      isSkinTone: false,
      hex: ["#2E2425", "#47383A"]
    },
    {
      id: 38,
      name: "Lips Purple",
      isSkinTone: false,
      hex: ["#847188", "#D2A4DB"]
    }
  ],
  partTypes: [
    {
      id: 0,
      name: "Body",
      useSkinColor: true
    },
    {
      id: 1,
      name: "Head",
      useSkinColor: true
    },
    {
      id: 2,
      name: "Inner layer"
    },
    {
      id: 3,
      name: "Top 1"
    },
    {
      id: 4,
      name: "Top 2"
    },
    {
      id: 5,
      name: "Hair"
    },
    {
      id: 6,
      name: "Facial Hair"
    },
    {
      id: 7,
      name: "Eyes"
    },
    {
      id: 8,
      name: "Nose",
      useSkinColor: true
    },
    {
      id: 9,
      name: "Mouth"
    },
    {
      id: 10,
      name: "Accesories"
    },
    {
      id: 11,
      name: "Glasses"
    },
    {
      id: 12,
      name: "Pants"
    },
    {
      id: 13,
      name: "Marks"
    },
    {
      id: 14,
      name: "Eyebrows"
    }
  ],
  parts: [
    {
      id: 0,
      name: "Body 1",
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
      name: "Eyes 1",
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
      name: "Lips 6 Dark Brown",
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
      name: "Lips 6 Red",
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
      name: "Lips 6 Pink",
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
      name: "Lips 6 Brown",
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
      name: "Lips 6 Black",
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
      name: "Lips 6 Purple",
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
      name: "Lips 7 Dark Brown",
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
      name: "Lips 7 Red",
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
      name: "Lips 7 Pink",
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
      name: "Lips 7 Brown",
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
      name: "Lips 7 Black",
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
      name: "Lips 7 Purple",
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
      name: "Lips 8 Dark Brown",
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
      name: "Lips 8 Red",
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
      name: "Lips 8 Pink",
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
      name: "Lips 8 Brown",
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
      name: "Lips 8 Black",
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
      name: "Lips 8 Purple",
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
      name: "Lips 9 Dark Brown",
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
      name: "Lips 9 Red",
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
      name: "Lips 9 Pink",
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
      name: "Lips 9 Brown",
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
      name: "Lips 9 Black",
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
      name: "Lips 9 Purple",
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
      name: "Lips 11 Dark Brown",
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
      name: "Lips 11 Red",
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
      name: "Lips 11 Pink",
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
      name: "Lips 11 Brown",
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
      name: "Lips 11 Black",
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
      name: "Lips 11 Purple",
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
      name: "Cejas 1",
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
      name: "Cejas 1",
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
      name: "Cejas 1",
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
      name: "Cejas 1",
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
      name: "Cejas 1",
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
      name: "Cejas 1",
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
      name: "Cejas 1",
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
      name: "Cejas 1",
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
      name: "Cejas 1",
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
      name: "Cejas 1",
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
      name: "Cejas 1",
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
      name: "Cejas 1",
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
      name: "Cejas 2",
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
      name: "Cejas 2",
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
      name: "Cejas 2",
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
      name: "Cejas 2",
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
      name: "Cejas 2",
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
      name: "Cejas 2",
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
      name: "Cejas 2",
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
      name: "Cejas 2",
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
      name: "Cejas 2",
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
      name: "Cejas 2",
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
      name: "Cejas 2",
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
      name: "Cejas 2",
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
      name: "cejas 3",
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
      name: "cejas 3",
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
      name: "cejas 3",
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
      name: "cejas 3",
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
      name: "cejas 3",
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
      name: "cejas 3",
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
      name: "cejas 3",
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
      name: "cejas 3",
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
      name: "cejas 3",
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
      name: "cejas 3",
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
      name: "cejas 3",
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
      name: "cejas 3",
      partTypeId: 14,
      colorId: 24,
      images: [
        {
          filename: "cejas_03_12",
          zIndex: 27
        }
      ]
    }
  ]
};

export default config;
