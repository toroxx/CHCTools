'use strict';
import '../scss/main.scss';
import React from "react";
import ReactDOM from 'react-dom';

import MainView from './View/MainView';
import EditView from './View/EditView';

const { app, BrowserWindow, ipcRenderer } = electron.remote;
const rootpath = app.getAppPath();

//database
const dbpath = path.join(rootpath, '/resources/db/', 'db.json');
const db = load_datastore({ filename: dbpath, autoload: true });
db.loadDatabase();


const {searchParams} = new URL(window.location.href);


const root = document.querySelector('#root')
switch (root.getAttribute('mode')) {
    case "edit":
        ReactDOM.render(<EditView searchParams={searchParams} db={db} />, root);
        break;
    default:
        ReactDOM.render(<MainView db={db} />, root);
        break;
}
