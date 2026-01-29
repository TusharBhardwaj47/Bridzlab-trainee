const fs =require("fs");
const path = require("path");

const logfile=path.join(__dirname, "log.txt");

function createLog(datate, type, data) {
    fs.readFile(logfile, "utf-8", (err, data) => {
        if (err) throw err;
        console.log("file read", data);
    });


    fs.writeFileSync(
        logfile,
        `Date: ${datate}\nType: ${type}\nMessage: ${data}\n\n`
    );
    return "Log created successfully";

}