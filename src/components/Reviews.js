import React, { useState } from 'react';

function ReviewSystem() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Submit review data to the server
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="rating">Rating:</label>
      <select id="rating" value={rating} onChange={handleRatingChange}>
        <option value="0">-- Select a rating --</option>
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
      </select>

      <label htmlFor="comment">Comment:</label>
      <textarea
        id="comment"
        value={comment}
        onChange={handleCommentChange}
        placeholder="Write your review here..."
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ReviewSystem;