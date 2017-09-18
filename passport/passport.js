var LocalStrategy = require('passport-local').Strategy;
var mysql = require('mysql');
var bcrypt = require('bcryptjs');


module.exports = function(passport){
    //1 se serializa el objeto
    //2 se deserializa el objeto
    //3 se autentifica
    
    passport.serializeUser(function(user,done){
       done(null,user);
    });
    
    passport.deserializeUser(function(obj,done){
       done(null,obj);
    });
    
    passport.use(new LocalStrategy({
        passReqToCallback: true
    },function(req,email,password,done){
        // console.log(email);
        // return;
        
        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();
        
        db.query('SELECT * FROM t_user WHERE email = ?', email, function(err,rows,fields){
            if(err) throw err;
            
            db.end();
            
            if(rows.length > 0){
                var user = rows[0];
                if(bcrypt.compareSync(password,user.password)){
                    return done(null,{
                        id : user.user_id,
                        nombre : user.name,
                        email : user.email
                    });
                    
                }
            }
            
            return done(null, false,req.flash('authmessage','Email o password incorrecto'));
            
        });
        
    }
    ));
};