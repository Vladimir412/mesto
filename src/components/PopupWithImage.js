import Popup from './Popup.js'


export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
    }

    open() {
      // console.log(this._popup)
     
      super.open();
      const photo = super._popup.querySelector('.show-image__image');
      const title = document.querySelector('.show-image__title')
      // console.log(super._open())

      const imagePopup = super._popup.querySelector('.element__photo');
      const titlePopup = super._popup.querySelector('.element__title');
      
      photo.src = imagePopup;
      photo.alt = titlePopup;
      title.textContent = titlePopup;
    }
}