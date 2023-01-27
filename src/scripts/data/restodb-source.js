/* eslint-disable linebreak-style */
import API_ENDPOINT from '../globals/api-endpoint';
import checkStatusFetch from '../utils/checkStatusFetch';

class RestoDbSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    checkStatusFetch({
      response,
      errorMessage: 'Error, coba lagi',
    });

    return response.json();
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    checkStatusFetch({
      response,
      errorMessage: 'Error, coba lagi',
    });

    return response.json();
  }

  static async postReviewRestaurant(data) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    checkStatusFetch({
      response,
      errorMessage: 'Failed to post review restaurant',
    });

    return response.json();
  }
}

export default RestoDbSource;
