(function () {

    "use strict";

    angular
        .module('app')
        .controller('OverviewCtrl', OverviewCtrl);

    OverviewCtrl.$inject = ['$scope', 'FeedService', 'ArticlesService', '$timeout', '$rootScope'];

    /**
     * Handles the landing view and all interactions
     */
    function OverviewCtrl($scope, FeedService, ArticlesService, $timeout, $rootScope) {
        var ctrl = this;

            function addTrue(model) {
                model.show = true;
                console.log(model);
            }

        /**
         * Initiates the entering animation for all articles.
         */
        function initStartAnimation() {
            // interval for fadding in the articles
            var animationInterval = 500;

            // start with the teaser-image
            ctrl.teaserArticle.show = true;

            // all other articles
            var counter = 1;
            angular.forEach(ctrl.articles, function(value, key) {
                var execTime = animationInterval * counter++;

                $timeout(function() {
                    ctrl.articles[key].show = true;
                }, execTime);

            });
        }


        /**
         * Funktions-Beschreibung
         * @return {[type]} [description]
         */
        function loadMore() {
            console.log('loadMore');

            // fake new article entries
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
                    content: "",
                    show: true
                };

                ctrl.articles.push(newArticle);
            }

        }

        $(".titelstory-button").click(function (){

    $rootScope.article = ctrl.teaserArticle;


   });

        //////////////////////

        angular.extend(ctrl, {
            articles: ArticlesService.getAllArticles(),
            feedFilter: ['culture', 'family', 'freetime', 'greenenergy', 'naturalgas', 'nature', 'news', 'saveenergy'],
            teaserArticle: ArticlesService.getTeaserArticle(),

            loadMore: loadMore
        });

        ///////////////////////

        /**
         * Adds a category to the filter on $broadcast.
         */
        $scope.$on('feed.add', function(broadcastEvent, category) {
            console.log(category);
            ctrl.feedFilter.push(category);
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

        /**
         * Starts the fake infinite loading.
         */
        $scope.$on('load.more', function() {
            //loadMore();
        });


        //////////////////////

        initStartAnimation();

    }

})();