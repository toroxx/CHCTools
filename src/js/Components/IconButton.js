import React, { useState, useEffect } from "react";
import * as Util from "../Util";
const { app, screen } = electron.remote;
const rootpath = app.getAppPath();

const IconButton = (props) => {
    let { main } = props;

    function getIcon(_id, app_path) {
        let store = path.join(rootpath, '/resources/apps/icons/');
        let exe_path = path.join(rootpath, '/bin/iconsext.exe');
        const cmd = `"${exe_path}" /save "${app_path}" "${store}" -icons -asico`;
        //exec(cmd);
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
                     
                        let pos = Util.center_screen_pos(400, 200);

                        const win = Util.open_win(400, 150, pos, 'edit.html', { _id: _id })
                        win.on('closed', function () {
                            window.reload_list();
                        });
                    }}>Config</button>
                </td>
            </tr>
        </table>

    </div>)

};

export default IconButton;