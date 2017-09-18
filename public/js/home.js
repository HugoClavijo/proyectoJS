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
    //username = $("#nombreuser").attr('value');
    //$('#titulodiagrama').text("Diagrama de "+$("#nombreuser").attr('value'));
    //title = $('#titulodiagrama').text();
    cargarMydraws();
}



function cargarMydraws(){
       $.ajax({
    type: "GET",
    url: '/mydraws',
    dataType: "json",
    success: function(res) {
        res_data = JSON.parse(res);
        for(var x in res_data){
            //res_data[x].users_username;
            //res_data[x].title
            $("#draws").append('<li><a href="/inicio">'+res_data[x].title+'</a></li>');
        }
        //console.log(res_data[0].model);
        //myDiagram.model = go.Model.fromJson(newStr);
        }
    
    });
     
}

function guardarMydraws(){
                $.ajax({
            url: '/mydraws',
            type: 'POST',
            data: {
                arr, username, title
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

