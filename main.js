import './style.css';

/*
Sets custom --vh css variable that correctly determines vh
value taking into consideration browser chrome.
*/
function setVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setVH);

setVH();