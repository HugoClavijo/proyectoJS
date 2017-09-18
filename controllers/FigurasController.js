var mysql = require('mysql');
var bcrypt = require('bcryptjs');


module.exports = {
 
     /*getFigura: function(req,res,next){
        //return res.render('users/signup');
        var config = require('.././database/config');
         
            var db = mysql.createConnection(config);
            db.connect();
            var ret = [];
            db.query('SELECT * FROM figuras', function(err,rows,fields){
                if(err) throw err;
                //console.log(rows);
                //res.send(rows);
                //res.json(rows);
                 ret = JSON.stringify(rows);
                 res.json(ret);
                //db.end();
            });
            
    },
        
    postFigura: function(req,res,next){
    //console.log(req.body.figurasArr[0]);
    res.json({ success: true });
        var i=0;
       
             
            var config = require('.././database/config');
         
            var db = mysql.createConnection(config);
            db.connect();
        
             for (var f of req.body.figurasArr){
            
                var figura = {
                figura_id: null,   
                diagrama: req.body.figurasArr[i].diagrama,
                version: req.body.figurasArr[i].version,
                usuario: req.body.figurasArr[i].usuario,
                tipo: req.body.figurasArr[i].tipo,
                colorFondo: req.body.figurasArr[i].colorFondo,
                posx: req.body.figurasArr[i].posx,
                posy: req.body.figurasArr[i].posy,
                texto: req.body.figurasArr[i].texto,
                zindex: req.body.figurasArr[i].zindex,
                };
             i++;
                 
                 
                 db.query('INSERT INTO figuras SET ?', figura, function(err,rows,fields){
                if(err) throw err;
            
               
                
            });
                 
                 
             }
             
            
            db.end();
        
        
    },

         deleteFigura: function(req,res,next){
            var id = req.params.nombre;
            var id2 = req.params.version;
            
            res.json({ success: true });
  

            var config = require('.././database/config');
         
            var db = mysql.createConnection(config);
            db.connect();
        
            db.query('DELETE FROM figuras WHERE usuario = ? AND version = ?', [id, id2] , function(err,rows,fields){
                if(err) throw err;
            
                db.end();
                
            });
        
    },*/
    
};