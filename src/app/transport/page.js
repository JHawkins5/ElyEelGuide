'use client';
import React, { useState } from 'react';
import './transport.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Link from "next/link";

const Transport = () => {
    return (
        <div className="container">
            {/* Transport methods content */}
            <div className="content">
                <h1 className="title">Transport to Ely</h1>
                <div className="methods">
                    <div className="method">
                        <h2>Travelling by Car</h2>
                        <p>
                            Ely is located along the A10, which stretches from Cambridge to King's Lynn. It is a 30 - 40
                            minute drive from Cambridge, and a 45 minute drive from King's Lynn.
                            Ely is also accessible via the A142, which connects to the A14. The A14 stretches from the
                            East Coast to the West Midlands.
                        </p>
                    </div>
                    <div className="method">
                        <h2>Travelling by Train</h2>
                        <p>
                            Ely has its own train station, which is located just on the outskirts of the city centre, running alongside the River Great Ouse.
                            The station has routes to and from Cambridge, King's Lynn, and Norwich in East Anglia, as well as to Stansted Airport, London King's Cross and Liverpool Street, and Birmingham New Street.
                            At Cambridge, you can connect to Brighton, and at Peterborough, you can connect to cities in the North of England, and Scotland.
                        </p>
                        <p>
                            The station is operated by Greater Anglia, and you can check the train times and book tickets on their website. Alternatively, you can use sites such as Trainline.
                        </p>
                        <div className="buttons">
                            <Link href="https://www.greateranglia.co.uk/">Greater Anglia</Link>
                            <Link href="https://www.thetrainline.com/">Trainline</Link>
                        </div>
                    </div>
                    <div className="method">
                        <h2>Travelling by Bus</h2>
                        <p>
                            Ely is served by a number of bus routes, connecting the city to Cambridge, Newmarket, and the surrounding villages.
                            For buses to Cambridge, you can take the 9. For buses to Newmarket, you can take the 112.
                            You can find a full list of bus routes on Bustimes.
                        </p>
                        <div className="buttons">
                            <Link href="https://bustimes.org/localities/ely-cambs">Bustimes</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Map using the leaflet library */}
            <div className="map-container">
                <MapContainer center={[52.399539, 0.262363]} zoom={13} style={{height: "100%", width: "100%"}}>
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