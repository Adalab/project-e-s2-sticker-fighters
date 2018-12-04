'use strict';

const titleName = document.querySelector('.title__name');
const cardTitles = document.querySelector('.card__titles');
const elementLink = document.querySelector('.element__link');
const elementContent = document.querySelector('.element__content');

const optionGreen = document.querySelector('#green');
const optionRed = document.querySelector('#red');
const optionBlue = document.querySelector('#blue');

optionRed.addEventListener('change',function(){
  titleName.classList.add('red-dark-color');
});


