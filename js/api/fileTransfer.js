//fileTransfer.js
var myTransfer = {
    subido: function(r){
        //Respuesta satisfactoria.
        if(r.response == '1'){
            $.mobile.loading('hide');
            navigator.notification.alert("Se ha registrado correctamente", function(){
                window.location.href = '#home';
                //Asignar registro local
                fn.storage.setItem('registro', 1); //Guardar localmente un dato. WebSQL.
            }, "Felicidades", "Aceptar");
        }
    },
    error: function(err){
        navigator.notification.alert("Error: " +err.code, null, "Error", "Aceptar");
    },
    subir: function(uri, url){
        myTransfer.opciones = new FileUploadOptions();
        myTransfer.opciones.fileKey = "foto"; //"file";
        myTransfer.opciones.fileName = "Luis"; //fileURL.substr(fileURL.lastIndexOf('/') + 1);
        myTransfer.opciones.mimeType = "image/jpg"; //"text/plain";  
        myTransfer.opciones.params = {value1: 'Text', value2: 'param'};
        
        myTransfer.ft = new FileTransfer();
        myTransfer.ft.upload(uri, url, myTransfer.subido, myTransfer.error, myTransfer.opciones);
    }
};


