'use strict';

//los campos del formulario
const fullName = document.querySelector('#full_name');
const position = document.querySelector('#position');
//Los campos de la tarjeta
const fullNameCard = document.querySelector('.title__name');
const positionCard = document.querySelector('.title__profession');


function fillCard(e){
  
  const culpable = e.currentTarget;
  console.log(culpable);
  const classCardElement = culpable.getAttribute('data-vinculo');
  console.log(classCardElement);
  const cardElement = document.querySelector('.'+classCardElement);
  console.log(cardElement);
  
   if (classCardElement === 'title__name') { // 
     fullNameCard.innerHTML = culpable.value;
     if(culpable.value === "") {
     fullNameCard.innerHTML = "Nombre Apellido";
     }
   }else if (classCardElement === 'title__profession') {
      positionCard.innerHTML = culpable.value;
      if(culpable.value === "") {
      positionCard.innerHTML = "Front-end developer";
      }
   }
}

fullName.addEventListener('keyup', fillCard);
position.addEventListener('keyup', fillCard);
