'use client';
import React, { useState } from 'react';
import './contact.css'

const Contact = () => {
    return (
        <div>
            {/* Contact information */}
            <h1 className="title">Contact us!</h1>
            <p>
                If you have any questions or inquiries, you can contact us using either of the following:
            </p>
            <div className="contact-info">
                <ul className="contact-list">
                    {/* These are not real contacts, please don't try to contact them. */}
                    <li>Email: <a href="mailto:help@elyeelguides.com">help@elyeelguides.com</a></li>
                    <li>Telephone: 01353 999999</li>
                </ul>
            </div>
            {/* Prompt to use the chatbot */}
            <p>
                Alternatively, you can also ask our Tour Guide chatbot. Just click the button in the bottom right corner of the screen to open the chat.
            </p>
        </div>
    );
}

export default Contact;