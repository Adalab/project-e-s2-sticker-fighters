'use strict';

const telOrigin = document.querySelector('#telNumber');
const telDest = document.querySelector('.contact-list__phone');

const mailOrigin = document.querySelector('#email');
const mailDest = document.querySelector('.contact-list__mail');

const linkedinOrigin = document.querySelector('#linkedin');
const linkedinDest = document.querySelector('.contact-list__linkedin');

const githubOrigin = document.querySelector('#github');
const githubDest = document.querySelector('.contact-list__github');


function createTelLink(e) {
  const tel = telOrigin.value;
  const item = `<a class="element__link" href="tel:${tel}target="_blank"> <i class="problematic_icon card_icon fas fa-mobile-alt"></i></a>`;
  telDest.innerHTML = item;

  if (tel === '') {
    telDest.innerHTML = '';
  }
  objectJson.phone = tel;
  console.log(objectJson);
}

function createMailLink(e) {
  const mail = mailOrigin.value;
  const item = `<a class="element__link " href="mailto:${mail}"target="_blank">
  <i class="problematic_icon card_icon fas fa-envelope"></i>
</a>`;
  mailDest.innerHTML = item;

  if (mail === '') {
    mailDest.innerHTML = '';
  }
  validateEmail();
  objectJson.email = mail;
  console.log(objectJson.email);
}

function createLinkedinLink(e) {
  const linkedin = linkedinOrigin.value;
  const item = `<a class="element__link" href="https://linkedin.com/in/ ${linkedin}" target="_blank">
  <i class="card_icon fab fa-linkedin-in"></i>
</a>`;
  linkedinDest.innerHTML = item;

  if (linkedin === '') {
    linkedinDest.innerHTML = '';
  }
  objectJson.linkedin = linkedin;
  console.log(objectJson.linkedin);
}

function createGithubLink(e) {
  const github = githubOrigin.value;
  const item = `<a class="element__link" href="https://github.com/ ${github}"target="_blank">
  <i class="card_icon fab fa-github-alt"></i>
</a>`;
  githubDest.innerHTML = item;

  if (github === '') {
    githubDest.innerHTML = '';
  }
  objectJson.github = github;
  console.log(objectJson.github);
}

telOrigin.addEventListener('blur', createTelLink);
mailOrigin.addEventListener('blur', createMailLink);
linkedinOrigin.addEventListener('blur', createLinkedinLink);
githubOrigin.addEventListener('blur', createGithubLink);

