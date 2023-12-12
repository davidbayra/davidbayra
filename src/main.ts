import './style.css';
import { dataBackground, dataAnimals } from './source.ts';
import ImageLoader from "./ImageLoader.ts";
import GameBuilder from "./GameBuilder.ts";
import AudioService from "./AudioService.ts";
import { soundsData } from "./source.ts";
import ConfettiService from "./ConfettiService.ts";

const audioService = new AudioService('/sounds/');
const gameBuilder = new GameBuilder(
  new ImageLoader(),
  audioService,
  dataAnimals
);

const game = await gameBuilder
  .loadSounds(soundsData)
  .loadBackground(dataBackground)
  .loadAnimalImages()
  .build();

game.start();
document.querySelector('#restart')?.addEventListener('click', () => {
  game.start();
  game.restart();
});
document.querySelector('#mute')?.addEventListener('click', (event) => {
  const isMute = audioService.toggleSound();
  const button = event.target as HTMLImageElement;
  button.textContent = `Sound ${isMute ? 'OFF' : 'ON'}`;
});

const confettiService = new ConfettiService()
game.onEndGame(() => {
  confettiService.start()
  setTimeout(() => alert)
});

