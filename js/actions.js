//actions.js
//var fn = {
//    init: function(){
//        alert();
//    }
//};
//window.addEventListener('load',fn.init,false);

//var jQuery = {}
//function jQuery(){
//    return algo;
//}

//var body = jQuery('body');
//body.ready(fn.init);
//Equivale a
//jQuery('body').ready(fn.init);
//Equivale a
//$('body').ready(fn.init);
//Equivale a
//$(document).ready(fn.init);
//Equivale a
//$(fn.init);


var fn = {
    init: function(){
        //document.addEventListener("deviceready", yourCallbackFunction, false); //phonegap
        document.addEventListener('deviceready',fn.device,false);
        //$('#regSend').click(); //Producir un click
    },
    device: function(){
      var x = false;
          if(!x)
            window.location.href =  '#reg';
          $('#regTake').tap(myCapture.tomarFoto);
          $('#regSend').click(fn.registro);
    },
    registro: function(){
        var nombre = $('#regName').val();
        var mail = $('#regMail').val();
        var tel = $('#regTel').val(); 
        if(nombre != '' && mail != '' && tel != ''){
          //Enviar datos al Servidor. buildphogap 2.9
            navigator.notification.beep(2);
        }else{
          //alert("Todos los campos son requeridos."); 
          navigator.notification.alert("Todos los campos son requeridos.", null,'Error', 'Aceptar');
        }
    }
};
$(fn.init);
