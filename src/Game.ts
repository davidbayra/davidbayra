import KonvaFactory from "./KonvaFactory.ts";
import { AnimalsWithImage } from "./data.ts";
import AnimalManager from "./AnimalManager.ts";
import AnimalEventObserver, { EAnimalEvents } from "./AnimalEventObserver.ts";
import AudioService from "./AudioService.ts";

export default class Game implements AnimalEventObserver {
  private score: number = 0;

  constructor(
    private readonly konvaFactory: KonvaFactory,
    private readonly audioService: AudioService,
    private readonly animalsWithImage: AnimalsWithImage
    ) {

    const stage = this.konvaFactory.createStage();

    const backgroundLayer = this.konvaFactory.createLayer();
    const animalDropLayer = this.konvaFactory.createLayer();
    const animalLayer = this.konvaFactory.createLayer();

    stage.add(backgroundLayer);
    stage.add(animalDropLayer);
    stage.add(animalLayer);

    backgroundLayer.add(this.konvaFactory.createBackGroundImage());

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

      animalDropLayer.add(konvaAnimalDrop);
      animalLayer.add(konvaAnimal);
    }
  }
  update(eventType: EAnimalEvents, data?: any): void {
    if (eventType === EAnimalEvents.DRAG_END && data?.success) {
      this.onChangeScore();
    }
  }
  onChangeScore() {
    if (--this.score !== 0) return;
    this.audioService.playWin();
    setTimeout(() => alert)
  }
}
