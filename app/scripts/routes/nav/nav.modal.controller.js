(function () {

    'use strict';

    angular
        .module('app')
        .controller('NavModalCtrl', NavModalCtrl);

    NavModalCtrl.$inject = ['$modalInstance', 'NavService'];

    /**
     * Handles the job-modal view and all interactions
     */
    function NavModalCtrl($modalInstance, NavService) {
        var modal = this;

        /**
         * Closes the modal box.
         */
        function closeModal() {
          $modalInstance.dismiss('cancel');
        }

        /**
         * Closes the server-modal and sends all selected files to the
         * regular job-controller.
         */
        function okModal() {


          closeModal();
        }

        //////////////////////

        angular.extend(modal, {
          feedItems: NavService.getFeedItems(),

          closeModal: closeModal,
          okModal: okModal,
        });

        //////////////////////

    }

})();
