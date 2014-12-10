var myAppModule = angular.module("myApp", []);

myAppModule.controller('ListController', function($scope){
    $scope.items=[
     {name: 'apple', price: 2.5, quantity:0, totalPrice: 0},
     {name: 'orange', price: 3.4,quantity:0, totalPrice: 0},
     {name: 'banana', price: 4.8, quantity:0,totalPrice: 0}
    ];

    $scope.totalPrice = function($index){
        $scope.items[$index].totalPrice = $scope.items[$index].price * $scope.items[$index].quantity;
    }

})
