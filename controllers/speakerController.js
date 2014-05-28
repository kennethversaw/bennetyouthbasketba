myApp.controller('speakerCtrl', function ($scope, Task) {
    $scope.FirstName = 'Ken';
    $scope.LastName = 'Versaw';
    $scope.tasks = Task.query();
    $scope.newTask = new Task();

    $scope.Change = function Change() {
      window.alert();
       
    }
    // saving a new task
    $scope.createTask = function () {
        // call the service
        $scope.newTask.$save(function () {
            // when saved, reload the list and recreate a new task
            $scope.tasks = Task.query();
            $scope.newTask = new Task();
        });
    }

    // removing a task
    $scope.deleteTask = function (task) {
        // call the service
        task.$delete(function () {
            // when deleted, reload the list
            $scope.tasks = Task.query();
        });
    }

    // saving an existing task
    $scope.updateTask = function (task) {
        // call the service
        task.$update();
    }


});