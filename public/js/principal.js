//------------------------------------------------------------------------------------------------------------------------------------------------------

var flujoContador = 0;
// Arreglos de diagramas
var diagramaArr = [];
// Arreglos de figuras
var figurasArr = [];
//Json de objetos de la base 
var res_data;
var res_data2;
//var versiones = [];
var username;
var title;


$( init );
 
function init() {
    username = $("#nombreuser").attr('value');
    $('#titulodiagrama').text("Diagrama de "+$("#nombreuser").attr('value'));
    //title = $('#titulodiagrama').text();
    cargarCombo();
    //cargarMydraws();
    cargarDraw();
     $( document.body ).on( 'click', '.dropdown-menu li', function( event ) {

      var $target = $( event.currentTarget );
        $('#titulodiagrama').text($target.text());
        title = $('#titulodiagrama').text();
         //cargarMydraws();
         cargarDraw();
      $target.closest( '.btn-group' )
         .find( '[data-bind="label"]' ).text( $target.text() )
            .end()
         .children( '.dropdown-toggle' ).dropdown( 'toggle' );

      return false;

   });
   
   if(localStorage.getItem("flecha") === null ||  localStorage.getItem("flecha") === undefined){
     localStorage.setItem("flecha", "triangle")
   }
   
    if(localStorage.getItem("arrow") === null ||  localStorage.getItem("arrow") === undefined){
     localStorage.setItem("arrow", "chevron")
   }
   
   //console.log(localStorage.getItem("arrow"));
   
   $("#exportar").click(function(e){
        $("#exportar").attr( "download", "elemento.json" );
        this.href = 'data:plain/text,' + '{['+ 'usuario: ' + $("#nombreuser").attr('value') +','+' titulo: '+ $('#titulodiagrama').text()+ ',version:1,' + 'model: [' + document.getElementById("mySavedModel").value;
        });
        
}


function cargarCombo(){
     $.ajax({
    type: "GET",
    url: '/combo/'+$("#nombreuser").attr('value'),
    dataType: "json",
    success: function(res) {
        res_data = JSON.parse(res);
        //console.log(res_data[0].model);
        $(".dropdown-menu").empty();
        for(var x in res_data){
            $(".dropdown-menu").append('<li><a href="#">'+res_data[x].title+'</a></li>');
        }
        
        }
    
    });
}

escape = function (str) {
  return str
    .replace(/[\\]/g, '')
    .replace(/[\/]/g, '')
    .replace(/[\/n]/g, 'n')
    .replace(/[\b]/g, '')
    .replace(/[\f]/g, '')
    .replace(/[\n]/g, 'n')
    .replace(/[\r]/g, '')
    .replace(/[\t]/g, '');
};

function cargarMydraws(){
       $.ajax({
    type: "GET",
    url: '/mydraws/'+$("#nombreuser").attr('value')+'/'+$('#titulodiagrama').text(),
    dataType: "json",
    success: function(res) {
        res_data = JSON.parse(res);
        //var obj = JSON.stringify(res_data[0].model);
        var tmpStr = res_data[0].model
        var newStr = tmpStr.substring(1, tmpStr .length-1);
        document.getElementById("mySavedModel").value = newStr.replace(/\\n/g, "").slice(1, -1);
        
        //console.log(res_data[0].model);
        //for(var x in res_data){
            //$(".dropdown-menu").append('<li><a href="#">'+res_data[x].title+'</a></li>');
        //}
        
         /*for(var x in res_data){
             if(res_data[x].users_username == $("#nombreuser").attr('value') && res_data[x].title == $('#titulodiagrama').text()){
                 var tmpStr = res_data[x].model
        var newStr = tmpStr.substring(1, tmpStr .length-1);
        document.getElementById("mySavedModel").value = newStr.slice(1, -1);
        //myDiagram.model = go.Model.fromJson(newStr);
             }else{
                 var data = '{"class":"go.GraphLinksModel","linkFromPortIdProperty":"fromPort","linkToPortIdProperty":"toPort","nodeDataArray":[],"linkDataArray":[]}';
                 document.getElementById("mySavedModel").value = data;
             }
         }*/
        
        }
    
    });
     
}

function cargarDraw(){
       $.ajax({
    type: "GET",
    url: '/mydraws/'+$("#nombreuser").attr('value')+'/'+$('#titulodiagrama').text(),
    dataType: "json",
    success: function(res) {
        res_data = JSON.parse(res);
        //var obj = JSON.stringify(res_data[0].model);
        var tmpStr = res_data[0].model
        //var newStr = tmpStr.substring(1, tmpStr .length-1);
        document.getElementById("mySavedModel").value = tmpStr;
        
        //console.log(res_data[0].model);
        //for(var x in res_data){
            //$(".dropdown-menu").append('<li><a href="#">'+res_data[x].title+'</a></li>');
        //}
        
         /*for(var x in res_data){
             if(res_data[x].users_username == $("#nombreuser").attr('value') && res_data[x].title == $('#titulodiagrama').text()){
                 var tmpStr = res_data[x].model
        var newStr = tmpStr.substring(1, tmpStr .length-1);
        document.getElementById("mySavedModel").value = newStr.slice(1, -1);
        //myDiagram.model = go.Model.fromJson(newStr);
             }else{
                 var data = '{"class":"go.GraphLinksModel","linkFromPortIdProperty":"fromPort","linkToPortIdProperty":"toPort","nodeDataArray":[],"linkDataArray":[]}';
                 document.getElementById("mySavedModel").value = data;
             }
         }*/
        
        }
    
    });
     
}

function guardarMydraws(){
                $.ajax({
            url: '/mydraws',
            type: 'POST',
            data: {
                objs, username, title
            },
            success: function(data){
                console.log(data);
            }
        });
}

function borrarMydraws(){
       $.ajax({
            url: '/mydraws/'+username+'/'+title,
            type: 'DELETE',
            data: {
                username, title
            },
            success: function(data){
                console.log(data);
            }
        });
}


function guardarDraw(){
                $.ajax({
            url: '/mydraws/'+$("#nombreuser").attr('value')+'/'+$('#titulodiagrama').text(),
            type: 'PUT',
            data: {
                objs, username, title
            },
            success: function(data){
                console.log(data);
            }
        });
}

