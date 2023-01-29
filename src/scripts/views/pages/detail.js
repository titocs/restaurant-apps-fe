/* eslint-disable no-tabs */
import restoDbSource from '../../data/restodb-source';
import postReview from '../../utils/post-review';
import UrlParser from '../../routes/url-parser';
import '../../../styles/main.css';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestoDetailTemplate } from '../templates/template-creator';
import FavoriteResto from '../../data/favorit-resto-idb';

const Detail = {
  async render() {
    return `
			<p id="title-restaurant">DETAIL RESTAURANT</p>
			<div class="resto-item-detail"></div>
			<div class="">
				<h1 class="title-review">Reviews</h1>
				<div class="review-wrapper"></div>
			</div>
			<div class="form-review-wrapper">
				<form id="form-review-wrapper__container" action="">
					<div>
						<label for="name-user"></label>
						<input id="name-user" style="height: 44px;" type="text" name="name" placeholder="Nama">
					</div>
					<div>
						<label for="review-user"></label>
						<textarea name="review" id="review-user" cols="30" rows="10" placeholder="Masukkan review"></textarea>
					</div>
					<button type="submit" id="submit-review" style="height: 44px;">Submit</button>
				</form>
			</div>
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

    // Review Customer
    const reviewWrapper = document.querySelector('.review-wrapper');
    const customerReviewItems = detailRestoItem.customerReviews;
    customerReviewItems.forEach((cstReviews) => {
      reviewWrapper.innerHTML += `
				<div class="review-items">
					<p class="review-items__name">${cstReviews.name}</p>
					<small class="review-items__date">${cstReviews.date}</small>
					<div class="review-items__content">
						<p>${cstReviews.review}</p>
					</div>
				</div>
			`;
    });

    // Like Button
    const likeButtonContainer = document.getElementById('likeButtonContainer');
    LikeButtonInitiator.init({
      likeButtonContainer,
      favoriteRestos: FavoriteResto,
      resto: detailRestoItem,
    });

    // POST REVIEW
    const formReviewContainer = document.getElementById('form-review-wrapper__container');
    const userName = document.getElementById('name-user');
    const reviewUser = document.getElementById('review-user');

    formReviewContainer.addEventListener('submit', (e) => {
      e.preventDefault();
      postReview({
        url: url.id,
        name: userName.value,
        review: reviewUser.value,
      });
    });
  },
};

export default Detail;
