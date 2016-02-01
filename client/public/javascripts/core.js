// public/core.js
var transactionsModule = angular.module('transactionsModule', []);

function mainController($scope, $http) {
    $scope.formData = {};

    console.log('in main controller!!');
    // when landing on the page, get all transactions and save to scope
    $http.get('/transactions')
        .success(function(data) {
            $scope.transactions = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

}

mainController.$inject = ['$scope', '$http'];
angular.module('transactionsModule', []).controller('mainController', mainController);