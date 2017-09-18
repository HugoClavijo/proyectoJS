var mysql = require('mysql');
var bcrypt = require('bcryptjs');


module.exports = {
    
    getMydraw: function(req,res,next){
       var id = req.params.username;
        var id2 = req.params.title;
  

            var config = require('.././database/config');
         
            var db = mysql.createConnection(config);
            db.connect();
             var ret = [];
            var queryString = "select * from flowcharts  WHERE users_username = ? AND title = ?";
            
            db.query(queryString, [id, id2], function(err,rows,fields){
                if(err) throw err;
                // return res.send(rows);
                //console.log(rows)
                 ret = JSON.stringify(rows);
                 //res.send();
                 res.json(ret);
                 //console.log(ret);
                db.end();
                
            });
    },
    
    
    postMydraw: function(req,res,next){
    var obj = req.body.objs;
                    
            res.json({ success: true });
  

            var config = require('.././database/config');
         
            var db = mysql.createConnection(config);
            db.connect();
            
            var queryString = "insert into flowcharts(title,users_username, model, version) values('"+req.body.title+"', '"+ req.body.username +"', '"+ obj +"', 1)";
            
            db.query(queryString , function(err,rows,fields){
                if(err) throw err;
            
                db.end();
                
            });
    },
    
    
    deleteMydraw: function(req,res,next){
        
        var id = req.params.username;
        var id2 = req.params.title;
        
            res.json({ success: true });
  

            var config = require('.././database/config');
         
            var db = mysql.createConnection(config);
            db.connect();
        
            db.query('DELETE FROM flowcharts WHERE users_username = ? AND title = ?', [id, id2], function(err,rows,fields){
                if(err) throw err;
            
                db.end();
                
            });
    },
 
     getCombo: function(req,res,next){
         
           var id = req.params.username;
            // id2 = req.params.title;
        
          var config = require('.././database/config');
         
            var db = mysql.createConnection(config);
            db.connect();
             var ret = [];
            var queryString = "select * from flowcharts  WHERE users_username = ?";
            
            db.query(queryString, [id], function(err,rows,fields){
                if(err) throw err;
                // return res.send(rows);
                //console.log(rows)
                 ret = JSON.stringify(rows);
                 //res.send();
                 res.json(ret);
                 //console.log(ret);
                db.end();
                
            });
      
    },
    
    putMydraw: function(req,res,next){
        var id1 = req.params.username;
        var id2 = req.params.title;
        var obj = req.body.objs

            var config = require('.././database/config');
         
            var db = mysql.createConnection(config);
            db.connect();
             //var ret = [];
            var queryString = "update flowcharts SET model = ?  WHERE users_username = ? AND title = ?";
            
            db.query(queryString, [obj,id1, id2], function(err,rows,fields){
                if(err) throw err;
                // return res.send(rows);
                //console.log(req.body.objs)
                 //ret = JSON.stringify(rows);
                 //res.send();
                 //res.json(ret);
                 //console.log(ret);
                db.end();
                
            });
      
    }
};

