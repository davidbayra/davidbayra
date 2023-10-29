import { AnimalsData, SoundsData, ImageData } from "./data.ts";

export const dataBackground: ImageData = {
  src: 'background_new.svg',
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
    width: 42.46,
    height: 34.68,
    drop: {
      src: 'bird-drop.svg',
      x: 456.56,
      y: 98.86,
    },
  },
  deer: {
    src: 'deer.svg',
    x: 0,
    y: 0,
    sel: 'deer-sel.svg',
    width: 171.82,
    height: 204.97,
    drop: {
      src: 'deer-drop.svg',
      x: 158.39,
      y: 174.72,
    },
  },
  fox: {
    src: 'fox.svg',
    x: 0,
    y: 0,
    sel: 'fox-sel.svg',
    width: 182.79,
    height: 109.38,
    drop: {
      src: 'fox-drop.svg',
      x: 229.97,
      y: 383.14,
    },
  },
  hare: {
    src: 'hare.svg',
    x: 0,
    y: 0,
    sel: 'hare-sel.svg',
    width: 44.27,
    height: 61.1,
    drop: {
      src: 'hare-drop.svg',
      x: 589.06,
      y: 345.84,
    },
  },
  hedgehog: {
    src: 'hedgehog.svg',
    x: 0,
    y: 0,
    sel: 'hedgehog-sel.svg',
    width: 73.53,
    height: 44.66,
    drop: {
      src: 'hedgehog-drop.svg',
      x: 116.84,
      y: 394.28,
    },
  },
  owl: {
    src: 'owl.svg',
    x: 0,
    y: 0,
    sel: 'owl-sel.svg',
    width: 56.2,
    height: 57.62,
    drop: {
      src: 'owl-drop.svg',
      x: 583.4,
      y: 201.33,
    },
  },
  squirrel: {
    src: 'squirrel.svg',
    x: 0,
    y: 0,
    sel: 'squirrel-sel.svg',
    width: 66.42,
    height: 35.68,
    drop: {
      src: 'squirrel-drop.svg',
      x: 383.83,
      y: 257.93,
    },
  },
  wolf: {
    src: 'wolf.svg',
    x: 0,
    y: 0,
    sel: 'wolf-sel.svg',
    width: 125.07,
    height: 82.44,
    drop: {
      src: 'wolf-drop.svg',
      x: 431.89,
      y: 366.17,
    },
  },
};
