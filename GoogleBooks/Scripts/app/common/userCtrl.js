(function () {
    "use strict";

    angular
        .module("user")
        .controller("userCtrl", ["userService", "notificationService", "currentUser", function (userService, notificationService, currentUser) {
            var vm = this;

            vm.username = "";
            vm.password = "";
            vm.confirmPassword = "";
            vm.profile = currentUser.getProfile();

            vm.logIn = function () {
                userService.login.loginUser({
                    "grant_type": "password",
                    username: vm.username,
                    password: vm.password
                },
                function (data, status, headers, config) {
                    currentUser.logIn(vm.username);

                    vm.profile = currentUser.getProfile();
                    vm.username = "",
                    vm.password = "";
                    vm.confirmPassword = "";

                    window.location = "#/search";
                },
                function (data, status, headers, config) {
                    notificationService.error("The user name or password is incorrect.");
                });
            };

            vm.logOut = function () {
                userService.logout.logoutUser(null,
                function (data, status, headers, config) {
                    currentUser.logOut();

                    window.location = "#/login";

                    notificationService.success("You have been logged out.");
                },
                function () { 
                    notificationService.error("Cannot communicate with server.");
                });
            };

            vm.register = function () {
                userService.register.newUser({
                    Email: vm.username,
                    Password: vm.password,
                    ConfirmPassword: vm.confirmPassword
                },
                function (data) {
                    vm.password = "";
                    vm.confirmPassword = "";

                    notificationService.success("Registration Complete.  You may now log in using these credentials.");

                    window.location = "#/login";
                },
                function (response) {
                    var errors = parseErrors(response.data);

                    if (errors.length > 0) {
                        notificationService.error(errors.join("<br/>"));
                    } else {
                        notificationService.error("Cannot communicate with server.");
                    }
                });

            };

            function parseErrors(response) {
                var errors = [];
                for (var key in response.ModelState) {
                    for (var i = 0; i < response.ModelState[key].length; i++) {
                        errors.push(response.ModelState[key][i]);
                    }
                }
                return errors;
            }
        }]);
}());