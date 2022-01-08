


//not complete yet//
renderAdded();

function renderAdded() {
let  profileData = document.querySelector('.profile__info');

if (profileName.length !== 0) {
  editButton.setAttribute('click', true);

 }
}


function renderAdded() {
  let songs = songsContainer.querySelectorAll('.song');
  let noSongsElement = container.querySelector('.no-songs');

  if (songs.length === 0) {
    resetButton.setAttribute('disabled', true);
    resetButton.classList.add('form__submit-btn_disabled');
    noSongsElement.classList.remove('no-songs_hidden');
  } else {
    resetButton.removeAttribute('disabled');
    resetButton.classList.remove('form__submit-btn_disabled');
    noSongsElement.classList.add('no-songs_hidden');
  }
}




# Project 4: Around The U.S.

### Overview

* Figma
* Images

**Figma**

* [Link to the project in Figma](https://www.figma.com/file/SurN1jaeEQIhuZEDMhmWWf/Sprint-4-Around-The-U.S.-desktop-mobile?node-id=0%3A1)

**Images**

The way you'll do this at work is by exporting images directly from Figma — we recommend doing that to practice more. Don't forget to optimize them [here](https://tinypng.com/), so your project loads faster.

Have fun with JavaScript!
