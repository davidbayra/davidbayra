import './style.css';
import { dataBackground, dataAnimals } from './source.ts';
import ImageLoader from "./ImageLoader.ts";
import GameBuilder from "./GameBuilder.ts";
import AudioService from "./AudioService.ts";
import { soundsData } from "./source.ts";

const gameBuilder = new GameBuilder(new ImageLoader(), new AudioService('/sounds/'), dataAnimals);
await gameBuilder
  .loadSounds(soundsData)
  .loadBackground(dataBackground)
  .loadAnimalImages()
  .build();