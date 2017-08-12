var datos = null;
var loggedUser = null;
var activeScreen = null;
var mobileMaxWith = 480;
var desktopMinWith = 960;


function login(){
    var user = $('#userBox').val();
    var pass = $('#passBox').val();
    loggedUser = validateLogIn(datos.usuarios, user, pass);
    
    if (loggedUser != null){
        //toogleUserInfo();
        //menuMaxHeight();
        //$('.loggedUserPicture').attr('src', loggedUser.imagen);
        //$('.loggedUserName').text(loggedUser.user);
        $('input').val('');
        window.location.href = "pages/home.html";       
    }else{
        alert("¡Usuario y/o pass incorrecto!");
        $('input').val('');
        $('input:eq(0)').focus();
    }
}



$(document).ready(function(){
    datos = loadJSON(json);

    // contentBelowHeader();
   
    $('#loginButton').on('click',function (){
        login();
    });
    
    $('#passBox').on('keydown',function (event){
        if (event.key === 'Enter'){
            login();
        }
    });
    
    $('#logoutBtn').on('click',function (){
        //$('#loggedUser').hide();
       // $('#welcomeMsg').text("");
        //$('input').val('');
       // $('#loginForm').show();
        //$('input:eq(0)').focus();
        loggedUser = null;
        window.location.href = "../index.html";     
    })
    
});

//------------------------------------------------------------------------------------------------------------------------------------------------------







