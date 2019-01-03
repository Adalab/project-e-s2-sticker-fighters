// Añadimos un listener para el evento click por cada input
const inputSelected = document.querySelectorAll('.fill--checkbox__input');
  inputSelected.forEach(input => input.addEventListener('click', checkInputs));
let checkedInputs; //array que se usa en la función checkInputs

const listCardContainer = document.querySelector('.card__skills-list'); //variable que se usa en la función addSkills

// Funcion manejadora del evento click de cada input
// que deshabilita y habilita los checkboxes en función del número de checkboxes checked.
function checkInputs() {
  checkedInputs = [];
  let notCheckedInputs = [];
  let namesCheckedInputs = [];
  const inputs = document.querySelectorAll(".fill--checkbox__input");

  // recorremos todos los inputs y separamos entre inputs checkeados y no checkeados
  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    if (input.checked) { //si están checkeados, añades el input al array de chequeados
      checkedInputs.push(input);
    } else {
      notCheckedInputs.push(input);
    }
    //agregamos la info seleccionada a la tarjeta y al JSON
    namesCheckedInputs = addSkillsInfo(checkedInputs); //guardamos el string que nos devuelve la función
    addSkills(namesCheckedInputs);

  }
  //console.log('Content checkedInputs: ' + checkedInputs);
  if (!checkedInputs || checkedInputs.length === 0) {
    //checkedInputs = [""];
    //REFACTOR: Averiguar qué esto para ver qué hacer con ello
    addSkills(["no definido"]);
  }
  // Si la lista de inputs seleccionados es igual o mayor a 3,
  // tenemos que deshabilitar los inputs no seleccionados y sino,
  // habilitamos los inputs no seleccionados.
  if (checkedInputs.length >= 3) { //deshabilitamos las otras opciones y mandamos la info a la tarjeta
    for (let i = 0; i < notCheckedInputs.length; i++) {
      notCheckedInputs[i].disabled = true;
    }

  } else {
    for (let i = 0; i < notCheckedInputs.length; i++) {
      notCheckedInputs[i].disabled = false;
    }
  }
}

/** Función que devuelve un array donde están recogidos los nombres de las tres habilidades seleccionadas */
function addSkillsInfo(checkInputs) {

  let arrayCheckedInputs = checkInputs; //array con los elementos seleccionados
  let arrayIds = []; //array para guardar las ids de los elementos seleccionados
  let arrayContenido = []; //array para guardar el valor del atributo "value" de los elementos seleccionados

  for (let i = 0; i < arrayCheckedInputs.length; i++) {
    arrayIds.push(document.getElementById(arrayCheckedInputs[i].id));
    arrayContenido.push(arrayIds[i].value);
  }
  return arrayContenido;
}

/** Función que agrega a la tarjeta y al objeto JSON los skills seleccionados por el usuario */

function addSkills(arrayContenido) {
  //Añadimos la información a la tarjeta
  let allContent = '';
  //const allContent = document.querySelector('#ul-skills');
  for (let i = 0; i < arrayContenido.length; i++) {
    // const newLi = document.createElement('li');
    // const newParagraph = document.createElement('p');
    // newLi.classList.add('skills-list_element');
    // newParagraph.classList.add('element__content');
    // const paragraphContent = document.createTextNode(`${arrayContenido[i]}`);
    // newParagraph.appendChild(paragraphContent);
    // newLi.appendChild(newParagraph);
    let content = `<li class="skills-list__element">
                     <p class="element__content">${arrayContenido[i]}</p>
                 </li>`;
    // allContent.appendChild(newLi);
    allContent = content;
  }

  listCardContainer.innerHTML = allContent; //pintamos de una vez todos los li necesarios

  // Añadimos la información al JSON

  objectJson.skills = arrayContenido;
}

