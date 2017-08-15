{"filter":false,"title":"saved.js","tooltip":"/js/libs/saved.js","undoManager":{"mark":26,"position":26,"stack":[[{"start":{"row":0,"column":0},"end":{"row":12,"column":3},"action":"insert","lines":["var sPositions = localStorage.positions || \"{}\",","    positions = JSON.parse(sPositions);","$.each(positions, function (id, pos) {","    $(\"#\" + id).css(pos)","})","$(\"#draggable3\").draggable({","    containment: \"#containment-wrapper\",","    scroll: false,","    stop: function (event, ui) {","        positions[this.id] = ui.position","        localStorage.positions = JSON.stringify(positions)","    }","});"],"id":1}],[{"start":{"row":5,"column":4},"end":{"row":5,"column":14},"action":"remove","lines":["draggable3"],"id":2},{"start":{"row":5,"column":4},"end":{"row":5,"column":13},"action":"insert","lines":["imgSize-2"]}],[{"start":{"row":5,"column":3},"end":{"row":5,"column":13},"action":"remove","lines":["#imgSize-2"],"id":3},{"start":{"row":5,"column":3},"end":{"row":5,"column":9},"action":"insert","lines":["item-2"]}],[{"start":{"row":5,"column":3},"end":{"row":5,"column":4},"action":"insert","lines":["."],"id":4}],[{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"remove","lines":["#"],"id":5}],[{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["."],"id":6}],[{"start":{"row":0,"column":0},"end":{"row":12,"column":3},"action":"remove","lines":["var sPositions = localStorage.positions || \"{}\",","    positions = JSON.parse(sPositions);","$.each(positions, function (id, pos) {","    $(\".\" + id).css(pos)","})","$(\".item-2\").draggable({","    containment: \"#containment-wrapper\",","    scroll: false,","    stop: function (event, ui) {","        positions[this.id] = ui.position","        localStorage.positions = JSON.stringify(positions)","    }","});"],"id":7},{"start":{"row":0,"column":0},"end":{"row":12,"column":3},"action":"insert","lines":["var sPositions = localStorage.positions || \"{}\",","    positions = JSON.parse(sPositions);","$.each(positions, function (id, pos) {","    $(\"#\" + id).css(pos)","})","$(\"#draggable3\").draggable({","    containment: \"#containment-wrapper\",","    scroll: false,","    stop: function (event, ui) {","        positions[this.id] = ui.position","        localStorage.positions = JSON.stringify(positions)","    }","});"]}],[{"start":{"row":12,"column":3},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":8}],[{"start":{"row":13,"column":0},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":9}],[{"start":{"row":14,"column":0},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":10}],[{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":11}],[{"start":{"row":16,"column":0},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":12}],[{"start":{"row":17,"column":0},"end":{"row":22,"column":10},"action":"insert","lines":["<h3>TEST ME BELOW:</h3>","","<div id=\"containment-wrapper\">","    <div id=\"draggable3\" class=\"draggable ui-widget-content\">","        <p>DRAG ME</p>","    </div>"],"id":13}],[{"start":{"row":22,"column":0},"end":{"row":22,"column":4},"action":"remove","lines":["    "],"id":14}],[{"start":{"row":22,"column":0},"end":{"row":22,"column":4},"action":"insert","lines":["    "],"id":15}],[{"start":{"row":22,"column":10},"end":{"row":23,"column":0},"action":"insert","lines":["",""],"id":16},{"start":{"row":23,"column":0},"end":{"row":23,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":23,"column":4},"end":{"row":24,"column":0},"action":"insert","lines":["",""],"id":17},{"start":{"row":24,"column":0},"end":{"row":24,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":24,"column":4},"end":{"row":25,"column":0},"action":"insert","lines":["",""],"id":18},{"start":{"row":25,"column":0},"end":{"row":25,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":25,"column":4},"end":{"row":26,"column":0},"action":"insert","lines":["",""],"id":19},{"start":{"row":26,"column":0},"end":{"row":26,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":26,"column":4},"end":{"row":27,"column":0},"action":"insert","lines":["",""],"id":20},{"start":{"row":27,"column":0},"end":{"row":27,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":27,"column":4},"end":{"row":28,"column":0},"action":"insert","lines":["",""],"id":21},{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":28,"column":4},"end":{"row":29,"column":0},"action":"insert","lines":["",""],"id":22},{"start":{"row":29,"column":0},"end":{"row":29,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":29,"column":0},"end":{"row":29,"column":4},"action":"remove","lines":["    "],"id":23}],[{"start":{"row":29,"column":0},"end":{"row":53,"column":3},"action":"insert","lines":[".draggable {","      width: 90px;","      height: 90px;","      padding: 0.5em;","      float: left;","      margin: 0 10px 10px 0;","  }","  #draggable, #draggable2 {","      margin-bottom:20px;","  }","  #draggable {","      cursor: n-resize;","  }","  #draggable3 {","      cursor: move;","  }","  #containment-wrapper {","      width: 700px;","      height:500px;","      border:1px solid #000;","      padding: 5px;","  }","  h3 {","      clear: left;","  }"],"id":24}],[{"start":{"row":0,"column":0},"end":{"row":53,"column":3},"action":"remove","lines":["var sPositions = localStorage.positions || \"{}\",","    positions = JSON.parse(sPositions);","$.each(positions, function (id, pos) {","    $(\"#\" + id).css(pos)","})","$(\"#draggable3\").draggable({","    containment: \"#containment-wrapper\",","    scroll: false,","    stop: function (event, ui) {","        positions[this.id] = ui.position","        localStorage.positions = JSON.stringify(positions)","    }","});","","","","","<h3>TEST ME BELOW:</h3>","","<div id=\"containment-wrapper\">","    <div id=\"draggable3\" class=\"draggable ui-widget-content\">","        <p>DRAG ME</p>","    </div>","    ","    ","    ","    ","    ","    ",".draggable {","      width: 90px;","      height: 90px;","      padding: 0.5em;","      float: left;","      margin: 0 10px 10px 0;","  }","  #draggable, #draggable2 {","      margin-bottom:20px;","  }","  #draggable {","      cursor: n-resize;","  }","  #draggable3 {","      cursor: move;","  }","  #containment-wrapper {","      width: 700px;","      height:500px;","      border:1px solid #000;","      padding: 5px;","  }","  h3 {","      clear: left;","  }"],"id":25}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["s"],"id":26}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"remove","lines":["s"],"id":27}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":0,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1502071695525,"hash":"da39a3ee5e6b4b0d3255bfef95601890afd80709"}