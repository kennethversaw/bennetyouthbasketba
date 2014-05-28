

var myApp = angular.module('speakerSignUp', ['ngResource']).service('Task', function ($resource) {
    return $resource('https://posts.azure-mobile.net/Tables/TodoItem/:taskId', { taskId: '@id' },
        {
            'update': { method: 'PATCH' }
        });
});

myApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common['X-ZUMO-APPLICATION'] = 'ntMCDKYirFXamyADNZgPSJsDSOHjSX79';
    $httpProvider.defaults.headers.common['Content-Type'] = 'Application/json';

}]);




