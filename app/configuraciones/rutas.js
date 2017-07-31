(function () { 
    'use strict';
    angular
    .module("kuniH")
    .constant('Rutas',{
        /* DEV */
        RUTABK : 'http://localhost:8080/lfs',
        RUTAFR : 'http://localhost:8383/umbreon'
        /* DEV */
        /* PRODUCCION *
        RUTABK : 'http://api.juegakuni.com.mx/lfs',
        RUTAFR : 'http://juegakuni.com.mx'
        /* PRODUCCION */
    });
})();