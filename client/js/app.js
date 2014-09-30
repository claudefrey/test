//TODO : changer le nom du module, même valeur que dans index.html
angular.module('clement', ['ngRoute', 'controllers', 'services', 'directives', 'filters'])
    .config(function ($routeProvider,$httpProvider) {
        $routeProvider.when('/', {templateUrl: 'clement.html'})
            .otherwise({
                redirectTo: '/error'
            });
    })



/*Ajout des modules externes*/

angular.module('controllers', []);
angular.module('services', []);
angular.module('directives', []);
angular.module('filters', []);