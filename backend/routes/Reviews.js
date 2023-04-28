import React, { useState, useEffect } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/api/reviews')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Reviews:</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>Rating: {review.rating}</p>
              <p>Comment: {review.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Reviews;