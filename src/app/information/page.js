'use client';
import React from 'react';
import './information.css';
import TTSButton from "@/components/TTSButton/TTSButton";

const Information = () => {
    const infoSections = [
        {
            title: "Information about Ely",
            content: [
                "Ely is the second smallest city in England, located in Cambridgeshire, just 14 miles northeast of Cambridge. The city gets its name from the Northumbrian word 'ēlġē', which means 'district of eels', as the area was once a marshy region full of eels. The city was founded in 673CE by St Etheldreda, an Anglo-Saxon princess, who built a monastery on the site of the present Ely Cathedral. The current building dates back to 1083, but was not officially a cathedral until 1109, therefore gaining Ely the title of a city.",

                "Ely is also known for Oliver Cromwell's House, which is located on St Mary's Street. Cromwell was born in Huntingdon, but moved to Ely in 1636, where he lived until 1646. He was a key figure in the English Civil War and in the execution of King Charles I, and became the Lord Protector of England, Scotland and Ireland in 1653 until his death in 1658. Nowadays, Cromwell's House is a museum, and is also home to the Ely Tourist Information Centre.",

                "Historically, Ely was also known as the Isle of Ely, as it was once an island in the Fens, a marshy area of land that was drained in the 17th century. The natural defences of the island meant that it staged the last resistance to the Norman Conquest of 1066. However, monks conspired to supply William the Conqueror with vital information about the island's defences, allowing him to take Ely."
            ]
        },
        {
            title: "Where to go for help",
            content: [
                "If you need help, you can contact us via any of the methods on the contact page, or you can contact the Ely Tourist Information Centre. The Tourist Centre is located at Oliver Cromwell's House at 29 St Mary’s Street, Ely, CB7 4HF. Alternatively, you can ask our Tour Guide chatbot, in the bottom right corner of the screen."
            ]
        }
    ];

    return (
        <div>
            <h1 className="title">Extra Tourist Information</h1>
            <div className="ely-information">
                {infoSections.map((section, index) => (
                    <div key={index} className="info-section">
                        <h2>{section.title}</h2>
                        {section.content.map((paragraph, idx) => (
                            <div key={idx}>
                                <p key={idx}>{paragraph}</p>
                                <div className="tts-container">
                                    <TTSButton text={paragraph} />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Information;
