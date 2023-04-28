import React, { useState, useEffect } from "react";
import axios from "axios";

function ReviewSystem() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      const response = await axios.get("/api/reviews");
      setReviews(response.data);
    }

    fetchReviews();
  }, []);

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>Rating: {review.rating}</p>
          <p>Comment: {review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewSystem;