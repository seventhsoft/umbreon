(function () {
    'use strict';
    angular
        .module("kuniH")
        .factory("Servicio", Servicio);
    Servicio.$inject = ['$http','Rutas'];
    function Servicio($http,Rutas){
        var servicio = {
            parametros : {},
            activarUsuario : activarUsuario,
            recuperarPassword : recuperarPassword,
            redirecionarBanner : redirecionarBanner
        };
        return servicio;
        
        function activarUsuario(idUsuario){
            var ruta = Rutas.RUTABK+"/usuarios/jugadores/activar/"+idUsuario;
            return $http.get(ruta);
        };
        
        function recuperarPassword(key,parametros){
            var ruta = Rutas.RUTABK+"/usuarios/recuperar/password/"+key;
            return $http.put(ruta,parametros);
        };
        
        function redirecionarBanner(idBanner){
            var ruta = Rutas.RUTABK+"/banner/interaccion/"+idBanner;
            return $http.put(ruta);
        };
        
    };
})();

