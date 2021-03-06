 var arr = [];
 //var username;
var objs;

//var leftArrow="standard";

function init() {

    if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
    var $ = go.GraphObject.make;  // for conciseness in defining templates

    myDiagram =
      $(go.Diagram, "myDiagramDiv",  // must name or refer to the DIV HTML element
        {
          initialContentAlignment: go.Spot.Center,
          allowDrop: true,  // must be true to accept drops from the Palette
          "LinkDrawn": showLinkLabel,  // this DiagramEvent listener is defined below
          "LinkRelinked": showLinkLabel,
          "animationManager.duration": 800, // slightly longer than default (600ms) animation
          "undoManager.isEnabled": true  // enable undo & redo
        });

    // when the document is modified, add a "*" to the title and enable the "Save" button
    myDiagram.addDiagramListener("Modified", function(e) {
      var button = document.getElementById("SaveButton");
      if (button) button.disabled = !myDiagram.isModified;
      var idx = document.title.indexOf("*");
      if (myDiagram.isModified) {
        if (idx < 0) document.title += "*";
      } else {
        if (idx >= 0) document.title = document.title.substr(0, idx);
      }
    });
    
    
    // helper definitions for node templates

    function nodeStyle() {
      return [
        // The Node.location comes from the "loc" property of the node data,
        // converted by the Point.parse static method.
        // If the Node.location is changed, it updates the "loc" property of the node data,
        // converting back using the Point.stringify static method.
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        {
          // the Node.location is at the center of each node
          locationSpot: go.Spot.Center,
          //isShadowed: true,
          //shadowColor: "#888",
          // handle mouse enter/leave events to show/hide the ports
          mouseEnter: function (e, obj) { showPorts(obj.part, true); },
          mouseLeave: function (e, obj) { showPorts(obj.part, false); }
        }
      ];
    }
  
    // Define a function for creating a "port" that is normally transparent.
    // The "name" is used as the GraphObject.portId, the "spot" is used to control how links connect
    // and where the port is positioned on the node, and the boolean "output" and "input" arguments
    // control whether the user can draw links from or to the port.
    function makePort(name, spot, output, input) {
      // the port is basically just a small circle that has a white stroke when it is made visible
      return $(go.Shape, "Circle",
               {
                  fill: "transparent",
                  stroke: null,  // this is changed to "white" in the showPorts function
                  desiredSize: new go.Size(8, 8),
                  alignment: spot, alignmentFocus: spot,  // align the port on the main Shape
                  portId: name,  // declare this object to be a "port"
                  fromSpot: spot, toSpot: spot,  // declare where links may connect at this port
                  fromLinkable: output, toLinkable: input,  // declare whether the user may draw links to/from here
                  cursor: "pointer"  // show a different cursor to indicate potential link point
               });
    }

    // define the Node templates for regular nodes

    var lightText = 'whitesmoke';

    myDiagram.nodeTemplateMap.add("",  // the default category
      $(go.Node, "Spot", nodeStyle(),
        // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
        $(go.Panel, "Auto",
          $(go.Shape, "Rectangle",
            { fill: "#00A9C9", stroke: null, name: "SHAPE" },
            new go.Binding("figure", "figure"), new go.Binding("fill", "fill").makeTwoWay()),  
          $(go.TextBlock,
            {
              font: "bold 11pt Helvetica, Arial, sans-serif",
              stroke: lightText,
              margin: 8,
              maxSize: new go.Size(160, NaN),
              wrap: go.TextBlock.WrapFit,
              editable: true
            },
            new go.Binding("text").makeTwoWay())
        ),
        // four named ports, one on each side:
        makePort("T", go.Spot.Top, false, true),
        makePort("L", go.Spot.Left, true, true),
        makePort("R", go.Spot.Right, true, true),
        makePort("B", go.Spot.Bottom, true, false)
      ));

    myDiagram.nodeTemplateMap.add("Start",
      $(go.Node, "Spot", nodeStyle(),
        $(go.Panel, "Auto",
          $(go.Shape, "Circle",
            { minSize: new go.Size(40, 40), fill: "#79C900", stroke: null }),
          $(go.TextBlock, "Start",
            { font: "bold 11pt Helvetica, Arial, sans-serif", stroke: lightText },
            new go.Binding("text"))
        ),
        // three named ports, one on each side except the top, all output only:
        makePort("L", go.Spot.Left, true, false),
        makePort("R", go.Spot.Right, true, false),
        makePort("B", go.Spot.Bottom, true, false)
      ));

    myDiagram.nodeTemplateMap.add("End",
      $(go.Node, "Spot", nodeStyle(),
        $(go.Panel, "Auto",
          $(go.Shape, "Circle",
            { minSize: new go.Size(40, 40), fill: "#DC3C00", stroke: null }),
          $(go.TextBlock, "End",
            { font: "bold 11pt Helvetica, Arial, sans-serif", stroke: lightText },
            new go.Binding("text"))
        ),
        // three named ports, one on each side except the bottom, all input only:
        makePort("T", go.Spot.Top, false, true),
        makePort("L", go.Spot.Left, false, true),
        makePort("R", go.Spot.Right, false, true)
      ));

    myDiagram.nodeTemplateMap.add("Comment",
      $(go.Node, "Auto", nodeStyle(),
        $(go.Shape, "File",
          { fill: "#EFFAB4", stroke: null }),
        $(go.TextBlock,
          {
            margin: 5,
            maxSize: new go.Size(200, NaN),
            wrap: go.TextBlock.WrapFit,
            textAlign: "center",
            editable: true,
            font: "bold 12pt Helvetica, Arial, sans-serif",
            stroke: '#454545'
          },
          new go.Binding("text").makeTwoWay())
        // no ports, because no links are allowed to connect with a comment
      ));


/*Tipos de flecha: 
StretchedDiamond
standard
circle
Chevron







*/

    // replace the default Link template in the linkTemplateMap
    myDiagram.linkTemplate =
      $(go.Link,  // the whole link panel
        {
          routing: go.Link.AvoidsNodes,
          curve: go.Link.JumpOver,
          corner: 5, toShortLength: 4,
          relinkableFrom: true,
          relinkableTo: true,
          reshapable: true,
          resegmentable: true,
          // mouse-overs subtly highlight links:
          mouseEnter: function(e, link) { link.findObject("HIGHLIGHT").stroke = "rgba(30,144,255,0.2)"; },
          mouseLeave: function(e, link) { link.findObject("HIGHLIGHT").stroke = "transparent"; }
        },
        new go.Binding("points").makeTwoWay(),
        $(go.Shape,  // the highlight shape, normally transparent
          { isPanelMain: true, strokeWidth: 8, stroke: "transparent", name: "HIGHLIGHT" }),
        $(go.Shape,  // the link path shape
          { isPanelMain: true, stroke: "gray", strokeWidth: 2 }),
          
        $(go.Shape,   // the "from" end arrowhead
        { name: "SHAPE", fromArrow: localStorage.getItem("flecha"), stroke: null, fill: "gray" }),//***Le da punta desde el lado izquierdo
        
        
        $(go.Shape,  // the arrowhead
          { toArrow: localStorage.getItem("flecha"), stroke: null, fill: "gray"}),
        $(go.Panel, "Auto",  // the link label, normally not visible
          { visible: false, name: "LABEL", segmentIndex: 2, segmentFraction: 0.5},
          new go.Binding("visible", "visible").makeTwoWay(),
          $(go.Shape, "RoundedRectangle",  // the label shape
            { fill: "#F8F8F8", stroke: null }),
          $(go.TextBlock, "Yes",  // the label
            {
              textAlign: "center",
              font: "10pt helvetica, arial, sans-serif",
              stroke: "#333333",
              editable: true
            },
            new go.Binding("text").makeTwoWay())
        )
      );

    // Make link labels visible if coming out of a "conditional" node.
    // This listener is called by the "LinkDrawn" and "LinkRelinked" DiagramEvents.
    function showLinkLabel(e) {
      var label = e.subject.findObject("LABEL");
      if (label !== null) label.visible = (e.subject.fromNode.data.figure === "Diamond");
    }

    // temporary links used by LinkingTool and RelinkingTool are also orthogonal:
    myDiagram.toolManager.linkingTool.temporaryLink.routing = go.Link.Orthogonal;
    myDiagram.toolManager.relinkingTool.temporaryLink.routing = go.Link.Orthogonal;

    load();  // load an initial diagram from some JSON text
  
    // initialize the Palette that is on the left side of the page
    myPalette =
      $(go.Palette, "myPaletteDiv",  // must name or refer to the DIV HTML element
        {
          "animationManager.duration": 800, // slightly longer than default (600ms) animation
          nodeTemplateMap: myDiagram.nodeTemplateMap,  // share the templates used by myDiagram
          model: new go.GraphLinksModel([  // specify the contents of the Palette
            { category: "Start", text: "Start" },
            { text: "Step" , fill: "blue"},
            { text: "???", figure: "Diamond" },
            { category: "End", text: "End" },
            { category: "Comment", text: "Comment" }
          ])
        });
      

    
   /* myPalette.addDiagramListener("ObjectDoubleClicked", function (ev) {
    alert(ev.subject);
    ev.subject.fill = "red";
    //console.log(ev.subject);
    //console.log(ev.subject.ie);
    });*/

    var selectionButton = document.getElementById("selectionButton");
selectionButton.addEventListener("click", function() {
  myPalette.startTransaction("change color");
  var it = myPalette.selection.iterator;
  while (it.next()) {
    var node = it.value;
    var shape = node.findObject("SHAPE");
    // If there was a GraphObject in the node named SHAPE, then set its fill to red:
    if (shape !== null) {
       var back = ["yellow","blue","red"];
      var rand = back[Math.floor(Math.random() * back.length)];
      shape.fill = rand;
    }
  }
  myPalette.commitTransaction("change color");
});
    
    
    // The following code overrides GoJS focus to stop the browser from scrolling
    // the page when either the Diagram or Palette are clicked or dragged onto.

    function customFocus() {
      var x = window.scrollX || window.pageXOffset;
      var y = window.scrollY || window.pageYOffset;
      go.Diagram.prototype.doFocus.call(this);
      window.scrollTo(x, y);
    }

    myDiagram.doFocus = customFocus;
    myPalette.doFocus = customFocus;



  } // end init

  // Make all ports on a node visible when the mouse is over the node
  function showPorts(node, show) {
    var diagram = node.diagram;
    if (!diagram || diagram.isReadOnly || !diagram.allowLink) return;
    node.ports.each(function(port) {
        port.stroke = (show ? "white" : null);
      });
  }


  // Show the diagram's model in JSON format that the user may edit
  function save() {
    document.getElementById("mySavedModel").value = myDiagram.model.toJson();
    myDiagram.isModified = false;
    //console.log(myDiagram.model.toJson())
        var parsed = myDiagram.model.toJson();
        objs = myDiagram.model.toJson();
        //diagrama = myDiagram.model.toJson();
      arr.push(parsed);
      guardarDraw();
      //console.log(arr);
      //borrarMydraws();
      //guardarMydraws();
      //$("#exportar").attr( "download", "elemento.json" );
      //$("#exportar").href = 'data:plain/text,' + JSON.stringify(arr);
  }
  
  function load() {
    //document.getElementById("mySavedModel").value = obj;
    myDiagram.model = go.Model.fromJson(document.getElementById("mySavedModel").value);
    
  }
 

function newDraw() {
    var txt;
    var person = prompt("Ingrese el titulo del diagrama:", "");
    if (person == null || person == "") {
        alert("No se guardo el diagrama");
    } else {
        //txt = "Hello " + person + "! How are you today?";
        $('#titulodiagrama').text(person);
        title = $('#titulodiagrama').text();
        objs = null;
          //borrarMydraws();
          guardarMydraws();
          cargarCombo();
          window.location.reload();
    }
    //.getElementById("demo").innerHTML = txt;
}
       

function mostrar(){
// 	var list = document.getElementById("lista");
// 	var op = list.options[list.selectedIndex].value;
// 	//oeoeoeooeoeoeoeeoeoeoeoeoeeoeoeoeoee dejame hacer esos combobox oeoeoe
// 	var textino=$('#textoaqui').text();
// 	$('#textoaqui').append("<p> "+op+"</p>");
// 	leftArrow=op;
// 	alert(op+leftArrow);
	
// 	return leftArrow;
}

function flechaCirculo(){
    //var back = ["circle","standard","StretchedDiamond"];
    //var rand = back[Math.floor(Math.random() * back.length)];
  localStorage.removeItem("flecha");
  localStorage.removeItem("arrow");
  localStorage.setItem("arrow", "leftArrow");
  localStorage.setItem("flecha", "circle");
  window.location.reload(); 
  
 }
 
 function flechaPentagono(){
    localStorage.removeItem("flecha");
    localStorage.removeItem("arrow");
    localStorage.setItem("arrow", "leftArrow");
    localStorage.setItem("flecha", "StretchedDiamond");
     window.location.reload();
 }
 
 function flecha(){
   localStorage.removeItem("flecha");
   localStorage.removeItem("arrow");
    localStorage.setItem("arrow", "leftArrow");
   localStorage.setItem("flecha", "standard");
    window.location.reload();
 }
 
  function flechaDoble(){
    localStorage.removeItem("flecha");
    localStorage.removeItem("arrow");
    localStorage.setItem("arrow", "Chevron");
    localStorage.setItem("flecha", "Chevron");
     window.location.reload();
  }