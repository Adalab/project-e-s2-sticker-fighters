'use strict';
const arrayInput = document.querySelectorAll('.fill--checkbox__input');//array de inputs
console.log(arrayInput);
let arrayItemsChecked = []; //array de los checks clicados

const checkItem = function(e){
  const currentSelector = e.currentTarget;
  arrayItemsChecked.push(currentSelector.value);

  console.log(arrayItemsChecked);

  // if(arrayItemsChecked[0].includes(arrayInput[0].value)){
  //   console.log('todo va a salir bien');
  // } else {
  //   arrayInput[0].disabled=false;
  //   console.log(arrayInput[0].value);
  // }
if (arrayItemsChecked.length>=3){

   // for (let i = 0; i<arrayItemsChecked.length;i++){
    for (let j = 0; j<arrayInput.length;j++){
      if(arrayItemsChecked.includes(arrayInput[j].value)){
        //arrayInput[j].disabled=true;
        console.log(arrayInput[j].value+'está en arrayItemsChecked');
      } else {
        console.log('el arrayItemsChecked no contiene el valor del input'+arrayInput[j].value);
        arrayInput[j].disabled=false;
        console.log(arrayInput[j]);
      }
      console.log(j);
    }
  //}

}


}




for (let i=0; i<arrayInput.length;i++){
  //console.log(arrayInput[i]);
  arrayInput[i].addEventListener('change', checkItem);
}
