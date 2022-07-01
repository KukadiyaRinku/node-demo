const express = require('express');
const path = require('path')

const app = express();
const viewPath = path.join(__dirname, 'Pages');

app.set('view engine', 'ejs');

app.get('', (_, resp) => {
    resp.sendFile(`${viewPath}/Index.html`);
});

app.get('/profile', (_, resp) => {
    const user = {
        name: "Rinku",
        email: "kukdaiyarinku@gmail.com"
    };
    resp.render('Profile', { user });
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

app.listen(3060, () => {
    console.log(`Server running at http://3060/`);
}
);
