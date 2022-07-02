const express = require('express');
const conn = require('./config');

const app = express();

app.use(express.json());

app.get('/', (req, resp) => {
    conn.query("select * from course", (err, result) => {
        if (err)
            resp.send("Unable to fetch data.")
        else
            resp.send(JSON.stringify(result));
    })
});

app.post('/', (req, resp) => {
    //const data = { id: 10, description: 'Python to learn.', name: 'Python' };
    const data = req.body;
    conn.query('insert into course set ? ', data, (err, result, fields) => {
        if (err) resp.send(err);
        else resp.send(result);
    })
});

app.put('/:id', (req, resp) => {
    const data = [req.body.description, req.body.name, req.params.id];
    conn.query("update course set description = ? ,name = ? WHERE id = ? ", data, (err, result, fields) => {
        if (err) resp.send("Unable to update.")
        else resp.send(result);
    })
});

app.delete('/:id', (req, resp) => {
    const data = [req.params.id];
    conn.query("delete from course where id=?", data, (err, result, fields) => {
        if (err) resp.send("Unable to delete.")
        else resp.send(result);
    });
});

app.listen(3060);