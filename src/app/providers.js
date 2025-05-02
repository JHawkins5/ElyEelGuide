'use client';

import Header from "../components/Header/Header";
import Chatbot from "@/components/Chatbot/Chatbot";

export function Providers({children}) {
    return (
        <>
            <Header />
            <Chatbot />
            {children}
        </>
    );
}