const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send("This Is Home Page.");
});

app.get('/about', (req, res) => {
    res.send("This Is About Us Page.");
});

app.get('/contact', (req, res) => {
    res.send("This Is Contact Us Page.");
});

app.listen(3060);
