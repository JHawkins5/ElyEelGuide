'use client';
import React from 'react';
import './restaurants.css';
import Rating from "@/components/Rating/Rating";
import Button from "@/components/Button/Button";

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
                        <Button href="https://www.mangiareristorante.co.uk">Website</Button>
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
                            Sushi and Salad is also one of only two restaurants in Ely to serve eel - their dish is Unadon, which contains grilled eel!
                        </p>
                        <p className="address">
                            9 High Street Passage, Ely, CB7 4NB
                        </p>
                    </div>
                    <img src="/sushi-salad.webp" alt="Sushi and Salad" className="restaurant-image"/>
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
                        <Button href="https://www.sushiandsalad.com">Website</Button>
                    </div>
                </div>
                <div className="restaurant">
                    <div className="restaurant-info">
                        {/* Restaurant name */}
                        <h2>Riverside Bar and Kitchen</h2>
                        {/* Restaurant description and address */}
                        <p className="description">
                            Riverside Bar and Kitchen is a great place to go for a drink or a meal, with a large outdoor terrace overlooking the River Great Ouse.
                            Located a short walk from the city centre, this is a great place to go for a meal after a walk along the river.
                            They offer a range of menus, including breakfast, food, and Sunday carvery.
                        </p>
                        <p className="address">
                            The Maltings, Ship Lane, Ely, CB7 4BB
                        </p>
                    </div>
                    <img src="/rbk.png" alt="Riverside Bar and Kitchen" className="restaurant-image"/>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={3.3} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={3.9} className="rating"/>
                        </div>
                    </div>
                    {/* Restaurant website */}
                    <div className="buttons">
                        <Button href="https://rbkely.co.uk">Website</Button>
                    </div>
                </div>
                <div className="restaurant">
                    <div className="restaurant-info">
                        {/* Restaurant name */}
                        <h2>Griddle Bar and Meat House</h2>
                        {/* Restaurant description and address */}
                        <p className="description">
                            This independent restaurant is located in the city centre, and serves a range of grilled meats and burgers.
                            They are also one of only two restaurants in Ely to serve eel - their dish is Grilled Eel with Miso Butter and Pickled Vegetables, which comes as a starter.
                            Located just off the High Street, this is perfect for an evening meal.
                        </p>
                        <p className="address">
                            7 High Street Passage, Ely, CB7 4NB
                        </p>
                    </div>
                    <img src="/griddle.jpg" alt="Griddle Bar and Meat House" className="restaurant-image"/>
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
                    {/* Restaurant website */}
                    <div className="buttons">
                        <Button href="https://www.griddlebarandmeathouse.com">Website</Button>
                    </div>
                </div>
                <div className="restaurant">
                    <div className="restaurant-info">
                        {/* Restaurant name */}
                        <h2>Eat Thai Restaurant</h2>
                        {/* Restaurant description and address */}
                        <p className="description">
                            Eat Thai is one of only two Thai restaurants in Ely, and serves a range of Thai dishes.
                            Located just round the corner from Ely Cathedral, and on the same street as Oliver Cromwell's House, this is a great place to go after a day of sightseeing.
                        </p>
                        <p className="address">
                            8 St. Mary's Street, Ely, CB7 4ES
                        </p>
                    </div>
                    <img src="/eatthai.jpg" alt="Eat Thai Restaurant" className="restaurant-image"/>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={4.5} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={4.7} className="rating"/>
                        </div>
                    </div>
                    {/* Restaurant website */}
                    <div className="buttons">
                        <Button href="https://www.ely.eatthai.co.uk">Website</Button>
                    </div>
                </div>
                <div className="restaurant">
                    <div className="restaurant-info">
                        {/* Restaurant name */}
                        <h2>The Fish House Ely</h2>
                        {/* Restaurant description and address */}
                        <p className="description">
                            The Fish House is a classic Fish and Chip shop, serving a range of fish and chips, as well as pies.
                            Located just off the Market Square, this is perfect for a quick lunch or dinner while in town, with a takeaway option available.
                        </p>
                        <p className="address">
                            5 Market Place, Ely, CB7 4NU
                        </p>
                    </div>
                    <img src="/fishhouse.jpg" alt="The Fish House Ely" className="restaurant-image"/>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={4.2} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={4.2} className="rating"/>
                        </div>
                    </div>
                    {/* This restaurant does not have a website */}
                </div>
                <div className="restaurant">
                    <div className="restaurant-info">
                        {/* Restaurant name */}
                        <h2>The Lamb Hotel</h2>
                        {/* Restaurant description and address */}
                        <p className="description">
                            The Lamb Hotel is a hotel and restaurant located in the city centre, just a short walk across the road from Ely Cathedral.
                            They have a range of menus, including lunch, dinner, and Sunday menus and are perfect for those staying in the hotel.
                            However, they are also open to those who aren't staying in the hotel.
                        </p>
                        <p className="address">
                            2 Lynn Road, Ely, CB7 4EJ
                        </p>
                    </div>
                    <img src="/lambhotel.jpg" alt="The Lamb Hotel" className="restaurant-image"/>
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
                    {/* Restaurant website */}
                    <div className="buttons">
                        <Button href="https://www.greeneking.co.uk/pubs/cambridgeshire/lamb-hotel">Website</Button>
                    </div>
                </div>
                <div className="restaurant">
                    <div className="restaurant-info">
                        {/* Restaurant name */}
                        <h2>The Cutter Inn</h2>
                        {/* Restaurant description and address */}
                        <p className="description">
                            Located on the banks of the River Great Ouse, The Cutter Inn is a great place to go for a drink or a meal, with a large outdoor terrace overlooking the river.
                            They offer a restaurant menu, and a bar and garden menu, and are perfect for a meal after a walk along the river. They also offer takeaway options.
                        </p>
                        <p className="address">
                            42 Annesdale, Ely, CB7 4BN
                        </p>
                    </div>
                    <img src="/thecutter.jpg" alt="The Cutter Inn" className="restaurant-image"/>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={3.7} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={4.1} className="rating"/>
                        </div>
                    </div>
                    {/* Restaurant website */}
                    <div className="buttons">
                        <Button href="https://www.thecutterinn.co.uk">Website</Button>
                    </div>
                </div>
                <div className="restaurant">
                    <div className="restaurant-info">
                        {/* Restaurant name */}
                        <h2>Urban Fresh Ely</h2>
                        {/* Restaurant description and address */}
                        <p className="description">
                            Urban Fresh is a South American-inspired restaurant, which brings something unique in Ely.
                            Located by the river, and with a large outdoor seating area, this is a great place to go after a walk along the river.
                            With breakfast, lunch, and A la Carte menus, this is a great place to go for a meal, any time of the day.
                            They also offer takeaway and delivery options.
                        </p>
                        <p className="address">
                            5 Annesdale, Ely, CB7 4BN
                        </p>
                    </div>
                    <img src="/urbanfresh.jpg" alt="Urban Fresh Ely" className="restaurant-image"/>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={4.6} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={4.6} className="rating"/>
                        </div>
                    </div>
                    {/* Restaurant website */}
                    <div className="buttons">
                        <Button href="https://www.urbanfreshely.uk">Website</Button>
                    </div>
                </div>
                <div className="restaurant">
                    <div className="restaurant-info">
                        {/* Restaurant name */}
                        <h2>Isle of Ely</h2>
                        {/* Restaurant description and address */}
                        <p className="description">
                            The Isle of Ely is a Greene King pub and restaurant, located in the Leisure Village.
                            They have a range of menus, including lunch, dinner, and Sunday menus and are perfect for a post-movie meal.
                        </p>
                        <p className="address">
                            Unit 1, Leisure Village, 10 Downham Road, Ely, CB6 2FE
                        </p>
                    </div>
                    <img src="/isleofely.jpeg" alt="Isle of Ely" className="restaurant-image"/>
                    {/* Ratings */}
                    <div className="ratings">
                        <div className="rating-group">
                            <p className="trip-advisor">TripAdvisor rating:</p>
                            <Rating rating={3.7} className="rating"/>
                        </div>
                        <div className="rating-group">
                            <p className="google">Google rating:</p>
                            <Rating rating={3.9} className="rating"/>
                        </div>
                    </div>
                    {/* Restaurant website */}
                    <div className="buttons">
                        <Button href="https://www.greeneking.co.uk/pubs/cambridgeshire/isle-of-ely">Website</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Restaurants;