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
        //document.addEventListener("deviceready", yourCallbackFunction, false); //phonga
        document.addEventListener('deviceready',fn.device,false);
        //$('#regSend').click(); //Producir un click
    },
    device: function(){
      var x = false;
      if(!x)
        window.location.href =  '#reg';
      $('#regSend').click(fn.registro);
    },
    registro: function(){
        var nombre = $('#regName').val();
        var mail = $('#regMail').val();
        var tel = $('#regTel').val(); 
        if(nombre != '' && mail != '' && tel != ''){
          //Enviar datos al Servidor.
            
        }else{
          alert("Todos los campos son requeridos.");
        }
        
        
    }
};
$(fn.init);
