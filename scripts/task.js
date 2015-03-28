'use strict';

app.controller('TaskController', ['$scope','$firebase','FURL','$location', function($scope, $firebase, FURL, $location){

    var ref = new Firebase(FURL);
    var fbTasks = $firebase(ref.child('tasks')).$asArray();

    $scope.tasks = fbTasks;

    $scope.postTask = function(task) {
        $scope.tasks.$add(task);
        $location.path('/');
    };


}]);

