export class UserInfo {
  constructor({profileNameSelector, profileProfessionSelector, profileAvatar})
  {
    this._profileName= document.querySelector(profileNameSelector);
    this._profileProfession = document.querySelector(profileProfessionSelector);
    this._profileAvatar= document.querySelector(profileAvatar);
  }

  getUserInfo(){
    return {
      name: this._profileName.textContent,
      profession: this._profileProfession.textContent,
        avatar: this._profileAvatar.style.backgroundImage
    }
  }

  setUserInfo(name, profession, avatar) {
    this._profileName.textContent = name;
    this._profileProfession.textContent = profession;
    this._profileAvatar.style.backgroundImage = `url(${avatar})`;
  }


}
