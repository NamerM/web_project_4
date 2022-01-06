//Profile Section Header Elements
const content = document.querySelector(".content");
const profile = document.querySelector(".profile");
const editButton = document.querySelector (".profile__button");
const addButton = document.querySelector(".add-button"); // Add button , 2nd on the section
//Profile Section Content Elements
const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__header');
const profileProfession = profileInfo.querySelector('.profile__profession');

//Popup-Form Section Elements
const profilePopup = document.querySelector('.popup');
const saveButton = document.querySelector('.popup__save');
//Forms
let inputName = document.querySelector('.popup__input-name');
let inputProfession = document.querySelector('.popup__input-profession');

editButton.addEventListener('click', function(event) {
  editButton.style.display = 'flex';
  profilePopup.style.display = 'block';
  content.setAttribute('style', 'opacity:0.5');
});

function editProfile() {
inputName.value = profileName.textContent;
inputProfession.value = profileProfession.textContent;
}
editProfile();

//saveButton.addEventListener('click', formChange);

function formChange() {
  profileInfo.innerHTML.textContent = `<div class="profile__info">
  <p class="profile__header">${inputName.value}</p>
  <p class="profile__profession">${inputProfession.value}</p>
  </div>`;
console.log(profileInfo);
}

formChange();

addButton.addEventListener('click', function(event2) {
  alert("This button will be functional in Sprint 5");
});


//editButton.classList.toggle(popup:active);

// profileInfo.innerHTML.textContent = `<div class="profile__info">
// <p class="profile__header">${inputName.value}</p>
// <p class="profile__profession">${inputProfession.value}</p>
//  </div>`;

// inputName.addEventListener('input', function (form){
//  const inputValue = form.target.value;
//  profileName.textContent = inputValue;
//  });
