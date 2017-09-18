var mysql = require('mysql');
var bcrypt = require('bcryptjs');


module.exports = {
 
     /*getDiagrama: function(req,res,next){
        //return res.render('users/signup');
        var id = req.params.nombre;
        var config = require('.././database/config');
         
            var db = mysql.createConnection(config);
            db.connect();
            var ret = [];
            db.query('SELECT * FROM diagramas WHERE usuario = ?', [id], function(err,rows,fields){
                if(err) throw err;
                //console.log(rows);
                //res.send(rows);
                //res.json(rows);
                 ret = JSON.stringify(rows);
                 res.json(ret);
                db.end();
            });
            
    },
        
    postDiagrama: function(req,res,next){
    //console.log(req.body.figurasArr[0]);
    res.json({ success: true });
        var i=0;
        
            var config = require('.././database/config');
         
            var db = mysql.createConnection(config);
            db.connect();
            
            for (var f of req.body.diagramaArr){
            
                var diagrama = {
                diagrama_id: null,   
                titulo:  req.body.diagramaArr[i].titulo,
                version: req.body.diagramaArr[i].version,
                usuario: req.body.diagramaArr[i].usuario,
                };
            i++;
            db.query('INSERT INTO diagramas SET ?', diagrama, function(err,rows,fields){
                if(err) throw err;
            
                //db.end();
                
            });
            
        }
            db.end();
    },

         deleteDiagrama: function(req,res,next){
            var id = req.params.nombre;
            
            res.json({ success: true });
  

            var config = require('.././database/config');
         
            var db = mysql.createConnection(config);
            db.connect();
        
            db.query('DELETE FROM diagramas WHERE usuario = ?', [id], function(err,rows,fields){
                if(err) throw err;
            
                db.end();
                
            });
        
    },*/
    
    
    
    
    
};