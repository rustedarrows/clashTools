'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.profile').factory('Profile', ['$resource', function($resource) {
    return $resource('profile/:profileId', {
        profileId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);
