
export default class CanvasSize {
  private readonly width: number;
  private readonly height: number;
  private readonly scale: number;

  constructor(
    windowWidth: number,
    windowHeight: number,
    backgroundWidth: number,
    backgroundHeight: number,
  ) {

    const imageAspect: number = backgroundWidth / backgroundHeight;
    const windowAspect: number = windowWidth / windowHeight;

    let newWidth: number = 0;
    let newHeight: number = 0;

    newWidth = windowWidth;
    newHeight = windowHeight * imageAspect;

    if (imageAspect > windowAspect) {
      newWidth = windowWidth;
      newHeight = windowWidth / imageAspect;
    }

    if (newHeight > windowHeight) {
      newHeight = windowHeight;
      newWidth = newWidth / imageAspect;
    }

    this.width = newWidth;
    this.height = newHeight;
    this.scale = newWidth / backgroundWidth;
  }

  getWidth(): number {
    return this.width;
  }
  getHeight(): number {
    return this.height;
  }
  getScale(): number {
    return this.scale;
  }

}