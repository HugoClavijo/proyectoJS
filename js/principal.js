
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
      
    $('#add-up').on('click', function () {
     var id = $('#elements-container').children().length + 1;
   $('#elements-container').append('<div class="col-md-1"><div id="'+id+'" class="editables iconn"><img id="iconn1" class="img" src="../images/flujo/up.png"></div></div>');
        
        $('#'+id).draggable({
                        appendTo: '.jumbotron',
                        containment: '.jumbotron',
                         stop: handleDragStop,
                        });
        
         //$('div.editable').dblclick(function() {
        //$(this).remove();
    //});
        
        var rotation = 0;

        jQuery.fn.rotate = function(degrees) {
    $('#'+id).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    };

        $('#'+id).click(function() {
    rotation += 5;
    $(this).rotate(rotation);
    });
      
      $('#'+id).resizable();  
        
  });
    
    
    
//------------------------------------------------------------------------------------------------------------------------------------------------------    
    
$("#download").click(function() {
var id = $('#elements-container').children().length 
var element = document.getElementById(id);
var html = element.outerHTML;       
var data = { html: html }; 
var json = JSON.stringify(data);
    console.log(json); // shows json object
  });
    
//------------------------------------------------------------------------------------------------------------------------------------------------------ 
  $("#clear").click(function() {
    window.localStorage.clear();
    window.location.reload();
  });
//------------------------------------------------------------------------------------------------------------------------------------------------------ 
       
}


function handleDragStop( event, ui ) {
  var offsetXPos = parseInt( ui.offset.left );
  var offsetYPos = parseInt( ui.offset.top );
  alert( "Drag stopped!\n\nOffset: (" + offsetXPos + ", " + offsetYPos + ")\n");
}





