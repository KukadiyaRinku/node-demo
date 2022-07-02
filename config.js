const sql = require('mysql');

const conn = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'courses'
});

conn.connect((err) => {
    if (err)
        console.log("Error in connection...");
});

module.exports = conn;