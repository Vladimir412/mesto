

export default class Api {
    constructor({baseUrl, authorization, userId}) {
        this._url = baseUrl;
        this._token = authorization;
        this._userId = userId;
    }

    getInitialCards() {
        return fetch(`${this._url}/v1/${this._userId}/cards`, {
            headers: {
                authorization: this._token,
                // 'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                return res.ok ? res.json() : Promise.reject(res.status)
            })
            .catch((err) => {
              console.log(`Ошибка: ${err}`)
            })
    }

    getInfoAboutUser() {
        return fetch(`${this._url}/v1/${this._userId}/users/me`, {
            headers: {
                authorization: this._token,
                // 'Content-Type': 'application/json'
                }
        })
        .then((res) => {
            return res.ok ? res.json() : Promise.reject(res.status)
        })
    }

    editUserProfile(data) {
        return fetch(`${this._url}/v1/${this._userId}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.firstname,
                about: data.profession
            })
        })

    }

    sentNewCard(data) {
        return fetch(`${this._url}/v1/${this._userId}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.title,
                link: data.address
            })
        })
    }

    editAvatar(data) {
        return fetch(`${this._url}/v1/${this._userId}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
    }

    getAvatar() {
        return fetch(`${this._url}/v1/${this._userId}/users/me`, {
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            return res.ok ? res.json() : Promise.reject(res.status)
        })
    }

    updateLikes(liked, id) {
        return fetch(`${this._url}/v1/${this._userId}/cards/likes/${id}`, {
            method: liked ? 'DELETE' : 'PUT',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: id
            })
        })
        .then((res) => {
            return res.ok ? res.json() : Promise.reject(res.status)
        })
        .catch(err => console.log(err))
    }

    deleteCard(data) {
      console.log(data)
      return fetch(`${this._url}/v1/${this._userId}/cards/${data}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token
        }
      })
      .then(res => {res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)})
    }
}
