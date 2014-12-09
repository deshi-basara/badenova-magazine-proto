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
         * Toggles the left boxes identified by their name-
         * @param  {string} boxName [Name of the box we want to toggle]
         */
        function toggleBox(boxName) {
            ctrl.open[boxName] = true;
            // change the close button
            ctrl.openBoxName = boxName;
        }

        /**
         * Toggles the right feedbar-box.
         */
        function toggleFeed() {
            console.log(ctrl.openBoxName);
            // check if there is already a box open
            if(ctrl.openBoxName) {
                // close open box & reset button
                ctrl.open[ctrl.openBoxName] = false;
                ctrl.openBoxName = null;
            }
            else {
                // no box open, user wants to see the feed-box
                ctrl.open.feed = (ctrl.open.feed === false) ? true : false;
                ctrl.openBoxName = 'feed';
            }
        }

        //////////////////////

        angular.extend(ctrl, {
            feedItems: NavService.getFeedItems(),
            open: {
                feed: false,
                search: false
            },
            openBoxName: null,

            toggleBox: toggleBox,
            toggleFeed: toggleFeed
        });

        ///////////////////////

        //=> All broadcast listeners

        //////////////////////

        //openFeedModal();
    }

})();