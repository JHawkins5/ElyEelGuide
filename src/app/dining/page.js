'use client';
import React, { useState } from 'react';
import './dining.css';
import Link from 'next/link';

const Dining = () => {
    return (
        <div>
            <h1 className="title">Cafés and Restaurants in Ely</h1>
            <div className="restaurants">
                <h2>Restaurants</h2>
                <p>
                    Ely has a wide variety of restaurants, including traditional British cuisine and pub culture, as well as restaurants inspired by foreign cuisines.
                    The majority of restaurants are located in the city centre, with a few located in the surrounding areas.
                    There are also a few located in the leisure centre, just outside the city.
                </p>
                <div className="buttons">
                    <Link href="/dining/restaurants">View restaurants</Link>
                </div>
            </div>
            <div className="cafes">
                <h2>Cafés</h2>
                <p>
                    Ely has a number of cafés, ranging from small independent cafés to larger chains.
                    The majority of cafés are located in the city centre, with a few located in the surrounding areas.
                </p>
                <div className="buttons">
                    <Link href="/dining/cafes">View cafés</Link>
                </div>
            </div>
            <div className="eel">
                <h2>Eel in Ely</h2>
                <p>
                    Ely is known for its eels, which have been a local delicacy for centuries.
                    Currently, only two restaurants in Ely serve eel dishes, but they are both highly recommended.
                    Click below to use our eel recommender to find the best eel dish for you!
                </p>
                <div className="buttons">
                    <Link href="/dining/eel">Find eel dishes</Link>
                </div>
            </div>
        </div>
    );
}

export default Dining;