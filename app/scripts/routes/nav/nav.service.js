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
                {img: 'culture.png', name: 'Kultur', color: 'feed-light-blue', active: true },
                {img: 'family.png', name: 'Familie', color: 'feed-light-orange', active: true},
                {img: 'freetime.png', name: 'Freizeit', color: 'feed-light-green', active: true},
                {img: 'greenenergy.png', name: 'Ökostrom', color: 'feed-light-blue', active: true},
                {img: 'naturalgas.png', name: 'Erdgas', color: 'feed-light-orange', active: true},
                {img: 'nature.png', name: 'Natur', color: 'feed-light-green', active: true},
                {img: 'news.png', name: 'Aktuelles', color: 'feed-light-blue', active: true},
                {img: 'saveenergy.png', name: 'Energie sparen', color: 'feed-light-orange', active: true}
            ];

            return feedItems;
        }
    }

})();