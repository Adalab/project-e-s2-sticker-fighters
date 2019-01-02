const resetButton = document.querySelector('.card__button');
const colorRadio = document.querySelectorAll('.design_input');
const fontRadio = document.querySelectorAll('.design_input-font');

//Este let podría ser un const porque si va a "resetear" no debería cambiar.
let clear= '';

function colorReset() {
  card.classList.remove('card__theme-blue', 'card__theme-red');
  colorRadio[0].checked = true;
}

function fontReset() {
  cardWrapper.classList.remove('card__typo-monserrat', 'card__typo-ubuntu');
  fontRadio[1].checked = true;
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

function skillsReset() {
console.log(checkers);
const inputSkills = document.querySelectorAll('.fill--checkbox__input');
  for(let i=0; i<inputSkills.length; i++){

    inputSkills[i].disabled = false;
    inputSkills[i].checked = false;
  }
  document.getElementById('ul-skills').innerHTML = clear;
}

function resetCard(){
  colorReset();
  fontReset();
  formReset();
  imageReset();
  skillsReset();
}

resetButton.addEventListener('click',resetCard);


//no se resetea el monserrat
