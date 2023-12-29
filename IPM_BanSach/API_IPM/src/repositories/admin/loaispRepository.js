const db = require('../../config/db');
const LoaiSpRespository = {
     getAllData: (callback) => {
         db.query('CALL GetTheLoaiAll', (err, [results]) => {
            callback(err, results);
        });
    },
    GetLoaiSpById (id,callback){
        db.query('CALL GetLoaiSpById(?)', [id], (err, [results]) => {
            callback(err, results[0]);
        });
    },
    CreateLoaiSp(danhmuc_id, name, callback){
        db.query('CALL CreateLoaiSp(?, ?)', [danhmuc_id,name], (err, results) => {
            callback(err, results);
        });
    },
    UpdateLoaiSp(loaisp, callback){
        db.query('CALL UpdateLoaiSp(?, ?,?)', [loaisp.loai_id, loaisp.danhmuc_id, loaisp.loai_name], (err, results) => {
            callback(err, results);
        });
    },
    DeleteLoaiSp(id, callback){
        db.query('CALL DeleteLoaiSp(?)', [id], (err, results) => {
            callback(err, results);
        });
    },
    

};

module.exports = LoaiSpRespository;
