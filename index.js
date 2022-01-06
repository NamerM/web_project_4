let content = document.querySelector(".content");
let profile = content.querySelector(".profile");  // section of profile info
let editButton = content.querySelector(".profile__button"); // button with pen image for edit
let addButton = content.querySelector(".add-button"); // Add button , 2nd on the section


function editProfile () {
let profileData = document.querySelector('.popup');
let profileName = profileData.querySelector('.popup__input-text');
let profileProfession = profileData.querySelector('.popup__input-text-profession');


profile.insertAdjacentHTML('beforeend', `
  <div class='profileData'>
  <p class='profileName'>${profileName.innerText}</p>
  <p class='profileProfession'>${profileProfession.innerText}</p>
  </div>
`);
}

editButton.addEventListener('click', true);

//const popup = document.querySelector('.popup');

//editButton.setAttribute('onclick', alert(popup) );
//editButton.classList.toggle(popup:active);

//function toggleForm() {
 // inputName.value = profileName.textContent;
 // inputBreed.value = profileBreed.textContent;
 // popup.classList.add('.popup::after');
