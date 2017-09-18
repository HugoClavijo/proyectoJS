var mysql = require('mysql');
var bcrypt = require('bcryptjs');


module.exports = {
 
    
    postDraw: function(req,res,next){
        //var data = '{"class":"go.GraphLinksModel","linkFromPortIdProperty":"fromPort","linkToPortIdProperty":"toPort","nodeDataArray":[],"linkDataArray":[]}';
    //console.log(req.query);
   // console.log("insert into flowcharts(title,users_username, model) values('"+req.body.title+"', '"+ req.body.username +"', '"+ data +"')");
   
    //console.log(req.body.arr[0]);
    //console.log(req.body.username);
    //console.log(req.body.title);
    
   /*pool.getConnection(function(error,conn){
       
       var queryString = "insert into flowcharts(title,users_username, model) values('"+req.body.title+"', '"+ req.query.user.nombre +"', '"+ data +"')";
       
       conn.query(queryString,function(error,results){
           if(error)
               {
                   throw error;
               }
           else 
               {
                 res.redirect('draw?title='+req.body.title+'&username='+req.query.username);
               }
           
       });
    
       conn.release();
   });*/ 
   
    },
    

    
};