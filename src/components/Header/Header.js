'use client';
import React, {useEffect, useState} from 'react';
import './Header.css';
import Link from 'next/link';

const Header = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [isSideBarDropDownOpen, setIsSideBarDropDownOpen] = useState(false);

    const toggleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen);
    }

    const toggleDropDown = () => {
        setIsDropDownOpen(!isDropDownOpen);
    }

    const toggleSideBarDropDown = () => {
        setIsSideBarDropDownOpen(!isSideBarDropDownOpen);
    }

    useEffect(() => {
        document.title = "Ely Eel Guides";
    }, []);

    return (
        <div>
            {/* Main Navbar */}
            <header className="navbar">
                <div className="navbar-container">
                    <div className="navbar-hamburger" onClick={toggleSideBar}>
                        &#9776;
                    </div>
                    <ul className="navbar-links">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/transport">Transport</Link></li>
                        {/* Dropdown menu */}
                        <li className="dropdown" onMouseEnter={toggleDropDown} onMouseLeave={toggleDropDown}>
                            <Link href="/dining" className="dropdown-toggle">Where to Eat</Link>
                            {isDropDownOpen && !isSideBarOpen &&(
                                <ul className="dropdown-menu">
                                    <li><Link href="/dining/restaurants">Restaurants</Link></li>
                                    <li><Link href="/dining/cafes">Cafes</Link></li>
                                    <li><Link href="/dining/eel">Eel Dishes</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link href="/accommodation">Where to Stay</Link></li>
                        <li><Link href="/activities">What to Do</Link></li>
                        <li><Link href="/information">More Info</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                    <div className="logo">
                        <Link href="/">
                            {/* Logo created using generative AI */}
                            <img src="/favicon.png" alt="Ely Eel Guides Logo"/>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Sidebar - opens when the hamburger icon is clicked */}
            <nav className={`sidebar ${isSideBarOpen ? 'open' : ''}`}>
                <button className="sidebar-close" onClick={toggleSideBar}>x</button>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/transport">Transport</Link></li>
                    {/* Dropdown menu */}
                    <li className="dropdown" onMouseEnter={toggleSideBarDropDown} onMouseLeave={toggleSideBarDropDown}>
                        <Link href="/dining" className="dropdown-toggle">Where to Eat</Link>
                        {isSideBarDropDownOpen && (
                            <ul className="dropdown-menu">
                                <li><Link href="/dining/restaurants">Restaurants</Link></li>
                                <li><Link href="/dining/cafes">Cafes</Link></li>
                                <li><Link href="/dining/eel">Eel Dishes</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link href="/accommodation">Where to Stay</Link></li>
                    <li><Link href="/activities">What to Do</Link></li>
                    <li><Link href="/information">More Info</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>

            {/* Overlay - allows the sidebar to be closed by clicking elsewhere on the page */}
            {isSideBarOpen && (
                <div className="sidebar-overlay" onClick={toggleSideBar}></div>
            )}
        </div>
    );
};

export default Header;