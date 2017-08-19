//------------------------------------------------------------------------------------------------------------------------------------------------------

$( init );
 
function init() {

    $('#add-ini').on('click', function () {
     var id = $('#elements-container').children().length + 1;
   $('#elements-container').append('<div class="col-md-1"><div id="'+id+'" class="editable oval">This is a new element</div></div>');
        
        $('div.editable').dblclick('click', function() {
    editEl = $(this);
    $(editEl).addClass('editing');
    $('#p-editor').show();
    $('#p-editor textarea').val($(editEl).html());
        });
        
        
        // When they click the "Done Editing" button, close the editor
        $('.color').click(function() {
        var colors = ["#537de0","#53e0b1","#990099"];                
        var rand = Math.floor(Math.random()*colors.length);           
         $(editEl).css("background-color", colors[rand]);
        });
        
        // When they click the "Done Editing" button, close the editor
        $('.done').click(function() {
        $('#p-editor, #div-editor').hide();
        $(editEl).removeClass('editing');
        });

        // Delete the clicked div element
        $('.delete').click(function() {
        $(editEl).remove();
        $('#p-editor, #div-editor').hide();
        });

// Update the clicked div element when they click the "Save" button
        $('.save').click(function() {
        $(editEl).html($(this).parent().find('textarea').val());
        });
        
        $('div.editable').draggable({
                        appendTo: '.jumbotron',
                        containment: '.jumbotron',
                         stop: handleDragStop,
                        });
         $('#'+id).resizable();  
  });
    
 
//------------------------------------------------------------------------------------------------------------------------------------------------------ 
    
     $('#add-des').on('click', function () {
     var id = $('#elements-container').children().length + 1;
   $('#elements-container').append('<div class="col-md-1"><div id="'+id+'" class="editable rombo">This is a new element</div></div>');
        
        $('div.editable').dblclick('click', function() {
    editEl = $(this);
    $(editEl).addClass('editing');
    $('#p-editor').show();
    $('#p-editor textarea').val($(editEl).html());
        });
        
       // When they click the "Done Editing" button, close the editor
        $('.color').click(function() {
        var colors = ["#537de0","#53e0b1","#990099"];                
        var rand = Math.floor(Math.random()*colors.length);           
         $(editEl).css("background-color", colors[rand]);
        });
        
        // When they click the "Done Editing" button, close the editor
        $('.done').click(function() {
        $('#p-editor, #div-editor').hide();
        $(editEl).removeClass('editing');
        });

        // Delete the clicked div element
        $('.delete').click(function() {
        $(editEl).remove();
        $('#p-editor, #div-editor').hide();
        });

// Update the clicked div element when they click the "Save" button
        $('.save').click(function() {
        $(editEl).html($(this).parent().find('textarea').val());
        });
        
        $('div.editable').draggable({
                        appendTo: '.jumbotron',
                        containment: '.jumbotron',
                         stop: handleDragStop,
                        });
         $('#'+id).resizable();  
  });
    
    
//------------------------------------------------------------------------------------------------------------------------------------------------------ 
    
    
$('#add-pro').on('click', function () {
     var id = $('#elements-container').children().length + 1;
   $('#elements-container').append('<div class="col-md-1"><div id="'+id+'" class="editable rectangulo">This is a new element</div></div>');
        
        $('div.editable').dblclick('click', function() {
    editEl = $(this);
    $(editEl).addClass('editing');
    $('#p-editor').show();
    $('#p-editor textarea').val($(editEl).html());
        });
        
        
        // When they click the "Done Editing" button, close the editor
        $('.color').click(function() {
        var colors = ["#537de0","#53e0b1","#990099"];                
        var rand = Math.floor(Math.random()*colors.length);           
         $(editEl).css("background-color", colors[rand]);
        });
        
        // When they click the "Done Editing" button, close the editor
        $('.done').click(function() {
        $('#p-editor, #div-editor').hide();
        $(editEl).removeClass('editing');
        });

        // Delete the clicked div element
        $('.delete').click(function() {
        $(editEl).remove();
        $('#p-editor, #div-editor').hide();
        });

// Update the clicked div element when they click the "Save" button
        $('.save').click(function() {
        $(editEl).html($(this).parent().find('textarea').val());
        });
        
        $('div.editable').draggable({
                        appendTo: '.jumbotron',
                        containment: '.jumbotron',
                         stop: handleDragStop,
                        });
         $('#'+id).resizable();  
  });
    
    
//------------------------------------------------------------------------------------------------------------------------------------------------------ 
    
    
$('#add-en').on('click', function () {
     var id = $('#elements-container').children().length + 1;
   $('#elements-container').append('<div class="col-md-1"><div id="'+id+'" class="editable rectangulo paralelogramo">This is a new element</div></div>');
        
        $('div.editable').dblclick('click', function() {
    editEl = $(this);
    $(editEl).addClass('editing');
    $('#p-editor').show();
    $('#p-editor textarea').val($(editEl).html());
        });
        
          // When they click the "Done Editing" button, close the editor
        $('.color').click(function() {
        var colors = ["#537de0","#53e0b1","#990099"];                
        var rand = Math.floor(Math.random()*colors.length);           
         $(editEl).css("background-color", colors[rand]);
        });
        
        // When they click the "Done Editing" button, close the editor
        $('.done').click(function() {
        $('#p-editor, #div-editor').hide();
        $(editEl).removeClass('editing');
        });

        // Delete the clicked div element
        $('.delete').click(function() {
        $(editEl).remove();
        $('#p-editor, #div-editor').hide();
        });

// Update the clicked div element when they click the "Save" button
        $('.save').click(function() {
        $(editEl).html($(this).parent().find('textarea').val());
        });
        
        $('div.editable').draggable({
                        appendTo: '.jumbotron',
                        containment: '.jumbotron',
                         stop: handleDragStop,
                        });
        
        $('div.editable').resizable();  
  });
    
    
//------------------------------------------------------------------------------------------------------------------------------------------------------     

 $('#add-up').on('click', function () {
     var id = $('#elements-container').children().length + 1;
   $('#elements-container').append('<div class="col-md-1"><div id="'+id+'" class="editables line"></div></div>');
        
        $('#'+id).draggable({
                        appendTo: '.jumbotron',
                        containment: '.jumbotron',
                         stop: handleDragStop,
                        });
        
        $('#'+id).dblclick('click', function() {
        editEl = $(this);
        $('#c-editor').show();
        });
        
// When they click the "Done Editing" button, close the editor
        $('.done').click(function() {
        $('#p-editor, #c-editor').hide();
        });

        // Delete the clicked div element
        $('.delete').click(function() {
         $(editEl).remove();   
        $('#p-editor, #c-editor').hide();
        });
        
        var rotation = 0;

        jQuery.fn.rotate = function(degrees) {
    $('#'+id).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    };

        $('.rotar').click(function() {
    rotation += 5;
    $(this).rotate(rotation);
    });
      
      //$('#'+id).resizable(); 
      
       $("#"+id).resizable({
    handles: 's',
    stop: function(event, ui) {
        $(this).css("width", '');
   }
   
    });
        
  });
    
    
    
//------------------------------------------------------------------------------------------------------------------------------------------------------  
    
$('#add-2').on('click', function () {
     var id = $('#elements-container').children().length + 1;
   $('#elements-container').append('<div class="col-md-1"><div id="'+id+'" class="editables line2"></div></div>');
        
        $('#'+id).draggable({
                        appendTo: '.jumbotron',
                        containment: '.jumbotron',
                         stop: handleDragStop,
                        });
        
        $('#'+id).dblclick('click', function() {
        editEl = $(this);    
        $('#c-editor').show();
        });
        
// When they click the "Done Editing" button, close the editor
        $('.done').click(function() {
        $('#p-editor, #c-editor').hide();
        });

        // Delete the clicked div element
        $('.delete').click(function() {
        $(editEl).remove();   
        $('#p-editor, #c-editor').hide();
        });
        
        var rotation = 0;

        jQuery.fn.rotate = function(degrees) {
    $('#'+id).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    };

        $('.rotar').click(function() {
    rotation += 5;
    $(this).rotate(rotation);
    });
      
      //$('#'+id).resizable(); 
      
        $("#"+id).resizable({
    handles: 's',
    stop: function(event, ui) {
        $(this).css("width", '');
   }
   
    });
        
  });
    
    
//------------------------------------------------------------------------------------------------------------------------------------------------------
    
$('#add-3').on('click', function () {
     var id = $('#elements-container').children().length + 1;
   $('#elements-container').append('<div class="col-md-1"><div id="'+id+'" class="editables line3"></div></div>');
        
        $('#'+id).draggable({
                        appendTo: '.jumbotron',
                        containment: '.jumbotron',
                         stop: handleDragStop,
                        });
        
        $('#'+id).dblclick('click', function() {
        editEl = $(this);    
        $('#c-editor').show();
        });
        
// When they click the "Done Editing" button, close the editor
        $('.done').click(function() {
        $('#p-editor, #c-editor').hide();
        });

        // Delete the clicked div element
        $('.delete').click(function() {
        $(editEl).remove();   
        $('#p-editor, #c-editor').hide();
        });
        
        var rotation = 0;

        jQuery.fn.rotate = function(degrees) {
    $('#'+id).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    };

        $('.rotar').click(function() {
    rotation += 5;
    $(this).rotate(rotation);
    });
      
      //$('#'+id).resizable();  
         $("#"+id).resizable({
    handles: 's',
    stop: function(event, ui) {
        $(this).css("width", '');
   }
   
    });
    
  });
    
    
//------------------------------------------------------------------------------------------------------------------------------------------------------    
    
    
$('#add-4').on('click', function () {
     var id = $('#elements-container').children().length + 1;
   $('#elements-container').append('<div class="col-md-1"><div id="'+id+'" class="editables line4"></div></div>');
        
        $('#'+id).draggable({
                        appendTo: '.jumbotron',
                        containment: '.jumbotron',
                         stop: handleDragStop,
                        });
        
        $('#'+id).dblclick('click', function() {
        editEl = $(this);    
        $('#c-editor').show();
        });
        
// When they click the "Done Editing" button, close the editor
        $('.done').click(function() {
        $('#p-editor, #c-editor').hide();
        });

        // Delete the clicked div element
        $('.delete').click(function() {
        $(editEl).remove();   
        $('#p-editor, #c-editor').hide();
        });
        
        var rotation = 0;

        jQuery.fn.rotate = function(degrees) {
    $('#'+id).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    };

        $('.rotar').click(function() {
    rotation += 5;
    $(this).rotate(rotation);
    });
      
      //$('#'+id).resizable();  
         $("#"+id).resizable({
    handles: 's',
    stop: function(event, ui) {
        $(this).css("width", '');
   }
   
    });
    
  });
    
    
//------------------------------------------------------------------------------------------------------------------------------------------------------    
        
    
     
var arrayElement = ['{"data":{']; 
  $("#guardar").click(function() {
    var id = $('#elements-container').children().length 
    // var element = document.getElementById(id);
    // var html = element.outerHTML;       
    // var data = { html: html }; 
    // var json = JSON.stringify(data);
    // console.log(json); // shows json object
    
    
  
  arrayElement = arrayElement+'"elemento":[';
    
    for (var i = 1; i < id+1; i++){
    // alert("hola"+i);
    // console.log(document.getElementById(i));
    
    if(i>1 && i< id+1){
        arrayElement=arrayElement+',';
    }
     
    var element = document.getElementById(i);
    var html = element.outerHTML;       
    var data = { html: html }; 
    var json = JSON.stringify(data);
    arrayElement=arrayElement+json;
   
    //  console.log(document.getElementById(i));
    }
    arrayElement = arrayElement+']';
    arrayElement = arrayElement+'}}';
     console.log(arrayElement);
    
    // console.log(document.getElementById(1));
    // console.log(document.getElementById(2));
    // console.log(document.getElementById(3));
    // console.log(document.getElementById(4));
    console.log("guardar");
    localStorage.setItem('miDiagrama', JSON.stringify(arrayElement));
    var obj = JSON.parse(localStorage.getItem('miDiagrama'));
    console.log(obj);
    
  });
 
 
 
 
   var nombrediagrama; 
   var versiondiagrama; 
  //------------------------------------------------------------------------------------------------------------------------------------------------------ 
  $("#mostrarDiagrama").click(function() {
//   nombrediagrama = $("#nombreusuario").val();
//   console.log(nombrediagrama);
   
//   versiondiagrama = $("#version").val();
//   console.log(versiondiagrama);
   
   
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
     
  });





//------------------------------------------------------------------------------------------------------------------------------------------------------ 
    $("#clear").click(function() {
    window.localStorage.clear();
    window.location.reload();
  });
  
  //------------------------------------------------------------------------------------------------------------------------------------------------------ 
  $("#exportar").click(function() {
    var id = $('#elements-container').children().length 
var arrayElement = ['{"data":{']; 
   nombrediagrama = $("#nombreusuario").val();
   console.log(nombrediagrama);
   
   versiondiagrama = $("#version").val();
   console.log(versiondiagrama);
   
  arrayElement = arrayElement+'"usuario":"'+nombrediagrama+'",';
  arrayElement = arrayElement+'"version":"'+versiondiagrama+'",';
  arrayElement = arrayElement+'"elemento":[';
    
    for (var i = 1; i < id+1; i++){

    if(i>1 && i< id+1){
        arrayElement=arrayElement+',';
    }
     
    var element = document.getElementById(i);
    var html = element.outerHTML;       
    var data = { html: html }; 
    var json = JSON.stringify(data);
    arrayElement=arrayElement+json;
   
    //  console.log(document.getElementById(i));
    }
    arrayElement = arrayElement+']';
    arrayElement = arrayElement+'}}';
     console.log(arrayElement);
    
    // console.log(document.getElementById(1));
    // console.log(document.getElementById(2));
    // console.log(document.getElementById(3));
    // console.log(document.getElementById(4));
    console.log("guardar");
    localStorage.setItem('miDiagrama', JSON.stringify(arrayElement));
    var obj = JSON.parse(localStorage.getItem('miDiagrama'));
    console.log(obj);
   
   
   
        var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.parse(localStorage.getItem('miDiagrama')));
        // what to return in order to show download window?

    this.setAttribute("href", "data:"+data);
    this.setAttribute("download", "data.json");
  }); 
}


function handleDragStop( event, ui ) {
  var offsetXPos = parseInt( ui.offset.left );
  var offsetYPos = parseInt( ui.offset.top );
  alert( "Drag stopped!\n\nOffset: (" + offsetXPos + ", " + offsetYPos + ")\n");
}


function exportJson(el) {


    // var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(localStorage.getItem('miDiagrama')));
        // what to return in order to show download window?

    // el.setAttribute("href", "data:"+data);
    // el.setAttribute("download", "data.json");
    
}

