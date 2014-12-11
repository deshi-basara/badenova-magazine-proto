(function() {

    'use strict';

    angular
        .module('app')
        .factory('FeedService', FeedService);

    FeedService.$inject = ['$q', 'localStorageService'];

    /**
     * Service for checking if the current user is authenticated
     */
    function FeedService($q, localStorageService) {

        var service = {
            feedItems: [
                {id: 1, img: 'culture.png', name: 'Kultur', color: 'feed-light-blue'},
                {id: 2, img: 'family.png', name: 'Familie', color: 'feed-light-orange'},
                {id: 3, img: 'freetime.png', name: 'Freizeit', color: 'feed-light-green'},
                {id: 4, img: 'greenenergy.png', name: 'Ökostrom', color: 'feed-light-blue'},
                {id: 5, img: 'naturalgas.png', name: 'Erdgas', color: 'feed-light-orange'},
                {id: 6, img: 'nature.png', name: 'Natur', color: 'feed-light-green'},
                {id: 7, img: 'news.png', name: 'Aktuelles', color: 'feed-light-blue'},
                {id: 8, img: 'saveenergy.png', name: 'Energie sparen', color: 'feed-light-orange'}
            ],

            getFeedValues: getFeedValues,
            initFeed: initFeed
        };

        return service;

        ///////////////

        /**
         * Initiates all database values on the first run.
         * @param  {Function} cb [Callback: true = error]
         */
        function initFeed(cb) {

            if(localStorageService.isSupported) {

                // check if the feed was already set
                var isInit = localStorageService.get('feed-init');
                if(!isInit) {
                    // insert each category item into the storage
                    for (var i = 0; i < service.feedItems.length; i++) {
                        var currentId = service.feedItems[i].id;

                        localStorageService.set(currentId, true);
                    };

                    // set feed-init to set
                    localStorageService.set('feed-init', true);

                    // successfully inserted
                    return cb();
                }

                // already initiated
                return cb();
            }

            // no localstorage support
            return cb(true);
        }

        /**
         * Fetches all feedItems from the localStorage
         */
        function getFeedValues() {
            
        }

    }


})();