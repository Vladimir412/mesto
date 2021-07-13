

export default class UserInfo {
    constructor(name, info) {
      this._userName = name;
      this._userInfo = info;
    }

    getUserInfo() {
      // name.value = this._userName.textContent
      // work.value = this._userInfo.textContent
      return {
        firstname: this._userName.textContent,
        profession: this._userInfo.textContent
      }
    }

    setUserInfo(first, second) {
      this._userName.textContent = first
      this._userInfo.textContent = second
    }
}
