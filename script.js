let content = document.querySelector(".content");
let profile = document.querySelector(".profile");  // section of profile info
let editButton = document.querySelector(".profile__button"); // button with pen image for edit
let addButton = document.querySelector(".add-button"); // Add button , 2nd on the section

const popup = document.querySelector('.popup');

editButton.addEventListener('click', editProfile);



function editProfile () {
let profileData = document.querySelector('.profile__info');

let profileName = profileData.querySelector('.profile__header');
let profileProfession = profileData.querySelector('.profile__profession');

profile.insertAdjacentHTML('beforeend', `
  <div class='profileData'>
  <p class='profileName'>${profileName.innerText}</p>
  <p class='profileProfession'>${profileProfession.innerText}</p>
  </div>
`);
renderAdded();
  profileName.value = "";
  profileProfession.value = "";
}


