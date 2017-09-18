var mysql = require('mysql');
var bcrypt = require('bcryptjs');



module.exports = {
    
    // index: function(req,res,next){
    //     res.render('login'); 
    // },
    
    index: function(req,res,next){
        res.render('inicio',{
            isAuthenticated : req.isAuthenticated(),
            user : req.user
            
        }); 
      
    },
    
    inicio: function(req,res,next){
        res.render('inicio',{
            isAuthenticated : req.isAuthenticated(),
            user : req.user
            
        }); 
      
    }
    
}