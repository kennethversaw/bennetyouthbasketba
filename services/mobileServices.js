'use strict';

angular.module('mobileServices', ['ngResource']).factory('Task', function ($resource) {
    return $resource('https://posts.azure-mobile.net/Tables/TodoItem/:taskId', { taskId: '@id' },
        {
            'update': {method: 'PATCH'}
        });
});


