class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl
    this._headers = options.headers
    this._checkResponse = options.checkResponse
  }



  getUserInfo() {
    return fetch(this._baseUrl + '/users/me', {
      headers: this._headers
    }).then(this._checkResponse)
    .then(res => res.json())
    // .catch(err => {
    //   console.log('Api has an error!!!')
    // })
  }

  editProfile = (name, about) => {
    return fetch(this._baseUrl + '/users/me', {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      })
    })
    .then(this._checkResponse)
    .then(res => res.json())
  }

  editAvatar(avatar) {
    return fetch(this._baseUrl + '/users/me/avatar', {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    })
    .then(this._checkResponse)
    .then(res => res.json())
  }

  getInitialCards() {
    return fetch(this._baseUrl + '/cards', {
      headers: this._headers
    })
    .then(this._checkResponse)
    .then(res => res.json())
  } //name  & link in the body check m.

  addCard(name, link) {
    return fetch(this._baseUrl + '/cards', {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      })
    })
    .then(this._checkResponse)
    .then(res => res.json())
  }

  addLike = (id) => {
    return fetch(this._baseUrl + '/cards/likes/' + id, {
      method: "PUT",
      headers: this._headers
    })
    .then(this._checkResponse)
    .then(res => res.json())
  }

  removeLike = (id) => {
    return fetch(this._baseUrl + '/cards/likes/' + id, {
      method: "DELETE",
      headers: this._headers
    })
    .then(this._checkResponse)
    .then(res => res.json())
  }

  deleteCard(id) {
    return fetch(this._baseUrl + '/cards/' + id, {
      method: "DELETE",
      headers: this._headers
    })
    .then(this._checkResponse)
    .then(res => res.json())
  }

  _checkResponse(res){
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(res.statusText);
    }
  }
}


export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: "9398a483-484e-4ebd-a374-b6b3b985e9c4",
    "Content-Type": "application/json"
  }
}); // this._baseUrl // this._headers
