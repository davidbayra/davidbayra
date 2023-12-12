const BASE_URL = import.meta.env.BASE_URL;
export default class ImageLoader {
  load(filename: string, width: number, height: number): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.width = width;
      img.height = height;
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('Error'));
      img.src = `${BASE_URL}/assets/` + filename;
    })
  }
}