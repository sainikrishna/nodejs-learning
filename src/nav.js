const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.write("<h1>Welcome to my home page</h1>");
    res.send();
});

app.get("/about", (req, res) => {
    res.send("Welcome to my about page");
});

app.get("/contact", (req, res) => {
    res.send("Welcome to my contact page");
});

app.get("/temp", (req, res) => {
    res.json('null');
});

app.listen(port, () => {
    console.log(`Listining to port no ${port}`)
})