var exec = require('child_process').exec;
exec('"C:\\Program Files (x86)\\Notepad++\\notepad++.exe"', function (err, stdout, stderr) {
    if (err) {
        throw err;
    }
})