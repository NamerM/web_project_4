!function(){"use strict";const e=document.querySelector(".profile__info"),t=(e.querySelector(".profile__header"),e.querySelector(".profile__profession"),document.querySelectorAll(".popup"),document.forms.profileForm,document.querySelector(".popup_type_profile")),s=document.querySelector(".profile__button"),o=(t.querySelector(".popup__close"),t.querySelector(".popup__input_type_name")),n=t.querySelector(".popup__input_type_profession"),i=document.querySelector(".popup_type-preview"),r=(document.querySelector(".popup_type_add-card"),document.querySelector(".add-button")),a=(document.querySelector(".popup__close.popup__close_preview"),document.querySelector(".popup__close.popup__close_add"),document.querySelector(".popup__input_type_title"),document.querySelector(".popup__input_type_link"),i.querySelector(".popup__image"),i.querySelector(".popup__subtitle"),document.querySelector(".elements__cards"),{inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input-error_open",errorClass:"popup__error_visible"}),l=document.querySelector(".popup__form_edit"),c=document.querySelector(".popup__form_cards");function u(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var p=class{constructor(e,t){u(this,"_showInputError",((e,t)=>{const{inputErrorClass:s,errorClass:o}=this._settings,n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(o),n.textContent=t,n.classList.add(s)})),u(this,"_hideInputError",(e=>{const{inputErrorClass:t,errorClass:s}=this._settings,o=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(s),o.classList.remove(t),o.textContent=""})),u(this,"_checkInputValidity",(e=>{e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)})),u(this,"_setEventListeners",(()=>{const{inputSelector:e}=this._settings;this.inputList=Array.from(this._formElement.querySelectorAll(e)),this._toggleButton(),this.inputList.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this._toggleButton()}))}))})),u(this,"_hasValidInput",(()=>this.inputList.every((e=>e.validity.valid)))),u(this,"_toggleButton",(()=>{const{inactiveButtonClass:e}=this._settings;this._inactiveButtonClass=e,this._hasValidInput()?this.enableButton():this.disableButton()})),u(this,"enableButton",(()=>{this._submitButton.disabled=!1,this._submitButton.classList.remove(this._inactiveButtonClass)})),u(this,"disableButton",(()=>{this._submitButton.disabled=!0,this._submitButton.classList.add(this._inactiveButtonClass)})),this._settings=e,this._formElement=t,this._submitButton=this._formElement.querySelector(this._settings.submitButtonSelector)}resetValidation(){this.inputList.forEach((e=>{this._hideInputError(e)}))}enableValidation(){this._formElement.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners()}};function _(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class d{constructor(e,t,s){_(this,"_clickedLikeButton",(()=>{this._likeButton.classList.toggle("elements__button-like_active")})),_(this,"_handleCardDelete",(()=>{this._cardElement.remove()})),_(this,"_addEventListeners",(()=>{this._likeButton.addEventListener("click",this._clickedLikeButton),this._deleteButton.addEventListener("click",this._handleCardDelete),this._cardImage.addEventListener("click",(()=>this._handleCardClick(this._name,this._link)))})),this._data=e,this._name=e.name,this._link=e.link,this._templateCardSelector=t,this._handleCardClick=s}_getTemplate(){return document.querySelector(this._templateCardSelector).content.querySelector(".elements__card")}generateCard(){return this._cardElement=this._getTemplate().cloneNode(!0),this._cardImage=this._cardElement.querySelector(".elements__image"),this._cardName=this._cardElement.querySelector(".elements__card-text"),this._likeButton=this._cardElement.querySelector(".elements__button-like"),this._deleteButton=this._cardElement.querySelector(".elements__button-delete"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardName.textContent=this._name,this._addEventListeners(),this._cardElement}}const h="popup_open";class m{constructor(e){this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}_handleEscClose(e){"Escape"===e.key&&this.close()}open(){this._popup.classList.add(h),document.addEventListener("keydown",this._handleEscClose)}close(){this._popup.classList.remove(h),document.removeEventListener("keydown",this._handleEscClose)}setEventListeners(){this._popup.addEventListener("mousedown",(e=>{(e.target.classList.contains("popup")||e.target.classList.contains("popup__close"))&&this.close()}))}}class f extends m{constructor(e,t){super(e),this._handleSubmitForm=t,this._form=this._popup.querySelector(".popup__form"),this._inputs=this._form.querySelectorAll(".popup__input")}_getInputValues(){const e={};return this._inputs.forEach((t=>{const s=t.id,o=t.value;e[s]=o})),e}setEventListeners(){super.setEventListeners(),this._form.addEventListener("submit",(e=>{e.preventDefault(),this._handleSubmitForm(this._getInputValues())}))}setInputValues(e){this._inputs.forEach((t=>{t.value=e[t.name]}))}close(){super.close(),this._form.reset()}}new class{constructor(e){this._baseUrl=e.baseUrl,this._headers=e.headers}getUserInfo(){return fetch(this._baseUrl+"/users/me",{headers:this._headers}).then((e=>e.ok?e.json():Promise.reject("Error dear human!"))).catch}}({baseUrl:"https://around.nomoreparties.co/v1/cohort-3-en",headers:{authorization:"9398a483-484e-4ebd-a374-b6b3b985e9c4","Content-Type":"application/json"}}).getUserInfo().then((e=>{console.log("res =>",e)}));const y=new p(a,l),b=new p(a,c);y.enableValidation(),b.enableValidation(),y.resetValidation();const v=new f("#popup-template-form",(e=>{const t={name:e.cardTitle,link:e.cardImageLink};g.addItem(t),v.close()}));v.setEventListeners();const E=new f("#popup-template",(e=>{L.setUserInfo(e.name,e.profession),E.close()}));E.setEventListeners();const S=new class extends m{constructor(e){super(e),this._subtitle=this._popup.querySelector(".popup__subtitle"),this._image=this._popup.querySelector(".popup__image")}open(e,t){super.open(),this._image.src=t,this._image.alt=e,this._subtitle.textContent=e}}("#popup-image");S.setEventListeners();const g=new class{constructor(e,t){let{items:s,renderer:o}=e;this._items=s,this._renderer=o,this._container=document.querySelector(t)}rendererItems(){this._items.forEach((e=>{this.addItem(e)}))}addItem(e){const t=this._renderer(e);this._container.prepend(t)}}({items:[{name:"Yosemite Valley",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{name:"Lake Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{name:"Bald Mountains",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{name:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{name:"Vanoise National Park",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{name:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"}],renderer:e=>new d(e,"#card-template",((e,t)=>{S.open(e,t)})).generateCard()},".elements__cards");g.rendererItems();const L=new class{constructor(e){let{profileNameSelector:t,profileProfessionSelector:s}=e;this._profileName=document.querySelector(t),this._profileProfession=document.querySelector(s)}getUserInfo(){return{name:this._profileName.textContent,profession:this._profileProfession.textContent}}setUserInfo(e,t){this._profileName.textContent=e,this._profileProfession.textContent=t}}({profileNameSelector:".profile__header",profileProfessionSelector:".profile__profession"});s.addEventListener("click",(()=>{const e=L.getUserInfo();o.value=e.name,n.value=e.profession,y.resetValidation(),y.enableButton(),E.open()})),r.addEventListener("click",(()=>{b.resetValidation(),b.disableButton(),v.open()}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDeEJ3RyxXQUFZL0csS0FBSytILG1CQUFtQnhILGFBSXhDdUcsWUFBWTlELEVBQU0rRCxHQUNoQi9HLEtBQUs4SCxhQUFhdkgsWUFBY3lDLEVBQ2hDaEQsS0FBSytILG1CQUFtQnhILFlBQWN3RyxJSmlFWixDQUM1QmEsb0JBQXFCLG1CQUNyQkMsMEJBQTJCLHlCQWdCN0I5SSxFQUFXb0MsaUJBQWlCLFNBWkgsS0FDdkIsTUFBTTNDLEVBQWNxSSxFQUFTcEIsY0FFN0J6RyxFQUFVZ0csTUFBUXhHLEVBQVl3RSxLQUM5Qi9ELEVBQWdCK0YsTUFBUXhHLEVBQVl1SSxXQUVwQ1YsRUFBa0J6RSxrQkFDbEJ5RSxFQUFrQjdFLGVBQ2xCb0YsRUFBaUJ6QyxVQVFuQmhGLEVBQVVnQyxpQkFBaUIsU0FBUyxLQUNsQ29GLEVBQXFCM0Usa0JBQ3JCMkUsRUFBcUI5RSxnQkFDckIrRSxFQUFhckMsVSIsInNvdXJjZXMiOlsid2VicGFjazovL3lhbmRleC5wcmFjdGljdW0ucHJvamVjdC8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8veWFuZGV4LnByYWN0aWN1bS5wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly95YW5kZXgucHJhY3RpY3VtLnByb2plY3QvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3lhbmRleC5wcmFjdGljdW0ucHJvamVjdC8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3lhbmRleC5wcmFjdGljdW0ucHJvamVjdC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8veWFuZGV4LnByYWN0aWN1bS5wcm9qZWN0Ly4vc3JjL3V0aWxzL0FwaS5qcyIsIndlYnBhY2s6Ly95YW5kZXgucHJhY3RpY3VtLnByb2plY3QvLi9zcmMvcGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly95YW5kZXgucHJhY3RpY3VtLnByb2plY3QvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly95YW5kZXgucHJhY3RpY3VtLnByb2plY3QvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3lhbmRleC5wcmFjdGljdW0ucHJvamVjdC8uL3NyYy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly95YW5kZXgucHJhY3RpY3VtLnByb2plY3QvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0ZvciBQcm9maWxlIGFuZCBwb3B1cCBlbGVtZW50c1xuY29uc3QgcHJvZmlsZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2luZm9cIik7XG5jb25zdCBwcm9maWxlTmFtZSA9IHByb2ZpbGVJbmZvLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9faGVhZGVyXCIpO1xuY29uc3QgcHJvZmlsZVByb2Zlc3Npb24gPSBwcm9maWxlSW5mby5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3Byb2Zlc3Npb25cIik7XG5jb25zdCBwb3B1cExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwXCIpO1xuXG5jb25zdCBwcm9maWxlRm9ybSA9IGRvY3VtZW50LmZvcm1zLnByb2ZpbGVGb3JtOyAvL3F1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9mb3JtJyk7Ly9cbmNvbnN0IHByb2ZpbGVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfdHlwZV9wcm9maWxlXCIpOyAvLy5wb3B1cCBiYXN0YWtpIHNpbGluZGlcbmNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2J1dHRvblwiKTtcbi8vY29uc3Qgc2F2ZUJ1dHRvbiA9IHByb2ZpbGVQb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3NhdmUnKTsgIC8vbm90IHVzZWQtc3VibWl0QnV0dG9uU2VsZWN0b3IgdXNlZCBpbiBzZXR0aW5nc1xuY29uc3QgY2xvc2VCdXR0b24gPSBwcm9maWxlUG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY2xvc2VcIik7XG5jb25zdCBpbnB1dE5hbWUgPSBwcm9maWxlUG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXRfdHlwZV9uYW1lXCIpO1xuY29uc3QgaW5wdXRQcm9mZXNzaW9uID0gcHJvZmlsZVBvcHVwLnF1ZXJ5U2VsZWN0b3IoXG4gIFwiLnBvcHVwX19pbnB1dF90eXBlX3Byb2Zlc3Npb25cIlxuKTtcbmNvbnN0IHBvcHVwU2VsZWN0b3IgPSBcInBvcHVwX29wZW5cIjtcblxuLy8gLy8vLy9DQVJEU1xuY29uc3QgQ2FyZF9UZW1wbGF0ZV9TZWxlY3RvciA9IFwiI2NhcmQtdGVtcGxhdGVcIjtcbmNvbnN0IHByZXZpZXdJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfdHlwZS1wcmV2aWV3XCIpO1xuY29uc3QgY2FyZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF90eXBlX2FkZC1jYXJkXCIpO1xuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtYnV0dG9uXCIpO1xuY29uc3QgcHJldmlld0J1dHRvbkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCIucG9wdXBfX2Nsb3NlLnBvcHVwX19jbG9zZV9wcmV2aWV3XCJcbik7XG5jb25zdCBidXR0b25DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Nsb3NlLnBvcHVwX19jbG9zZV9hZGRcIik7XG5jb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXRfdHlwZV90aXRsZVwiKTtcbmNvbnN0IGlucHV0SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbnB1dF90eXBlX2xpbmtcIik7XG5jb25zdCBwb3B1cEltYWdlID0gcHJldmlld0ltYWdlLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2ltYWdlXCIpO1xuY29uc3QgcG9wdXBUaXRsZSA9IHByZXZpZXdJbWFnZS5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19zdWJ0aXRsZVwiKTtcbi8vIFdyYXBwZXJzXG5jb25zdCBlbGVtZW50c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzX19jYXJkc1wiKTtcblxuY29uc3Qgc2V0dGluZ3MgPSB7XG4gIGlucHV0U2VsZWN0b3I6IFwiLnBvcHVwX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIucG9wdXBfX3NhdmVcIixcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJwb3B1cF9fc2F2ZV9kaXNhYmxlZFwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwicG9wdXBfX2lucHV0LWVycm9yX29wZW5cIixcbiAgZXJyb3JDbGFzczogXCJwb3B1cF9fZXJyb3JfdmlzaWJsZVwiLFxufTtcblxuY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtX2VkaXRcIik7XG5jb25zdCBhZGRDYXJkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1fY2FyZHNcIik7XG5cbmV4cG9ydCB7XG4gIHNldHRpbmdzLCBlZGl0Rm9ybSwgYWRkQ2FyZEZvcm0sIGVkaXRCdXR0b24sIGNsb3NlQnV0dG9uLCBpbnB1dE5hbWUsIGlucHV0UHJvZmVzc2lvbiwgYWRkQnV0dG9uLCBlbGVtZW50c0xpc3Rcbn07XG4iLCJjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGZvcm1FbGVtZW50KSB7XG4gICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbiA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICB0aGlzLl9zZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvclxuICAgICk7XG4gIH1cblxuICBfc2hvd0lucHV0RXJyb3IgPSAoaW5wdXQsIGVycm9yTWVzc2FnZSkgPT4ge1xuICAgIGNvbnN0IHsgaW5wdXRFcnJvckNsYXNzLCBlcnJvckNsYXNzIH0gPSB0aGlzLl9zZXR0aW5ncztcblxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0LmlkfS1lcnJvcmApO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoZXJyb3JDbGFzcyk7XG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKGlucHV0RXJyb3JDbGFzcyk7XG4gIH07XG5cbiAgX2hpZGVJbnB1dEVycm9yID0gKGlucHV0KSA9PiB7XG4gICAgY29uc3QgeyBpbnB1dEVycm9yQ2xhc3MsIGVycm9yQ2xhc3MgfSA9IHRoaXMuX3NldHRpbmdzO1xuXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXQuaWR9LWVycm9yYCk7XG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShlcnJvckNsYXNzKTtcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShpbnB1dEVycm9yQ2xhc3MpO1xuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH07XG5cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eSA9IChpbnB1dCkgPT4ge1xuICAgIGlmICghaW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0LCBpbnB1dC52YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0KTtcbiAgICB9XG4gIH07XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaW5wdXRTZWxlY3RvciB9ID0gdGhpcy5fc2V0dGluZ3M7XG5cbiAgICB0aGlzLmlucHV0TGlzdCA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGlucHV0U2VsZWN0b3IpXG4gICAgKTtcblxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbigpOyAvL21ldGhvZCBjaGVja1xuXG4gICAgdGhpcy5pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dCk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX2hhc1ZhbGlkSW5wdXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRMaXN0LmV2ZXJ5KChpbnB1dCkgPT4gaW5wdXQudmFsaWRpdHkudmFsaWQpO1xuICB9O1xuXG4gIF90b2dnbGVCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpbmFjdGl2ZUJ1dHRvbkNsYXNzIH0gPSB0aGlzLl9zZXR0aW5ncztcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gaW5hY3RpdmVCdXR0b25DbGFzcztcblxuICAgIGlmICh0aGlzLl9oYXNWYWxpZElucHV0KCkpIHtcbiAgICAgIHRoaXMuZW5hYmxlQnV0dG9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbigpO1xuICAgIH1cbiAgfTtcblxuICBlbmFibGVCdXR0b24gPSAoKSA9PiB7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gIH07XG5cbiAgZGlzYWJsZUJ1dHRvbiA9ICgpID0+IHtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICB9O1xuXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLmlucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXQpO1xuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLl9mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yO1xuIiwiZXhwb3J0IGNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihkYXRhLCB0ZW1wbGF0ZUNhcmRTZWxlY3RvciwgaGFuZGxlQ2FyZENsaWNrKSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5fbmFtZSA9IGRhdGEubmFtZTtcbiAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVDYXJkU2VsZWN0b3IgPSB0ZW1wbGF0ZUNhcmRTZWxlY3RvcjtcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XG4gIH1cblxuICBfZ2V0VGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fdGVtcGxhdGVDYXJkU2VsZWN0b3IpXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHNfX2NhcmQnKTtcbiAgfVxuXG4gIF9jbGlja2VkTGlrZUJ1dHRvbiA9ICgpID0+IHtcbiAgICB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2VsZW1lbnRzX19idXR0b24tbGlrZV9hY3RpdmUnKTtcbiAgfVxuXG4gIF9oYW5kbGVDYXJkRGVsZXRlID0gKCkgPT4ge1xuICAgIHRoaXMuX2NhcmRFbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHRoaXMuX2xpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9jbGlja2VkTGlrZUJ1dHRvbik7XG4gICAgdGhpcy5fZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlQ2FyZERlbGV0ZSk7XG4gICAgdGhpcy5fY2FyZEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5faGFuZGxlQ2FyZENsaWNrKHRoaXMuX25hbWUsIHRoaXMuX2xpbmspKTtcbiAgfVxuXG4gIGdlbmVyYXRlQ2FyZCgpIHtcbiAgICB0aGlzLl9jYXJkRWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCkuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgdGhpcy5fY2FyZEltYWdlID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19pbWFnZScpO1xuICAgIHRoaXMuX2NhcmROYW1lID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19jYXJkLXRleHQnKTtcbiAgICB0aGlzLl9saWtlQnV0dG9uID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19idXR0b24tbGlrZScpO1xuICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbiA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fYnV0dG9uLWRlbGV0ZScpO1xuXG4gICAgLy9jYXJkIC8vIGRlc3RydWN0dXJpbmcgYXNzaWdubWVudC8vXG4gICAgdGhpcy5fY2FyZEltYWdlLnNyYyA9IHRoaXMuX2xpbms7XG4gICAgdGhpcy5fY2FyZEltYWdlLmFsdCA9IHRoaXMuX25hbWU7XG4gICAgdGhpcy5fY2FyZE5hbWUudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xuXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIHJldHVybiB0aGlzLl9jYXJkRWxlbWVudDtcbiAgfVxufVxuXG4iLCJjb25zdCBQT1BVUF9DTEFTUyA9ICdwb3B1cCc7XG5jb25zdCBDTE9TRV9CVVRUT05fQ0xBU1MgPSAncG9wdXBfX2Nsb3NlJztcbmNvbnN0IFBPUFVQX1NFTEVDVE9SX0NMQVNTID0gJ3BvcHVwX29wZW4nO1xuXG5leHBvcnQgY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpXG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpXG4gIH1cblxuICBfaGFuZGxlRXNjQ2xvc2UoZXZ0KSB7XG4gICAgaWYgKGV2dC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoUE9QVVBfU0VMRUNUT1JfQ0xBU1MpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFBPUFVQX1NFTEVDVE9SX0NMQVNTKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZ0KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFBPUFVQX0NMQVNTKSB8fFxuICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhDTE9TRV9CVVRUT05fQ0xBU1MpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbi8vKioqIG1vdXNlZG93biByZXBsYWNlZCBjbGljayB0byBwcmV2ZW50IHRoZSBidWcgaWYgeW91IGNsaWNrIGluc2lkZSBhIHBvcHVwIGFuZCB0aGVuIG1vdmUgeW91ciBtb3VzZSBvdXRzaWRlIGl0XG4vLyBhbmQgcmVsZWFzZSB0aGUgYnV0dG9uIGFib3ZlIHRoZSBvdmVybGF5IHRoZW4gdGhlIHBvcHVwIGNsb3NlcyBidXQgaXTigJlzIG5vdFxuIiwiaW1wb3J0IHsgUG9wdXAgfSBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3RvciwgaGFuZGxlU3VibWl0Rm9ybSApIHtcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKVxuXG4gICAgdGhpcy5faGFuZGxlU3VibWl0Rm9ybSA9IGhhbmRsZVN1Ym1pdEZvcm1cbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtJylcbiAgICB0aGlzLl9pbnB1dHMgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9faW5wdXQnKSAgICAgICAvL1suLi50aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9faW5wdXQnKV1cbiAgfVxuXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB7fVxuXG5cbiAgICB0aGlzLl9pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGlucHV0LmlkXG4gICAgICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlXG4gICAgICB2YWx1ZXNba2V5XSA9IHZhbHVlXG4gICAgfSlcbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpXG5cbiAgICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lciggJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgICB0aGlzLl9oYW5kbGVTdWJtaXRGb3JtKHRoaXMuX2dldElucHV0VmFsdWVzKCkpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgc2V0SW5wdXRWYWx1ZXMoZGF0YSl7XG4gICAgdGhpcy5faW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dC52YWx1ZSA9IGRhdGFbaW5wdXQubmFtZV07XG4gICAgfSlcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgICAgc3VwZXIuY2xvc2UoKVxuICAgICAgdGhpcy5fZm9ybS5yZXNldCgpXG4gIH1cblxufVxuXG4iLCJjbGFzcyBBcGkge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5fYmFzZVVybCA9IG9wdGlvbnMuYmFzZVVybFxuICAgIHRoaXMuX2hlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnNcbiAgfVxuXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIHJldHVybiBmZXRjaCh0aGlzLl9iYXNlVXJsICsgJy91c2Vycy9tZScsIHtcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnNcblxuICAgIH0pLnRoZW4oIHJlcyA9PiByZXMub2sgPyByZXMuanNvbigpIDogUHJvbWlzZS5yZWplY3QoXCJFcnJvciBkZWFyIGh1bWFuIVwiKSlcbiAgICAuY2F0Y2hcbiAgfVxuXG5cbiAgLy8gZ2V0SW5pdGlhbENhcmRzKCkge1xuICAvLyAgIC8vIC4uLlxuICAvLyB9XG4gIC8vIC8vIG90aGVyIG1ldGhvZHMgZm9yIHdvcmtpbmcgd2l0aCB0aGUgQVBJXG59XG5cbmV4cG9ydCBjb25zdCBhcGkgPSBuZXcgQXBpKHtcbiAgYmFzZVVybDogXCJodHRwczovL2Fyb3VuZC5ub21vcmVwYXJ0aWVzLmNvL3YxL2NvaG9ydC0zLWVuXCIsXG4gIGhlYWRlcnM6IHtcbiAgICBhdXRob3JpemF0aW9uOiBcIjkzOThhNDgzLTQ4NGUtNGViZC1hMzc0LWI2YjNiOTg1ZTljNFwiLFxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gIH1cbn0pO1xuIiwiXG5pbXBvcnQgXCIuLi9wYWdlL2luZGV4LmNzc1wiOyAvLyBtYWluIGJyaWRnZSB0byBjc3MgZmlsZXMgYWZ0ZXIgd2VicGFjayBidWlsZCBhbHdheXMgaW5zdGFsbCAxc3RcblxuaW1wb3J0IHsgc2V0dGluZ3MsIGVkaXRGb3JtLCBhZGRDYXJkRm9ybSwgZWRpdEJ1dHRvbiwgY2xvc2VCdXR0b24sIGlucHV0TmFtZSwgaW5wdXRQcm9mZXNzaW9uLFxuICBhZGRCdXR0b24sIGVsZW1lbnRzTGlzdCB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgeyBpbml0aWFsQ2FyZHMgfSBmcm9tICcuLi91dGlscy91dGlscy5qcyc7IC8vb3BlblBvcHVwLCBjbG9zZVBvcHVwXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZC5qcyc7XG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzJztcbmltcG9ydCB7IFBvcHVwV2l0aEZvcm0gfSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMnO1xuaW1wb3J0IHsgUG9wdXBXaXRoSW1hZ2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xuXG5pbXBvcnQgeyBhcGksIEFwaSB9IGZyb20gXCIuLi91dGlscy9BcGkuanNcIjtcblxuYXBpLmdldFVzZXJJbmZvKClcbiAgLnRoZW4ocmVzID0+IHtcbiAgICBjb25zb2xlLmxvZygncmVzID0+JywgcmVzKVxuICB9KVxuXG4vL2Zvcm0gdmFsaWRhdG9yIHNldHRpbmdzIGRvbSByZWZlcmVuY2VzLy9cbmNvbnN0IGVkaXRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoXG4gIHNldHRpbmdzLFxuICAgZWRpdEZvcm1cbiAgKTtcbmNvbnN0IGFkZENhcmRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoXG4gIHNldHRpbmdzLFxuICBhZGRDYXJkRm9ybVxuICApO1xuXG5lZGl0Rm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5hZGRDYXJkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5lZGl0Rm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcblxuLy9hZGRjYXJkc3VibWl0XG5jb25zdCBoYW5kbGVDYXJkU3VibWl0ID0gKGRhdGEpID0+IHtcblxuICBjb25zdCBjYXJkID0ge1xuICAgIG5hbWU6IGRhdGFbJ2NhcmRUaXRsZSddLFxuICAgIGxpbms6IGRhdGFbJ2NhcmRJbWFnZUxpbmsnXSxcbiAgfTtcbiAgc2VjdGlvbi5hZGRJdGVtKGNhcmQpO1xuXG4gIGFkZENhcmRQb3B1cC5jbG9zZSgpO1xufVxuLy9lZGl0cHJvZmlsZSBzdWJtaXRcbmNvbnN0IGhhbmRsZVByb2ZpbGVGb3JtU3VibWl0ID0gKGRhdGEpID0+IHtcbiAgdXNlckluZm8uc2V0VXNlckluZm8oZGF0YS5uYW1lLCBkYXRhLnByb2Zlc3Npb24pXG5cbiAgZWRpdFByb2ZpbGVQb3B1cC5jbG9zZSgpXG59XG5cbmNvbnN0IGFkZENhcmRQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKCcjcG9wdXAtdGVtcGxhdGUtZm9ybScsIGhhbmRsZUNhcmRTdWJtaXQpXG5hZGRDYXJkUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKSAvL29ubHkgY2FsbCBvbmNlICwgbmV2ZXIgaW4gaWYgbG9vcCBldGNcblxuY29uc3QgZWRpdFByb2ZpbGVQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKCcjcG9wdXAtdGVtcGxhdGUnLCBoYW5kbGVQcm9maWxlRm9ybVN1Ym1pdClcbmVkaXRQcm9maWxlUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKVxuXG5jb25zdCBpbWFnZVBvcHVwID0gbmV3IFBvcHVwV2l0aEltYWdlKCcjcG9wdXAtaW1hZ2UnKVxuaW1hZ2VQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuXG5jb25zdCBjcmVhdGVDYXJkID0gKGNhcmQpID0+IHtcbiAgY29uc3QgaXRlbSA9IG5ldyBDYXJkICggY2FyZCwnI2NhcmQtdGVtcGxhdGUnLFxuICAobmFtZSwgbGluaykgPT4ge1xuICAgIGltYWdlUG9wdXAub3BlbihuYW1lLCBsaW5rKVxuICB9KTtcblxuICByZXR1cm4gaXRlbS5nZW5lcmF0ZUNhcmQoKTtcbn1cblxuY29uc3Qgc2VjdGlvbiA9IG5ldyBTZWN0aW9uKFxuICAgIHtcbiAgICAgIGl0ZW1zOiBpbml0aWFsQ2FyZHMsXG4gICAgICByZW5kZXJlcjogY3JlYXRlQ2FyZCxcbiAgICB9LFxuICAgICcuZWxlbWVudHNfX2NhcmRzJ1xuICApXG5cbiAgc2VjdGlvbi5yZW5kZXJlckl0ZW1zKCk7XG5cblxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xuICBwcm9maWxlTmFtZVNlbGVjdG9yOiAnLnByb2ZpbGVfX2hlYWRlcicsXG4gIHByb2ZpbGVQcm9mZXNzaW9uU2VsZWN0b3I6ICcucHJvZmlsZV9fcHJvZmVzc2lvbicsXG59KVxuXG4vL3VzZXJpbmZvIGNsYXNzXG5jb25zdCBvcGVuUHJvZmlsZVBvcHVwID0gKCkgPT4ge1xuICBjb25zdCBwcm9maWxlSW5mbyA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XG5cbiAgaW5wdXROYW1lLnZhbHVlID0gcHJvZmlsZUluZm8ubmFtZVxuICBpbnB1dFByb2Zlc3Npb24udmFsdWUgPSBwcm9maWxlSW5mby5wcm9mZXNzaW9uO1xuXG4gIGVkaXRGb3JtVmFsaWRhdG9yLnJlc2V0VmFsaWRhdGlvbigpOyAvLzIga2VyZSBtaSByZXNldGxlbmRpIGJha2FsxLFtXG4gIGVkaXRGb3JtVmFsaWRhdG9yLmVuYWJsZUJ1dHRvbigpO1xuICBlZGl0UHJvZmlsZVBvcHVwLm9wZW4oKVxufVxuXG4vL0V2ZW50IGhhbmRsZXJzXG5lZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblByb2ZpbGVQb3B1cCk7XG5cblxuXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYWRkQ2FyZEZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XG4gIGFkZENhcmRGb3JtVmFsaWRhdG9yLmRpc2FibGVCdXR0b24oKTtcbiAgYWRkQ2FyZFBvcHVwLm9wZW4oKTtcbn0pXG5cblxuXG4iLCJcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4vUG9wdXAuanNcIjtcblxuZXhwb3J0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3RvcilcbiAgICB0aGlzLl9zdWJ0aXRsZSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fc3VidGl0bGUnKTtcbiAgICB0aGlzLl9pbWFnZSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faW1hZ2UnKTtcbiAgfVxuXG5cbiAgb3BlbihuYW1lLCBsaW5rKSB7XG5cbiAgICBzdXBlci5vcGVuKClcbiAgICAgIHRoaXMuX2ltYWdlLnNyYyA9IGxpbms7XG4gICAgICB0aGlzLl9pbWFnZS5hbHQgPSBuYW1lO1xuICAgICAgdGhpcy5fc3VidGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gIH1cblxufVxuIiwiXG5leHBvcnQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgaXRlbXMsIHJlbmRlcmVyfSwgY29udGFpbmVyICkge1xuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcik7XG4gIH1cblxuXG5cbiAgcmVuZGVyZXJJdGVtcygpIHtcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmFkZEl0ZW0oZGF0YSlcbiAgICB9KVxuICB9O1xuXG4gIGFkZEl0ZW0oZGF0YSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9yZW5kZXJlcihkYXRhKVxuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpXG4gIH07XG5cblxufVxuIiwiZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiWW9zZW1pdGUgVmFsbGV5XCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS95b3NlbWl0ZS5qcGdcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFrZS1sb3Vpc2UuanBnXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQmFsZCBNb3VudGFpbnNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2JhbGQtbW91bnRhaW5zLmpwZ1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxhdGVtYXJcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhdGVtYXIuanBnXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS92YW5vaXNlLmpwZ1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxhZ28gZGkgQnJhaWVzXCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWdvLmpwZ1wiXG4gIH1cbl07XG4iLCJleHBvcnQgY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7cHJvZmlsZU5hbWVTZWxlY3RvciwgcHJvZmlsZVByb2Zlc3Npb25TZWxlY3Rvcn0pXG4gIHtcbiAgICB0aGlzLl9wcm9maWxlTmFtZT0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9maWxlTmFtZVNlbGVjdG9yKVxuICAgIHRoaXMuX3Byb2ZpbGVQcm9mZXNzaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9maWxlUHJvZmVzc2lvblNlbGVjdG9yKVxuICB9XG5cbiAgZ2V0VXNlckluZm8oKXtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5fcHJvZmlsZU5hbWUudGV4dENvbnRlbnQsXG4gICAgICBwcm9mZXNzaW9uOiB0aGlzLl9wcm9maWxlUHJvZmVzc2lvbi50ZXh0Q29udGVudCxcbiAgICB9XG4gIH1cblxuICBzZXRVc2VySW5mbyhuYW1lLCBwcm9mZXNzaW9uKSB7XG4gICAgdGhpcy5fcHJvZmlsZU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHRoaXMuX3Byb2ZpbGVQcm9mZXNzaW9uLnRleHRDb250ZW50ID0gcHJvZmVzc2lvbjtcbiAgfVxuXG5cbn1cbiJdLCJuYW1lcyI6WyJwcm9maWxlSW5mbyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInByb2ZpbGVQb3B1cCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JtcyIsInByb2ZpbGVGb3JtIiwiZWRpdEJ1dHRvbiIsImlucHV0TmFtZSIsImlucHV0UHJvZmVzc2lvbiIsInByZXZpZXdJbWFnZSIsImFkZEJ1dHRvbiIsInNldHRpbmdzIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJlZGl0Rm9ybSIsImFkZENhcmRGb3JtIiwiY29uc3RydWN0b3IiLCJmb3JtRWxlbWVudCIsImlucHV0IiwiZXJyb3JNZXNzYWdlIiwidGhpcyIsIl9zZXR0aW5ncyIsImVycm9yRWxlbWVudCIsIl9mb3JtRWxlbWVudCIsImlkIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJyZW1vdmUiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2hpZGVJbnB1dEVycm9yIiwiX3Nob3dJbnB1dEVycm9yIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJpbnB1dExpc3QiLCJBcnJheSIsImZyb20iLCJfdG9nZ2xlQnV0dG9uIiwiZm9yRWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiZXZlcnkiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9oYXNWYWxpZElucHV0IiwiZW5hYmxlQnV0dG9uIiwiZGlzYWJsZUJ1dHRvbiIsIl9zdWJtaXRCdXR0b24iLCJkaXNhYmxlZCIsInJlc2V0VmFsaWRhdGlvbiIsImVuYWJsZVZhbGlkYXRpb24iLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsIl9zZXRFdmVudExpc3RlbmVycyIsIkNhcmQiLCJkYXRhIiwidGVtcGxhdGVDYXJkU2VsZWN0b3IiLCJoYW5kbGVDYXJkQ2xpY2siLCJfbGlrZUJ1dHRvbiIsInRvZ2dsZSIsIl9jYXJkRWxlbWVudCIsIl9jbGlja2VkTGlrZUJ1dHRvbiIsIl9kZWxldGVCdXR0b24iLCJfaGFuZGxlQ2FyZERlbGV0ZSIsIl9jYXJkSW1hZ2UiLCJfaGFuZGxlQ2FyZENsaWNrIiwiX25hbWUiLCJfbGluayIsIl9kYXRhIiwibmFtZSIsImxpbmsiLCJfdGVtcGxhdGVDYXJkU2VsZWN0b3IiLCJfZ2V0VGVtcGxhdGUiLCJjb250ZW50IiwiZ2VuZXJhdGVDYXJkIiwiY2xvbmVOb2RlIiwiX2NhcmROYW1lIiwic3JjIiwiYWx0IiwiX2FkZEV2ZW50TGlzdGVuZXJzIiwiUE9QVVBfU0VMRUNUT1JfQ0xBU1MiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXAiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwia2V5IiwiY2xvc2UiLCJvcGVuIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldEV2ZW50TGlzdGVuZXJzIiwidGFyZ2V0IiwiY29udGFpbnMiLCJQb3B1cFdpdGhGb3JtIiwiaGFuZGxlU3VibWl0Rm9ybSIsInN1cGVyIiwiX2hhbmRsZVN1Ym1pdEZvcm0iLCJfZm9ybSIsIl9pbnB1dHMiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJ2YWx1ZXMiLCJ2YWx1ZSIsImUiLCJzZXRJbnB1dFZhbHVlcyIsInJlc2V0Iiwib3B0aW9ucyIsIl9iYXNlVXJsIiwiYmFzZVVybCIsIl9oZWFkZXJzIiwiaGVhZGVycyIsImdldFVzZXJJbmZvIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsImNhdGNoIiwiYXV0aG9yaXphdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJlZGl0Rm9ybVZhbGlkYXRvciIsIkZvcm1WYWxpZGF0b3IiLCJhZGRDYXJkRm9ybVZhbGlkYXRvciIsImFkZENhcmRQb3B1cCIsImNhcmQiLCJzZWN0aW9uIiwiYWRkSXRlbSIsImVkaXRQcm9maWxlUG9wdXAiLCJ1c2VySW5mbyIsInNldFVzZXJJbmZvIiwicHJvZmVzc2lvbiIsImltYWdlUG9wdXAiLCJfc3VidGl0bGUiLCJfaW1hZ2UiLCJjb250YWluZXIiLCJpdGVtcyIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsInJlbmRlcmVySXRlbXMiLCJlbGVtZW50IiwicHJlcGVuZCIsInByb2ZpbGVOYW1lU2VsZWN0b3IiLCJwcm9maWxlUHJvZmVzc2lvblNlbGVjdG9yIiwiX3Byb2ZpbGVOYW1lIiwiX3Byb2ZpbGVQcm9mZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==