(function() {

    'use strict';

    angular
        .module('app')
        .factory('NavService', NavService);

    NavService.$inject = ['$q'];

    /**
     * Service for uploading jobs
     */
    function NavService($q) {

        var service = {

            getFeedItems: getFeedItems
        }

        return service;

        ///////////////

        /**
         * Creates a video-model on the server for files that aren't uploaded,
         * but already exist on the server.
         * @param  {File Object}  fileObj [File data from the job-modal]
         * @return {Promise}              [Resolve: true | Reject: false]
         */
        function getFeedItems(fileObj) {
            var feedItems = [
                {id: 0, img: 'culture.png', name: 'Kultur', color: 'feed-light-blue', active: true },
                {id: 1, img: 'family.png', name: 'Familie', color: 'feed-light-orange', active: true},
                {id: 2, img: 'freetime.png', name: 'Freizeit', color: 'feed-light-green', active: true},
                {id: 3, img: 'greenenergy.png', name: 'Ökostrom', color: 'feed-light-blue', active: true},
                {id: 4, img: 'naturalgas.png', name: 'Erdgas', color: 'feed-light-orange', active: true},
                {id: 5, img: 'nature.png', name: 'Natur', color: 'feed-light-green', active: true},
                {id: 6, img: 'news.png', name: 'Aktuelles', color: 'feed-light-blue', active: true},
                {id: 7, img: 'saveenergy.png', name: 'Energie sparen', color: 'feed-light-orange', active: true}
            ];

            return feedItems;
        }
    }

})();