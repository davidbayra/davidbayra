export const randomInterval = (min: number, max: number): number => {
  return Math.random() * (min - max) + min
}