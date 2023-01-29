/* eslint-disable indent */
/* eslint-disable no-tabs */
import stars from '../../../public/icon/star-solid.svg';
import '../../../styles/main.css';

const createRestoItemTemplate = (resto) => `
		<a href="/#/detail/${resto.id}" class="resto-wrapper__item">
			<div class="resto-image lazyload" style='background-image: linear-gradient(rgb(70 56 29 / 50%), rgb(10 9 9 / 70%)), url("https://restaurant-api.dicoding.dev/images/medium/${resto.pictureId}");'>
				<div class="rating">
					<img src="${stars}" alt="rating-star">
					<p>${resto.rating}</p>
				</div>
				<div class="resto-image__title">
					<p>${resto.name}</p>
				</div>
			</div>
			<div class="description-resto">
				<h1 class="description-resto__city">${resto.city}</h1>
				<p class="description-resto__teks">${resto.description}</p>
			</div>
		</a>
`;

const createRestoDetailTemplate = (resto) => `
	<img class="resto-item-detail__image lazyload" src="https://restaurant-api.dicoding.dev/images/medium/${resto.pictureId}" alt="">
	<ul class="resto-item-detail__desc">
		<li><span style="font-weight: bold;">Nama Resto: </span>${resto.name}</li>
		<li><span style="font-weight: bold;">Alamat: </span>${resto.address}</li>
		<li><span style="font-weight: bold;">Kota: </span>${resto.city}</li>
		<li><span style="font-weight: bold;">Deskripsi: </span>${resto.description}</li>
		<li>
			<div class="title-categories">Menu Makanan : </div>
			<div class="menu-makanan"></div>
		</li>
		<li>
			<div	div class="title-categories">Menu Makanan : </div>
			<div class="menu-minuman"></div>
		</li>
	</ul>`;

const createLikeButtonTemplate = () => `
		<buttton id="likeButton" class="like-button" aria-label="like this resto">❤️ Like</buttton>
`;

const createLikedButtonTemplate = () => `
		<buttton id="likedButton" class="unlike-button" aria-label="unlike this resto">❤ Liked</buttton>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
