angular.module('products', ['ui.bootstrap']);

function TodoCtrl($scope, $http){
  $scope.newTodo = '';
  $scope.todos = ["Loading..."];
  $scope.addNewTodo = function(){
    $scope.todos.push($scope.newTodo);
    $scope.save($scope.newTodo);
    $scope.newTodo = '';
  };

  $scope.save = function(todo) {
    $http.post('/todo/new', {todo: todo});
  };

  $scope.loadTodos = function(){
    $http.get('/todos.json').success(function(data){
      console.log(data);
      $scope.todos = data;
    }); 
  };

  $scope.loadTodos();
}
