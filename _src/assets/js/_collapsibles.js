'use strict';

const collapButtons = document.querySelectorAll('.form--btn');
const collapContainer = document.querySelector('.section');

function closeAllCollapsibles() {
  for (const closeCollap of collapButtons) {
    closeCollap.parentElement.classList.remove('collapsible--visible');
  }
}

function updateCollapsibles(e) {
  const parent = e.currentTarget.parentElement;
  if (parent.classList.contains('collapsible--visible')) {
    parent.classList.remove('collapsible--visible');
  } else {
    closeAllCollapsibles();
    parent.classList.add('collapsible--visible');
  }
}

for (const collap of collapButtons) {
  collap.addEventListener('click', updateCollapsibles);
}
