const mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "a_frikha",
  password: "root",
  database: "txorpibuy"
});

/* Connect to sql */
con.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

let buy_db = {};

buy_db.all = () => {
    return new Promise ((resolve, reject) => {
        con.query('SELECT * FROM ad_infos', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

buy_db.specific = (request, values) => {
    return new Promise ((resolve, reject) => {
        con.query(request, values, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

buy_db.one = () => {
    return new Promise ((resolve, reject) => {
        con.query("Select");
        if (err) {
            return reject(err);
        }
        return resolve(results);
    });
}

module.exports = buy_db;