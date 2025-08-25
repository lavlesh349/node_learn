const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8000;

// middleware
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    fs.appendFile('log.txt', `\n${Date.now()}: ${req.method} : ${req.path}`, (err) => {
        next();
    })
});

// app.use((req, res, next) => {
//     console.log("hello from middleware 2", req.username);
//     res.send("Hey");
// });

// routes

app.get("/users", (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html);
});

app.get("/api/users", (req, res) => {
    res.setHeader("X-myName", "Lavlesh");
    console.log(req.headers);
    return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
    const id = (Number)(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})

app.post("/api/users", (req, res) => {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.gender || !body.email || !body.job_title) {
        res.status(404);
    }
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", id: users.length });
    });
});

app.patch("/api/users/:id", (req, res) => {
    // const id = req.params.id;
    // const body = req.body;

    return res.json({ status: "pending" });
})


app.delete("/api/users/:id", (req, res) => {
    // TODO: delete the user with id
    return res.json({ status: "pending" });
})

// we can also create common route with multiple methods
// app.route("/api/users/:id")
//     .get((req, res) => {
//         const id = (Number)(req.params.id);
//         const user = users.find((user) => user.id === id);
//         return res.json(user);
//     })
//     .patch((req, res) => {
//         // TODO: Edit the user with id
//         return res.json({ status: "pending" });
//     })
//     .delete((req, res) => {
//         // TODO: delete the user with id
//         return res.json({ status: "pending" });
//     })

app.listen(PORT, () => console.log("Server is connected at 8000 post"))