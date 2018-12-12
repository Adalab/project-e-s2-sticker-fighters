'use strict';

const button = document.querySelector('.create-btn');
const responseURL = document.querySelector('.link-created');

const objectJson = {
  "palette":"",
  "typography":"",
  "name" : "",
  "job": "",
  "phone": "",
  "email": "",
  "linkedin": "",
  "github": "",
  "photo": "",
  "skills": ["", "", ""]
};

function send() {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(objectJson),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(urlResponse => urlResponse.json())
    .then(url => {

      responseURL.innerHTML = `<a href="${url.cardURL}" target="_blank">${url.cardURL}</a>`;
    });
}


button.addEventListener('click', send);

//responeURL poner o quitar el <a> o de js o del html
