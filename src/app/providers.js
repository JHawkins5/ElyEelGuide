'use client';

import Header from "../components/Header/Header";
import Chatbot from "@/components/Chatbot/Chatbot";
import Footer from "../components/Footer/Footer";
import './layout.css';

export function Providers({children}) {
    return (
        <div className="layout-container">
            <Header />
            <Chatbot />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
}