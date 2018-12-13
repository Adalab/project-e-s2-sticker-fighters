'use strict';
// Añadimos un listener para el evento click por cada input 
document.querySelectorAll("input[type=checkbox]")
    .forEach(input => input.addEventListener('click', checkInputs));

// Funcion manejadora del evento click de cada input
// que deshabilita y habilita los checkboxes en función del número de checkboxes checked.
function checkInputs(ev) {
    let checkedInputs = [];
    let notCheckedInputs = [];

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
    if (checkedInputs.length >= 3) {
        for (let i = 0; i < notCheckedInputs.length; i++) {
            notCheckedInputs[i].disabled = true;
        }
    } else {
        for (let i = 0; i < notCheckedInputs.length; i++) {
            notCheckedInputs[i].disabled = false;
        }
    }
}