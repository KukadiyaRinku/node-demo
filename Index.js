const express = require('express');
const path = require('path')

const app = express();
const viewPath = path.join(__dirname, 'View');

//app.use(express.static(viewPath));

app.get('', (_, resp) => {
    resp.sendFile(`${viewPath}/Index.html`);
});

app.get('/about', (_, resp) => {
    resp.sendFile(`${viewPath}/AboutUs.html`);
});

app.get('/contact', (_, resp) => {
    resp.sendFile(`${viewPath}/ContactUs.html`);
});

app.get('*', (_, resp) => {
    resp.sendFile(`${viewPath}/NotFound.html`);
});

app.listen(3060);
