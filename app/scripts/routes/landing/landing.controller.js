(function () {

    "use strict";

    angular
        .module("app")
        .controller("LandingCtrl", LandingCtrl);

    LandingCtrl.$inject = ['$scope', 'FeedService', 'ArticlesService'];

    /**
     * Handles the landing view and all interactions
     */
    function LandingCtrl($scope, FeedService, ArticlesService) {
        var ctrl = this;

        /**
         * Initiates the feedFilter for filtering all articles accordingly to the selected
         * feed items.
         */
        function initFeedFilter() {
            // fetch all feed values and push all feed-categfory names to the filter-array
            var allFeedValues = FeedService.getFeedItems();
            var feedFilter = [];
            for (var i = 0; i < allFeedValues.length; i++) {
                feedFilter.push(allFeedValues[i].category);
            };

            ctrl.feedFilter = feedFilter;
        }

        /**
         * [filterArticles description]
         * @return {[type]} [description]
         */
        function filterArticles() {
            return function(article) {
                var isFiltered = ctrl.feedFilter.indexOf(article.category);
                return isFiltered !== -1;
            }
        }

        /**
         * Funktions-Beschreibung
         * @return {[type]} [description]
         */
        function loadMore() {
            var last = ctrl.articles[ctrl.articles.length - 1];
            var next = ctrl.articles.length+1;
            for(var i = next; i <= next+3; i++) {
                var newArticle = {
                    id: i,
                    image: "image3.jpg",
                    title: "Lorem ipsum dolor sit amet",
                    category: "family",
                    categoryIcon: "../../images/feed/family.png" ,
                    date: "01.01.2014",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                    content: ""
                };

                ctrl.articles.push(newArticle);
            }
        }

        //////////////////////

        angular.extend(ctrl, {
            articles: ArticlesService.getAllArticles(),
            feedFilter: null,

            filterArticles: filterArticles,
            loadMore: loadMore
        });

        ///////////////////////

        /**
         * Adds a category to the filter on $broadcast.
         */
        $scope.$on('feed.add', function(broadcastEvent, category) {
            $scope.$apply(function() {
                ctrl.feedFilter.push(category);
            });
        });

        /**
         * Removes a category from the filter on $broadcast.
         */
        $scope.$on('feed.remove', function(broadcastEvent, category) {
            console.log(category);
            // find the category we want to remove
            var index = ctrl.feedFilter.indexOf(category);
            console.log(index);
            if(index !== -1) {
                // remove from the filter
                ctrl.feedFilter.splice(index, 1);
                console.log(ctrl.feedFilter);
            }
        });


        //////////////////////

        initFeedFilter();

    }

})();