(function() {

    'use strict';

    angular
        .module('app')
        .factory('MapsService', MapsService);

    MapsService.$inject = [];

    /**
     * Service for checking if the current user is authenticated
     */
    function MapsService() {

        var service = {
            map: {
                center: {
                    latitude: 47.994319,
                    longitude: 7.840365
                },
                zoom: 12,
                options: {
                    disableDefaultUI: true,
                    styles: [
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
                    ]
                }
            },
            markers: [
                {
                    id: 1,
                    coords: {
                        latitude: 47.9873111,
                        longitude: 7.79642
                    },
                    content: {
                        category: 'family',
                        title: 'Marker Test 1',
                        teaserText: 'Lorem'
                    },
                    icon: 'images/map/marker-bad-orange.png',
                    options: {
                        boxClass: 'custom-marker-window'
                    },
                    show: false
                },
                {
                    id: 2,
                    coords: {
                        latitude: 47.963983,
                        longitude: 7.908343
                    },
                    content: {
                        category: 'freetime',
                        title: 'Marker Test 2',
                        teaserText: 'Lorem'
                    },
                    icon: 'images/map/marker-bad-green.png',
                    options: {
                        boxClass: 'custom-marker-window'
                    },
                    show: false
                },
                {
                    id: 3,
                    coords: {
                        latitude: 48.032674,
                        longitude:  7.790927
                    },
                    content: {
                        category: 'culture',
                        title: 'Marker Test 3',
                        teaserText: 'Lorem'
                    },
                    icon: 'images/map/marker-bad-blue.png',
                    options: {
                        boxClass: 'custom-marker-window'
                    },
                    show: false
                }
            ],


            getMapData: getMapData,
            getMapMarkers: getMapMarkers,
        };

        return service;

        ///////////////



        /**
         * Returns the default map data with start position & styles.
         */
        function getMapData() {
            return service.map;
        }

        /**
         * Returns all markers for the map.
         */
        function getMapMarkers() {
            return service.markers;
        }


    }


})();