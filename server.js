var express  = require('express'),
    path     = require('path'),
    bodyParser = require('body-parser'),
    app = express(),
    expressValidator = require('express-validator');
    


var exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/*Set EJS template Engine*/
/*app.set('views','./views');
app.set('view engine','ejs');*/

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true })); //support x-www-form-urlencoded
app.use(bodyParser.json());
app.use(expressValidator());


var routes = require ('./routes/routes')


//modulos de mensaje de exito en registro
//npm install cookie-parser
//npm install express-session
//npm install connect-flash
var cookieParser = require('cookie-parser');
var  flash = require('connect-flash');//[para el mensaje en el login]
var session = require('express-session');
app.use(cookieParser());
app.use(session({
    secret:'secret', 
    resave: false,
    saveUnitialized:false
}));
app.use(flash());


//pasport para  redireccionar con el login -------
var passport = require('passport');
require('./passport/passport')(passport);

app.use(passport.initialize());
app.use(passport.session());


//Estrategia de login-------------
//npm install passport
//npm install passport-local  //integra login inclusive fb y tw 



app.use('/', routes);
// app.get('/', function (req, res) {
//     res.render('user');
// });

//RESTful route
var router = express.Router();


/*------------------------------------------------------
*  This is router middleware,invoked everytime
*  we hit url /api and anything after /api
*  like /api/user , /api/user/7
*  we can use this for doing validation,authetication
*  for every route started with /api
--------------------------------------------------------*/
router.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});


//start Server
var server = app.listen(8081,function(){

   console.log("Listening to port %s",server.address().port);

});


//------------------------------------------------------------------------------------------------------------------------------------------------------ 

