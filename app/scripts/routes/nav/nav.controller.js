(function () {

    'use strict';

    angular
        .module('app')
        .controller('NavCtrl', NavCtrl);

    NavCtrl.$inject = ['FeedService', 'ArticlesService', 'MapsService', 'uiGmapGoogleMapApi', '$timeout',
                        '$document', '$rootScope', '$scope', '$window'];

    /**
     * Handles the landing view and all interactions
     */
    function NavCtrl(FeedService, ArticlesService, MapsService, uiGmapGoogleMapApi, $timeout,
                        $document, $rootScope, $scope, $window) {
        var ctrl = this;
        var scrollContainer = null;
        var mapInit = false;

        /**
         * Debounced function, that checks the scroll position every 700ms and
         * docks or undocks the navigation.
         */
        var checkScrollPosition = debounceFunction(function() {
            // if the user scrolled down 200px, dock the side navigation
            if(scrollContainer[0].scrollTop >= 200) {
                ctrl.navDocked = true;
            }
            else {
                ctrl.navDocked = false;
            }

            $scope.$apply();

            // if the user reached the container end, start infinite loading
            /*var containerHeight = (scrollContainer[0].scrollHeight/2);
            var containerDistance = (scrollContainer[0].scrollHeight - scrollContainer[0].scrollTop);
            console.log(containerHeight + ' >= ' + containerDistance);
            if(containerHeight >= containerDistance) {
                // start lazy loading
                $rootScope.$broadcast('load.more');
            }*/

        }, 500);

        /**
         * Debouncing function.
         * @param  {function} func      [Function we want to debounce]
         * @param  {int}      wait      [Time between function calls in ms]
         * @param  {boolean}  immediate [True: trigger the function on the eading edge, instead of the trailing]
         * @return {function}
         */
        function debounceFunction(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        }

        /**
         * Fakes an pdf export and handles the export animation.
         */
        function exportPdf() {
            // start loading
            ctrl.exportLoading = true;

            // wait 3000ms before exporting the pdf
            $timeout(function() {
                window.open('https://www.badenova.de/mediapool/media/dokumente/unternehmensbereiche_1/kommunikation_1/printmedien_1/meine_energie/2014_3/meine_energie_04-2014.pdf');
            ctrl.exportLoading = false;
            }, 3000);
        }

        /**
         * Initializes all needed features and markers for the GoogleMaps side-box.
         */
        function initMaps() {
            // only initiate the map once
            if(!mapInit) {

                // start in freiburg
                ctrl.map = MapsService.getMapData();

                // markers
                ctrl.mapMarkers = MapsService.getMapMarkers();

                // add the marker click events to each marker
                angular.forEach(ctrl.mapMarkers, function(marker) {
                    marker.onClicked = function() {
                        onMarkerClicked(marker);
                    };
                });

                mapInit = true;

                // start fake gps connection
                $timeout(function() {
                    ctrl.gpsLoading = false;
                }, 4000);
            }
        }

        /**
         * Is called whenever a marker on the map is clicked.
         */
        function onMarkerClicked(marker) {
            console.log(marker);
        }

        /**
         * Initiates a fake search inside the articles-array.
         * Manipulates the result-array which has a ng-repeat binding.
         * @return {[type]} [description]
         */
        function startSearch() {

        }

        /**
         * Toggles the left boxes identified by their name-
         * @param  {string} boxName [Name of the box we want to toggle]
         */
        function toggleBox(boxName) {
            // if map is called, try to initiate the map once
            if(boxName === 'map') {
                initMaps();
            }

            // if the user wants to close the current box by clicking the navigation item
            if(ctrl.openBoxName === boxName) {
                ctrl.open[ctrl.openBoxName] = false
                ctrl.openBoxName = null;

                return;
            }
            // close the current box, if open
            if(ctrl.openBoxName) {
                ctrl.open[ctrl.openBoxName] = false;
            }
            // open the current box
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

            // broadcast the change
            if(ctrl.feedItems[categoryId].active) {
                $rootScope.$broadcast('feed.add', ctrl.feedItems[categoryId].category);
            }
            else {
                $rootScope.$broadcast('feed.remove', ctrl.feedItems[categoryId].category);
            }
        }

        //////////////////////

        angular.extend(ctrl, {
            articles: ArticlesService.getAllArticles(),
            exportLoading: false,
            feedItems: FeedService.getFeedItems(),
            gpsLoading: true,
            isMobile: $window.matchMedia('(max-width: 620px)').matches,
            navDocked: false,
            open: {
                feed: false,
                search: false,
                map: false
            },
            openBoxName: null,
            searchString: '',
            searchResults: [],

            exportPdf: exportPdf,
            startSearch: startSearch,
            toggleBox: toggleBox,
            toggleFeed: toggleFeed,
            toggleFeedCategory: toggleFeedCategory
        });

        ///////////////////////

        angular.element(document).ready(function() {

            /**
             * Hide the loader, when dom is ready
             */
            $timeout(function() {
                /**
                 * Watches the scroll position of the container (debounced).
                 */
                scrollContainer = angular.element(document.getElementsByClassName('nested-container'));
                scrollContainer.bind('scroll', function() {
                    checkScrollPosition();
                });
            }, 1000);

        });

        //////////////////////


        /**
        * Listen for fake loader events.
        */
        $rootScope.$on('$locationChangeStart', function() {
            ctrl.isLoading = true;
        });
        $rootScope.$on('$locationChangeSuccess', function() {
            $timeout(function() {
                ctrl.isLoading = false;
            }, 1600);
        });

    }

})();