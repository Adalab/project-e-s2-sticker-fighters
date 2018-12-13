'use strict';
// Añadimos un listener para el evento click por cada input 
document.querySelectorAll("input[type=checkbox]")
    .forEach(input => input.addEventListener('click', checkInputs));
let checkedInputs;
// Funcion manejadora del evento click de cada input
// que deshabilita y habilita los checkboxes en función del número de checkboxes checked.
function checkInputs(ev) {
    checkedInputs = [];
    let notCheckedInputs = [];
    let namesCheckedInputs = [];

    const inputs = document.querySelectorAll("input[type=checkbox]");

    // recorremos todos los inputs y separamos entre inputs checkeados y no checkeados
    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];

        if (input.checked) {
            checkedInputs.push(input);
        } else {
            notCheckedInputs.push(input);
        }
    }

    // Si la lista de inputs seleccionados es igual o mayor a 3, 
    // tenemos que deshabilitar los inputs no seleccionados y sino, 
    // habilitamos los inputs no seleccionados.
    if (checkedInputs.length >= 3) { //deshabilitamos las otras opciones y mandamos la info a la tarjeta
        for (let i = 0; i < notCheckedInputs.length; i++) {
            notCheckedInputs[i].disabled = true;

        }

        namesCheckedInputs = addSkillsInfo(checkedInputs); //guardamos el string que nos devuelve la función
        addSkills(namesCheckedInputs);
        


    } else {
        for (let i = 0; i < notCheckedInputs.length; i++) {
            notCheckedInputs[i].disabled = false;

        }

    }



}


/* Función que devuelve un array donde están recogidos los nombres de las tres habilidades seleccionadas*/ 
function addSkillsInfo(checkInputs) {

    let arrayCheckedInputs = checkInputs; //array con los elementos seleccionados
    let arrayIds = ["", "", ""]; //array para guardar las ids de los elementos seleccionados
    let arrayContenido = ["", "", ""]; //array para guardar el valor del atributo "value" de los elementos seleccionados
    
    for (let i = 0; i < arrayCheckedInputs.length; i++) {
        
        console.log('4 en el for' + arrayCheckedInputs[i].id);

        arrayIds[i] = document.getElementById(arrayCheckedInputs[i].id);
        arrayContenido[i] = arrayIds[i].value;
    }

    console.log(arrayContenido);
    return arrayContenido;


}

/** Función que agrega a la tarjeta y al objeto JSON los skills seleccionados por el usuario */

function addSkills(arrayContenido) {
    console.log('uuuuee');

    //FALTA AÑADIR A LA TARJETA ESTE ARRAY

    // FALTA AÑADIR AL JSON ESTE ARRAY

}

