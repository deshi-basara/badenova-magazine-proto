(function () {

    'use strict';

    angular
        .module('app')
        .controller('NavCtrl', NavCtrl);

    NavCtrl.$inject = ['$modal', 'NavService'];

    /**
     * Handles the landing view and all interactions
     */
    function NavCtrl($modal, NavService) {
        var ctrl = this;

        /**
         * Opens the feedbar-modal.
         */
        function openFeedModal() {
            var modalInstance = $modal.open({
                templateUrl: 'feed-modal.html',
                controller: 'NavModalCtrl',
                controllerAs: 'modal',
                size: 'lg'
            });
        }

        //////////////////////

        angular.extend(ctrl, {

            openFeedModal: openFeedModal
        });

        ///////////////////////

        //=> All broadcast listeners

        //////////////////////

        openFeedModal();
    }

})();