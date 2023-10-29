import Konva from "konva";
import { AnimalWithImage } from "./data.ts";
import { randomInterval } from "./randomInterval.ts";
import Image = Konva.Image;
import Layer = Konva.Layer;
import Stage = Konva.Stage;
import CanvasSize from "./CanvasSize.ts"

export default class KonvaFactory {
  constructor(
    private readonly canvasSize: CanvasSize,
    private readonly backgroundImage: HTMLImageElement
  ) {
  };

  createStage(): Stage {
    return new Konva.Stage({
      container: 'app',
      width: this.canvasSize.getWidth(),
      height: this.canvasSize.getHeight(),
    });
  };

  createLayer(): Layer {
    return new Konva.Layer();
  };

  createImage(animal: AnimalWithImage): Image {
    const width: number = animal.width * this.canvasSize.getScale();
    const height: number = animal.height * this.canvasSize.getScale();

    return new Konva.Image({
      image: animal.images.origin,
      x: randomInterval(52, this.canvasSize.getWidth() - width - 52),
      y: randomInterval(34, this.canvasSize.getHeight() - height - 34),
      draggable: true,
      width,
      height
    });
  };

  createDropImage(animal: AnimalWithImage): Image {
    const width: number = animal.width * this.canvasSize.getScale();
    const height: number = animal.height * this.canvasSize.getScale();

    return new Konva.Image({
      image: animal.images.drop,
      x: animal.drop.x * this.canvasSize.getScale(),
      y: animal.drop.y * this.canvasSize.getScale(),
      draggable: false,
      width,
      height
    });
  };

  createBackGroundImage(): Image {
    return new Konva.Image({
      image: this.backgroundImage,
      width: this.canvasSize.getWidth(),
      height: this.canvasSize.getHeight()
    });
  };

}