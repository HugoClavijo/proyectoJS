//Es aquel que nos permite  solo tener acceso a  cierta pagina una vez que hemos ingresado con un usuario de BD
module.exports={
    
    isLogged: function(req,res,next){
        if(req.isAuthenticated()){
            next();
            
        }else{
            res.redirect('/auth/signin');
        }
    }
    
    
}