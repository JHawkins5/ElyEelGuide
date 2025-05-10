'use client';
import React from 'react';
import './cafes.css';
import Rating from "@/components/Rating/Rating";
import Button from "@/components/Button/Button";

// List of cafés. As this is a frontend-only prototype, these are hard-coded.
// These would be stored and fetched from a backend database.
// Additionally, the TripAdvisor and Google ratings are hardcoded, and accurate at the time of creation.
// In a final product, these would be fetched using either an API or web scraping.

const cafesData = [
    {
        name: "Marmalade and Jam",
        description: "An independent, family-run café located in the heart of Ely, which serves sandwiches, toasties, and scones, among other things. They are also dog-friendly, so are a great option for a coffee break while out walking your dog.",
        address: "27 High Street, Ely, CB7 4LQ",
        tripAdvisorRating: 4.9,
        googleRating: 4.9,
        image: "/cafes/marmaladeandjam.jpg",
        website: "https://www.facebook.com/people/Marmalade-Jam-Ely/61562648739519/"
    },
    {
        name: "Julia's Tea Rooms",
        description: "Julia's is a small café located on the High Street, which serves cakes, sandwiches, and toasties. Just round the corner from the Cathedral, it is a great place to stop for a coffee and cake after visiting.",
        address: "16 - 18 High Street, Ely, CB7 4JU",
        tripAdvisorRating: 4.3,
        googleRating: 4.5,
        image: "/cafes/julias.jpg",
        website: "https://juliastearooms.weebly.com/"
    },
    {
        name: "The Almonry",
        description: "The Almonry is a café and restaurant located on the High Street, which has a large outdoor seating area with views of the Cathedral. They serve sandwiches, a couple of pies, and a selection of cakes. They are another great option for a coffee break after visiting the Cathedral.",
        address: "36 High Street, Ely, CB7 4DL",
        tripAdvisorRating: 3.5,
        googleRating: 4.5,
        image: "/cafes/almonry.jpg",
        website: "https://www.cdc.events/almonry-kitchen/"
    },
    {
        name: "Tom's Cakes",
        description: "Tom's Cakes is a small café business with a shop on the High Street, and another in St. Ives. They serve a variety of cakes and pastries, and are highly recommended.",
        address: "31 High Street, Ely, CB7 4LQ",
        tripAdvisorRating: 5,
        googleRating: 4.7,
        image: "/cafes/toms.jpg",
        website: "https://www.tomscakes.co.uk/"
    },
    {
        name: "Market Kitchen",
        description: "Market Kitchen is a small café located in the Ely Market, which serves a variety of cakes and pastries. They also serve warm meals such as fried breakfasts, and are a great option for a quick bite to eat while shopping.",
        address: "5 Market Street, Ely, CB7 4PB",
        tripAdvisorRating: 4.4,
        googleRating: 4.4,
        image: "/cafes/marketkitchen.jpg",
        website: null
    }
];

const Cafes = () => {
    return (
        <div>
            <h1 className="title">Cafés in Ely</h1>
            <div className="cafe-list">
                {cafesData.map((cafe, index) => (
                    <div key={index} className="cafe">
                        <div className="cafe-info">
                            <h2>{cafe.name}</h2>
                            <p className="description">{cafe.description}</p>
                            <p className="address">{cafe.address}</p>
                        </div>
                        <img src={cafe.image} alt={cafe.name} className="cafe-image" />
                        <div className="ratings">
                            <div className="rating-group">
                                <p className="trip-advisor">TripAdvisor rating:</p>
                                <Rating rating={cafe.tripAdvisorRating} className="rating" />
                            </div>
                            <div className="rating-group">
                                <p className="google">Google rating:</p>
                                <Rating rating={cafe.googleRating} className="rating" />
                            </div>
                        </div>
                        <div className="buttons">
                            {cafe.website ? (
                                <Button href={cafe.website}>Website</Button>
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

export default Cafes;