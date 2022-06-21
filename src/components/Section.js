
export class Section {
  constructor({ items, renderer}, container ) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }



  rendererItems() {
    this._items.forEach((data) => {
      this.addItem(data)
    })
  };

  addItem(data) {
    const element = this._renderer(data)
    this._container.prepend(element)
  };


}
