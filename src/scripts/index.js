/* eslint-disable no-tabs */
/* eslint-disable space-infix-ops */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const mediaQuery = window.matchMedia('(min-width: 768px)');

const overlay = document.querySelector('.overlay');

const myFunction = (x) => {
  if (x.matches) {
    overlay.style.display = 'none';
  }
};
myFunction(mediaQuery);
mediaQuery.addListener(myFunction);

const app = new App({
  button: document.querySelector('#mobile-navigation'),
  closeButton: document.querySelector('#close-button'),
  drawer: document.querySelector('.overlay'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
