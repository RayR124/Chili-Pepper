import React, { useState } from 'react';
import './Reviews.css';

function ReviewSystem() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      rating: rating,
      comment: comment
    };
    fetch('/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setReviews([...reviews, data]);
      setRating(0);
      setComment('');
    })
    .catch(error => console.error(error));
  };

  return (
    <div className="reviews-container">
      <h2>Leave us a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <select id="rating" value={rating} onChange={handleRatingChange}>
            <option value="0">-- Select a rating --</option>
            <option value="5">5 stars</option>
            <option value="4">4 stars</option>
            <option value="3">3 stars</option>
            <option value="2">2 stars</option>
            <option value="1">1 star</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write your review here..."
          ></textarea>
        </div>
        <div style={{ textAlign:'center', marginBottom:20 }}>
        <button type="submit">Submit</button>
      </div>
      </form>


      <div className="reviews-list">
        <h2>Recent Reviews:</h2>
        {reviews.map(review => (
          <div key={review.id} className="review">
            <p className="rating">{review.rating} stars</p>
            <p className="comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewSystem;