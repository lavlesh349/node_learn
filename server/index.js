const http = require("http");
const fs = require('fs');
const url = require("url");

const myServer = http.createServer((req, res) => {
    // console.log("New Req Rec.");
    // console.log(req.headers);
    // console.log(req);
    if (req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()} ${req.url} ${req.method} New Req Received \n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("Log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                res.end("Home Page");
                break;
            case "/about":
                const username = myUrl.query.myname;
                res.end(`I am ${username}`);
                break;
            case "/search":
                const search = myUrl.query.search_query;
                res.end("Here are your results for " + search);
            case "/signup":
                if (req.method === "GET") res.end("This is a signup form");
                else if (req.method == "POST")
                    // Db query
                    res.end("Sucess");
            default:
                res.end("404");
        }
    });
});

myServer.listen(8000, () => {
    console.log("Server is running");
})

