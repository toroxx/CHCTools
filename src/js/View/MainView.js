import React, { useState, useEffect } from "react";

import IconButton from '../Components/IconButton';

const MainView = (props) => {
    const db = props.db;
    const [apps, setApps] = useState([]);


    useEffect(() => {
        db.find({}, function (err, docs) {
            if (err == null) {
                setApps(docs);
            } else {
                setApps([]);
            }
        });
    }, []);


    return (
        <div className="window" >
            <header>
                <div id="title">Toolbox</div>
                <div id="title-bar-btns">
                    <button id="add-btn" onClick={() => { window.open('index.html', "_add", "width=400&height=200") }}>+</button>
                    <button id="close-btn" onClick={() => { window.close() }}>X</button>
                </div>
            </header>

            <main>
                {apps.map(app => (
                    <IconButton db={db} {...app} />
                ))}
            </main>
        </div>
    );


}

export default MainView;