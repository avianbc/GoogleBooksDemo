(function() {
    "use strict";

    angular.module("app", [
        "ngResource",
        "ngRoute",
        "ngCookies",
        "ngAnimate",

        "app.routes",
        "app.config",
        "common",
        "search",
        "user",

        // 3rd party modules
        "angular-loading-bar",
        "ui.bootstrap"
    ]);

}());