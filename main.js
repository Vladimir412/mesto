(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){var o=e.data,i=e.myId,u=e.handleCardClick,a=e.handleLikeClick,c=e.handleCardDelete;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=o.name,this._photo=o.link,this._selector=n,this._handleCardClick=u,this._handleLikeClick=a,this._handleCardDelete=c,this.cardId=o._id,this._ownerId=o.owner._id,this.liked=r,this._counterLikes=o.likes,this._myId=i}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._selector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._setEventListener();var e=this._element.querySelector(".element__photo"),t=this._element.querySelector(".element__title"),n=this._element.querySelector(".buton-delete");return this._myId===this._ownerId&&n.removeAttribute("hidden"),this.refreshLikesStatus(),e.src=this._photo,e.alt=this._title,t.textContent=this._title,this._element}},{key:"refreshLikesStatus",value:function(){this.liked?this._element.querySelector(".element__like").classList.add("element__like_active"):this._element.querySelector(".element__like").classList.remove("element__like_active"),this._element.querySelector(".element__counter").textContent=this._counterLikes.length}},{key:"setLikes",value:function(e,t){this.liked=t,this._counterLikes=e,this.refreshLikesStatus()}},{key:"handleDeleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_handleAddLike",value:function(){this._element.querySelector(".element__like").classList.toggle("element__like_active")}},{key:"_handleShowPicture",value:function(){this._handleCardClick(this._photo,this._title)}},{key:"_setEventListener",value:function(){var e=this;this._element.querySelector(".buton-delete").addEventListener("click",(function(){e._handleCardDelete(e)})),this._element.querySelector(".element__like").addEventListener("click",(function(){e._handleLikeClick(e)})),this._element.querySelector(".element__photo").addEventListener("click",(function(){e._handleShowPicture()}))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup__open"),document.addEventListener("keydown",this._handleEscClose),this._popup.addEventListener("mousedown",this._handleOverlayClose)}},{key:"close",value:function(){this._popup.classList.remove("popup__open"),document.removeEventListener("keydown",this._handleEscClose),document.removeEventListener("mousedown",this._handleOverlayClose)}},{key:"_handleEscClose",value:function(e){27===e.keyCode&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".button-close").addEventListener("click",(function(){return e.close()}))}},{key:"_handleOverlayClose",value:function(e){e.target===e.currentTarget&&this.close()}}])&&o(t.prototype,n),e}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return t=u,(n=[{key:"open",value:function(e,t){var n=this._popup.querySelector(".show-image__image"),r=this._popup.querySelector(".show-image__title");n.src=e,n.alt=t,r.textContent=t,c(f(u.prototype),"open",this).call(this)}}])&&a(t.prototype,n),u}(i);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function u(e){var t,n=e.popup,r=e.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._submitForm=r,t._form=t._popup.querySelector(".form"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popup.querySelectorAll(".form__input"),this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())})),y(m(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),y(m(u.prototype),"close",this).call(this)}}])&&d(t.prototype,n),u}(i);function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selector=t,this._form=n}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._selector.inputErrorClass),n.textContent=t,n.classList.add(this._selector.errorClass)}},{key:"_hidenInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._selector.inputErrorClass),t.textContent="",t.classList.remove(this._selector.errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hidenInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this,t=Array.from(this._form.querySelectorAll(this._selector.inputSelector)),n=this._form.querySelector(this._selector.submitButtonSelector);this._toggleButtonState(t,n),this._form.addEventListener("reset",(function(){e._disabledButton(n),t.forEach((function(t){e._hidenInputError(t)}))})),t.forEach((function(r){e._hidenInputError(r),r.addEventListener("input",(function(){e._checkInputValidity(r),e._toggleButtonState(t,n)}))}))}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_disabledButton",value:function(e){e.disabled=!0,e.classList.add(this._selector.inactiveButtonClass)}},{key:"_enableButton",value:function(e){e.classList.remove(this._selector.inactiveButtonClass),e.disabled=!1}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?this._disabledButton(t):this._enableButton(t)}}])&&k(t.prototype,n),e}(),w={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__error_active"};function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=t,this._userInfo=n,this._avatar=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{firstname:this._userName.textContent,profession:this._userInfo.textContent}}},{key:"setUserInfo",value:function(e,t,n){this._userName.textContent=e,this._userInfo.textContent=t,this._avatar.src=n}},{key:"refreshUserInfo",value:function(e,t){this._userName.textContent=e,this._userInfo.textContent=t}},{key:"refreshUserAvatar",value:function(e){this._avatar.src=e}}])&&S(t.prototype,n),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.baseUrl,r=t.authorization,o=t.userId;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._token=r,this._userId=o}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/v1/").concat(this._userId,"/cards"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"getInfoAboutUser",value:function(){return fetch("".concat(this._url,"/v1/").concat(this._userId,"/users/me"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"editUserProfile",value:function(e){return fetch("".concat(this._url,"/v1/").concat(this._userId,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.firstname,about:e.profession})}).then(this._checkResponse)}},{key:"sentNewCard",value:function(e){return fetch("".concat(this._url,"/v1/").concat(this._userId,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.title,link:e.address})}).then(this._checkResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._url,"/v1/").concat(this._userId,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"updateLikes",value:function(e,t){return fetch("".concat(this._url,"/v1/").concat(this._userId,"/cards/likes/").concat(t),{method:e?"DELETE":"PUT",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({_id:t})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/v1/").concat(this._userId,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e))}}])&&E(t.prototype,n),e}();function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return(j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function u(e){var t,n=e.popup;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._submitForm=null,t._form=t._popup.querySelector(".form"),t}return t=u,(n=[{key:"handleFormSubmit",value:function(e){this._submitForm=e}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm()})),j(R(u.prototype),"setEventListeners",this).call(this)}}])&&I(t.prototype,n),u}(i),x=document.querySelector(".button-edit"),A=document.querySelector(".form_profile"),B=document.querySelector(".form_card"),U=document.querySelector(".form_avatar"),D=document.querySelector(".button-plus"),F=document.querySelector(".form__input_name"),N=document.querySelector(".form__input_work"),V=document.querySelector(".profile__title"),z=document.querySelector(".profile__subtitle"),J=document.querySelector(".profile__avatar"),H=document.querySelector(".button-avatar");function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $=null,G=new O({baseUrl:"https://mesto.nomoreparties.co",authorization:"b6b35178-16fa-4e7f-8f36-adf75a68e4d9",userId:"cohort-26"});function K(e){console.log(e)}Promise.all([G.getInfoAboutUser(),G.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1],u=o.name,a=o.about,c=o.avatar,s=o._id;re.setUserInfo(u,a,c),$=s,Y.renderItems(i)})).catch(K);var Q=new h(".popup_image");function W(e){return!!e.find((function(e){return e._id===$}))}var X=function(e){var n=W(e.likes);return new t({data:e,myId:$,handleCardClick:function(){var t=e.link,n=e.name;Q.open(t,n)},handleLikeClick:function(e){G.updateLikes(e.liked,e.cardId).then((function(t){e.setLikes(t.likes,W(t.likes))})).catch(K)},handleCardDelete:function(e){ne.open(),ne.handleFormSubmit((function(){G.deleteCard(e.cardId).then((function(){e.handleDeleteCard(),ne.close()})).catch(K)}))}},"#add-element",n).generateCard()},Y=new r({renderer:function(e){var t=X(e);Y.addItem(t)}},".elements"),Z=new b({popup:".popup_profile",submitForm:function(e){ae(A,!0),G.editUserProfile(e).then((function(e){var t=e.name,n=e.about;re.refreshUserInfo(t,n),Z.close()})).catch(K).finally((function(){ae(A,!1)}))}}),ee=new b({popup:".popup_card",submitForm:function(e){ae(B,!0),G.sentNewCard(e).then((function(e){var t=X(e);Y.addItem(t),ee.close()})).catch(K).finally((function(){ae(B,!1)}))}}),te=new b({popup:".popup_refresh-avatar",submitForm:function(e){ae(U,!0),G.editAvatar(e).then((function(e){var t=e.avatar;re.refreshUserAvatar(t),te.close()})).catch(K).finally((function(){ae(U,!1)}))}}),ne=new T({popup:".popup_confirm"}),re=new C(V,z,J),oe=new g(w,A),ie=new g(w,B),ue=new g(w,U);function ae(e,t){e.querySelector(".form__button").textContent=t?"Сохранение...":"Сохранить"}x.addEventListener("click",(function(){Z.open();var e=re.getUserInfo(),t=e.firstname,n=e.profession;F.value=t,N.value=n})),D.addEventListener("click",(function(){ee.open()})),H.addEventListener("click",(function(){te.open()})),oe.enableValidation(),ie.enableValidation(),ue.enableValidation(),te.setEventListeners(),ee.setEventListeners(),Q.setEventListeners(),ne.setEventListeners(),Z.setEventListeners()})();