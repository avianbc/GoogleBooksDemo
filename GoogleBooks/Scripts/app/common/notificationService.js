(function () {
    "use strict";

    angular
		.module("common", [])
		.factory("notificationService", function () {
            return {
                success: function (text) {
                    toastr.success(text, "Success");
                },
                error: function (text) {
                    toastr.error(text, "Error");
                },
                info: function (text) {
                    toastr.info(text);
                },
                warning: function (text) {
                    toastr.warning(text, "Warning");
                }
            };
        });

}());