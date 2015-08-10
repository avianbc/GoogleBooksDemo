(function() {
	"use strict";

	angular
		.module("search")
		.factory("bookService", ["$resource", function ($resource) {

		    // see api reference @ https://developers.google.com/books/docs/v1/reference/volumes/list

		    var defaults = {
				fields: "items(volumeInfo(description,imageLinks/smallThumbnail,publishedDate,title)),totalItems",  // fetch only necessary data
				maxResults: 40
			};

			return $resource("https://www.googleapis.com/books/v1/volumes", defaults, { cache: true });
		}]);

}());