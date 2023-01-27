/* eslint-disable no-alert */
/* eslint-disable no-tabs */
import restoDbSource from '../data/restodb-source';
import cardReview from '../views/components/card-review';

const postReview = async ({ url, name, review }) => {
  const userInputData = {
    id: url,
    name,
    review,
  };

  try {
    const reviewWrapper = document.querySelector('.review-wrapper');
    const data = await restoDbSource.postReviewRestaurant(userInputData);
    reviewWrapper.innerHTML = data.customerReviews.map((reviewData) => cardReview(reviewData)).join('');
  } catch (error) {
    alert(error.message);
  }
};

export default postReview;
