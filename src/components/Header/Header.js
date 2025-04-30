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
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </header>

            {/* Sidebar */}
            <nav className={`sidebar ${isSideBarOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>

            {/* Overlay */}
            {isSideBarOpen && (
                <div className="sidebar-overlay" onClick={toggleSideBar}></div>
            )}
        </div>
    );
};

export default Header;