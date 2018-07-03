
angular.module('app-prac',[])
    .controller('pracController', pracController)

    function pracController($scope) {
        var vm = this;
        vm.name = 'hello prac';
        $scope.address = 'patan';

        vm.name1 = 'hello world';
        $scope.address1 = 'jawalakhel';
    }
