'use strict';
console.log('hola 1');

const cardWrapper = document.querySelector('#card__wrapper');
const radioButtonSelectedUbuntu =  document.querySelector('#ubuntu');
const radioButtonSelectedComic =  document.querySelector('#comic');
const radioButtonSelectedMontserrat =  document.querySelector('#montserrat');

function changeTypo(e) {
    console.log('hola');
    let clickedElement = e.currentTarget;
    let idSelected = clickedElement.getAttribute('id');

    if (idSelected === 'ubuntu') {
        console.log(idSelected);
        console.log(idSelected);
        cardWrapper.classList.remove('card__typo-montserrat');
        cardWrapper.classList.add('card__typo-ubuntu');

    } else if ( idSelected === 'montserrat') {
        console.log(idSelected);
        cardWrapper.classList.remove('card__typo-ubuntu');
        cardWrapper.classList.add('card__typo-montserrat');

    } else {
        cardWrapper.classList.remove('card__typo-montserrat');
        cardWrapper.classList.remove('card__typo-ubuntu');
    }
}

radioButtonSelectedUbuntu.addEventListener('change', changeTypo);
radioButtonSelectedComic.addEventListener('change', changeTypo);
radioButtonSelectedMontserrat.addEventListener('change', changeTypo);