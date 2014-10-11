//fileTransfer.js
var myTransfer = {
    subido: function(r){
        //Respuesta satisfactoria.
        if(r.response == '1'){
            navigator.notification.alert("Se ha registrado correctamente", function(){
                window.location.href = '#home';
                //Asignar registro local
            }, "Felicidades", "Aceptar");
        }
    },
    error: function(err){
        navigator.notification.alert("Error: " +err.code, null, "Error", "Aceptar");
    },
    opciones: new FileUploadOptions(),
    ft: new FileTransfer();
};

myTransfer.opciones.fileKey = "foto"; //"file";
myTransfer.opciones.fileName = "Luis"; //fileURL.substr(fileURL.lastIndexOf('/') + 1);
myTransfer.opciones.mimeType = "image/jpg"; //"text/plain";  
myTransfer.opciones.params = {value1: 'Text', value2: 'param'};


