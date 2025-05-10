'use client';
import React from 'react';
import './transport.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Button from "@/components/Button/Button";
import TTSButton from "@/components/TTSButton/TTSButton";

const Transport = () => {
    const transportMethods = [
        {
            title: "Travelling by Car",
            content: "Ely is located along the A10, which stretches from Cambridge to King's Lynn. It is a 30 - 40 minute drive from Cambridge, and a 45 minute drive from King's Lynn. Ely is also accessible via the A142, which connects to the A14. The A14 stretches from the East Coast to the West Midlands.",
        },
        {
            title: "Travelling by Train",
            content: "Ely has its own train station, which is located just on the outskirts of the city centre, running alongside the River Great Ouse. The station has routes to and from Cambridge, King's Lynn, and Norwich in East Anglia, as well as to Stansted Airport, London King's Cross and Liverpool Street, and Birmingham New Street. At Cambridge, you can connect to Brighton, and at Peterborough, you can connect to cities in the North of England, and Scotland. The station is operated by Greater Anglia, and you can check the train times and book tickets on their website. Alternatively, you can use sites such as Trainline.",
            links: [
                { text: "Greater Anglia", href: "https://www.greateranglia.co.uk/" },
                { text: "Trainline", href: "https://www.thetrainline.com/" }
            ]
        },
        {
            title: "Travelling by Bus",
            content: "Ely is served by a number of bus routes, connecting the city to Cambridge, Newmarket, and the surrounding villages. For buses to Cambridge, you can take the 9. For buses to Newmarket, you can take the 112. You can find a full list of bus routes on Bustimes.",
            links: [
                { text: "Bustimes", href: "https://bustimes.org/localities/ely-cambs" }
            ]
        },
        {
            title: "Travelling by Plane",
            content: "The nearest airport to Ely is London Stansted Airport. It is a 50 minute drive from Ely, via either Cambridge or Newmarket. Alternatively, Stansted Airport is accessible via a direct train from Ely station. You can visit the Stansted Airport website for more information on flights and transport to and from the airport.",
            links: [
                { text: "Stansted Airport", href: "https://www.stanstedairport.com/" }
            ]
        }]

    return (
        <div className="container">
            {/* Transport methods content */}
            <div className="content">
                <h1 className="title">Transport to Ely</h1>
                <div className="methods">
                    {transportMethods.map((method, index) => (
                        <div className="method" key={index}>
                            <h2>{method.title}</h2>
                            <p>{method.content}</p>

                            {/* Add a button to read the content aloud */}
                            <div className="tts-container">
                                <TTSButton text={method.content} />
                            </div>

                            {/* Add links if they exist */}
                            {method.links && (
                                <div className="buttons">
                                    {method.links.map((link, linkIndex) => (
                                        <Button key={linkIndex} href={link.href}>
                                            {link.text}
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
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