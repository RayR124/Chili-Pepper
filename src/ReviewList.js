import React from 'react';

function ReviewList({ reviews }) {
  return (
    <div>
      <h2>Reviews Functionality Coming Soon!</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;