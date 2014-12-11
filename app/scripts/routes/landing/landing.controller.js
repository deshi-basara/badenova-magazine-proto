(function () {

    "use strict";

    angular
        .module("app")
        .controller("LandingCtrl", LandingCtrl);

    LandingCtrl.$inject = ["$scope", "$rootScope", 'ArticlesService'];

    /**
     * Handles the landing view and all interactions
     */
    function LandingCtrl($scope, $rootScope, ArticlesService) {
        var ctrl = this;


   
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

           loadMore: loadMore
        });

        ///////////////////////

        //=> All broadcast listeners

        //////////////////////

        //=> All controller autostart functions
    }

})();