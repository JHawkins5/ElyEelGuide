'use client';
import React from 'react';
import './cafes.css';
import Rating from "@/components/Rating/Rating";
import Button from "@/components/Button/Button";

const Cafes = () => {
    return (
        <div>
            <h1 className="title">Cafés in Ely</h1>
            {/* List of cafés. As this is a frontend-only prototype, these are hard-coded.
            These would be stored and fetched from a backend database.
            Additionally, the TripAdvisor and Google ratings are hardcoded, and accurate at the time of creation.
            In a final product, these would be fetched using either an API or web scraping. */}
            <div className="cafe-list">
                <div className="cafe">
                    <div className="cafe-info">
                        {/* Café name */}
                        <h2>Marmalade and Jam</h2>
                        {/* Café description and address */}
                        <p className="description">
                            An independent, family-run café located in the heart of Ely, which serves sandwiches, toasties, and scones, among other things.
                            They are also dog-friendly, so are a great option for a coffee break while out walking your dog.
                        </p>
                        <p className="address">
                            27 High Street, Ely, CB7 4LQ
                        </p>
                    </div>
                    <img src="/cafes/marmaladeandjam.jpg" alt="Marmalade and Jam" className="cafe-image"/>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={4.9} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={4.9} className="rating"/>
                        </div>
                    </div>
                    {/* Café website */}
                    <div className="buttons">
                        <Button href="https://www.facebook.com/people/Marmalade-Jam-Ely/61562648739519/">Website</Button>
                    </div>
                </div>
                <div className="cafe">
                    <div className="cafe-info">
                        {/* Café name */}
                        <h2>Julia's Tea Rooms</h2>
                        {/* Café description and address */}
                        <p className="description">
                            Julia's is a small café located on the High Street, which serves cakes, sandwiches, and toasties.
                            Just round the corner from the Cathedral, it is a great place to stop for a coffee and cake after visiting.
                        </p>
                        <p className="address">
                            16 - 18 High Street, Ely, CB7 4JU
                        </p>
                    </div>
                    <img src="/cafes/julias.jpg" alt="Julia's Tea Rooms" className="cafe-image"/>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={4.3} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={4.5} className="rating"/>
                        </div>
                    </div>
                    {/* Café website */}
                    <div className="buttons">
                        <Button href="https://juliastearooms.weebly.com/">Website</Button>
                    </div>
                </div>
                <div className="cafe">
                    <div className="cafe-info">
                        {/* Café name */}
                        <h2>The Almonry</h2>
                        {/* Café description and address */}
                        <p className="description">
                            The Almonry is a café and restaurant located on the High Street, which has a large outdoor seating area with views of the Cathedral.
                            They serve sandwiches, a couple of pies, and a selection of cakes.
                            They are another great option for a coffee break after visiting the Cathedral.
                        </p>
                        <p className="address">
                            36 High Street, Ely, CB7 4DL
                        </p>
                    </div>
                    <img src="/cafes/almonry.jpg" alt="The Almonry" className="cafe-image"/>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={3.5} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={4.5} className="rating"/>
                        </div>
                    </div>
                    {/* Café website */}
                    <div className="buttons">
                        <Button href="https://www.cdc.events/almonry-kitchen/">Website</Button>
                    </div>
                </div>
                <div className="cafe">
                    <div className="cafe-info">
                        {/* Café name */}
                        <h2>Tom's Cakes</h2>
                        {/* Café description and address */}
                        <p className="description">
                            Tom's Cakes is a small café business with a shop on the High Street, and another in St. Ives.
                            They serve a variety of cakes and pastries, and are highly recommended.
                        </p>
                        <p className="address">
                            31 High Street, Ely, CB7 4LQ
                        </p>
                    </div>
                    <img src="/cafes/toms.jpg" alt="Tom's Cakes" className="cafe-image"/>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={5} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={4.7} className="rating"/>
                        </div>
                    </div>
                    {/* Café website */}
                    <div className="buttons">
                        <Button href="https://www.tomscakes.co.uk/">Website</Button>
                    </div>
                </div>
                <div className="cafe">
                    <div className="cafe-info">
                        {/* Café name */}
                        <h2>Market Kitchen</h2>
                        {/* Café description and address */}
                        <p className="description">
                            Market Kitchen is a small café located in the Ely Market, which serves a variety of cakes and pastries.
                            They also serve warm meals such as fried breakfasts, and are a great option for a quick bite to eat while shopping.
                        </p>
                        <p className="address">
                            5 Market Street, Ely, CB7 4PB
                        </p>
                    </div>
                    <img src="/cafes/marketkitchen.jpg" alt="Market Kitchen" className="cafe-image"/>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={4.4} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={4.4} className="rating"/>
                        </div>
                    </div>
                    {/* This café doesn't have a website */}
                </div>
            </div>
        </div>
    );
}

export default Cafes;