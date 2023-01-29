/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
import favRestoIDB from '../../data/favorit-resto-idb';
import '../../../styles/main.css';
import { createRestoItemTemplate } from '../templates/template-creator';

const FirstPage = {
  async render() {
    return `
			<div class="favorite-resto-wrapper">
				<h2 class="favorite-resto-wrapper__heading">Favorite Resto</h2>
				<div id="fav-resto-container" class="fav-resto"></div>
			</div>
		`;
  },

  async afterRender() {
    const restos = await favRestoIDB.getAllRestos();
    const favRestoContainer = document.getElementById('fav-resto-container');

    if (restos.length === 0) {
      favRestoContainer.innerHTML = `
				<div class="error-message">You dont have any favorite restaurant</div>
			`;
      return;
    }

    restos.forEach((favResto) => {
      favRestoContainer.innerHTML += createRestoItemTemplate(favResto);
    });
  },
};

export default FirstPage;
