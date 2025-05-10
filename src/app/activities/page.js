'use client';
import React from 'react';
import './activities.css';
import Button from "@/components/Button/Button";
import TTSButton from "@/components/TTSButton/TTSButton";

const Activities = () => {
    const sections = [
        {
            title: "Events",
            items: [
                {
                    name: "Ely Eel Day - 3rd May 2025",
                    description: "Ely Eel Day is an annual event celebrating the city's namesake - eels. It is celebrated on the first May Bank Holiday weekend. It contains a parade and an eel throwing competition. (No real eels are used or harmed in this competition - they are all toys!)"
                },
                {
                    name: "Armed Forces Day - 21st June 2025",
                    description: "Armed Forces Day celebrates the work of the armed forces and their families. The celebrations include a parade, stalls, and entertainment."
                },
                {
                    name: "Apple and Harvest Fayre - 11th and 12th October 2025",
                    description: "The Apple and Harvest Fayre is an annual event celebrating the harvest season. It features stalls selling local produce, crafts, and other goods. There are also stalls, games, and entertainment for all the family."
                }
            ]
        },
        {
            title: "Museums and Tourist Attractions",
            items: [
                {
                    name: "Ely Museum",
                    description: "The main museum in Ely, Ely Museum, is located in the former gaol and courthouse. It features exhibits on the history of Ely, including its Roman and medieval past, eel fishing, Ely during the war, and more.",
                    link: "https://www.elymuseum.org.uk/"
                },
                {
                    name: "Oliver Cromwell's House",
                    description: "Oliver Cromwell lived in Ely from 1636 to 1646. His house is now a museum dedicated to his life and times. The museum features exhibits on Cromwell's life, the English Civil War, and the history of Ely.",
                    link: "https://www.olivercromwellshouse.co.uk/"
                },
                {
                    name: "Ely Cathedral",
                    description: "Ely Cathedral is one of the most famous landmarks in Ely. It is known for its stunning architecture and beautiful stained glass windows. The cathedral hosts various events throughout the year, including concerts and exhibitions.",
                    link: "https://www.elycathedral.org/"
                },
                {
                    name: "Stained Glass Museum",
                    description: "Located inside Ely Cathedral, the Stained Glass Museum is a unique museum dedicated to the art of stained glass. It features a collection of over 1,000 pieces of stained glass from the 13th century to the present day.",
                    link: "https://www.stainedglassmuseum.com/"
                }
            ]
        },
        {
            title: "Shopping",
            items: [
                {
                    name: "Ely Market",
                    description: "Ely Market is held every Thursday and Saturday in the city centre. It features a variety of stalls selling local produce, crafts, and other goods. There are also mini-markets held throughout the rest of the week.",
                    link: "https://www.elymarkets.co.uk/"
                }
            ]
        },
        {
            title: "Walking Routes",
            items: [
                {
                    name: "River Great Ouse",
                    description: "Starting at either Annesdale or the Maltings, this route takes you along the river bank, past the Cathedral and back to the city centre. The route is approximately 2 miles long and takes about 1 hour to walk."
                },
                {
                    name: "Central Ely to the Leisure Centre",
                    description: "Starting in the city centre, this route takes you through some of the residential areas of Ely, utilising an underpass to cross the busy A10 road. The route is approximately 1.5 miles long and takes about 30 minutes to walk."
                }
            ]
        }
    ];

    return (
        <div>
            <h1 className="title">Things to do in Ely</h1>
            {sections.map((section, index) => (
                <div key={index} className="section">
                    <h2>{section.title}</h2>
                    {section.items.map((item, idx) => (
                        <div key={idx}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <div className="tts-container">
                                <TTSButton text = {item.name + " - " + item.description} />
                            </div>
                            {item.link && (
                                <div className="buttons">
                                    <Button href={item.link}>Website</Button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Activities;