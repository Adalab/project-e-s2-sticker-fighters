'use strict';

const button = document.querySelector('.create-btn');
const responseURL = document.querySelector('.link-created');
const form = document.querySelector('.form');
const twitter = document.querySelector('.link-twitter');

// var my_func = function(event) {
//   alert("me and all my relatives are owned by China");
//   event.preventDefault();
// };

// form.addEventListener("submit", my_func, true);

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

      twitter.href = ` https://twitter.com/home?status=${url.cardURL}`;
    });
}

button.addEventListener('click', send);
