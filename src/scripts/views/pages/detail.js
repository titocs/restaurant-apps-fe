/* eslint-disable no-tabs */
import restoDbSource from '../../data/restodb-source';
import favoriteRestoIdb from '../../data/favorit-resto-idb';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestoItemTemplate, createRestoDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
			<p id="title-restaurant">DETAIL RESTAURANT</p>
			<div class="resto-item-detail"></div>
			<div class="">
				<h1 class="title-review">Reviews</h1>
				<div class="review-wrapper"></div>
			</div>
			<div class="form-review-wrapper"></div>
			<div id="likeButtonContainer"></div>
		`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailResto = await restoDbSource.detailRestaurant(url.id);
    const detailRestoItem = detailResto.restaurant;
    document.querySelector('.resto-item-detail').innerHTML += createRestoDetailTemplate(detailRestoItem);
    // Menu Makanan
    const menuMakanan = document.querySelector('.menu-makanan');
    const listFoods = detailRestoItem.menus.foods;
    listFoods.forEach((restoItems) => {
      menuMakanan.innerHTML += `
    		<div class="menu-makanan__item">${restoItems.name}</div>
    	`;
    });

    // Menu Minuman
    const menuMinuman = document.querySelector('.menu-minuman');
    const listDrinks = detailRestoItem.menus.drinks;
    listDrinks.forEach((restoItems) => {
      menuMinuman.innerHTML += `
    		<div class="menu-minuman__item">${restoItems.name}</div>
    	`;
    });

    document.querySelector('.form-review-wrapper').innerHTML = `
			<form action="">
				<div>
					<label for="name"></label>
					<input id="name" type="text" name="name" placeholder="Nama">
				</div>
				<div>
					<label for="review"></label>
					<textarea name="review" id="review" cols="30" rows="10" placeholder="Masukkan review"></textarea>
				</div>
				<button type="submit" id="submit-review">Submit</button>
			</form>
		`;

    // Review Customer
    const reviewWrapper = document.querySelector('.review-wrapper');
    reviewWrapper.innerHTML += `
			<div class="review-items">
				<p class="review-items__name">Gilang</p>
				<small class="review-items__date">13 Januari 2023</small>
				<div class="review-items__content">
					<p>Makanannnya enak</p>
				</div>
			</div>
		`;

    // Like Button
    const likeButtonContainer = document.getElementById('likeButtonContainer');
    LikeButtonInitiator.init({
      likeButtonContainer,
      detailRestoItem,
    });
  },
};

export default Detail;
