/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import FavoriteResto from '../src/scripts/data/favorit-resto-idb';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteResto.getAllRestos()).forEach(async (Resto) => {
      await FavoriteResto.deleteResto(Resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteResto);
});
