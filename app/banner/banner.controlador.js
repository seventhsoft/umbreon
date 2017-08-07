angular
    .module("kuniH")
    .controller("bannerControlador", bannerControlador);
bannerControlador.$inject = ['Servicio','$window'];
function bannerControlador(Servicio,$window){
    Servicio.redirecionarBanner(Servicio.parametros.idBanner)
    .then(
        function(response){
            var ruta = response.data;
            $window.location.replace(ruta);
        },
        function(){
            $window.location.replace("http://rutaNoEncontrada");
        }
    );
};