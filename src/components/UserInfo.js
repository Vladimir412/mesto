import {namePopup, workPopup} from '../pages/index.js';

export default class UserInfo {
    constructor({name, info}) {
    this._userName = name;
    this._userInfo = info;
    }

    getUserInfo() {
         const info = {}
           info.this._userName.value = namePopup.textContent;
           info.this._userInfo.value = workPopup.textContent;
      return info

    }

    setUserInfo() {
        namePopup.textContent = this._userName.value;
        workPopup.textContent = this._userInfo.value
    }
}