'use client';
import React, { useState } from 'react';
import './dining.css';
import Link from 'next/link';
import Button from "@/components/Button/Button";
import TTSButton from "@/components/TTSButton/TTSButton";

const Dining = () => {
    const content = [
        {
            title: "Restaurants",
            text: "Ely has a wide variety of restaurants, including traditional British cuisine and pub culture, as well as restaurants inspired by foreign cuisines. The majority of restaurants are located in the city centre, with a few located in the surrounding areas. There are also a few located in the leisure centre, just outside the city on the A10. Click here to view a list of all the restaurants in Ely, and find the one for you!",
            link: "/dining/restaurants"
        },
        {
            title: "Cafés",
            text: "Ely has a number of cafés, ranging from small independent cafés to larger chains. The majority of cafés are located in the city centre, with a few located in the surrounding areas. Whether you're looking for a quick coffee break during a walk around the city, or a place to sit and relax with a book, Ely has a café for you. Click here to find the perfect café for you!",
            link: "/dining/cafes"
        },
        {
            title: "Eel in Ely",
            text: "As Ely is named after the eels that used to be caught in the River Great Ouse, it is no surprise that eel dishes are a local specialty. Their popularity as a dish has declined in recent years, but there are still a few restaurants that serve eel dishes. Currently, only two restaurants in Ely serve eel dishes, but they are both highly recommended. Click below to use our eel recommender to find the best eel dish for you!",
            link: "/dining/eel"
        }
    ]
    return (
        <div>
            <h1 className="title">Cafés and Restaurants in Ely</h1>
            {content.map((item, index) => (
                <div key={index} className="content">
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                    <div className="tts-container">
                        <TTSButton text={item.text} />
                    </div>
                    <div className="buttons">
                        <Button href={item.link}>View {item.title.toLowerCase()}</Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Dining;