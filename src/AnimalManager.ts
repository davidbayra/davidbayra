import cursor from "./Cursor.ts";
import Konva from "konva";
import AnimalEventObserver, { AnimalEventSubject, EAnimalEvents } from "./AnimalEventObserver.ts";
import Image = Konva.Image;

export default class AnimalManager implements AnimalEventSubject {
  private observers: AnimalEventObserver[] = [];

  constructor(
    private readonly konvaAnimal: Image,
    private readonly konvaAnimalDrop: Image,
    originImage: HTMLImageElement,
    selImage: HTMLImageElement
  ) {
    this.cacheAndDraw(this.konvaAnimal);

    konvaAnimal.on("dragstart", this.onDragStart.bind(this));
    konvaAnimal.on("dragend", this.onDragEnd.bind(this));

    konvaAnimal.on("mouseover", this.mouseOver.bind(this, selImage));
    konvaAnimal.on("mouseout", this.mouseOut.bind(this, originImage));

    konvaAnimal.on("dragmove", this.drugMove.bind(this));
  }
  subscribe(observer: AnimalEventObserver): void {
    if (this.observers.includes(observer)) {
      return;
    }
    this.observers.push(observer);
  }
  unsubscribe(observer: AnimalEventObserver): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex > -1) {
      this.observers.splice(observerIndex, 1);
    }
  }
  notifyObservers(eventType: EAnimalEvents, data?: any): void {
    this.observers.forEach((observer) => observer.update(eventType, data));
  }
  onDragStart() {
    this.konvaAnimal.moveToTop();
    this.notifyObservers(EAnimalEvents.DRAG_START);
  }
  mouseOver(imageGlow: HTMLImageElement) {
    this.konvaAnimal.image(imageGlow);
    this.cacheAndDraw(this.konvaAnimal);
    cursor.setPointCursor();
  }
  mouseOut(imageOrigin: HTMLImageElement) {
    this.konvaAnimal.image(imageOrigin);
    this.cacheAndDraw(this.konvaAnimal);
    cursor.setDefaultCursor();
  }
  drugMove() {
    cursor.setGrabbingCursor();
  }
  onDragEnd () {
    if (!this.isNearOutline(this.konvaAnimal, this.konvaAnimalDrop)) return

    this.konvaAnimal.position({
      x: this.konvaAnimalDrop.x(),
      y: this.konvaAnimalDrop.y(),
    });
    this.konvaAnimal.draggable(false);
    this.konvaAnimal.off('dragstart dragend mouseover');

    this.notifyObservers(EAnimalEvents.DRAG_END, { success: true });
  }
  isNearOutline(animal: Image, animalDrop: Image): boolean {

    const a = animal;
    const o = animalDrop;
    const ax = a.x();
    const ay = a.y();

    return ax > o.x() - 20 && ax < o.x() + 20 && ay > o.y() - 20 && ay < o.y() + 20;
  }
  cacheAndDraw(image: Image) {
    image.cache({
      pixelRatio: 3
    });
    image.drawHitFromCache();
  }
}