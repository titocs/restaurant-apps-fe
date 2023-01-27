/* eslint-disable no-undef */
import likeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteResto from '../src/scripts/data/favorit-resto-idb';

describe('Liking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  xit('should show the like button when the resto has not been liked before', async () => {
    await likeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy();
  });

  xit('should not show the unlike button when the resto has not been liked before', async () => {
    await likeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeFalsy();
  });

  xit('should not add a resto when it has no id', async () => {
    await likeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {},
    });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteResto.getAllRestos()).toEqual([]);
  });
});
