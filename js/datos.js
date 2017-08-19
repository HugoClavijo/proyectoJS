class Usuario {
    constructor (obj){
        this.id = obj.id;
        this.user = obj.user;
        this.pass = obj.pass;
        this.userType = obj.userType;
        this.imagen = obj.imagen;
    }
}

class Elementos {
    constructor (obj){
        this.html = obj.html;
        
    }
}

class Figura {
    constructor (obj){
        this.nombre = obj.nombre;
        this.posx = obj.posx;
        this.posy = obj.posy;
    }
}



var json = {"usuarios":[{"id":1,"user":"admin1","pass":"1234","imagen":"images/users/1.png"},{"id":2,"user":"hugo","pass":"batman","imagen":"images/users/2.png"},{"id":3,"user":"juancarlos","pass":"spiderman","imagen":"images/users/3.png"}]};
var jsonHtml = {"html":[{}]};


function loadJSON (json){
    var jsonObj = json;
    var objAux = {"usuarios":[]};
    
    for (var att in jsonObj){
        switch (att){
            case "usuarios":
                for (var u of jsonObj[att]){
                    objAux[att].push(new Usuario(u));
                }
                break;
            default:
        }
    }
    
    console.log("JSON leído correctamente");
    
    return objAux;
}

function validateLogIn (arr, user, pass){
    var found = false;

    for (var u of arr){
        if (user === u.user && pass === u.pass){
            found = true;
            alert("Bienvenido "+u.user);
            return u;
        }
    }

    if (found === false){
        return null;
    } 
}

