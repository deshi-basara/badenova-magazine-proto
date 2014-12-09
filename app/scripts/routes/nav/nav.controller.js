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
        function toggleFeed() {
            ctrl.open.feed = (ctrl.open.feed === false) ? true : false;
        }

        //////////////////////

        angular.extend(ctrl, {
            feedItems: NavService.getFeedItems(),
            open: {
                feed: false
            },

            toggleFeed: toggleFeed
        });

        ///////////////////////

        //=> All broadcast listeners

        //////////////////////

        //openFeedModal();
    }

})();