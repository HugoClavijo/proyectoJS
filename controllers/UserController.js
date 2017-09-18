var mysql = require('mysql');
var bcrypt = require('bcryptjs');


module.exports = {
 
    getSignUp: function(req,res,next){
        return res.render('users/signup');
    },
    
    
    
    postSignUp: function(req,res,next){
        var salt = bcrypt.genSaltSync(10);
        var password = bcrypt.hashSync(req.body.password, salt);
        
        var user = {
            name : req.body.name,
            email : req.body.email,
            password : password
        };
        
        var config = require('.././database/config');
         
        var db = mysql.createConnection(config);
        db.connect();
        
        db.query('INSERT INTO t_user SET ?', user, function(err,rows,fields){
            if(err) throw err;
            
            db.end();
        
        });
        //info es el nombre de la variable
        req.flash('info','Se ha registrado correctamente puede iniciar sesion');
        return res.redirect('/auth/signin');
    },
    
    getSignIn: function(req,res,next){
        return res.render('users/signin',{message: req.flash('info'),authmessage: req.flash('authmessage')});
        // en la vista vamos a llamar message, e info es el nombre de la variable
    },
    
    logout : function(req,res,next){//primero se crea esto y luego se va a rutas y se crea la ruta
        req.logout();
        res.redirect('/auth/signin');
        //nota: el que direcciona es el res no el req
    }
    
    
    
    
};