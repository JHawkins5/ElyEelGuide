'use client';
import React, { useState } from 'react';
import './activities.css';
import Link from 'next/link';
import Button from "@/components/Button/Button";

const Activities = () => {
    return (
        <div>
            <h1 className="title">Things to do in Ely</h1>
            <div className="section">
                <h2>Events</h2>
                <h3>Ely Eel Day - 3rd May 2025</h3>
                <p>
                    Ely Eel Day is an annual event celebrating the city's namesake - eels.
                    It is celebrated on the first May Bank Holiday weekend.
                    It contains a parade and an eel throwing competition.
                    (No real eels are used or harmed in this competition - they are all toys!)
                </p>
                <h3>Armed Forces Day - 21st June 2025</h3>
                <p>
                    Armed Forces Day celebrates the work of the armed forces and their families.
                    The celebrations include a parade, stalls, and entertainment.
                </p>
                <h3>Apple and Harvest Fayre - 11th and 12th October 2025</h3>
                <p>
                    The Apple and Harvest Fayre is an annual event celebrating the harvest season.
                    It features stalls selling local produce, crafts, and other goods.
                    There are also stalls, games, and entertainment for all the family.
                </p>
            </div>
            <div className="section">
                <h2>Museums and Tourist Attractions</h2>
                <h3>Ely Museum</h3>
                <p>
                    The main museum in Ely, Ely Museum, is located in the former gaol and courthouse.
                    It features exhibits on the history of Ely, including its Roman and medieval past, eel fishing, Ely during the war, and more.
                </p>
                <div className="buttons">
                    <Button href="https://www.elymuseum.org.uk/">Website</Button>
                </div>
                <h3>Oliver Cromwell's House</h3>
                <p>
                    Oliver Cromwell lived in Ely from 1636 to 1646. His house is now a museum dedicated to his life and times.
                    The museum features exhibits on Cromwell's life, the English Civil War, and the history of Ely.
                </p>
                <div className="buttons">
                    <Button href="https://www.olivercromwellshouse.co.uk/">Website</Button>
                </div>
                <h3>Ely Cathedral</h3>
                <p>
                    Ely Cathedral is one of the most famous landmarks in Ely. It is known for its stunning architecture and beautiful stained glass windows.
                    The cathedral is a popular tourist attraction and hosts various events throughout the year, including concerts and exhibitions.
                    Visitors can take guided tours to learn about the history of the cathedral and its significance in the local community.
                </p>
                <div className="buttons">
                    <Button href="https://www.elycathedral.org/">Website</Button>
                </div>
                <h3>Stained Glass Museum</h3>
                <p>
                    Located inside Ely Cathedral, the Stained Glass Museum is a unique museum dedicated to the art of stained glass.
                    It features a collection of over 1,000 pieces of stained glass from the 13th century to the present day.
                </p>
                <div className="buttons">
                    <Button href="https://www.stainedglassmuseum.com/">Website</Button>
                </div>
            </div>
            <div className="section">
                <h2>Shopping</h2>
                <h3>Ely Market</h3>
                <p>
                    Ely Market is held every Thursday and Saturday in the city centre. It features a variety of stalls selling local produce, crafts, and other goods.
                    There are also mini-markets held throughout the rest of the week.
                    The Market stretches from Market Place, on the corner of the High Street, to Market Street.
                </p>
                <div className="buttons">
                    <Button href="https://www.elymarkets.co.uk/">Website</Button>
                </div>
            </div>
            <div className="section">
                <h2>Walking Routes</h2>
                <h3>River Great Ouse</h3>
                <p>
                    Starting at either Annesdale or the Maltings, this route takes you along the river bank, past the Cathedral and back to the city centre. The route is approximately 2 miles long and takes about 1 hour to walk.
                </p>
            </div>
        </div>
    );
}

export default Activities;