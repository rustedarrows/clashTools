'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.vods').factory('League', ['$resource',
    function($resource) {
        return $resource('league/:leagueName', {}, {
            get: { isArray: true }
        });
    }
]);
