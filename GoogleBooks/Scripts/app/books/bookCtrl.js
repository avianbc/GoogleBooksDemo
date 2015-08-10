(function() {
	"use strict";

	angular
		.module("search", [])
		.controller("bookCtrl", ["bookService", "notificationService", function ( bookService, notificationService) {
			var vm = this;

			vm.volumes = [];
			vm.totalItems = 0;
			vm.currentPage = 1;

			vm.q = "National Parks";
			vm.maxResults = 40;     // must be between 10 and 40 items as per google @ https://developers.google.com/books/docs/v1/using

			vm.get = function () {
				bookService.get({
					q: vm.q,
					maxResults: vm.maxResults,
					startIndex: (vm.currentPage - 1) * vm.maxResults
				},
				function (data) {
				    vm.volumes = data.items;
				    vm.totalItems = data.totalItems;

				    if (data.totalItems < 1) {
				        notificationService.error("Your search returned no results  :(");
				    }
				},
				function (response) {
				    notificationService.error("Error fetching books! Server Code " + response.status + " - " + response.statusText);
				});
			};

			vm.search = function () {
				vm.volumes = [];
				vm.totalItems = 0;
				vm.currentPage = 1;
				vm.get();
			};
		}]);

}());