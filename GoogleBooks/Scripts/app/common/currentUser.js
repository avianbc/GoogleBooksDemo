(function () {
    "use strict";

    angular
        .module("common")
        .factory("currentUser", function currentUser() {
            var profile = {
                isLoggedIn: false,
                username: ""
            };

            var setProfile = function (username, isLoggedIn) {
                profile.username = username;
                profile.isLoggedIn = isLoggedIn;
            };

            var getProfile = function () {
                return profile;
            }

            var logOut = function () {
                setProfile("", false);
            };

            var logIn = function (username) {
                setProfile(username, true);
            };

            return {
                logIn: logIn,
                logOut: logOut,
                setProfile: setProfile,
                getProfile: getProfile
            }
        });
})();
