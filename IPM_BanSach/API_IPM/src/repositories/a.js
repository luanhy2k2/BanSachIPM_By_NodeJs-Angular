const db = require('../config/db');

const myRepository = {
    getAllData: (callback) => {
        db.query('SELECT * FROM loaisp', (err, results) => {
            callback(err, results);
        });
    }
};

module.exports = myRepository;
