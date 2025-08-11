const express = require("express");

const app = express();//app is a handler function 
app.get("/", (req, res) => {
    return res.send("Hello from home page");
})

app.get("/about", (req, res) => {
    return res.send("Hello from About Page" + "hey" + req.query.name);
})

app.listen(8000, () => {
    console.log("Server is running");
})

