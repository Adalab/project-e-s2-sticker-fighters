'use strict';

const collapButtons = document.querySelectorAll('.form--btn');
const collapContainer = document.querySelector('.section');

// Función encargada de modificar el icono arrow de un desplegable
function arrows(element){
  // REFACTOR: no entendemos que se seleccionen todos los .fas, cuando con el querySelector se selecciona el primero solamente. También igual debería haber otra clase particular diferente, porque el fas es común a todos los iconos.
  const icon = element.querySelector('.fas');
  if(icon.classList.contains('fa-chevron-down')){
    element.innerHTML = `<i class="fas fa-chevron-up"></i>`;
  } else {
    element.innerHTML = `<i class="fas fa-chevron-down"></i>`;
  }
}

// Función encargada de cerrar todos los collapsibles y los cerrados tienen arrow-down
function closeAllCollapsibles() {
  for (const closeCollap of collapButtons) {
    closeCollap.parentElement.classList.remove('collapsible--visible');
// REFACTOR: no entendemos por qué con querySelector seleccionar todos y no el primero solamente
    const iconArrow = closeCollap.querySelector('.form--btn_icon');

    iconArrow.innerHTML = `<i class="fas fa-chevron-down"></i>`;
  }
}

/*Función encargada de abrir el objeto clickado y de cerrar las que no tienen el evento. A su vez en el que está ocurriendo el evento se le pone arrow-up, y si se le quita el evento se le pone arrow-down*/
function updateCollapsibles(e) {
  const parent = e.currentTarget.parentElement;
  const iconArrow = e.currentTarget.querySelector('.form--btn_icon');

  // cerrar el abierto
  if (parent.classList.contains('collapsible--visible')) {
    parent.classList.remove('collapsible--visible');
  } else {
    // abrir uno nuevo
    closeAllCollapsibles();
    parent.classList.add('collapsible--visible');
  }
  arrows(iconArrow);
}

//Añade a todos los colapsables un click event listener
for (const collap of collapButtons) {
  collap.addEventListener('click', updateCollapsibles);
}
