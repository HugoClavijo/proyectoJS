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

$( init );
 
function init() {
    
   $('#titulodiagrama').text("Diagrama de "+$("#nombreuser").attr('value'));
   
    cargarDiagramas(); 
    cargarFiguras();
    
   
//------------------------------------------------------------------------------------------------------------------------------------------------------

    $('#add-ini').on('click', function () {
     var id = $('#elements-container').children().length + 1;
   $('#elements-container').append('<div class="col-md-1"><div id="'+id+'" class="editable oval" value="oval">This is a new element</div></div>');
        
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
   $('#elements-container').append('<div class="col-md-1"><div id="'+id+'" class="editable rombo" value="rombo">This is a new element</div></div>');
        
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
   $('#elements-container').append('<div class="col-md-1"><div id="'+id+'" class="editable rectangulo" value="rectangulo">This is a new element</div></div>');
        
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
   $('#elements-container').append('<div class="col-md-1"><div id="'+id+'" class="editable rectangulo paralelogramo" value="paralelogramo">This is a new element</div></div>');
        
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
   $('#elements-container').append('<div class="col-md-1"><div id="'+id+'" class="editables line" value="line"></div></div>');
        
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
   $('#elements-container').append('<div class="col-md-1"><div id="'+id+'" class="editables line2" value="line2"></div></div>');
        
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
   $('#elements-container').append('<div class="col-md-1"><div id="'+id+'" class="editables line3" value="line3"></div></div>');
        
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
   $('#elements-container').append('<div class="col-md-1"><div id="'+id+'" class="editables line4" value="line4"></div></div>');
        
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
    
    $("#nuevoDiagrama").click(function() {
        
        
        //var contador = 0;
        $("#elements-container").empty();
        $('#selecFlujo').empty() 
        
            if(diagramaArr.length > 0){ 
                borrarDiagramas();
                cargarDiagramas();
                for (var d of diagramaArr){
                    var contador= d.version
                }
                contador++;
                diagramaArr.push(new Diagrama(null, $('#titulodiagrama').text(), contador, $("#nombreuser").attr('value')));
                $('#versione').text(contador);
                //borrarDiagramas();
            }else{
            diagramaArr.push(new Diagrama(null, $('#titulodiagrama').text(), $('#versione').text(), $("#nombreuser").attr('value')));
            }

        
        
       for (var d of diagramaArr){
        $("#selecFlujo").append("<option id="+d.version+">" + d.version + "</option>");
        //console.log(d.version);
       }
        
            
            
            localStorage.removeItem("Diagramas")
            var diagramas = JSON.stringify(diagramaArr);
            localStorage.setItem("Diagramas", diagramas);
            localStorage.setItem("Diagramas", diagramas);
            
            
            guardarDiagramas();
            window.location.reload();
            
    })
    
    //$("#nuevaVersion").click(function() {
        //$('#versione').text(flujoContador);
    //});
//------------------------------------------------------------------------------------------------------------------------------------------------------    
  $("#selecFlujo").change(function() {
       var flujoseleccionado = $('#selecFlujo option').filter(':selected').text();
      $('#versione').text(flujoseleccionado);
      $("#elements-container").empty();
      
      figurasArr.forEach(function(figura){
         
	            if (figura.version == flujoseleccionado && figura.diagrama ==  $('#titulodiagrama').text()) {
                    
	                if (figura.tipo == "oval" || figura.tipo == "rombo"  || figura.tipo == "rectangulo") {
	                    $('#elements-container').append('<div class="col-md-1"><div id='+ figura.id +' class="editable"></div></div>');
    			 	    $('#'+ figura.id).addClass(figura.tipo)
    			 	    $('#'+ figura.id).attr("value",figura.tipo);
    			 	    $('#'+ figura.id).append(figura.texto)
    			    	$('#'+ figura.id).css({position:'relative'});
    			 	    $('#'+ figura.id).css({"left":figura.posx,"top":figura.posy});
    			 	    console.log($('#'+ figura.id).css("background-color",figura.colorFondo))
    			 	    $('#'+ figura.id).css("background-color",figura.colorFondo)
    			 	    $('#'+ figura.id).css("z-index",figura.zindex)
    			 	
    			 	$('.color').click(function() {
                    var colors = ["#537de0","#53e0b1","#990099"];                
                    var rand = Math.floor(Math.random()*colors.length);           
                    $(editEl).css("background-color", colors[rand]);
                    });
                    
                     $('.delete').click(function() {
                    $(editEl).remove();
                    $('#p-editor, #div-editor').hide();
                    });
                    
                     $('.save').click(function() {
                     $(editEl).html($(this).parent().find('textarea').val());
                    });
        
    			 	$('#'+ figura.id).draggable({
                        appendTo: '.jumbotron',
                        containment: '.jumbotron',
                         stop: handleDragStop,
                        });

                    $('#'+ figura.id).dblclick('click', function() {
                        editEl = $(this);
                        $(editEl).addClass('editing');
                        $('#p-editor').show();
                        $('#p-editor textarea').val($(editEl).html());
                        });
    			 	
    			 	$('.done').click(function() {
                         $('#p-editor, #div-editor').hide();
                        $(editEl).removeClass('editing');
                        });
	                }
        //------------------------------------------------------------------------------------------------------------------------------------------------------ 	                
	                if (figura.tipo == "line"  || figura.tipo == "line2" || figura.tipo == "line3" || figura.tipo == "line4") {
	                     $('#elements-container').append('<div class="col-md-1"><div id='+ figura.id +' class="editables"></div></div>');
    			 	    $('#'+ figura.id).addClass(figura.tipo)
    			 	     $('#'+ figura.id).attr("value",figura.tipo);
    			 	    $('#'+ figura.id).css({transform:figura.texto});
    			 	    $('#'+ figura.id).css({position:'relative'});
    			 	    $('#'+ figura.id).css({"left":figura.posx,"top":figura.posy});
    			 	    console.log($('#'+ figura.id).css("background-color",figura.colorFondo))
    			 	    $('#'+ figura.id).css("background-color",figura.colorFondo)
    			 	    $('#'+ figura.id).css("z-index",figura.zindex)
    			 	    
    			 	    $('#'+figura.id).draggable({
                        appendTo: '.jumbotron',
                        containment: '.jumbotron',
                         stop: handleDragStop,
                        });
                        
                        $('#'+figura.id).dblclick('click', function() {
                        editEl = $(this);    
                        $('#c-editor').show();
                        });
                        
	                }
	   //------------------------------------------------------------------------------------------------------------------------------------------------------ 
	                if (figura.tipo == "paralelogramo") {
	                    $('#elements-container').append('<div class="col-md-1"><div id='+ figura.id +' class="editable rectangulo"></div></div>');
    			 	    $('#'+ figura.id).addClass(figura.tipo)
    			 	     $('#'+ figura.id).attr("value",figura.tipo);
    			 	    $('#'+ figura.id).append(figura.texto)
    			    	$('#'+ figura.id).css({position:'relative'});
    			 	    $('#'+ figura.id).css({"left":figura.posx,"top":figura.posy});
    			 	    console.log($('#'+ figura.id).css("background-color",figura.colorFondo))
    			 	    $('#'+ figura.id).css("background-color",figura.colorFondo)
    			 	    $('#'+ figura.id).css("z-index",figura.zindex)
    			 	
    			 	$('.color').click(function() {
                    var colors = ["#537de0","#53e0b1","#990099"];                
                    var rand = Math.floor(Math.random()*colors.length);           
                    $(editEl).css("background-color", colors[rand]);
                    });
                    
                    $('.delete').click(function() {
                    $(editEl).remove();
                    $('#p-editor, #div-editor').hide();
                    });
                    
                     $('.save').click(function() {
                     $(editEl).html($(this).parent().find('textarea').val());
                    });
                    
    			 	$('#'+ figura.id).draggable({
                        appendTo: '.jumbotron',
                        containment: '.jumbotron',
                         stop: handleDragStop,
                        });

                    $('#'+ figura.id).dblclick('click', function() {
                        editEl = $(this);
                        $(editEl).addClass('editing');
                        $('#p-editor').show();
                        $('#p-editor textarea').val($(editEl).html());
                        });
    			 	
    			 	$('.done').click(function() {
                         $('#p-editor, #div-editor').hide();
                        $(editEl).removeClass('editing');
                        });
	                }
	                
    //------------------------------------------------------------------------------------------------------------------------------------------------------    
	                
			     }
			 	
			 })
			
  });
  
//------------------------------------------------------------------------------------------------------------------------------------------------------    
  $("#guardar").click(function() {
      
     
     //figurasArr = [];
    var aux = [];
    //var flujoseleccionado = $('#selecFlujo option').filter(':selected').text();    
     aux = [];
      $("#elements-container").find(".oval").each(function(){
       aux.push($(this)); 
    });
    
     $("#elements-container").find(".rombo").each(function(){
       aux.push($(this)); 
    });
    
    $("#elements-container").find(".rectangulo").each(function(){
       aux.push($(this)); 
    });
    
      $("#elements-container").find(".line").each(function(){
       aux.push($(this)); 
    });
    
    $("#elements-container").find(".line2").each(function(){
       aux.push($(this)); 
    });
    
    
    $("#elements-container").find(".line3").each(function(){
       aux.push($(this)); 
    });
    
    
    $("#elements-container").find(".line4").each(function(){
       aux.push($(this)); 
    });
    
    //figurasArr.push(new Diagrama(flujoContador , $("#titulodiagrama").text(), flujoContador, $("#nombreuser").attr('value'))); 
        
     figurasArr = [];
     borrarFiguras();
     //cargarFiguras();
    for (var divv of aux){
        if (divv.attr('value') == "line") {
            figurasArr.push(new Figura(divv.attr('id'), $('#titulodiagrama').text(), $('#versione').text(), $("#nombreuser").attr('value'), divv.attr('value') ,divv.css('background-color'), divv.css('left'), divv.css('top'), divv.css('transform'), divv.css('z-index'))); 
        }else{
            figurasArr.push(new Figura(divv.attr('id'), $('#titulodiagrama').text(), $('#versione').text(), $("#nombreuser").attr('value'), divv.attr('value') ,divv.css('background-color'), divv.css('left'), divv.css('top'), divv.text(), divv.css('z-index'))); 
        }
           
    }
             
        //console.log(figurasArr);
        
           // localStorage.removeItem("Figuras")
            //var figuras = JSON.stringify(figurasArr)
            //localStorage.setItem("Figuras", figuras)
    
            
            console.log("se guardo con exito")          
            console.log(figurasArr.length)
            
            //var elementosGuardados = localStorage.getItem("Figuras")
            //figurasArr = JSON.parse(elementosGuardados)
           
          
                guardarFiguras();
            
           
            
            //flujoContador++;
         window.location.reload();    
                
  });
 
 
  //------------------------------------------------------------------------------------------------------------------------------------------------------ 
 /* $("#mostrarDiagrama").click(function() {
    
     
    $("#elements-container").empty();
    
    //location.reload(); 
    //cargamos las figuras
    
    //var elementosGuardados = localStorage.getItem("Figuras")
    //figurasArr = JSON.parse(elementosGuardados)
    
     
     //$("#versione").text($('#selecFlujo option').filter(':selected').text());
     
    var flujoseleccionado = $('#selecFlujo option').filter(':selected').text();
    $('#versione').text(flujoseleccionado);
             
    figurasArr.forEach(function(figura){
         
	            if (figura.version == flujoseleccionado && figura.diagrama ==  $('#titulodiagrama').text()) {
                    
	                if (figura.tipo == "oval" || figura.tipo == "rombo"  || figura.tipo == "rectangulo") {
	                    $('#elements-container').append('<div class="col-md-1"><div id='+ figura.id +' class="editable"></div></div>');
    			 	    $('#'+ figura.id).addClass(figura.tipo)
    			 	    $('#'+ figura.id).attr("value",figura.tipo);
    			 	    $('#'+ figura.id).append(figura.texto)
    			    	$('#'+ figura.id).css({position:'relative'});
    			 	    $('#'+ figura.id).css({"left":figura.posx,"top":figura.posy});
    			 	    console.log($('#'+ figura.id).css("background-color",figura.colorFondo))
    			 	    $('#'+ figura.id).css("background-color",figura.colorFondo)
    			 	    $('#'+ figura.id).css("z-index",figura.zindex)
    			 	
    			 	$('.color').click(function() {
                    var colors = ["#537de0","#53e0b1","#990099"];                
                    var rand = Math.floor(Math.random()*colors.length);           
                    $(editEl).css("background-color", colors[rand]);
                    });
                    
                     $('.delete').click(function() {
                    $(editEl).remove();
                    $('#p-editor, #div-editor').hide();
                    });
                    
                     $('.save').click(function() {
                     $(editEl).html($(this).parent().find('textarea').val());
                    });
        
    			 	$('#'+ figura.id).draggable({
                        appendTo: '.jumbotron',
                        containment: '.jumbotron',
                         stop: handleDragStop,
                        });

                    $('#'+ figura.id).dblclick('click', function() {
                        editEl = $(this);
                        $(editEl).addClass('editing');
                        $('#p-editor').show();
                        $('#p-editor textarea').val($(editEl).html());
                        });
    			 	
    			 	$('.done').click(function() {
                         $('#p-editor, #div-editor').hide();
                        $(editEl).removeClass('editing');
                        });
	                }
        //------------------------------------------------------------------------------------------------------------------------------------------------------ 	                
	                if (figura.tipo == "line"  || figura.tipo == "line2" || figura.tipo == "line3" || figura.tipo == "line4") {
	                     $('#elements-container').append('<div class="col-md-1"><div id='+ figura.id +' class="editables"></div></div>');
    			 	    $('#'+ figura.id).addClass(figura.tipo)
    			 	     $('#'+ figura.id).attr("value",figura.tipo);
    			 	    $('#'+ figura.id).css({transform:figura.texto});
    			 	    $('#'+ figura.id).css({position:'relative'});
    			 	    $('#'+ figura.id).css({"left":figura.posx,"top":figura.posy});
    			 	    console.log($('#'+ figura.id).css("background-color",figura.colorFondo))
    			 	    $('#'+ figura.id).css("background-color",figura.colorFondo)
    			 	    $('#'+ figura.id).css("z-index",figura.zindex)
    			 	    
    			 	    $('#'+figura.id).draggable({
                        appendTo: '.jumbotron',
                        containment: '.jumbotron',
                         stop: handleDragStop,
                        });
                        
                        $('#'+figura.id).dblclick('click', function() {
                        editEl = $(this);    
                        $('#c-editor').show();
                        });
                        
	                }
	   //------------------------------------------------------------------------------------------------------------------------------------------------------ 
	                if (figura.tipo == "paralelogramo") {
	                    $('#elements-container').append('<div class="col-md-1"><div id='+ figura.id +' class="editable rectangulo"></div></div>');
    			 	    $('#'+ figura.id).addClass(figura.tipo)
    			 	     $('#'+ figura.id).attr("value",figura.tipo);
    			 	    $('#'+ figura.id).append(figura.texto)
    			    	$('#'+ figura.id).css({position:'relative'});
    			 	    $('#'+ figura.id).css({"left":figura.posx,"top":figura.posy});
    			 	    console.log($('#'+ figura.id).css("background-color",figura.colorFondo))
    			 	    $('#'+ figura.id).css("background-color",figura.colorFondo)
    			 	    $('#'+ figura.id).css("z-index",figura.zindex)
    			 	
    			 	$('.color').click(function() {
                    var colors = ["#537de0","#53e0b1","#990099"];                
                    var rand = Math.floor(Math.random()*colors.length);           
                    $(editEl).css("background-color", colors[rand]);
                    });
                    
                    $('.delete').click(function() {
                    $(editEl).remove();
                    $('#p-editor, #div-editor').hide();
                    });
                    
                     $('.save').click(function() {
                     $(editEl).html($(this).parent().find('textarea').val());
                    });
                    
    			 	$('#'+ figura.id).draggable({
                        appendTo: '.jumbotron',
                        containment: '.jumbotron',
                         stop: handleDragStop,
                        });

                    $('#'+ figura.id).dblclick('click', function() {
                        editEl = $(this);
                        $(editEl).addClass('editing');
                        $('#p-editor').show();
                        $('#p-editor textarea').val($(editEl).html());
                        });
    			 	
    			 	$('.done').click(function() {
                         $('#p-editor, #div-editor').hide();
                        $(editEl).removeClass('editing');
                        });
	                }
	                
    //------------------------------------------------------------------------------------------------------------------------------------------------------    
	                
			     }
			 	
			 })
			
			 
  });*/


//------------------------------------------------------------------------------------------------------------------------------------------------------ 
    $("#clear").click(function() {
    //window.localStorage.clear();
    //window.location.reload();    
    $("#elements-container").empty();
    borrarFiguras();
    //cargarFiguras();
    window.location.reload();
  });
  
  //------------------------------------------------------------------------------------------------------------------------------------------------------ 
         $("#exportar").click(function(e){
        $("#exportar").attr( "download", "elemento.json" );
        this.href = 'data:plain/text,' + JSON.stringify(figurasArr);
        });
        
//------------------------------------------------------------------------------------------------------------------------------------------------------ 
        
}


function handleDragStop( event, ui ) {
  var offsetXPos = parseInt( ui.offset.left );
  var offsetYPos = parseInt( ui.offset.top );
  alert( "Drag stopped!\n\nOffset: (" + offsetXPos + ", " + offsetYPos + ")\n");
}


function cargarDiagramas(){
    $.ajax({
    type: "GET",
    url: '/diagramas'+$("#nombreuser").attr('value'),
    dataType: "json",
    success: function(res) {
        res_data2 = JSON.parse(res);
        console.log(res_data);
        for(var x in res_data2){
         diagramaArr.push(new Diagrama(res_data2[x].diagrama_id, res_data2[x].titulo, res_data2[x].version, res_data2[x].usuario));
         $("#selecFlujo").append("<option id="+res_data2[x].version+">" + res_data2[x].version + "</option>");
         $('#versione').text(res_data2[x].version);
        }
        
        //localStorage.removeItem("Diagramas")
        //var diagramas = JSON.stringify(diagramaArr)
        //localStorage.setItem("Diagramas", diagramas)
        //console.log(diagramas);
        }
    
    });
     
}    

function guardarDiagramas(){
                $.ajax({
            url: '/diagramas',
            type: 'POST',
            data: {
                diagramaArr
            },
            success: function(data){
                console.log(data);
            }
        });
}


function borrarDiagramas(){
       $.ajax({
            url: '/diagramas/'+$("#nombreuser").attr('value'),
            type: 'DELETE',
            data: {
                figurasArr
            },
            success: function(data){
                console.log(data);
            }
        });
}



function cargarFiguras(){
    $.ajax({
    type: "GET",
    url: '/figuras',
    dataType: "json",
    success: function(res) {
        res_data = JSON.parse(res);
        //console.log(res_data);
        for(var x in res_data){
         figurasArr.push(new Figura(res_data[x].figura_id, res_data[x].diagrama, res_data[x].version, res_data[x].usuario, res_data[x].tipo , res_data[x].colorFondo , res_data[x].posx, res_data[x].posy, res_data[x].texto, res_data[x].zindex));
        }
        
        localStorage.removeItem("Figuras")
        var figuras = JSON.stringify(figurasArr)
        localStorage.setItem("Figuras", figuras)
        console.log(figuras);
        }
    
    });
     
}

function guardarFiguras(){
                $.ajax({
            url: '/figuras',
            type: 'POST',
            data: {
                figurasArr
            },
            success: function(data){
                console.log(data);
            }
        });
}

function borrarFiguras(){
       $.ajax({
            url: '/figuras/'+$("#nombreuser").attr('value')+'/'+$('#versione').text(),
            type: 'DELETE',
            data: {
                figurasArr
            },
            success: function(data){
                console.log(data);
            }
        });
}


             