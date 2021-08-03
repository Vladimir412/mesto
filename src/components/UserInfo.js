

export default class UserInfo {
    constructor(name, info, avatar) {
      this._userName = name;
      this._userInfo = info;
      this._avatar = avatar;
      this._id = null
    }

    getUserInfo() {
      return {
        firstname: this._userName.textContent,
        profession: this._userInfo.textContent
      }
    }

    setUserInfo(user, about, avatar, id) {
      this._userName.textContent = user
      this._userInfo.textContent = about
      this._avatar.src = avatar;
      this._id = id
    }

    refreshUserInfo(user, about) {
      this._userName.textContent = user;
      this._userInfo.textContent = about;
    }

    refreshUserAvatar(data) {
      this._avatar.src = data
    }
}
