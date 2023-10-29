export type AnimalImages = {
  [key: string]: {
    origin: HTMLImageElement
    sel: HTMLImageElement
    drop: HTMLImageElement
  }
}

export type AnimalPromiseImages = {
  [key: string]: {
    origin: Promise<HTMLImageElement>
    sel: Promise<HTMLImageElement>
    drop: Promise<HTMLImageElement>
  }
}

export type AnimalImageElements = {
  images: {
    origin: HTMLImageElement
    sel: HTMLImageElement
    drop: HTMLImageElement
  }
}
