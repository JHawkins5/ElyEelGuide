'use client';
import React, {useState} from 'react';
import './eel.css';
import Rating from "@/components/Rating/Rating";
import Button from "@/components/Button/Button";
import TTSButton from "@/components/TTSButton/TTSButton";

const Eel = () => {
    const [filter, setFilter] = useState('all');

    return (
        <div>
            <h1 className="title">Ely Eel Dishes</h1>
            <p className="page-description">
                There are two restaurants in Ely that serve eel dishes. Find the best one for you!
            </p>
            {/* Filter buttons */}
            <div className="filter-buttons">
                <button onClick={() => setFilter('rating')} className="filter-button">Filter by Rating</button>
                <button onClick={() => setFilter('price')} className="filter-button">Filter by Price</button>
                <button onClick={() => setFilter('all')} className="filter-button">Show All</button>
            </div>
            {(filter === 'all' || filter === 'rating') && (
                <div className="eel">
                    <h2>Sushi and Salad</h2>
                    <h3>Unadon</h3>
                    <p className="price">£25.97</p>
                    <p className="description">
                        Sushi and Salad serve Unadon - a main which contains grilled eel on a bed of rice, with
                        broccoli, leek, pickled ginger, scallions, and sesame seeds.
                        As eel is such a delicacy, a main serving is priced quite highly compared to other dishes.
                        However, the quality of the eel is top-notch, and the dish is well worth the price.
                        If you are looking for a larger eel dish, this is the one for you!
                    </p>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={4.8} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={4.8} className="rating"/>
                        </div>
                    </div>
                    <div className="tts-container">
                        <TTSButton text="Sushi and Salad serve Unadon - a main which contains grilled eel on a bed of rice, with broccoli, leek, pickled ginger, scallions, and sesame seeds. As eel is such a delicacy, a main serving is priced quite highly compared to other dishes. However, the quality of the eel is top-notch, and the dish is well worth the price. If you are looking for a larger eel dish, this is the one for you!"/>
                    </div>
                    {/* Restaurant website */}
                    <div className="buttons">
                        <Button href="https://www.sushiandsalad.com">Website</Button>
                    </div>
                </div>
            )}
            {(filter === 'all' || filter === 'price') && (
                <div className="eel">
                    <h2>Griddle Bar and Meat House</h2>
                    <h3>Grilled Eel with Miso Butter and Pickled Vegetables</h3>
                    <p className="price">£12.75</p>
                    <p className="description">
                        Griddle Bar and Meat House serve Grilled Eel with Miso Butter and Pickled Vegetables as a tasty
                        and
                        unique starter.
                        If you are unsure whether you will like eel and just want a smaller portion, this is a great way
                        to
                        try it out.
                        Griddle Bar and Meat House isn't as highly rated as Sushi and Salad, but it is still a great
                        place
                        to try eel.
                    </p>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={3.4} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={4.7} className="rating"/>
                        </div>
                    </div>
                    <div className="tts-container">
                        <TTSButton text="Griddle Bar and Meat House serve Grilled Eel with Miso Butter and Pickled Vegetables as a tasty and unique starter. If you are unsure whether you will like eel and just want a smaller portion, this is a great way to try it out. Griddle Bar and Meat House isn't as highly rated as Sushi and Salad, but it is still a great place to try eel."/>
                    </div>
                    {/* Restaurant website */}
                    <div className="buttons">
                        <Button href="https://www.griddlebarandmeathouse.com">Website</Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Eel;