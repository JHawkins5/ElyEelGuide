'use client';

import React from 'react';
import { WebChatContainer } from "@ibm-watson/assistant-web-chat-react";

// This chatbot was made using IBM WatsonX Assistant.
// The WebChatContainer component is used to render the chatbot.
// The chatbot is rendered in the bottom right corner of the screen on every page.
// The chats persist when navigating through the website.

const Chatbot = () => {
    const webChatOptions = {
        // Configuration for the chatbot.
        // integrationID and serviceInstance are unique to the chatbot.
        // region is the region where the chatbot is hosted.

        integrationID: "b0755444-da72-4612-818e-a868c03295cb",
        region: "eu-gb",
        serviceInstanceID: "f33cabf6-954a-4634-9823-a68768559dbd",
    }

    return (
        <WebChatContainer config={webChatOptions} />
    );
}

export default Chatbot;