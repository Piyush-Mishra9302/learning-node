const fs = require("fs");
const express = require("express");
const zlib = require("zlib");
const bodyParser = require("body-parser");
const status = require("express-status-monitor");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(status());


app.get('/stream', (req, res) => {
    const stream = fs.createReadStream("input.txt", "utf-8");
    stream.on("data", (chunk) => res.write(chunk));
    stream.on("end", () => res.end());
});


app.get("/createzip", (req, res) => {
    const gzip = zlib.createGzip();
    const input = fs.createReadStream("input.txt");
    const output = fs.createWriteStream("sample.gz");

    input.pipe(gzip).pipe(output);

    output.on("finish", () => {
        res.send("Your compressed file (sample.gz) is created!");
    });
});

const port = 8000;

app.listen(port, () => {
    console.log("Server is running on port 8000");
});
