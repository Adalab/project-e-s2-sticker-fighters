'use strict';

const resetButton = document.querySelector('.card__button');
let clear= '';

function colorReset() {
  card.classList.remove('card__theme-blue', 'card__theme-red', );
}

function fontReset() {
  cardWrapper.classList.remove('card__typo-comic', 'card__typo-monserrat', 'card__typo-ubuntu');
}

function formReset() {
  //reset de lo que se escribe en el form
  fullName.value = clear;
  position.value = clear;
  telOrigin.value = clear;
  mailOrigin.value = clear;
  linkedinOrigin.value = clear;
  githubOrigin.value = clear;
  //reset de lo que se pinta en la card
  fullNameCard.innerHTML = 'Nombre Apellido';
  positionCard.innerHTML = 'front-end developer';
  telDest.innerHTML = clear;
  mailDest.innerHTML = clear;
  linkedinDest.innerHTML = clear;
  githubDest.innerHTML = clear;
}

function imageReset() {
  profileImage.style.backgroundImage = clear;
  mini.style.backgroundImage = clear;
}


// function skillsReset() {

// }

function resetCard(){
  colorReset();
  fontReset();
  formReset();
  imageReset();
  // skillsReset();
}

resetButton.addEventListener('click',resetCard);
