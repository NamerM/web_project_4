let content = document.querySelector(".content");
let profile = content.querySelector(".profile");  // section of profile info

let editButton = content.querySelector(".profile__button"); // button with pen image for edit
let addButton = content.querySelector(".add-button"); // Add button , 2nd on the section

editButton.addEventListener('click', editProfile);

function editProfile () {
let profileData = document.querySelector('.profile__ifno');

let profileName = document.querySelector('.profile__header');
let profileProfession = document.querySelector('.profile__profession');

profile.insertAdjacentHTML('beforeend', `
  <div class='profileData'>
  <p class='profileName'>${profileName.value}</p>
  <p class='profileProfession'>${profileProfession.value}</p>
  </div>
`)
}
