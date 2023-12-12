import confetti, { Options } from 'canvas-confetti';

export default class ConfettiService {
  private readonly options: Options;
  constructor(options: Partial<Options> = {}) {
    const defaultOptions: Partial<Options> = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      zIndex: 0,
      particleCount: 100,
    }
    this.options = { ...defaultOptions, ...options }
  }
  start() {
    // const duration = second *1000;
    // let animationEnd = Date.now() + duration;

    confetti({
      ...this.options,
      particleCount: 40,
      scalar: 1.2,
      shapes: ['star']
    });

    confetti({
      ...this.options,
      particleCount: 10,
      scalar: 0.75,
      shapes: ['circle']
    });
  }
}