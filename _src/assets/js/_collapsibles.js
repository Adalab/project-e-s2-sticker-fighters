'use strict';

const collbutton = document.querySelector('.form--btn');
const collcontain = document.querySelector('.section');

function updateCollapsibles(e) {
  const parent = e.currentTarget.parentElement;

  if (parent.classList.contains('collapsible--visible')) {
    parent.classList.remove('collapsible--visible');
  } else {
    closeAllCollapsibles();
    parent.classList.add('collapsible--visible');
  }
}

function closeAllCollapsibles() {
  for (let i = 0; i < collapsibles.length; i++) {
    collapsibles[i].classList.remove('collapsible--visible');
  }
}

for (let ii = 0; ii < collapsibleTriggers.length; ii++) {
  collapsibleTriggers[ii].addEventListener('click', updateCollapsibles);
}





