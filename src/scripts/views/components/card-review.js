/* eslint-disable no-tabs */
const cardReview = (review) => `
	<div class="review-items">
		<p class="review-items__name">${review.name}</p>
		<small class="review-items__date">${review.date}</small>
		<div class="review-items__content">
			<p>${review.review}</p>
		</div>
	</div>
`;

export default cardReview;
