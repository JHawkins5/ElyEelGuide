'use client';
import React, {useEffect} from 'react';
import Link from "next/link";
import './index.css';
import Button from "@/components/Button/Button";

export default function Index() {
    return (
        <div>
            {/* Banner */}
            <div className="banner">
                <img className="banner-img" src="/banner.png" alt="Photo of Ely Cathedral"/>
                <div className="banner-text">Welcome to Ely!</div>
            </div>

            {/* Main content */}
            <div className="ely-info">
                <h2 className="list-title">Key facts about Ely</h2>
                <ul className="ely-info-list">
                    <li>Ely is a city in Cambridgeshire, England, located just 14 miles northeast of Cambridge, and 80
                        miles north of London.
                    </li>
                    <li>The city was home to Oliver Cromwell from 1636 to 1646, prior to his rule as Lord Protector,
                        when the country had no monarch.
                    </li>
                    <li>The name 'Ely' is believed to have originated from the Northumbrian word 'ēlġē', meaning
                        'district of eels'.
                    </li>
                </ul>
                <div className="buttons">
                    <Button href="/information">More information</Button>
                </div>
            </div>
            <div className="site-info">
                <p>
                    Ely Eel Guides is an independent tourist site designed to celebrate Ely's heritage and highlight
                    some of the city's hidden gems.
                    Discover the history of Ely and its people, and learn about the city's unique culture and
                    traditions, including eel fishing.
                    A special feature of Ely Eel Guides is the eel recommender, which helps you find the best places to
                    eat eel in Ely.
                </p>
            </div>
            {/* Buttons to other pages */}
            <div className="buttons">
                <Button href="/transport">View transport links</Button>
                <Button href="/dining">View places to eat</Button>
                <Button href="/accommodation">View places to stay</Button>
                <Button href="/activities">View things to do</Button>
            </div>
        </div>
    );
}