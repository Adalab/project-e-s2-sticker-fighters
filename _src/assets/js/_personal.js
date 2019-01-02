//los campos del formulario
const fullName = document.querySelector('#full_name');
const position = document.querySelector('#position');
//Los campos de la tarjeta
const fullNameCard = document.querySelector('.title__name');
const positionCard = document.querySelector('.title__profession');


function fillCard(e) {

    const culpable = e.currentTarget;
    const classCardElement = culpable.getAttribute('data-vinculo');
    const cardElement = document.querySelector('.' + classCardElement);

    if (classCardElement === 'title__name') {
        fullNameCard.innerHTML = culpable.value;
        if (culpable.value === "") {
            fullNameCard.innerHTML = "Nombre Apellido";
        }
          objectJson.name = fullName.value;

    } else if (classCardElement === 'title__profession') {
        positionCard.innerHTML = culpable.value;
        if (culpable.value === "") {
            positionCard.innerHTML = "Front-end developer";
          }
          objectJson.job = position.value;
    }
}

fullName.addEventListener('keyup', fillCard);
position.addEventListener('keyup', fillCard);

//Por los momentos lo vemos bien, pero se podría refactorizar para simplificar el código.
