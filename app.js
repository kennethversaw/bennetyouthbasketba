

var myApp = angular.module('speakerSignUp', ['ngResource', 'ui.bootstrap', 'ngRoute']).service('Speaker', function ($resource) {
 
    return $resource('https://posts.azure-mobile.net/Tables/Speaker/:speakerId', { speakerId: '@id' },
        {
            'update': { method: 'PATCH' }
        });
});

myApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common['X-ZUMO-APPLICATION'] = 'ntMCDKYirFXamyADNZgPSJsDSOHjSX79';
    $httpProvider.defaults.headers.common['Content-Type'] = 'Application/json';

}]);




