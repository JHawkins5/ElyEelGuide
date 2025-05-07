'use client';
import React from 'react';
import './restaurants.css';
import Link from 'next/link';
import Rating from "@/components/Rating/Rating";

const Restaurants = () => {
    return (
        <div>
            <h1 className="title">Restaurants in Ely</h1>
            {/* List of restaurants. As this is a frontend-only prototype, these are hard-coded.
            These would be stored and fetched from a backend database.
            Additionally, the TripAdvisor and Google ratings are hardcoded, and accurate at the time of creation.
            In a final product, these would be fetched using either an API or web scraping. */}
            <div className="restaurant-list">
                <div className="restaurant">
                    <div className="restaurant-info">
                        {/* Restaurant name */}
                        <h2>Mangiare Ristorante Italiano</h2>
                        {/* Restaurant description and address */}
                        <p className="description">
                            Mangiare is a restaurant serving authentic Italian cuisine in two locations, in Ely, and
                            in Newmarket.
                            The Ely location opened at the Leisure Park in late 2024, following the success of the
                            Newmarket location.
                            Their menu contains stone-baked pizzas, pasta, and a selection of grilled meats, and is perfect for a post-movie meal.
                        </p>
                        <p className="address">
                            10 Downham Road, Ely, CB6 2FE
                        </p>
                    </div>
                    <img src="/mangiare.png" alt="Mangiare Ristorante Italiano" className="restaurant-image"/>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={5} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={4.8} className="rating"/>
                        </div>
                    </div>
                    {/* Restaurant website */}
                    <div className="buttons">
                        <Link href="https://www.mangiareristorante.co.uk">Website</Link>
                    </div>
                </div>
                <div className="restaurant">
                    <div className="restaurant-info">
                        {/* Restaurant name */}
                        <h2>Sushi and Salad</h2>
                        {/* Restaurant description and address */}
                        <p className="description">
                            Sushi and Salad is a Japanese restaurant serving sushi, sashimi, and salads, which has been open since 2021.
                            They offer eat-in, takeaway, and delivery options, and provide a cuisine which is not served elsewhere in Ely.
                            Located just off the High Street, this is perfect for a quick lunch or dinner while in town.
                        </p>
                        <p className="address">
                            9 High Street Passage, Ely, CB7 4NB
                        </p>
                    </div>
                    <img src="/sushi-salad.webp" className="restaurant-image"/>
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
                    {/* Restaurant website */}
                    <div className="buttons">
                        <Link href="https://www.sushiandsalad.com">Website</Link>
                    </div>
                </div>
                <div className="restaurant">
                    <div className="restaurant-info">
                        {/* Restaurant name */}
                        <h2></h2>
                        {/* Restaurant description and address */}
                        <p className="description">

                        </p>
                        <p className="address">

                        </p>
                    </div>
                    <img/>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={0} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={0} className="rating"/>
                        </div>
                    </div>
                    {/* Restaurant website */}
                    <div className="buttons">
                        <Link href="">Website</Link>
                    </div>
                </div>
                <div className="restaurant">
                    <div className="restaurant-info">
                        {/* Restaurant name */}
                        <h2></h2>
                        {/* Restaurant description and address */}
                        <p className="description">

                        </p>
                        <p className="address">

                        </p>
                    </div>
                    <img/>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={0} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={0} className="rating"/>
                        </div>
                    </div>
                    {/* Restaurant website */}
                    <div className="buttons">
                        <Link href="">Website</Link>
                    </div>
                </div>
                <div className="restaurant">
                    <div className="restaurant-info">
                        {/* Restaurant name */}
                        <h2></h2>
                        {/* Restaurant description and address */}
                        <p className="description">

                        </p>
                        <p className="address">

                        </p>
                    </div>
                    <img/>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={0} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={0} className="rating"/>
                        </div>
                    </div>
                    {/* Restaurant website */}
                    <div className="buttons">
                        <Link href="">Website</Link>
                    </div>
                </div>
                <div className="restaurant">
                    <div className="restaurant-info">
                        {/* Restaurant name */}
                        <h2></h2>
                        {/* Restaurant description and address */}
                        <p className="description">

                        </p>
                        <p className="address">

                        </p>
                    </div>
                    <img/>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={0} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={0} className="rating"/>
                        </div>
                    </div>
                    {/* Restaurant website */}
                    <div className="buttons">
                        <Link href="">Website</Link>
                    </div>
                </div>
                <div className="restaurant">
                    <div className="restaurant-info">
                        {/* Restaurant name */}
                        <h2></h2>
                        {/* Restaurant description and address */}
                        <p className="description">

                        </p>
                        <p className="address">

                        </p>
                    </div>
                    <img/>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={0} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={0} className="rating"/>
                        </div>
                    </div>
                    {/* Restaurant website */}
                    <div className="buttons">
                        <Link href="">Website</Link>
                    </div>
                </div>
                <div className="restaurant">
                    <div className="restaurant-info">
                        {/* Restaurant name */}
                        <h2></h2>
                        {/* Restaurant description and address */}
                        <p className="description">

                        </p>
                        <p className="address">

                        </p>
                    </div>
                    <img/>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={0} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={0} className="rating"/>
                        </div>
                    </div>
                    {/* Restaurant website */}
                    <div className="buttons">
                        <Link href="">Website</Link>
                    </div>
                </div>
                <div className="restaurant">
                    <div className="restaurant-info">
                        {/* Restaurant name */}
                        <h2></h2>
                        {/* Restaurant description and address */}
                        <p className="description">

                        </p>
                        <p className="address">

                        </p>
                    </div>
                    <img/>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={0} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={0} className="rating"/>
                        </div>
                    </div>
                    {/* Restaurant website */}
                    <div className="buttons">
                        <Link href="">Website</Link>
                    </div>
                </div>
                <div className="restaurant">
                    <div className="restaurant-info">
                        {/* Restaurant name */}
                        <h2></h2>
                        {/* Restaurant description and address */}
                        <p className="description">

                        </p>
                        <p className="address">

                        </p>
                    </div>
                    <img/>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={0} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={0} className="rating"/>
                        </div>
                    </div>
                    {/* Restaurant website */}
                    <div className="buttons">
                        <Link href="">Website</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Restaurants;