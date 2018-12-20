'use strict';


const checkers = document.querySelector('.checkers');
const urlApi = 'https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json';


const keyStorage = 'skills'; // definimos la key del localStorage

setList(urlApi);

/**
 * Función que pinta una lista de skills desde el servidor o desde la caché
 */
function setList(urlApi) {

  //compruebo si skills existe y que no contenga "" (un valor falsy). Hay algo en el storage (si hay algo, getStorage me devuelve el valor de lo que haya; si no hay nada, getStorage me devuelve null). Si la comprobación que hiciera fuera getStorage(keyStorage) === null, lo que estaría comprobando es solo si skills existe o no (se tragaría el caso en el que skills = "")
  if (getStorage(keyStorage)) { // hay info en el localStorage

    //cogemos lo que hay en localStorage
    const arraySkills = JSON.parse(getStorage(keyStorage)); //lo que me devuelve el localStorage es un string

    //lo pintamos
    paintList (checkers, arraySkills);

  } else { //no hay nada en el localStorage

    //LLamo al servidor y le pido la lista de skills

    fetch(urlApi)
      .then(response => response.json())
      .then(data => {

        const arraySkills = data.skills;

        //pinto la lista en el html
        paintList (checkers, arraySkills);

        //guardo la lista en localStorage
        setStorage(keyStorage, JSON.stringify(arraySkills));


      });

  }

}

/**
 * Función que pinta una lsita de elementos guardados en un array
 */
function paintList(checkers, arraySkills) {
  let allContent = '';

  for (let i = 0; i < arraySkills.length; i++) {
    let content = `
          <div class="fill--checkbox__item">
            <label for="skill-options${i}">
              <input class="fill--checkbox__input" id="skill-options${i}" type="checkbox" value="${arraySkills[i]}" name="skills">
              ${arraySkills[i]}
            </label>
          </div>`;
    allContent += content;
  }
  checkers.innerHTML = allContent; //pintamos de una vez todos los li necesarios
}

/**
 * Función que almacena en el localStorage
 */

function setStorage(key, value) {
  localStorage.setItem(key, value);
}

/**
 * Función que devuelve el valor almacenado
 */
function getStorage(key) {

  //cogemos el dato del localStorage
  return localStorage.getItem(key);

}

