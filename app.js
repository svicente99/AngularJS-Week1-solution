(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller("LunchCheckController", LunchCheckController_func);
 
    LunchCheckController_func.$inject = ['$scope'];

    function LunchCheckController_func($scope) {

        $scope.checkLunch = function() {
            var nItens = count_itens($scope.lunch_itens);
            console.log(nItens);
            $scope.num_itens = '';
            if (nItens==0) {
                $scope.message = "Please enter data first";
                $scope.result = "No";
                $scope.valid = "No";
            }
            else
            if (nItens==-1) {
                $scope.message = "An empty item, like , , isn't allowed. Review your list...";
                $scope.result = "No";
                $scope.valid = "No";
            }
            else{
                var result = '==> ' + (nItens > 3 ? "Too much!" : "Enjoy!");
                console.log(result);
                $scope.valid = "Ok";
                $scope.message = result;
                $scope.result = (nItens > 3 ? "No" : "Ok");
                $scope.num_itens = '(' + nItens + " item" + (nItens > 1 ? "s" : "") + ')';
            }
        }

        function count_itens(userList) {
            if(userList==null) return 0;
            userList = userList.trim();
            if (userList=="")  return 0;
            var aList = userList.split(',');
            if(exist_empty_item(aList))  return -1;
            return (aList.length);
        }

        function exist_empty_item(aList) {
            for(var item in aList) {
                console.log(aList[item]);
                if (aList[item].trim()=="") return true;
            }
            return false;
        }

    }

}) ();