'use client';
import React, { useState } from 'react';
import './accommodation.css';
import Link from 'next/link';
import Rating from "@/components/Rating/Rating";
import Button from "@/components/Button/Button";

const Accommodation = () => {
    return (
        <div>
            <h1 className="title">Where to stay in Ely</h1>
            {/* List of hotels. As this is a frontend-only prototype, these are hard-coded.
            These would be stored and fetched from a backend database.
            Additionally, the TripAdvisor and Google ratings are hardcoded, and accurate at the time of creation.
            In a final product, these would be fetched using either an API or web scraping. */}
            <div className="hotel-list">
                <div className="hotel">
                    <div className="hotel-info">
                        {/* Hotel name */}
                        <h2>The Lamb Hotel</h2>
                        {/* Hotel description and address */}
                        <p className="description">
                            The Lamb Hotel is a historic hotel located in the heart of Ely.
                            It offers comfortable accommodation and a restaurant serving traditional British cuisine.
                            The hotel is just across the road from Ely Cathedral and is on the corner of the High Street, making it ideal for those who want to explore the centre of Ely.
                        </p>
                        <p className="address">
                            2 Lynn Road, Ely, CB7 4EJ
                        </p>
                    </div>
                    <img src="/restaurants/lambhotel.jpg" alt="The Lamb Hotel" className="hotel-image"/>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={3.5} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={4.1} className="rating"/>
                        </div>
                    </div>
                    {/* Hotel website */}
                    <div className="buttons">
                        <Button href="https://www.greeneking.co.uk/pubs/cambridgeshire/lamb-hotel">Website</Button>
                    </div>
                </div>
                <div className="hotel">
                    <div className="hotel-info">
                        {/* Hotel name */}
                        <h2>Poets House</h2>
                        {/* Hotel description and address */}
                        <p className="description">
                            Poets House is a luxury hotel located in the heart of Ely, located just opposite Oliver Cromwell's House.
                            It offers elegant accommodation and a restaurant serving modern British cuisine.
                            The hotel is a short walk from Ely Cathedral and the city centre, making it ideal for those who want to explore the area.
                        </p>
                        <p className="address">
                            40 St Marys Street, Ely, CB7 4EY
                        </p>
                    </div>
                    <img src="/hotels/poets.jpg" alt="Poets House" className="hotel-image"/>
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
                    {/* Hotel website */}
                    <div className="buttons">
                        <Button href="https://www.poetshouse.co.uk/">Website</Button>
                    </div>
                </div>
                <div className="hotel">
                    <div className="hotel-info">
                        {/* Hotel name */}
                        <h2>Travelodge Ely</h2>
                        {/* Hotel description and address */}
                        <p className="description">
                            Travelodge Ely is located on the outskirts of Ely, just off the A10.
                            It offers comfortable accommodation at an affordable price and is ideal for those who want to explore the surrounding area.
                            The hotel is a short drive from Ely Cathedral and the city centre, making it a convenient option for those who want to visit the area.
                        </p>
                        <p className="address">
                            Witchford Road A10-A142 Roundabout, Ely, CB6 3NN
                        </p>
                    </div>
                    <img src="/hotels/travelodge.jpg" alt="Travelodge Ely" className="hotel-image"/>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={4.1} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={3.6} className="rating"/>
                        </div>
                    </div>
                    {/* Hotel website */}
                    <div className="buttons">
                        <Button href="https://www.travelodge.co.uk/hotels/26/Ely-hotel">Website</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accommodation;