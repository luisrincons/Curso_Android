//network-info.js
var connection = {
    estaConectado: function(){
        if(navigator.connection.type != connection.NONE){
            return true
        else
            return false;
        
    }
}
