import { inputName, inputProfession } from "../utils/constants"

export class UserInfo {
  constructor({profileNameSelector, profileProfessionSelector})
  {
    this._profileName= document.querySelector(profileNameSelector)
    this._profileProfession = document.querySelector(profileProfessionSelector)
  }

  getUserInfo(){
    return {
      name: this._profileName.textContent,
      profession: this._profileProfession.textContent,
    }
  }

  setUserInfo(name, profession) {
    this._profileName.textContent = name;
    this._profileProfession.textContent = profession;
  }


}
