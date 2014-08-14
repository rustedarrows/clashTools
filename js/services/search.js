'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.system').factory('Search', ['$resource',
    function($resource) {
        return $resource('search/:searchTerm', {}, {
            get: { isArray: true }
        });
    }
]);
