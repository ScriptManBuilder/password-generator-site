import React from 'react';
import './ReviewsWidget.css';

const reviews = [
  {
    name: "Emily Turner",
    rating: 5,
    review: "I've been using password generators for years, but Krypton is a game-changer. The interface is sleek, and the passwords feel really secure. No more worrying about weak passwords!",
  },
  {
    name: "James Roberts",
    rating: 5,
    review: "Krypton has taken password generation to the next level. It's fast, efficient, and the customization options are top-notch. I wish more tools offered this level of flexibility.",
  },
  {
    name: "Olivia Bennett",
    rating: 5,
    review: "This tool is incredible! I love how it generates passwords instantly with a perfect balance of complexity and usability. I can trust my online accounts are safe with Krypton.",
  },
  {
    name: "Michael Johnson",
    rating: 4,
    review: "I was looking for a password generator that would give me more control over length and character types, and Krypton delivered. It's exactly what I needed for my personal security.",
  },
  {
    name: "Sophia Davis",
    rating: 5,
    review: "I’m impressed with the clean design and intuitive interface. The passwords generated are strong and reliable. Krypton is now my go-to for all my password generation needs!",
  },
  {
    name: "Daniel Lee",
    rating: 5,
    review: "As someone who’s cautious about security, I really appreciate how Krypton generates complex passwords without any hassle. It’s fast, reliable, and gives me peace of mind every time.",
  },
  {
    name: "Chloe Anderson",
    rating: 5,
    review: "Krypton has made password creation so much easier! It's quick and doesn't require any sign-ups. Plus, the design is clean and easy to navigate. Highly recommend it!",
  },
  {
    name: "Liam Harris",
    rating: 4,
    review: "I’ve tried many password generators, but none compare to Krypton. It’s simple, efficient, and the passwords feel incredibly secure. It’s saved me so much time and effort.",
  },
];

const ReviewStars = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<span key={i} className="star filled">★</span>);
    } else {
      stars.push(<span key={i} className="star">★</span>);
    }
  }
  return <div className="stars">{stars}</div>;
};

const ReviewsWidget = () => {
  return (
    <div className="reviews-widget">
      <h3>User Reviews</h3>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <div className="review-header">
              <strong>{review.name}</strong>
              <ReviewStars rating={review.rating} />
            </div>
            <p className="review-text">"{review.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsWidget;
