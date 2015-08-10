(function() {
	"use strict";

	angular
		.module("user", [])
		.factory("userService", ["$resource", function ($resource) {
			return {
			    register: $resource("/api/Account/Register", null, {
			        "newUser": {
			            method: "POST"
			        }
			    }),
			    login: $resource("/Token", null, {
			        "loginUser": {
			            method: "POST",
			            headers: {
			                "Content-Type": "application/x-www-form-urlencoded"
			            },
			            transformRequest: function (data) {
			                var str = [];
			                for (var d in data) {
			                    str.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
			                }
			                return str.join("&");
			            }
			        }
			    }),
			    logout: $resource("/api/Account/Logout", null, {
			        "logoutUser": {
			            method: "POST"
			        }
			    }),
			    restoreSession: $resource("/api/Account/GetUserName", null, {
			        "userName": {
			            method: "GET"
			        }
			    })
			};
		}]);

}());