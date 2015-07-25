'use strict';

angular.module('mobileServices', ['ngResource']).factory('Speaker', function ($resource) {
    return $resource('https://posts.azure-mobile.net/Tables/Speaker/:speakerId', { speakerId: '@id' },
        {
            'update': {method: 'PATCH'}
        });
});


