import Popup from './Popup.js'


export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
    }

    open(photo, title) {
     
      const imagePopup = this._popup.querySelector('.show-image__image');
      const titlePopup = this._popup.querySelector('.show-image__title');
      
      imagePopup.src = photo;
      imagePopup.alt = title;
      titlePopup.textContent = title;

      super.open();
      super.setEventListeners();
    }
}
