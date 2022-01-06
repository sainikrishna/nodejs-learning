const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from express");
});

app.get("/about", (req, res) => {
    res.send("Hello from about page");
});

app.listen(8080, () => {
    console.log("Listining the port of 8080")
})