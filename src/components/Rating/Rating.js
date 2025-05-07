'use client';
import React from 'react';
import './Rating.css';
import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';

const Rating = ({ rating }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={i} className="star" />);
    }

    if (halfStar) {
        stars.push(<FaStarHalfAlt key={fullStars} className="star" />);
    }

    return (
        <div className="rating">
            {stars}
            <span className="rating-text">{rating}</span>
        </div>
    );
}

export default Rating;