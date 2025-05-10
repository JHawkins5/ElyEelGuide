'use client';
import React from 'react';
import './restaurants.css';
import Rating from "@/components/Rating/Rating";
import Button from "@/components/Button/Button";
import TTSButton from "@/components/TTSButton/TTSButton";

// List of restaurants. As this is a frontend-only prototype, these are hard-coded.
// These would be stored and fetched from a backend database.
// Additionally, the TripAdvisor and Google ratings are hardcoded, and accurate at the time of creation.
// In a final product, these would be fetched using either an API or web scraping.

const restaurantsData = [
    {
        name: "Mangiare Ristorante Italiano",
        description: "Mangiare is a restaurant serving authentic Italian cuisine in two locations, in Ely, and in Newmarket. The Ely location opened at the Leisure Park in late 2024, following the success of the Newmarket location. Their menu contains stone-baked pizzas, pasta, and a selection of grilled meats, and is perfect for a post-movie meal.",
        address: "10 Downham Road, Ely, CB6 2FE",
        tripAdvisorRating: 5,
        googleRating: 4.8,
        imageUrl: "/restaurants/mangiare.png",
        website: "https://www.mangiareristorante.co.uk",
    },
    {
        name: "Sushi and Salad",
        description: "Sushi and Salad is a Japanese restaurant serving sushi, sashimi, and salads, which has been open since 2021. They offer eat-in, takeaway, and delivery options, and provide a cuisine which is not served elsewhere in Ely. Located just off the High Street, this is perfect for a quick lunch or dinner while in town. Sushi and Salad is also one of only two restaurants in Ely to serve eel - their dish is Unadon, which contains grilled eel!",
        address: "9 High Street Passage, Ely, CB7 4NB",
        tripAdvisorRating: 4.8,
        googleRating: 4.8,
        imageUrl: "/restaurants/sushi-salad.webp",
        website: "https://www.sushiandsalad.com",
    },
    {
        name: "Riverside Bar and Kitchen",
        description: "Riverside Bar and Kitchen is a great place to go for a drink or a meal, with a large outdoor terrace overlooking the River Great Ouse. Located a short walk from the city centre, this is a great place to go for a meal after a walk along the river. They offer a range of menus, including breakfast, food, and Sunday carvery.",
        address: "The Maltings, Ship Lane, Ely, CB7 4BB",
        tripAdvisorRating: 3.3,
        googleRating: 3.9,
        imageUrl: "/restaurants/rbk.png",
        website: "https://rbkely.co.uk",
    },
    {
        name: "Griddle Bar and Meat House",
        description: "This independent restaurant is located in the city centre, and serves a range of grilled meats and burgers. They are also one of only two restaurants in Ely to serve eel - their dish is Grilled Eel with Miso Butter and Pickled Vegetables, which comes as a starter. Located just off the High Street, this is perfect for an evening meal.",
        address: "7 High Street Passage, Ely, CB7 4NB",
        tripAdvisorRating: 3.4,
        googleRating: 4.7,
        imageUrl: "/restaurants/griddle.jpg",
        website: "https://www.griddlebarandmeathouse.com",
    },
    {
        name: "Eat Thai Restaurant",
        description: "Eat Thai is one of only two Thai restaurants in Ely, and serves a range of Thai dishes. Located just round the corner from Ely Cathedral, and on the same street as Oliver Cromwell's House, this is a great place to go after a day of sightseeing.",
        address: "8 St. Mary's Street, Ely, CB7 4ES",
        tripAdvisorRating: 4.5,
        googleRating: 4.7,
        imageUrl: "/restaurants/eatthai.jpg",
        website: "https://www.ely.eatthai.co.uk",
    },
    {
        name: "The Fish House Ely",
        description: "The Fish House is a classic Fish and Chip shop, serving a range of fish and chips, as well as pies. Located just off the Market Square, this is perfect for a quick lunch or dinner while in town, with a takeaway option available.",
        address: "5 Market Place, Ely, CB7 4NU",
        tripAdvisorRating: 4.2,
        googleRating: 4.2,
        imageUrl: "/restaurants/fishhouse.jpg",
        website: "",
    },
    {
        name: "The Lamb Hotel",
        description: "The Lamb Hotel is a hotel and restaurant located in the city centre, just a short walk across the road from Ely Cathedral. They have a range of menus, including lunch, dinner, and Sunday menus and are perfect for those staying in the hotel. However, they are also open to those who aren't staying in the hotel.",
        address: "2 Lynn Road, Ely, CB7 4EJ",
        tripAdvisorRating: 3.5,
        googleRating: 4.1,
        imageUrl: "/restaurants/lambhotel.jpg",
        website: "https://www.greeneking.co.uk/pubs/cambridgeshire/lamb-hotel",
    },
    {
        name: "The Cutter Inn",
        description: "Located on the banks of the River Great Ouse, The Cutter Inn is a great place to go for a drink or a meal, with a large outdoor terrace overlooking the river. They offer a restaurant menu, and a bar and garden menu, and are perfect for a meal after a walk along the river. They also offer takeaway options.",
        address: "42 Annesdale, Ely, CB7 4BN",
        tripAdvisorRating: 3.7,
        googleRating: 4.1,
        imageUrl: "/restaurants/thecutter.jpg",
        website: "https://www.thecutterinn.co.uk",
    },
    {
        name: "Urban Fresh Ely",
        description: "Urban Fresh is a South American-inspired restaurant, which brings something unique in Ely. Located by the river, and with a large outdoor seating area, this is a great place to go after a walk along the river. With breakfast, lunch, and A la Carte menus, this is a great place to go for a meal, any time of the day. They also offer takeaway and delivery options.",
        address: "5 Annesdale, Ely, CB7 4BN",
        tripAdvisorRating: 4.6,
        googleRating: 4.6,
        imageUrl: "/restaurants/urbanfresh.jpg",
        website: "https://www.urbanfreshely.uk",
    },
    {
        name: "Isle of Ely",
        description: "The Isle of Ely is a Greene King pub and restaurant, located in the Leisure Village. They have a range of menus, including lunch, dinner, and Sunday menus and are perfect for a post-movie meal.",
        address: "Unit 1, Leisure Village, 10 Downham Road, Ely, CB6 2FE",
        tripAdvisorRating: 3.7,
        googleRating: 3.9,
        imageUrl: "/restaurants/isleofely.jpeg",
        website: "https://www.greeneking.co.uk/pubs/cambridgeshire/isle-of-ely",
    },
];

const Restaurants = () => {
    return (
        <div>
            <h1 className="title">Restaurants in Ely</h1>
            <div className="restaurant-list">
                {restaurantsData.map((restaurant, index) => (
                    <div className="restaurant" key={index}>
                        <div className="restaurant-info">
                            <h2>{restaurant.name}</h2>
                            <p className="description">{restaurant.description}</p>
                            <p className="address">{restaurant.address}</p>
                        </div>
                        <img src={restaurant.imageUrl} alt={restaurant.name} className="restaurant-image" />
                        <div className="ratings">
                            <div className="rating-group">
                                <p className="trip-advisor">TripAdvisor rating:</p>
                                <Rating rating={restaurant.tripAdvisorRating} className="rating" />
                            </div>
                            <div className="rating-group">
                                <p className="google">Google rating:</p>
                                <Rating rating={restaurant.googleRating} className="rating" />
                            </div>
                        </div>
                        <div className="tts-container">
                            <TTSButton text={restaurant.description} />
                        </div>
                        <div className="buttons">
                            {restaurant.website ? (
                                <Button href={restaurant.website}>Website</Button>
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

export default Restaurants;