var db = {
    crearDB: function(){
        var obj = window.openDatabase("hotel", "1.0", "Hotel Demo", 200000);
        return obj;
    },
    //--------------------PENDIENTES------------------
    agregarPendientes: function(th,ha,pr,di){
        db.th = th;
        db.ha = ha;
        db.pr = pr;
        db.di = di;
        db.crearDB().transaction(db.tablaPendientes,db.error,db.exitoPendientes);
    },
    tablaPendientes: function(tx){
        tx.executeSql("CREATE TABLE IF NOT EXISTS pendientes (id unique, th, ha, pr, di)");
        tx.executeSql("INSERT INTO pendientes (th, ha, pr, di) VALUES ('" + db.th + "', '" + db.ha + "', '" + db.pr + "', '" + db.di + "')");
    },
    exitoPendientes: function(){
        $.mobile.loading( 'hide' );
        navigator.notification.alert('Reserva en espera de conexión',null,'Guardado','Aceptar');
    },
    //-------------------HISTORIAL---------------------
    agregarHistorial: function(th,ha,pr,di){
        db.th = th;
        db.ha = ha;
        db.pr = pr;
        db.di = di;
        db.crearDB().transaction(db.tablaHistorial,db.error,db.exitoHistorial);
    },
    tablaHistorial: function(tx){
        tx.executeSql("CREATE TABLE IF NOT EXISTS historial (id unique, th, ha, pr, di)");
        tx.executeSql("INSERT INTO historial (th, ha, pr, di) VALUES ('" + db.th + "', '" + db.ha + "', '" + db.pr + "', '" + db.di + "')");
    },
    exitoHistorial: function(){
        $.mobile.loading( 'hide' );
        navigator.notification.alert('Se ha registrado su reserva',null,'Reserva Exitosa','Aceptar');
    },
    error: function(err){
        $.mobile.loading( 'hide' );
        alert('Error: '+err.code);
    }
}