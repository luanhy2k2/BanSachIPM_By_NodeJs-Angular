const db = require('../../config/db');
const productDetailRepository = {
    getComment(id, callback){
        const sql = 'Call getComment(?)';
        db.query(sql, [id], (err, [results]) =>{
            callback(err, results)
        })
    },
    GetSanphamById: function ( id, callback) {
        const sql = 'CALL GetSanphamById(?)';
        db.query(sql, [id], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },
    GetSanphamByTg: function ( id, sl, callback) {
        const sql = 'CALL GetSanphamByTg(?, ?)';
        db.query(sql, [id, sl], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },
    getReplyComment(id, callback){
        const sql = 'Call getReplyComment(?)';
        db.query(sql, [id], (err, [results]) =>{
            callback(err, results)
        })
    },
    addComment(id, content, us_id, callback){
        const sql = 'Call addComment(?, ?,?)';
        db.query(sql, [id, content, us_id], (err, results) =>{
            callback(err, results)
        })
    },
    addReplyComment(id, content, us_id, callback){
        const sql = 'Call addReplyComment(?, ?,?)';
        db.query(sql, [id, content, us_id], (err, results) =>{
            callback(err, results)
        })
    },
    GetSanphamById: function ( id, callback) {
        const sql = 'CALL GetSanphamById(?)';
        db.query(sql, [id], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },
    GetSanphamByTg: function ( id, sl, callback) {
        const sql = 'CALL GetSanphamByTg(?, ?)';
        db.query(sql, [id, sl], function (error, [results]) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },
}
module.exports = productDetailRepository