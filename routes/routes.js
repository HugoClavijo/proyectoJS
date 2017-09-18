var express= require('express');
var router = express.Router();
var passport = require('passport');
var controllers = require('.././controllers')
var AuthMiddleware =require('.././middleware/auth');


// router.get('/register', function (req, res, next) {
//      res.render('register');
//  });
 
//  router.get('/login', function (req, res, next) {
//      res.render('login');
//  });
 
//  router.get('/inicio', function (req, res, next) {
//      res.render('inicio');
//  }); 
 
/*Get home page*/

// router.get('/', function (req, res, next) {
//     res.render('user');
// });

    //ahora hacemos uso de un controlador
    //1ro va la ruta, 2.luego el controlador.seguido del nombre del controlador.Seguido del nombre de la funcion
    router.get('/', AuthMiddleware.isLogged, controllers.HomeController.index);
    //A todas las urls protegidas le metemos el middleware
    
    
    router.get('/auth/signup',controllers.UserController.getSignUp);
    router.post('/auth/signup',controllers.UserController.postSignUp);
    router.get('/auth/signin',controllers.UserController.getSignIn);
    router.post('/auth/signin', passport.authenticate('local',{
        successRedirect: '/',
        failureRedirect: '/auth/signin',
        failureFlash: true
    }));
    router.get('/auth/logout', controllers.UserController.logout);
    
     //router.get('/inicio',controllers.HomeController.inicio);
     router.get('/combo/:username',controllers.MydrawController.getCombo);
     router.get('/mydraws/:username/:title',controllers.MydrawController.getMydraw);
     router.put('/mydraws/:username/:title',controllers.MydrawController.putMydraw);
     router.post('/mydraws',controllers.MydrawController.postMydraw);
     router.delete('/mydraws/:username/:title',controllers.MydrawController.deleteMydraw);
     
    //router.get('/diagramas:nombre',controllers.DiagramasController.getDiagrama);
    //router.post('/diagramas',controllers.DiagramasController.postDiagrama);
    //router.delete('/diagramas/:nombre',controllers.DiagramasController.deleteDiagrama);
    
    //router.get('/figuras',controllers.FigurasController.getFigura);
    //router.post('/figuras',controllers.FigurasController.postFigura);
    //router.delete('/figuras/:nombre',controllers.FigurasController.deleteFigura);

module.exports = router;