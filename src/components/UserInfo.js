

export default class UserInfo {
    constructor(name, info) {
      this._userName = name;
      this._userInfo = info;
    }

    getUserInfo(name, work) {
      name.value = this._userName.textContent
      work.value = this._userInfo.textContent

    }

    setUserInfo(first, second) {
      this._userName.textContent = first
      this._userInfo.textContent = second
    }
}