(function () {
    "use strict";

    var app = angular.module("app.config", []);

    app.config(["$httpProvider", function ($httpProvider) {

        // Add an interceptor for AJAX errors. Make user login again on 401 unauthorized
        $httpProvider.interceptors.push(["$q", "$location", function ($q, $location) {
            return {
                "responseError": function (response) {
                    if (response.status === 401) {
                        $location.url("/login");
                    }
                    return $q.reject(response);
                }
            };
        }]);
    }]);

    app.run(["userService", "currentUser", function (userService, currentUser) {

        // Set state for returning logged in users
        userService.restoreSession.userName(null,
            function (data, status, headers, config) {
                currentUser.logIn(data.user);
                window.location = "#/search"
            });
    }]);

}());