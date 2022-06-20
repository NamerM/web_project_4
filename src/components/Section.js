
export class Section {
  constructor({ items, renderer}, container ) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }



  rendererItems() {
    this._items.forEach((data) => {
      this.addItem(this._renderer(data))
    })
  }

  addItem(element) {
    this._container.prepend(element)
  };

  // rendererItems() {
  //   this._items.forEach((data) => {
  //     this.addItem(this._renderer(data))
  //   })
  // };

  // addItem(item) {
  //   const card = this._renderer(item)
  //   this._container.prepend(card);
  // }


}
