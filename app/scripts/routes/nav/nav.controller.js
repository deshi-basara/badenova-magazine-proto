(function () {

    'use strict';

    angular
        .module('app')
        .controller('NavCtrl', NavCtrl);

    NavCtrl.$inject = ['$modal', 'NavService', 'uiGmapGoogleMapApi', '$timeout', '$document'];

    /**
     * Handles the landing view and all interactions
     */
    function NavCtrl($modal, NavService, uiGmapGoogleMapApi, $timeout, $document) {
        var ctrl = this;

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
         * Is called whenever a marker on the map is clicked.
         */
        function onMarkerClicked(marker) {
            console.log(marker);
        }

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
            exportLoading: false,
            feedItems: NavService.getFeedItems(),
            navDocked: false,
            open: {
                feed: false,
                search: false,
                map: false
            },
            openBoxName: null,

            exportPdf: exportPdf,
            toggleBox: toggleBox,
            toggleFeed: toggleFeed,
            toggleFeedCategory: toggleFeedCategory
        });

        ///////////////////////

        angular.element(document).ready(function() {

            /**
             * Watches the scroll position of the container (debounced).
             */
            var scrollContainer = angular.element(document.getElementsByClassName('nested-container'));
            scrollContainer.on('scroll', function() {
                $timeout(function() {
                    // if the user scrolled down 200px, dock the side navigation
                    if(scrollContainer[0].scrollTop >= 200) {
                        ctrl.navDocked = true;
                    }
                    else {
                        ctrl.navDocked = false;
                    }
                }, 700)
            });

            /**
             * Hide the loader, when dom is ready
             */
            $timeout(function() {
                ctrl.preloaderHide = true;
            }, 1000);

        });

        //////////////////////

        //openFeedModal();

        uiGmapGoogleMapApi.then(function(maps) {
            var mapStyles = [
                {
                    "featureType": "road",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "stylers": [
                        {
                            "color": "#5f94ff"
                        },
                        {
                            "lightness": 26
                        },
                        {
                            "gamma": 5.86
                        }
                    ]
                },
                {},
                {
                    "featureType": "road.highway",
                    "stylers": [
                        {
                            "weight": 0.6
                        },
                        {
                            "saturation": -85
                        },
                        {
                            "lightness": 61
                        }
                    ]
                },
                {
                    "featureType": "road"
                },
                {},
                {
                    "featureType": "landscape",
                    "stylers": [
                        {
                            "hue": "#0066ff"
                        },
                        {
                            "saturation": 74
                        },
                        {
                            "lightness": 100
                        }
                    ]
                }
            ];

            // start in freiburg
            ctrl.map = {
                center: {
                    latitude: 47.9873111,
                    longitude: 7.79642
                },
                zoom: 12,
                options: {
                    disableDefaultUI: true,
                    styles: mapStyles
                }
            };

            // markers
            ctrl.mapMarkers = [
                {id: 1, coords: {latitude: 47.9873111, longitude: 7.79642}, content: {
                    category: 'family',
                    title: 'Marker Test 1',
                    teaserText: 'Lorem'
                }, options: {
                    boxClass: 'custom-marker-window'
                },
                show: false}
            ];

            // add the marker click events to each marker
            angular.forEach(ctrl.mapMarkers, function(marker) {
                marker.onClicked = function() {
                    onMarkerClicked(marker);
                };
            });
        });

    }

})();