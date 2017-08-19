$( init );
 
function init() {
   $(document).ready( function() 
{
  
  if(localStorage.getItem('miDiagrama')!=null){
      
      
    var obj = JSON.parse(localStorage.getItem('miDiagrama'));
   console.log(obj);
   console.log(obj.elemento);
   
    console.log('mostrar diagrama');
    //  $(".jumbotron").append("<h1>Aqui</h1>");
    //  $(".jumbotron").append(obj);   <div class="col-md-1">
    var obj2 =JSON.parse(obj);
    console.log('===>'+obj2.data.elemento[0].html);
    // $("#elements-container").append(obj2);
    var id = obj2.data.elemento.length;
    
        for (var i = 0; i < id; i++){
            console.log('===>'+obj2.data.elemento[i].html);
            // $("#elements-container").append('<div class="col-md-1">');
            $("#elements-container").append('<div class="col-md-1">'+obj2.data.elemento[i].html+'</div>');
            // $("#elements-container").append('</div>');
        }     
      
      
  }
  
  
  
  
  
  
  
  
} );
    
    
    
    
}
