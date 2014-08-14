'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.vods').factory('Vods', ['$resource', function($resource) {
    return $resource('vods/:vodId', {
        vodId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);
