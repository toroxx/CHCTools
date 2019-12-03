import React, { useState, useEffect } from "react";
const { app, BrowserWindow, screen } = electron.remote;
const display = screen.getPrimaryDisplay();
const rootpath = app.getAppPath();

const IconButton = (props) => {
    function getIcon(_id, app_path) {
        let store = path.join(rootpath, '/resources/apps/icons/');
        let exe_path = path.join(rootpath, '/bin/iconsext.exe');
        const cmd = `"${exe_path}" /save "${app_path}" "${store}" -icons -asico`;
        //exec(cmd);
    }

    function edit_apps(_id) {
        const mainScreenSize = display.size;
        const current = BrowserWindow.getFocusedWindow();
        let win = new BrowserWindow({
            width: 400, height: 200,
            x: (mainScreenSize.width - 400) / 2, y: (mainScreenSize.height - 200) / 2,
            frame: false,
            transparent: true,
            resizable: false,
            webPreferences: {
                nodeIntegration: true
            }
        });
        win.loadURL(url.format({
            pathname: path.join(rootpath + '/app', 'edit.html'),
            protocol: 'file:',
            slashes: true
        }) + '?_id=' + _id);
        //win.webContents.openDevTools()

        win.on('closed', function () {
            current.reload();
        });
    }

    let { icon, app_path, name, _id } = props;
    const picon = getIcon(_id, app_path);

    return (<div>
        <table style={{ width: "100%" }}>
            <tr>
                <td style={{ width: "30px" }}>
                    <img style={{ height: '25px' }} src={icon} />
                </td>
                <td>
                    <button target="_blank" onClick={() => {
                        exec(`"${app_path}"`, function (err, stdout, stderr) {
                            if (err) {
                                alert(err);
                            }
                        });
                    }}>{name}</button>
                </td>
                <td style={{ 'text-align': 'right' }}>
                    <button target="_blank" onClick={() => {
                        edit_apps(_id);
                    }}>Config</button>
                </td>
            </tr>
        </table>

    </div>)

};

export default IconButton;