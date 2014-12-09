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
                {img: 'culture.png', name: 'Kultur'},
                {img: 'family.png', name: 'Familie'},
                {img: 'freetime.png', name: 'Freizeit'},
                {img: 'greenenergy.png', name: 'Ökostrom'},
                {img: 'naturalgas.png', name: 'Erdgas'},
                {img: 'nature.png', name: 'Natur'},
                {img: 'news.png', name: 'Aktuelles'},
                {img: 'saveenergy.png', name: 'Energie sparen'}
            ];

            return feedItems;
        }
    }

})();