(function () {

    'use strict';

    angular
        .module('app')
        .controller('NavCtrl', NavCtrl);

    NavCtrl.$inject = ['$modal', 'NavService', 'uiGmapGoogleMapApi'];

    /**
     * Handles the landing view and all interactions
     */
    function NavCtrl($modal, NavService, uiGmapGoogleMapApi) {
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

        /**
         * Toggles the feed-category on or off.
         * @param  {int}    categoryId [Array-index of the category we want to toggle]
         */
        function toggleFeedCategory(categoryId) {
            var categoryObject = ctrl.feedItems[categoryId];

            // toggle it
            ctrl.feedItems[categoryId].active = (categoryObject.active === false) ? true : false;
        }

        //////////////////////

        angular.extend(ctrl, {
            feedItems: NavService.getFeedItems(),
            open: {
                feed: false,
                search: false,
                map: false
            },
            openBoxName: null,

            toggleBox: toggleBox,
            toggleFeed: toggleFeed,
            toggleFeedCategory: toggleFeedCategory
        });

        ///////////////////////

        //=> All broadcast listeners

        //////////////////////

        //openFeedModal();

        uiGmapGoogleMapApi.then(function(maps) {
            // start in freiburg
            ctrl.map = { center: { latitude: 47.9873111, longitude: 7.79642 }, zoom: 12 };
        });

    }

})();