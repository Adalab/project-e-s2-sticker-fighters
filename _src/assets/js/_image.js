
const fr = new FileReader();


// Caso a partir de aquí :)
const uploadBtn = document.querySelector('.fill--btn');
//se recoge el button
const fileField = document.querySelector('#img-selector');
const profileImage = document.querySelector('.image__photo');

function getImage(e){
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}
function writeImage() {
  profileImage.src= fr.result;
}

function fakeFileClick() {
 fileField.click();
}

fileField.addEventListener('change', getImage);
uploadBtn.addEventListener('click', fakeFileClick);

