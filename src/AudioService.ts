import { Howl } from "howler";
import AnimalEventObserver, { EAnimalEvents } from "./AnimalEventObserver.ts";

type ISound = {
  [trackName: string]: Howl
}
export default class AudioService implements AnimalEventObserver{
  private sounds: ISound = {};

  constructor(private readonly folder: string) {}

  load (trackName: string, filename: string): void {
    const src: string = this.folder + filename;
    this.sounds[trackName] = new Howl({ src })
  };

  play(trackName: string, volume?: number): void {
    if (!this.sounds[trackName]) return;

    if (volume) {
      this.sounds[trackName].volume(volume);
    }

    this.sounds[trackName].play();
  };

  update(eventType: EAnimalEvents, data?: any): void {
    if (eventType === EAnimalEvents.DRAG_END && data?.success) {
      this.play('pop-up-off');
    } else if (eventType === EAnimalEvents.DRAG_END && data?.success === false) {
      this.play('pop-down', 0.5);
    } else if (eventType === EAnimalEvents.DRAG_START) {
      this.play('pop-up-on', 0.5);
    }
  }

  playWin() {
    this.play('win');
  }

}