class Usuario {
    constructor (obj){
        this.id = obj.id;
        this.user = obj.user;
        this.email = obj.email;
        this.pass = obj.pass;
        
    }
}

class flowcharts{
    constructor(titulo, version, model, usuario){
        this.titulo = titulo;
        this.usuario = usuario;
        this.model = model;
        this.version= version;
        
    }
}

class nodeDataArray{
	constructor(category, text, figure, key, tipo, loc, flowcharts_title){
    this.category = category;
    this.text = text;
    this.figure = figure;
    this.key = key;
    this.tipo = tipo;
	this.loc= loc;
	this.flowcharts_title = flowcharts_title;
	}
}

class linkDataArray{
    constructor(from, to, flowcharts_title){
        this.from = from;
        this.to = to;
        this.flowcharts_title = flowcharts_title;
    }
}