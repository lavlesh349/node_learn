const express = require("express");
const { connectmongodb } = require("./connection");

const { logReqRes } = require('./midllewares');
const userRouter = require('./routes/user');


const app = express();
const PORT = 8000;

// connection
connectmongodb('mongodb://127.0.0.1:27017/restProject')
    .then(() => console.log("Database Connected"))
    .catch(err => console.log('Mongo connection error', err));

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

// routes
app.use('/users', userRouter)

app.listen(PORT, () => console.log("Server is connected at 8000 post"))