class Cursor {
  constructor(private readonly element: HTMLElement) {
  }

  setPointCursor() {
    this.element.style.cursor = 'pointer';
  }

  setDefaultCursor() {
    this.element.style.cursor = 'default';
  }
    setGrabbingCursor() {
    this.element.style.cursor = 'grabbing';
  }
}

export default new Cursor(document.getElementById('app') || document.body);