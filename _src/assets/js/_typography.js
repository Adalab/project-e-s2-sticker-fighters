const cardWrapper = document.querySelector('#card__wrapper');
const radioButtonSelectedUbuntu =  document.querySelector('#ubuntu');
const radioButtonSelectedComic =  document.querySelector('#comic');
const radioButtonSelectedMontserrat =  document.querySelector('#montserrat');

function changeTypo(e) {
    let clickedElement = e.currentTarget;
    let idSelected = clickedElement.getAttribute('id');

    if (idSelected === 'ubuntu') {
        cardWrapper.classList.remove('card__typo-montserrat');
        cardWrapper.classList.add('card__typo-ubuntu');
        objectJson.typography = 1;

    } else if (idSelected === 'montserrat') {
        cardWrapper.classList.remove('card__typo-ubuntu');
        cardWrapper.classList.add('card__typo-montserrat');
        objectJson.typography = 3;

    } else {
        cardWrapper.classList.remove('card__typo-montserrat');
        cardWrapper.classList.remove('card__typo-ubuntu');
        objectJson.typography = 2;
    }
}

radioButtonSelectedUbuntu.addEventListener('change', changeTypo);
radioButtonSelectedComic.addEventListener('change', changeTypo);
radioButtonSelectedMontserrat.addEventListener('change', changeTypo);
