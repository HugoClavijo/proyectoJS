
//------------------------------------------------------------------------------------------------------------------------------------------------------
$( init );
 
function init() {
 /* $('#makeMeDraggable').draggable( {     
    containment: '.jumbotron',
    cursor: 'move',
    snap: '.jumbotron',
    stop: handleDragStop,
  } );*/
    
    //------------------------------------------------------------------------------------------------------------------------------------------------------
    /*$(".draggable").draggable({
	grid: [ 20, 20 ],
	appendTo: '.jumbotron',
    containment: ".jumbotron",
	cursor: 'move',
    snap: '.jumbotron',
	revertDuration: 100,
	revert: 'invalid',
	helper: 'clone',
    stop: handleDragStop,
});

$(".jumbotron").droppable({
    accept: ".draggable",
	drop: function (event, ui) {
        ui.helper.clone().appendTo('.jumbotron');
 }
});*/
    
  //------------------------------------------------------------------------------------------------------------------------------------------------------      
    
     //Make every clone image unique.  
   var counts = [0];
    var resizeOpts = { 
      handles: "all" ,autoHide:true
    };    
   $(".dragImg").draggable({
                        appendTo: '.jumbotron',
                        containment: '.jumbotron',
                         helper: "clone",
                            stop: handleDragStop,
                         //Create counter
                         start: function() { counts[0]++; }
                        });

$(".jumbotron").droppable({
       drop: function(e, ui){
               if(ui.draggable.hasClass("dragImg")) {
     $(this).append($(ui.helper).clone());
   //Pointing to the dragImg class in dropHere and add new class.
         $(".jumbotron .dragImg").addClass("item-"+counts[0]);
            $(".jumbotron .img").addClass("imgSize-"+counts[0]);
                
   //Remove the current class (ui-draggable and dragImg)
         $(".jumbotron .item-"+counts[0]).removeClass("dragImg ui-draggable ui-draggable-dragging");

$(".item-"+counts[0]).dblclick(function() {
$(this).remove();
});     
	make_draggable($(".item-"+counts[0])); 
      //$(".imgSize-"+counts[0]).resizable(resizeOpts);     
       }

       }
      });


var zIndex = 0;
function make_draggable(elements)
{	
	elements.draggable({
		containment:'parent',
		start:function(e,ui){ ui.helper.css('z-index',++zIndex); },
        stop: handleDragStop,
		//stop:function(e,ui){
		//}
	});
}  
    
//------------------------------------------------------------------------------------------------------------------------------------------------------ 
    
}


function handleDragStop( event, ui ) {
  var offsetXPos = parseInt( ui.offset.left );
  var offsetYPos = parseInt( ui.offset.top );
  alert( "Drag stopped!\n\nOffset: (" + offsetXPos + ", " + offsetYPos + ")\n");
}
