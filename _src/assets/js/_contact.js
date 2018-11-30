'use strict';

// <a href="" class="link link--gh"></a>

const telOrigin = document.querySelector('#telNumber');
const telDest = document.querySelector('.contact-list__phone');

function createTelLink(e) {
  const tel = telOrigin.value;
  const item = `<a href="tel:${tel}" class="contact-list__phone"> <i class="problematic_icon card_icon fas fa-mobile-alt"></i></a>`;
  telDest.innerHTML = item;
}

telOrigin.addEventListener('keyup', createTelLink);
