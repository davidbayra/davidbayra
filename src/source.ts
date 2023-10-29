import { AnimalsData, SoundsData, ImageData } from "./data.ts";

export const dataBackground: ImageData = {
  src: 'background.svg',
  width: 749,
  height: 545,
};
export const soundsData: Readonly<SoundsData> = {
  'pop-up-on': 'pop-up-on.mp3',
  'pop-up-off': 'pop-up-off.mp3',
  'pop-up-down': 'pop-up-down.mp3',
  win: 'kids-cheering.mp3'
}
export const dataAnimals: AnimalsData = {
  bird: {
    src: 'bird.svg',
    x: 0,
    y: 0,
    sel: 'bird-sel.svg',
    width: 43,
    height: 35,
    drop: {
      src: 'bird-drop.svg',
      x: 478,
      y: 430,
    },
  },
  deer: {
    src: 'deer.svg',
    x: 0,
    y: 0,
    sel: 'deer-sel.svg',
    width: 172,
    height: 205,
    drop: {
      src: 'deer-drop.svg',
      x: 58,
      y: 64,
    },
  },
  fox: {
    src: 'fox.svg',
    x: 0,
    y: 0,
    sel: 'fox-sel.svg',
    width: 183,
    height: 110,
    drop: {
      src: 'fox-drop.svg',
      x: 321,
      y: 107,
    },
  },
  hare: {
    src: 'hare.svg',
    x: 0,
    y: 0,
    sel: 'hare-sel.svg',
    width: 44,
    height: 61,
    drop: {
      src: 'hare-drop.svg',
      x: 612,
      y: 169,
    },
  },
  hedgehog: {
    src: 'hedgehog.svg',
    x: 0,
    y: 0,
    sel: 'hedgehog-sel.svg',
    width: 74,
    height: 45,
    drop: {
      src: 'hedgehog-drop.svg',
      x: 154,
      y: 128,
    },
  },
  owl: {
    src: 'owl.svg',
    x: 0,
    y: 0,
    sel: 'owl-sel.svg',
    width: 56,
    height: 58,
    drop: {
      src: 'owl-drop.svg',
      x: 612,
      y: 315,
    },
  },
  squirrel: {
    src: 'squirrel.svg',
    x: 0,
    y: 0,
    sel: 'squirrel-sel.svg',
    width: 67,
    height: 36,
    drop: {
      src: 'squirrel-drop.svg',
      x: 417,
      y: 269,
    },
  },
  wolf: {
    src: 'wolf.svg',
    x: 0,
    y: 0,
    sel: 'wolf-sel.svg',
    width: 125,
    height: 83,
    drop: {
      src: 'wolf-drop.svg',
      x: 495,
      y: 137,
    },
  },
};
