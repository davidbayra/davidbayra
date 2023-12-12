import KonvaFactory from "./KonvaFactory.ts";
import { AnimalsWithImage } from "./data.ts";
import AnimalManager from "./AnimalManager.ts";
import AnimalEventObserver, { EAnimalEvents } from "./AnimalEventObserver.ts";
import AudioService from "./AudioService.ts";
import Konva from "konva";
import Layer = Konva.Layer;

export default class Game implements AnimalEventObserver {
  private score: number = 0;
  private readonly animalDropLayer: Layer
  private readonly animalLayer: Layer
  private endGameCallBack = (): void => {};

  constructor(
    private readonly konvaFactory: KonvaFactory,
    private readonly audioService: AudioService,
    private readonly animalsWithImage: AnimalsWithImage
    ) {

    const stage = this.konvaFactory.createStage();

    const backgroundLayer = this.konvaFactory.createLayer();
    this.animalDropLayer = this.konvaFactory.createLayer();
    this.animalLayer = this.konvaFactory.createLayer();

    stage.add(backgroundLayer);
    stage.add(this.animalDropLayer);
    stage.add(this.animalLayer);

    backgroundLayer.add(this.konvaFactory.createBackGroundImage());
  }

  start() {
    this.score = Object.keys(this.animalsWithImage).length;

    for (let animalName in this.animalsWithImage) {
      const animalData = this.animalsWithImage[animalName];
      const konvaAnimal = this.konvaFactory.createImage(animalData);
      const konvaAnimalDrop = this.konvaFactory.createDropImage(animalData);

      const animalManager = new AnimalManager(
        konvaAnimal,
        konvaAnimalDrop,
        animalData.images.origin,
        animalData.images.sel,
      );

      animalManager.subscribe(this);
      animalManager.subscribe(this.audioService);

      this.animalDropLayer.add(konvaAnimalDrop);
      this.animalLayer.add(konvaAnimal);
    }
  }

  restart() {
    this.animalDropLayer.destroyChildren();
    this.animalLayer.destroyChildren();

    this.start();
  }

  update(eventType: EAnimalEvents, data?: any): void {
    if (eventType === EAnimalEvents.DRAG_END && data?.success) {
      this.onChangeScore();
    }
  }

  onEndGame(fn: () => void) {
    this.endGameCallBack = fn
  }

  onChangeScore() {
    if (--this.score !== 0) return;
    this.audioService.playWin();
    this.endGameCallBack();
  }
}
