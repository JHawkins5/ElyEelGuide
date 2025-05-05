'use client';
import React, { useState } from 'react';
import './contact.css'

const Contact = () => {
    return (
        <div>
            <h1 className="title">Contact us!</h1>
            <p>
                If you have any questions or inquiries, you can contact us using either of the following:
            </p>
            <div className="contact-info">
                <ul className="contact-list">
                    <li>Email: <a href="mailto:help@elyeelguides.com">help@elyeelguides.com</a></li>
                    <li>Telephone: 01353 999999</li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;