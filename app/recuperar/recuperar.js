angular.module('kuniH')
 .controller("RecuperarControlador", RecuperarControlador);
    RecuperarControlador.$inject = ['Servicio'];
    function RecuperarControlador(Servicio){
        console.log("IniciaRecuperacion");
        var rc = this;
        rc.password = "";
        rc.confirmacion = "";
        rc.listo = false;
        rc.parametros = Servicio.parametros;
        rc.restablecer = restablecer;
        
        function restablecer(){
            if(rc.password === null || rc.password === ""){
                return mensaje("alert","Aviso","Debe ingresar una contraseña valida.");
            };
            if(rc.password.length < 4){ 
                return mensaje("error","Aviso","La contraseña debe tener al menos 4 caracteres.");
            };
            if(rc.password !== rc.confirmacion){
                return mensaje("error","Aviso","Las contraseñas no coninciden.");
            };
            if(rc.parametros.iu === undefined || rc.parametros.key === undefined){
                return mensaje("error","Aviso","Vigencia terminada.");
            };
            var parametros = {
                "idUsuario":rc.parametros.iu,
                "password":rc.password
            };

            Servicio.recuperarPassword(rc.parametros.key,parametros)
            .then(
                function(response){
                    if(response.status === 200){
                        rc.listo = true;
                        return mensaje("success","Aviso","Constraseña modificada correctamente.");
                    }else{
                        return mensaje("error","Aviso","Vigencia terminada.");
                    };
                },
                function(){
                    return mensajes("error","Aviso","Ocurrio un error inesperado, por favor intentelo más tarde.");
                }
            );
        };
    };