'use strict';

const card = document.querySelector('.card__wrapper');
const radioButtonSelectedGreen =  document.querySelector('#green');
const radioButtonSelectedRed =  document.querySelector('#red');
const radioButtonSelectedBlue =  document.querySelector('#blue');

function changeColor(e) {
    
    let clickedElement = e.currentTarget;
    let idSelected = clickedElement.getAttribute('id');

    if (idSelected === 'red') {
        //console.log(idSelected);
        card.classList.remove('card__theme-blue');
        card.classList.add('card__theme-red');

    } else if ( idSelected === 'blue') {
        //console.log(idSelected);
        card.classList.remove('card__theme-red');
        card.classList.add('card__theme-blue');

    } else {
        card.classList.remove('card__theme-blue');
        card.classList.remove('card__theme-red');
    }
}

radioButtonSelectedGreen.addEventListener('change', changeColor);
radioButtonSelectedRed.addEventListener('change', changeColor);
radioButtonSelectedBlue.addEventListener('change', changeColor);

