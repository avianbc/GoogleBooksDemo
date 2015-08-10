(function() {
    "use strict";

    angular
        .module("app.routes", ["ngRoute"])
        .config(["$routeProvider", function ($routeProvider) {

            $routeProvider.when("/", {
                redirectTo: "/search"
            });

            $routeProvider.when("/register", {
                templateUrl: "Book/Register"
            });

            $routeProvider.when("/login", {
                templateUrl: "Book/Login"
            });

            $routeProvider.when("/search", {
                templateUrl: "Book/Search",
                controller: "bookCtrl",
                controllerAs: "book"
            });

            $routeProvider.otherwise({
                redirectTo: "/search"
            });
        }]);

}());