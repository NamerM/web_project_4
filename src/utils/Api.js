class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl
    this._headers = options.headers
  }

  getUserInfo() {
    return fetch(this._baseUrl + '/users/me', {
      headers: this._headers

    }).then( res => res.ok ? res.json() : Promise.reject("Error dear human!"))
    .catch
  }


  // getInitialCards() {
  //   // ...
  // }
  // // other methods for working with the API
}

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: "9398a483-484e-4ebd-a374-b6b3b985e9c4",
    "Content-Type": "application/json"
  }
});
