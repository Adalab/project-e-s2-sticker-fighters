'use strict';

const resetButton = document.querySelector('.card__button');
let clear= '';

function formReset() {
  fullName.value = clear;
  position.value = clear;
  telOrigin.value = clear;
  mailOrigin.value = clear;
  linkedinOrigin.value = clear;
  githubOrigin.value = clear;
}

function resetCard(){
  // fullName.value = fullName.setAttribute('placeholder', 'ppermint') ;
  // fullName.value = clean;
  // position.value = clean;
  // telDest.innerHTML = clean ;
  // mailOrigin.innerHTML = clean;
  // linkedinOrigin.innerHTML = clean;
  // fillFormImput.value = setAttribute('placeholder',' Ej: sally-hill@gmail.com');
  // fillFormImput.innerHTML = 'Ej: sally-hill@gmail.com';
  formReset()
}

resetButton.addEventListener('click',resetCard);

console.log(resetButton);

// // //Boton Reset de Maria
// // let labelName= document.querySelector('.form-label--name');
// let labelPuesto = document.querySelector('.form-label--puesto');
// let allInputsClean= document.querySelectorAll('.form-input');
// let infoClean= "";
// const reset = document.querySelector('.reset');
// function clean() {
//   phoneDest.innerHTML=infoClean;
//   mailDest.innerHTML=infoClean;
//   linkDest.innerHTML=infoClean;
//   gitDest.innerHTML=infoClean;
//   nameCard.innerHTML=labelName.innerHTML;
//   puestoCard.innerHTML=labelPuesto.innerHTML;
// }
// reset.addEventListener('click',clean);
