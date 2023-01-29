/* eslint-disable no-undef */
Feature('Favoriting Restos');

const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/resto-favorite');
});

const favoriteEmptyMessage = 'You dont have any favorite restaurant';

Scenario('Favoriting one restaurant', async ({ I }) => {
  I.see(favoriteEmptyMessage, '.error-message');

  I.amOnPage('/');

  I.seeElement('.resto-image__title > p');
  const firstCard = locate('.resto-image__title > p').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/resto-favorite');
  I.seeElement('.resto-wrapper__item');
  const likedCardTitle = await I.grabTextFrom('.resto-image__title > p');

  assert.strictEqual(firstCardTitle, likedCardTitle);
});

Scenario('unFavoriting one restaurant', async ({ I }) => {
  I.see(favoriteEmptyMessage, '.error-message');

  I.amOnPage('/');

  I.seeElement('.resto-image__title > p');
  const firstCard = locate('.resto-image__title > p').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/resto-favorite');
  I.seeElement('.resto-wrapper__item');
  const likedCardTitle = await I.grabTextFrom('.resto-image__title > p');

  assert.strictEqual(firstCardTitle, likedCardTitle);

  I.click(likedCardTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.error-message');
  const noFavoriteRestaurant = await I.grabTextFrom('.error-message');

  assert.strictEqual(favoriteEmptyMessage, noFavoriteRestaurant);
});
