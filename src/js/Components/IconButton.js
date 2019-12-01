import React, { useState, useEffect } from "react";


const IconButton = (props) => {

    let { icon, url, name } = props;
    return (<div>
        <table style={{ width: "100%" }}>
            <tr>
                <td style={{ width: "30px" }}>
                    <img style={{ height: '25px' }} src={icon} />
                </td>
                <td>
                    <button target="_blank" onClick={() => {
                        exec(`"${url}"`, function (err, stdout, stderr) {
                            if (err) {
                                alert(err);
                            }
                        });
                    }}>{name}</button>
                </td>
            </tr>
        </table>

    </div>)

};

export default IconButton;