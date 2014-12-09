(function () {

    'use strict';

    angular
        .module('app')
        .controller('LandingCtrl', LandingCtrl);

    LandingCtrl.$inject = ['$scope', '$rootScope'];

    /**
     * Handles the landing view and all interactions
     */
    function LandingCtrl($scope, $rootScope) {
        var ctrl = this;


    function loadModalFunction() {
    var last = $scope.images[$scope.images.length - 1];
    for(var i = 1; i <= 9; i++) {
      $scope.images.push(last + i);
    }
}

    

        //////////////////////

        angular.extend(ctrl, {
            articles: [1, 2, 3, 4, 5, 6, 7, 8, 9],

            loadModal: loadModalFunction
        });

        ///////////////////////

        //=> All broadcast listeners

        //////////////////////

        //=> All controller autostart functions
    }

})();