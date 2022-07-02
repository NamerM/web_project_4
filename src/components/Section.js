
export class Section {
  constructor({ renderer }, container ) {
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }



  rendererItems(items) {
    items.forEach((data) => {
        this.addItem(data)
    })
  };

  addItem(data) {
    const element = this._renderer(data)
    this._container.prepend(element)
  };


}
