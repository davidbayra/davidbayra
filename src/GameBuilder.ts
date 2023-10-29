import ImageLoader from "./ImageLoader.ts";
import Game from "./Game.ts";
import { AnimalPromiseImages } from "./images.ts";
import { AnimalsData, AnimalsWithImage, ImageData, SoundsData } from "./data.ts";
import KonvaFactory from "./KonvaFactory.ts";
import CanvasSize from "./CanvasSize.ts";
import AudioService from "./AudioService.ts";

export default class GameBuilder
{
  private backgroundImage: Promise<HTMLImageElement> | null = null;
  private animalImages: AnimalPromiseImages = {};

  constructor(
    private readonly imageLoader: ImageLoader,
    private readonly audioService: AudioService,
    private readonly animalsData: AnimalsData
  ) {}
  loadSounds(soundData: SoundsData): GameBuilder{
    for (const trackName in soundData) {
      this.audioService.load(trackName, soundData[trackName]);
    }

    return this;
  }
  loadBackground(dataBackground: ImageData): GameBuilder {
    this.backgroundImage = this.imageLoader.load(
      dataBackground.src,
      dataBackground.width,
      dataBackground.height
    );

    return this;
  }
  loadAnimalImages(): GameBuilder {
    for (const animalName in this.animalsData) {
      const animal = this.animalsData[animalName];
      this.animalImages[animalName] = {
        origin: this.imageLoader.load(animal.src, animal.width, animal.height),
        sel: this.imageLoader.load(animal.sel, animal.width, animal.height),
        drop: this.imageLoader.load(animal.drop.src, animal.width, animal.height),
      };
    }

    return this;
  }
  async build (): Promise<Game> {
    const backgroundImage
      = this.backgroundImage !== null
      ? await this.backgroundImage
      : new Image();

    const animalWithImages: AnimalsWithImage = {};
    for (const animalName in this.animalImages) {
      const animalImage = this.animalImages[animalName];
      const [origin, sel, drop] = await Promise.all([
        animalImage.origin,
        animalImage.sel,
        animalImage.drop,
      ]);

      animalWithImages[animalName] = {
        ...this.animalsData[animalName],
        images: {
          origin,
          sel,
          drop
        }
      };
    }
    const canvasSize = new CanvasSize(window.innerWidth, window.innerHeight, backgroundImage.width, backgroundImage.height);
    const konvaFactory = new KonvaFactory(canvasSize, backgroundImage);

    return new Game(konvaFactory, this.audioService, animalWithImages);
  }
}