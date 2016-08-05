angular.module('calc', [])
  .controller('calcController', function($scope, calcFactory) {
    $scope.total = calcFactory.getTotal();
    $scope.operations = calcFactory.operations;
    $scope.numbers = calcFactory.numbers;
  })

  .factory('calcFactory', function(){
    var operations = {
      add: function(a, b){
        return a+b;
      },
      subtract: function(a, b){
        return a-b;
      },
      multiply: function(a, b){
        return a*b;
      },
      divide: function(a, b){
        return a/b;
      }
    }

    function numberConstructor(number){
      return function(fn){
        if(arguments.length === 0){
          return number;
        } else {
          return fn(number);
        }
      }
    }

    var numbers = {
      zero: numberConstructor(0),
      one: numberConstructor(1),
      two: numberConstructor(2),
      three: numberConstructor(3),
      four: numberConstructor(4),
      five: numberConstructor(5),
      six: numberConstructor(6),
      seven: numberConstructor(7),
      eight: numberConstructor(8),
      nine: numberConstructor(9)
    }

    var getTotal = function(operation, number){
      return arguments.length ? operation(number) : 0; 
    }

    return {
      getTotal: getTotal,
      operations: operations,
      numbers:numbers
    }
  })