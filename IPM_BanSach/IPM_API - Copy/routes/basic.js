var express = require('express');

const db = require('../config/database');
// const BranchRepository = require('../src/respositories/BranchRepository')
// const ress = new BranchRepository();
var route = express()
route.get('/', function(req, res){
    res.setEncoding('hello basic');
});
route.get('/obj', function(req, res){
    var m = ['buoi','chanh'];
    res.json(m);
});
route.get('/mobj', function(req, res){
    var obj = [
        {'id': 1, 'name': 'buoi'},
        {'id': 2, 'name': 'buoi'},
        {'id': 3, 'name': 'cam'}
    ]
    res.json(obj)
});
route.get('/tong/:n', function(req,res){
    var n = req.params.n;
    var tong = 0;
    for(i =0; i<=n; i++){
        tong+=i;
    }
    res.send('Tong cua 1..n ='+ tong);
});
route.get('/ptb1/:a/:b', function(req,res){
    var a = req.params.a;
    var b = req.params.b;
    if(a==0){
        if(b == 0){
            res.send('pt vo so nghiem');
        }
        else{
            res.send('pt vo nghiem')
        }
    }
    else{
        var x = -b/a;
        res.send('pt co nghiem x = ' + x);
    }
})
// route.get('/categories', function(req, res){
//      res.send(ress.GetAllLoaiSp());
// })
    
  
route.get('/ptb2/:a/:b/:c', function(req,res){
    var a = req.params.a;
    var b = req.params.b;
    var c = req.params.c;
    var delta = b*b - 4*a*c;
    if(delta < 0){
        res.send('pt khong co nghiem');
    }
    else if(delta == 0){
        var x = -b/2*a;
        res.send('phuong trinh co 1 nghiem kep x = '+ x );
    }
    else if(delta > 0){
        var x1 = (-b+Math.sqrt(delta))/2*a;
        var x2 = (-b -Math.sqrt(delta))/2*a;
        res.send('pt co 2 nghiem phan biet x1 = '+x1 +' x2 = ' + x2);
    }
})
route.post('/gptb1', function(req,res){
    var a = req.body.a;
    var b = req.body.b;
    if(a==0){
        if(b == 0){
            res.send('pt vo so nghiem');
        }
        else{
            res.send('pt vo nghiem')
        }
    }
    else{
        var x = -b/a;
        res.send('pt co nghiem x = ' + x);
    }
})
route.post('/gptb2', function(req,res){
    var a = req.body.a;
    var b = req.body.b;
    var c = req.body.c;
    var delta = b*b - 4*a*c;
    if(delta < 0){
        res.send('pt khong co nghiem');
    }
    else if(delta == 0){
        var x = -b/2*a;
        res.send('phuong trinh co 1 nghiem kep x = '+ x );
    }
    else if(delta > 0){
        var x1 = (-b+Math.sqrt(delta))/2*a;
        var x2 = (-b -Math.sqrt(delta))/2*a;
        res.send('pt co 2 nghiem phan biet x1 = '+x1 +' x2 = ' + x2);
    }
})



var path = require('path');
var public = path.join(__dirname,'../public');

route.post('/upload',(req,res)=>{
    var filepath; //lay ve duong dan
    var fileupload;
    console.log(res.files);
    if(!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('ko co file upload');
    }
    fileupload = req.files.fileanh;
    filepath = public+'/uploads/'+fileupload.name;
    console.log(filepath);
    fileupload.mv(filepath,(err)=>{
        if(err) res.status(500).send('loi upload file');
        res.status(200).send('upload thanh cong');
    })
})
module.exports = route;