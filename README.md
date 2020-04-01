![Build](https://github.com/pjanaya/2d-character-creator/workflows/Build/badge.svg)
![Deploy](https://github.com/pjanaya/2d-character-creator/workflows/Deploy/badge.svg)

# 2D Character Creator
This project was created to provide a simple framework to configure a 2D Character Creator.

Try it out: https://pjanaya.github.io/2d-character-creator/

## Stuff needed

A folder with all the images for all the parts

## How to configure

Inside ``src/config`` there are three config files:
* ``colors.ts``: Available colors for the different parts.
* ``partTypes.ts``: Parts of the body and accesories categories to choose from.
* ``parts.ts``: All the different parts and combinations, linked to partTypes and colors.

Check in ``interfaces/Config.ts`` to learn about the different possible attributes for each file.

## Scripts

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.
