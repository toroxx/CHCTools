const path = require('path');
const electron = require('electron');

function exec(path, callback) {
    const exec = require('child_process').exec;
    exec(path, callback);
}

function load_datastore(options){
    const Datastore = require('nedb');
    return new Datastore(options);
}