import { AnimalImageElements } from "./images.ts";

export type SoundsData = {
  [trackName: string]: string
};

export type ImageData = {
  src: string
  width: number
  height: number
};

type AnimalData = ImageData & {
  x: number
  y: number
  sel: string
  drop: DropData
};

type DropData = {
  src: string
  x: number
  y: number
};

export type AnimalsData = {
  [key: string]: Readonly<AnimalData>
};

export type AnimalWithImage = AnimalData & AnimalImageElements;

export type AnimalsWithImage = {
  [key: string]: AnimalWithImage
};