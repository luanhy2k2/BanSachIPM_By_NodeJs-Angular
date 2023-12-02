const myRepository = require('../repositories/a');

const myService = {
    getAllData: (callback) => {
        myRepository.getAllData((err, results) => {
            callback(err, results);
        });
    }
};

module.exports = myService;
