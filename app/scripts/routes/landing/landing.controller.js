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

   
    function loadMore() {
    var last = ctrl.articles[ctrl.articles.length - 1];
    var next = ctrl.articles.length+1;
    for(var i = next; i <= next+3; i++) {
    console.log(i);
    var newArticle = {id: i,
                        titleImage: 'image3.jpg',
                        title: "Lorem ipsum dolor sit amet",
                        category: "family",
                        categoryIcon: "../../images/feed/family.png" ,
                        date: "01.01.2014",
                        author: "Max Mustermann",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        content: ""};

      ctrl.articles.push(newArticle);

    }

   $(".btn-ghost").click(function (){

    var nr = $(this).data('nr');

    $rootScope.article = ctrl.articles[nr-1];


   });

}
  
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
    

        //////////////////////

        angular.extend(ctrl, {

            articles: [{id: 1,
                        titleImage: 'image1.jpg',
                        title: "Lost in Nature",
                        category: "nature",
                        categoryIcon: "../../images/feed/nature.png" ,
                        date: "01.01.2014",
                        author: "Max Mustermann",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        content: ""
                        },   
                        {id: 2,
                       title: "Lorem ipsum dolor sit amet",
                       titleImage: 'image2.jpg',
                        category: "culture",
                        categoryIcon: "../../images/feed/culture.png" ,
                        date: "01.01.2014",
                        author: "Max Mustermann",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        content: ""
                        },
                        {id: 3,
                       title: "Lorem ipsum dolor sit amet",
                       titleImage: 'image3.jpg',
                        category: "family",
                        categoryIcon: "../../images/feed/family.png" ,
                        date: "01.01.2014",
                        author: "Max Mustermann",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        content: ""
                        },
                        {id: 4,
                        title: "Lorem ipsum dolor sit amet",
                        titleImage: 'image4.jpg',
                        category: "freetime",
                        categoryIcon: "../../images/feed/freetime.png" ,
                        date: "01.01.2014",
                        author: "Max Mustermann",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        content: ""
                        },
                        {id: 5,
                       title: "Lorem ipsum dolor sit amet",
                       titleImage: 'image5.jpg',
                        category: "greenenergy",
                        categoryIcon: "../../images/feed/greenenergy.png" ,
                        date: "01.01.2014",
                        author: "Max Mustermann",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        content: ""
                        },
                        {id: 6,
                        title: "Lorem ipsum dolor sit amet",
                        titleImage: 'image6.jpg',
                        category: "naturalgas",
                        categoryIcon: "../../images/feed/nature.png" ,
                        date: "01.01.2014",
                        author: "Max Mustermann",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        content: ""
                        },
                        {id: 7,
                       title: "Lorem ipsum dolor sit amet",
                       titleImage: 'image7.jpg',
                        category: "news",
                        categoryIcon: "../../images/feed/news.png" ,
                        date: "01.01.2014",
                        author: "Max Mustermann",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        content: ""
                        },
                        {id: 8,
                        title: "Lorem ipsum dolor sit amet",
                        titleImage: 'image8.jpg',
                        category: "saveenergy",
                        categoryIcon: "../../images/feed/saveenergy.png" ,
                        date: "01.01.2014",
                        author: "Max Mustermann",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        content: ""
                        },
                        {id: 9,
                       title: "Lorem ipsum dolor sit amet",
                       titleImage: 'image9.jpg',
                        category: "nature",
                        categoryIcon: "../../images/feed/nature.png" ,
                        date: "01.01.2014",
                        author: "Max Mustermann",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        content: ""
                        }

            ],

            /*categories: [{  category: "culture",
                            icon: "../../images/feed/culture.png"
                        },
                        {  category: "family",
                            icon: "../../images/feed/family.png"
                        },
                        {  category: "freetime",
                            icon: "../../images/feed/freetime.png"
                        },
                        {  category: "greenenergy",
                            icon: "../../images/feed/greenenergy.png"
                        },
                        {  category: "naturalgas",
                            icon: "../../images/feed/naturalgas.png"
                        },
                        {  category: "nature",
                            icon: "../../images/feed/nature.png"
                        },
                        {  category: "news",
                            icon: "../../images/feed/news.png"
                        },
                        {  category: "saveenergie",
                            icon: "../../images/feed/saveenergie.png"
                        }
            ],*/



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