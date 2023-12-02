const myService = require('../services/aS');

const myController = {
    myFunction: (req, res) => {
        // Handle logic here
        res.send('Hello from controller!');
    },
    all: (req, res) => {
        myService.getAllData((err, results) => {
            if (err) {
                console.error('Error executing query: ' + err.stack);
                return res.status(500).send('Database error');
            }
            res.json(results);
        });
    }
};

module.exports = myController;
