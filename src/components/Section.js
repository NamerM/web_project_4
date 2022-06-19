
export class Section {
  constructor({ items, renderer}, container ) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }

  rendererItems() {
    this._items.forEach((data) => {
      this._renderer(data)
    })
  };

  addItem(element) {
    this._container.prepend(element)
  };

}
