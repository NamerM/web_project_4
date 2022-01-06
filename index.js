
const content = document.querySelector(".content");
const profile = document.querySelector(".profile");  // section of profile info
const editButton = document.querySelector (".profile__button"); // Edit buton, pen icon
const addButton = document.querySelector(".add-button"); // Add button , 2nd on the section

let profileData = document.querySelector('.popup');
let profileName = profileData.querySelector('.popup__input-text');
let profileProfession = profileData.querySelector('.popup__input-text-profession');


editButton.addEventListener('click', function(event) {
  editButton.style.display = 'flex';
  profileData.style.display = 'block';
});

function editProfile () {
let profileName = profileData.querySelector('.popup__input-text');
let profileProfession = profileData.querySelector('.popup__input-text-profession');


profile.insertAdjacentHTML('beforeend', `
  <div class='profileData'>
  <p class='profileName'>${profileName.innerText}</p>
  <p class='profileProfession'>${profileProfession.innerText}</p>
  </div>
`);
}



//const popup = document.querySelector('.popup');

//editButton.setAttribute('onclick', alert(popup) );
//editButton.classList.toggle(popup:active);

//function toggleForm() {
 // inputName.value = profileName.textContent;
 // inputBreed.value = profileBreed.textContent;
 // popup.classList.add('.popup::after');
