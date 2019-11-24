'use strict';
import '../scss/main.scss';
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
const path = require('path')
const dbpath = path.join(rootpath, '/resources/db/', 'db.json');


const Datastore = require('nedb');
const db = new Datastore({ filename: dbpath, autoload: true });

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


class MainWindow extends React.Component {

    constructor(props) {
        super(props);
        db.loadDatabase();
    }

    render() {
        var apps = [
            {
                "name": "Notepad++",
                "url": "https://notepad-plus-plus.org/downloads/",
                "icon": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Notepad_plus_plus.png",
                "_id": "joRjjNhrHvBN9qNk"
            },
            {
                "name": "Notepad++2",
                "url": "https://notepad-plus-plus.org/downloads/",
                "icon": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Notepad_plus_plus.png",
                "_id": "nvR5js7j55dbaPVd"
            }
        ];
        var rows = [];
        apps.forEach((v, k) => {
            rows.push((<div><img style={{ height: '50px' }} src={v.icon} /><button
                target="_blank" onClick={() => {
                    alert("C:/Program Files/Mozilla Firefox/firefox.exe");
                    /*
                    var { execFile } = require('child_process');
                    var executablePath = "C:/Program Files/Mozilla Firefox/firefox.exe";

                    execFile(executablePath, function (err, data) {
                        if (err) {
                            console.error(err);
                            return;
                        }

                        console.log(data.toString());
                    });*/
                }}>{v.name}</button></div>))
        });
        return (
            <div className="container">
                <header>
                    <div id="title">Toolbox</div>
                    <div id="title-bar-btns">
                        <button id="close-btn" onClick={() => { window.close() }}>X</button>
                    </div>
                </header>
                <main> {rows} </main>
            </div>
        );
    }

}


ReactDOM.render(<MainWindow />, document.getElementById('root'));