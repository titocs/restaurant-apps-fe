/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
import restoSource from '../../data/restodb-source';
import '../../../styles/main.css';
import { createRestoItemTemplate } from '../templates/template-creator';

const FirstPage = {
  async render() {
    return `
			<section>
				<p id="title-restaurant">RESTAURANT DI SEKITAR</p>
				<div class="resto-wrapper"></div>
			</section>`;
  },

  async afterRender() {
    const dataResto = await restoSource.listRestaurant();
    const dataRestoItem = dataResto.restaurants;
    const restoWrapper = document.querySelector('.resto-wrapper');
    dataRestoItem.forEach((resto) => {
      restoWrapper.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default FirstPage;
