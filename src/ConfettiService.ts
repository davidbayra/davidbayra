import confetti, { Options } from 'canvas-confetti';
import { randomInterval } from "./randomInterval.ts";

export default class ConfettiService {
  protected readonly options: Options;
  protected timerId: number = 0;

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
  start(second: number = 100) {
    const duration = second *1000;
    let animationEnd = Date.now() + duration;

    this.timerId = setInterval(() => {
      let timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return this.stop()
      }

      const particleCount = 50 * (timeLeft / duration)
      // since particles fall down, start a bit higher than random
      confetti({
        ...this.options,
        particleCount,
        origin: { x: randomInterval(0.1, 0.3), y: Math.random() - 0.2 },
      })
      confetti({
        ...this.options,
        particleCount,
        origin: { x: randomInterval(0.7, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)
  }

  stop() {
    clearInterval(this.timerId)
  }
}