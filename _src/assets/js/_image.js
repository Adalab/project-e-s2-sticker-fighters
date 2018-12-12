'use-strict';
const fr = new FileReader();


// Caso a partir de aquí :)
const uploadBtn = document.querySelector('.fill--btn');
//se recoge el button
const fileField = document.querySelector('#img-selector');
const profileImage = document.querySelector('.image__photo');
const mini = document.querySelector('.fill--input__img');

function getImage(e){
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}
function writeImage() {
  // profileImage.src= fr.result;
  profileImage.style.backgroundImage = `url(${fr.result})`;
  mini.style.backgroundImage = `url(${fr.result})`;
  objectJson.photo = fr.result;
  console.log(objectJson);

}

function fakeFileClick() {
    console.log('fake');
 fileField.click();
}


uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);



