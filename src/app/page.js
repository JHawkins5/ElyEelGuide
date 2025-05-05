'use client';
import React, {useEffect} from 'react';
import Link from "next/link";
import './index.css';

export default function Index() {
    return (
        <div>
            <div className="banner">
                <img className="banner-img" src="/banner.png" alt="Photo of Ely Cathedral"/>
                <div className="banner-text">Welcome to Ely!</div>
            </div>
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
        </div>
    );
}