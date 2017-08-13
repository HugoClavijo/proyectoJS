$(document).ready(function(){
    
    var globalCount = 1;
var sPositions = localStorage.positions || "{}",
    positions = JSON.parse(sPositions);
$.each(positions, function (id, pos) {
    if(id != "divd"){
     	var cloned = $("#divd").clone();
        cloned[0].id = id;
        cloned.insertAfter("#divd")
         globalCount++;
    }
    $("#" + id).css(pos)
});
$(".common-drag").draggable({
    containment: ".jumbotron",
    scroll: false,
    stop: function (event, ui) {
        positions[this.id] = ui.position
        localStorage.positions = JSON.stringify(positions)
    }
});

$("#add-square").click(function () {
    var cloned = $("#divd").clone();
    cloned[0].id = "divd" + globalCount++;
    cloned.insertAfter("#divd").draggable({
        containment: ".jumbotron",
        scroll: false,
        stop: function (event, ui) {
            positions[this.id] = ui.position
            localStorage.positions = JSON.stringify(positions)
        }
    });
});

    
    
//------------------------------------------------------------------------------------------------------------------------------------------------------
    });










