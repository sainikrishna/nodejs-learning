const express = require("express");
const path = require("path");
const hbs = require("hbs");

const port = process.env.PORT || 8080;

const app = express();

console.log(path.join(__dirname, '../public'));
const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
// builtin middleware
app.use(express.static(staticPath));

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath)

app.get("", (req, res) => {
    res.render("index", {
        name: " Krishan Saini"
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        name: " Krishan Saini"
    });
});

app.get("/about/*", (req, res) => {
    res.render("404", {
        errorcomment: "Oops this about us page could't be found"
    });
});

app.get("*", (req, res) => {
    res.render("404", {
        errorcomment: "Oops page could't be found"
    });
});

app.listen(port, () => {
    console.log(`Listining the port of ${port}`)
})