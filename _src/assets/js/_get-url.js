'use strict';

const button = document.querySelector('.create-btn');
const responseURL = document.querySelector('.link-created');
const form = document.querySelector('.form');
const twitter = document.querySelector('.twitter');
const twitterLink = document.querySelector('.link-twitter');

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

      twitter.classList.remove('twitter');
      twitter.classList.add('on');

      responseURL.innerHTML = `<a href="${url.cardURL}" target="_blank">${url.cardURL}</a>`;

      twitterLink.href = `https://twitter.com/home?status=${url.cardURL}`;
    })
    .catch(err => alert('Servicio no disponible.\nError: ' + err));
}

button.addEventListener('click', send);
