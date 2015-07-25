
myApp.controller('speakerCtrl', function ($scope, Speaker) {
    //$scope.speakers = Speaker.query();
    
    $scope.speakers = Speaker.query();
    $scope.newSpeaker = new Speaker();
    $scope.nameFilter = null;
    $scope.createSpeaker = function () {
        // call the service
        $scope.newSpeaker.$save(function () {
            // when saved, reload the list and recreate a new task
            $scope.speakers= Speaker.query();
            $scope.newSpeaker = new Speaker();
        });
    }

    // removing a task
    $scope.deleteSpeaker= function (speaker) {
        // call the service
       speaker.$delete(function () {
            // when deleted, reload the list
           $scope.speakers = Speaker.query();
        });
    }

    // saving an existing task
    $scope.updateSpeaker = function (speaker) {
        // call the service
        speaker.$update();
        $scope.speakers = Speaker.query();
    }   
    
});