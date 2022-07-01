const express = require('express');
const path = require('path')

const app = express();
const viewPath = path.join(__dirname, 'View');

app.use(express.static(viewPath));

app.listen(3060);
