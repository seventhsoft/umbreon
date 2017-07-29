angular.module('kuniH')
 .controller("MainControlador", MainControlador);
    MainControlador.$inject = ['$location','Servicio'];
    function MainControlador($location,Servicio){
        console.log("IniciaMain");
        var mc = this;
        mc.tipo = "";
        mc.parametros = $location.search();
        if(mc.parametros.tipo !== undefined){
            Servicio.parametros = mc.parametros;
            mc.tipo = mc.parametros.tipo;
        };
    };


