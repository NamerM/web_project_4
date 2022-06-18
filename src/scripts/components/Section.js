
export class Section {
  constructor({ items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  rendererItems() {
    this._items.forEach((data) => {
      this._renderer(data)
    })
  };

  addItem(element) {
    this._containerSelector.prepend(element)
  };

}
