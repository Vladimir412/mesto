

export default class UserInfo {
    constructor(name, info, avatar) {
      this._userName = name;
      this._userInfo = info;
      this._avatar = avatar;
    }

    getUserInfo() {
      return {
        firstname: this._userName.textContent,
        profession: this._userInfo.textContent
      }
    }

    refreshUserInfo(user, about) {
      this._userName.textContent = user
      this._userInfo.textContent = about
    }

    setUserInfo(data) {
      data.name = this._userName.textContent;
      data.about = this._userInfo.textContent
    }

    getUserAvatar(data) {
      this._avatar.src = data
    }
}
