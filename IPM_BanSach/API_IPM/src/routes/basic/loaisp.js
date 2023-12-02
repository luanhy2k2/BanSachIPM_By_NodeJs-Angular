var router = require('express')();
var db = require('../../config/db');
router.get('/getall', function(req,res){
 var query = "select * from loaisp"
 db.query(query,function(err,results){
    if(err){
        res.send(err);
    }
    else{
        res.json(results);
    }
 })
});
router.get('/get-once/:id',function(req,res){
    var query = "select * from loaisp where loaisp.loai_id = ?"
    var id = req.params.id;
    db.query(query,[id],function(err,results){
       if(err){
           res.send(err);
       }
       else{
           res.json(results);
       }
    })
})
router.post('/edit',function(req,res){
    var id = req.body.loai_id;
    var name = req.body.loai_name;
    var danhmucId = req.body.danhmuc_id;
    var query = 'Call UpdateLoaiSp(?,?,?)';
    
    db.query(query,[id,name,danhmucId], (err,results)=>{
        if(err){
            res.status(500).send('err:' + err)
        }
        else{
            res.status(200).json(results)
        }
    })
})
router.post('/add',function(req,res){
   
    var name = req.body.loai_name;
    var danhmucId = req.body.danhmuc_id;
    var query = 'Call CreateLoaiSp(?,?)';
    
    db.query(query,[name,danhmucId], (err,results)=>{
        if(err){
            res.status(500).send('err:' + err)
        }
        else{
            res.status(200).json(results)
        }
    })
})
router.delete('/remove/:id',function(req,res){
    var id = req.params.id;
    
    var query = 'Call DeleteLoaiSp(?)';
    
    db.query(query,[id], (err,results)=>{
        if(err){
            res.status(500).send('err:' + err)
        }
        else{
            res.status(200).json(results)
        }
    })
})

module.exports = router;