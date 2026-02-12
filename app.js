import http from "http";

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            console.log(req.method);
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(`
            <h2>Contact</h2>
            <h1>Name - Tushar Bhardwaj</h1>
            <h1>Email - tuusshar@xyz</h1>
        `);
            break;

        default:
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>404 Not Found</h1>");
    }
});

server.listen(3000, () => {
    console.log("connect");
});