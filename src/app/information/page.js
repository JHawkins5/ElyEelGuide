'use client';
import React, { useState } from 'react';
import './information.css';
import Link from 'next/link';

const Information = () => {
    return (
        <div>
            <h1 className="title">Extra Tourist Information</h1>
            <div className="ely-information">
                <h2>Information about Ely</h2>
                <p>
                    Ely is the second smallest city in England, located in Cambridgeshire, just 14 miles northeast of Cambridge.
                    The city gets its name from the Northumbrian word 'ēlġē', which means 'district of eels', as the area was once a marshy region full of eels.
                    The city was founded in 673CE by St Etheldreda, an Anglo-Saxon princess, who built a monastery on the site of the present Ely Cathedral.
                    The current building dates back to 1083, but was not officially a cathedral until 1109, therefore gaining Ely the title of a city.
                </p>
                <p>
                    Ely is also known for Oliver Cromwell's House, which is located on St Mary's Street. Cromwell was born in Huntingdon, but moved to Ely in 1636, where he lived until 1646.
                    He was a key figure in the English Civil War and in the execution of King Charles I, and became the Lord Protector of England, Scotland and Ireland in 1653 until his death in 1658.
                    Nowadays, Cromwell's House is a museum, and is also home to the Ely Tourist Information Centre.
                </p>
                <p>
                    Historically, Ely was also known as the Isle of Ely, as it was once an island in the Fens, a marshy area of land that was drained in the 17th century.
                    The natural defences of the island meant that it staged the last resistance to the Norman Conquest of 1066, however, monks conspired to supply William the Conqueror with vital information about the island's defences, and he was able to take Ely.
                </p>
                <h2>Where to go for help</h2>
                <p>
                    If you need help, you can contact us via any of the methods on the contact page, or you can contact the Ely Tourist Information Centre.
                    The Tourist Centre is located at Oliver Cromwell's House at 29 St Mary’s Street, Ely, CB7 4HF.
                    Alternatively, you can ask our Tour Guide chatbot, in the bottom right corner of the screen.
                </p>
            </div>
        </div>
    );
}

export default Information;