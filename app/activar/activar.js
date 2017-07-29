angular
    .module("kuniH")
    .controller("activarControlador", activarControlador);
activarControlador.$inject = ['Servicio'];
function activarControlador(Servicio){
   console.log("Inicia activar controller");
    var ac = this;
    ac.activado = false;
    ac.parametros = Servicio.parametros;
    ac.activarUsuario = activarUsuario;
    ac.activarUsuario();
    function activarUsuario(){
        if(ac.parametros.iu !== undefined){
            Servicio.activarUsuario(ac.parametros.iu)
            .then(
                function(){
                    ac.activado = true;
                }
            );
        };
    };

};