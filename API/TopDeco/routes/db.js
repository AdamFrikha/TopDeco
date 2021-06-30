const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "valoon",
    password: "root",
    database: "top_deco"
});

/* Connect to sql */
con.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

let my_db = {};

my_db.all = () => {
    return new Promise ((resolve, reject) => {
        con.query('SELECT * FROM client', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

my_db.specific = (request) => {
    return new Promise ((resolve, reject) => {
        con.query(request, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

my_db.one = () => {
    return new Promise ((resolve, reject) => {
        con.query("Select");
        if (err) {
            return reject(err);
        }
        return resolve(results);
    });
}

module.exports = my_db;