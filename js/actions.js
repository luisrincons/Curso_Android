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
        var foto = $('#regTake').attr('rel');
        if(nombre != '' && mail != '' && tel != '' && foto != ''&& foto != undefined){
          //Enviar datos al Servidor. buildphogap 2.9
            //navigator.notification.beep(2);
            fn.enviarRegistro(nombre, mail, tel, foto);
        }else{
          //alert("Todos los campos son requeridos."); 
          navigator.notification.alert("Todos los campos son requeridos.", null,'Error', 'Aceptar');
        }
    },
    enviarRegistro: function(nom, mail, tel, foto){
        $.ajax({
            type: "POST",
            url: "http://carlos.igitsoft.com/apps/test.php",
            data: { nom: nom, mail:mail, tel: tel }
        }).done(function( respuesta ) {
            //alert( "Data Saved: " + respuesta );
            if(respuesta == '1')
                myTransfer.ft.unload(foto, "http://carlos.igitsoft.com/apps/test.php");
                myTransfer.subido, myTransfer.error, myTransfer.opciones, true);
        });
    }
};
$(fn.init);
