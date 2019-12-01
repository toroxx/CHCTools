'use strict';
import '../scss/main.scss';
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import IconButton from './Components/IconButton';

const app = electron.remote.app;
const BrowserWindow = electron.BrowserWindow;
const rootpath = app.getAppPath();

//database
const dbpath = path.join(rootpath, '/resources/db/', 'db.json');
const db = load_datastore({ filename: dbpath, autoload: true });
db.loadDatabase();

const MainWindow = () => {
    const [apps, setApps] = useState([]);
    let rows = [];


    useEffect(() => {
        console.log('111');
        db.find({}, function (err, docs) {
            console.log(docs, 'docs');
            if (err == null) {
                setApps(docs);
            } else {
                setApps([]);
            }
        });


    }, []);


    return (
        <div className="container" >
            <header>
                <div id="title">Toolbox</div>
                <div id="title-bar-btns">
                    <button id="close-btn" onClick={() => { window.close() }}>X</button>
                </div>
            </header>
            <main>
                {apps.map(app => (
                    <IconButton {...app} />
                ))}
            </main>
        </div>
    );
}

ReactDOM.render(<MainWindow />, document.getElementById('root'));