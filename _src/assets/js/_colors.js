const card = document.querySelector('.card__wrapper');
const radioButtonSelectedGreen = document.querySelector('#green');
const radioButtonSelectedRed = document.querySelector('#red');
const radioButtonSelectedBlue = document.querySelector('#blue');

function changeColor(e) {

  let clickedElement = e.currentTarget;
  let idSelected = clickedElement.getAttribute('id');

  if (idSelected === 'red') {
    card.classList.remove('card__theme-blue');
    card.classList.add('card__theme-red');
    objectJson.palette = 2;
  } else if (idSelected === 'blue') {
    card.classList.remove('card__theme-red');
    card.classList.add('card__theme-blue');
    objectJson.palette = 3;
  } else {
    card.classList.remove('card__theme-blue');
    card.classList.remove('card__theme-red');
    objectJson.palette = 1;
  }
}

// REFACTOR: crear un for para aplicar un addEventListener a cada uno
radioButtonSelectedGreen.addEventListener('change', changeColor);
radioButtonSelectedRed.addEventListener('change', changeColor);
radioButtonSelectedBlue.addEventListener('change', changeColor);

