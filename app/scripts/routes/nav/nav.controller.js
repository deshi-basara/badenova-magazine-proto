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
        function openFeed() {
            ctrl.open.feed = true;
        }

        //////////////////////

        angular.extend(ctrl, {
            feedItems: NavService.getFeedItems(),
            open: {
                feed: false
            },

            openFeed: openFeed
        });

        ///////////////////////

        //=> All broadcast listeners

        //////////////////////

        //openFeedModal();
    }

})();