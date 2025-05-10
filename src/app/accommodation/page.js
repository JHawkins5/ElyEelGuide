'use client';
import React from 'react';
import './accommodation.css';
import Rating from "@/components/Rating/Rating";
import Button from "@/components/Button/Button";

// List of hotels. As this is a frontend-only prototype, these are hard-coded.
// These would be stored and fetched from a backend database.
// Additionally, the TripAdvisor and Google ratings are hardcoded, and accurate at the time of creation.
// In a final product, these would be fetched using either an API or web scraping.

const hotelsData = [
    {
        name: "The Lamb Hotel",
        description: "The Lamb Hotel is a historic hotel located in the heart of Ely. It offers comfortable accommodation and a restaurant serving traditional British cuisine. The hotel is just across the road from Ely Cathedral and is on the corner of the High Street, making it ideal for those who want to explore the centre of Ely.",
        address: "2 Lynn Road, Ely, CB7 4EJ",
        tripAdvisorRating: 3.5,
        googleRating: 4.1,
        image: "/restaurants/lambhotel.jpg",
        website: "https://www.greeneking.co.uk/pubs/cambridgeshire/lamb-hotel"
    },
    {
        name: "Poets House",
        description: "Poets House is a luxury hotel located in the heart of Ely, located just opposite Oliver Cromwell's House. It offers elegant accommodation and a restaurant serving modern British cuisine. The hotel is a short walk from Ely Cathedral and the city centre, making it ideal for those who want to explore the area.",
        address: "40 St Marys Street, Ely, CB7 4EY",
        tripAdvisorRating: 4.3,
        googleRating: 4.5,
        image: "/hotels/poets.jpg",
        website: "https://www.poetshouse.co.uk/"
    },
    {
        name: "Travelodge Ely",
        description: "Travelodge Ely is located on the outskirts of Ely, just off the A10. It offers comfortable accommodation at an affordable price and is ideal for those who want to explore the surrounding area. The hotel is a short drive from Ely Cathedral and the city centre, making it a convenient option for those who want to visit the area.",
        address: "Witchford Road A10-A142 Roundabout, Ely, CB6 3NN",
        tripAdvisorRating: 4.1,
        googleRating: 3.6,
        image: "/hotels/travelodge.jpg",
        website: "https://www.travelodge.co.uk/hotels/26/Ely-hotel"
    }
];

const Accommodation = () => {
    return (
        <div>
            <h1 className="title">Where to stay in Ely</h1>
            <div className="hotel-list">
                {hotelsData.map((hotel, index) => (
                    <div key={index} className="hotel">
                        <div className="hotel-info">
                            <h2>{hotel.name}</h2>
                            <p className="description">{hotel.description}</p>
                            <p className="address">{hotel.address}</p>
                        </div>
                        <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                        <div className="ratings">
                            <div className="rating-group">
                                <p className="trip-advisor">TripAdvisor rating:</p>
                                <Rating rating={hotel.tripAdvisorRating} className="rating" />
                            </div>
                            <div className="rating-group">
                                <p className="google">Google rating:</p>
                                <Rating rating={hotel.googleRating} className="rating" />
                            </div>
                        </div>
                        <div className="buttons">
                            {hotel.website ? (
                                <Button href={hotel.website}>Website</Button>
                            ) : (
                                <p>No website available</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Accommodation;