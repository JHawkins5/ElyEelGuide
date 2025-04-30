'use client';
import React, { useState } from 'react';
import './Header.css';
import Link from 'next/link';

const Header = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const toggleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen);
    }

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
                        <li><Link href="/dining">Where to Eat</Link></li>
                        <li><Link href="/accommodation">Where to Stay</Link></li>
                        <li><Link href="/activities">What to Do</Link></li>
                        <li><Link href="/information">More Info</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </header>

            {/* Sidebar - opens when the hamburger icon is clicked */}
            <nav className={`sidebar ${isSideBarOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/transport">Transport</Link></li>
                    <li><Link href="/dining">Where to Eat</Link></li>
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