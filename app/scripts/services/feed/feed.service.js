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
                {id: 0, category: 'culture', name: 'Kultur', color: 'feed-light-blue', active: true },
                {id: 1, category: 'family', name: 'Familie', color: 'feed-light-orange', active: true},
                {id: 2, category: 'freetime', name: 'Freizeit', color: 'feed-light-green', active: true},
                {id: 3, category: 'greenenergy', name: 'Ökostrom', color: 'feed-light-blue', active: true},
                {id: 4, category: 'naturalgas', name: 'Erdgas', color: 'feed-light-orange', active: true},
                {id: 5, category: 'nature', name: 'Natur', color: 'feed-light-green', active: true},
                {id: 6, category: 'news', name: 'Aktuelles', color: 'feed-light-blue', active: true},
                {id: 7, category: 'saveenergy', name: 'Energie sparen', color: 'feed-light-orange', active: true}
            ],

            getFeedItems: getFeedItems,
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
         * Returns all feedItems from the service-object.
         */
        function getFeedItems() {
            return service.feedItems;
        }

    }


})();