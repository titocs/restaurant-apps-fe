/* eslint-disable no-undef */
Feature('Favoriting Restos');

const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/resto-favorit');
});

const favoriteEmptyMessage = 'You dont have any favorite restaurant';

Scenario('Favoriting one restaurant', async ({ I }) => {
  I.waitForElement('.error-message', 5);
  I.see(favoriteEmptyMessage, '.error-message');

  I.amOnPage('/');
  I.waitForElement('.resto-image__title > p', 5);
  I.seeElement('.resto-image__title > p');
  const firstCard = locate('.resto-image__title > p').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/resto-favorit');
  I.seeElement('.resto-wrapper__item');
  const likedCardTitle = await I.grabTextFrom('.resto-image__title > p');

  assert.strictEqual(firstCardTitle, likedCardTitle);
});

Scenario('unFavoriting one restaurant', async ({ I }) => {
  I.waitForElement('.error-message', 5);
  I.see(favoriteEmptyMessage, '.error-message');

  I.amOnPage('/');
  I.waitForElement('.resto-image__title > p', 5);

  I.seeElement('.resto-image__title > p');
  const firstCard = locate('.resto-image__title > p').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/resto-favorit');
  I.seeElement('.resto-wrapper__item');
  const likedCardTitle = await I.grabTextFrom('.resto-image__title > p');

  assert.strictEqual(firstCardTitle, likedCardTitle);

  I.click(likedCardTitle);
  I.waitForElement('#likedButton', 5);
  I.seeElement('#likedButton');
  I.click('#likedButton');

  I.amOnPage('/#/resto-favorit');
  I.seeElement('.error-message');
  const noFavoriteRestaurant = await I.grabTextFrom('.error-message');

  assert.strictEqual(favoriteEmptyMessage, noFavoriteRestaurant);
});
