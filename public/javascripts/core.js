// public/core.js
var transactionsModule = angular.module('transactionsModule', []);

function mainController($scope, $http) {
    $scope.formData = {};

    console.log('in main controller!!');
    // when landing on the page, get all transactions and show them
    $http.get('/transactions')
        .success(function(data) {
            $scope.transactions = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

}