'use client';
import React, { useState } from 'react';
import './transport.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Transport = () => {
    return (
        <div>
            <h1 className="title">Transport to Ely</h1>
            <div className="methods">
                <div className="method">
                    <h2>Travelling by Car</h2>
                    <p>
                        Ely is located along the A10, which stretches from Cambridge to King's Lynn. It is a 30 - 40 minute drive from Cambridge, and a 45 minute drive from King's Lynn.
                        Ely is also accessible via the A142, which connects to the A14. The A14 stretches from the East Coast to the West Midlands.
                    </p>
                </div>
                <div className="method">
                    <h2>Travelling by Train</h2>
                </div>
                <div className="method">
                    <h2>Travelling by Bus</h2>
                </div>
            </div>
            <div className="map-container">
                <h2>Map</h2>
                <MapContainer center={[52.399539, 0.262363]} zoom={13} style={{ height: "400px", width: "100%" }}>
                    <TileLayer
                        url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[52.399539, 0.262363]}>
                        <Popup>
                            Ely, Cambridgeshire, England
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}

export default Transport;