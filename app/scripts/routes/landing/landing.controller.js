(function () {

    'use strict';

    angular
        .module('app')
        .controller('LandingCtrl', LandingCtrl);

    LandingCtrl.$inject = ['$scope', '$rootScope'];

    /**
     * Handles the landing view and all interactions
     */
    function LandingCtrl($scope, $rootScope) {
        var ctrl = this;


   
    function loadMore() {
    var last = ctrl.articles[ctrl.articles.length - 1];
    var next = ctrl.articles.length+1;
    for(var i = next; i <= next+3; i++) {
    console.log(i);
    var newArticle = {id: i,
                        image: 'image3.jpg',
                        title: "Lorem ipsum dolor sit amet",
                        category: "family",
                        categoryIcon: "../../images/feed/family.png" ,
                        date: "01.01.2014",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        content: ""};

      ctrl.articles.push(newArticle);
    }
}

    

        //////////////////////

        angular.extend(ctrl, {
            articles: [{id: 1,
                        image: 'image1.jpg',
                        title: "Lost in Nature",
                        category: "nature",
                        categoryIcon: "../../images/feed/nature.png" ,
                        date: "01.01.2014",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        content: ""
                        },   
                        {id: 2,
                       title: "Lorem ipsum dolor sit amet",
                       image: 'image2.jpg',
                        category: "culture",
                        categoryIcon: "../../images/feed/culture.png" ,
                        date: "01.01.2014",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        content: ""
                        },
                        {id: 3,
                       title: "Lorem ipsum dolor sit amet",
                       image: 'image3.jpg',
                        category: "family",
                        categoryIcon: "../../images/feed/family.png" ,
                        date: "01.01.2014",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        content: ""
                        },
                        {id: 4,
                        title: "Lorem ipsum dolor sit amet",
                        image: 'image4.jpg',
                        category: "freetime",
                        categoryIcon: "../../images/feed/freetime.png" ,
                        date: "01.01.2014",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        content: ""
                        },
                        {id: 5,
                       title: "Lorem ipsum dolor sit amet",
                       image: 'image5.jpg',
                        category: "greenenergy",
                        categoryIcon: "../../images/feed/greenenergy.png" ,
                        date: "01.01.2014",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        content: ""
                        },
                        {id: 6,
                        title: "Lorem ipsum dolor sit amet",
                        image: 'image6.jpg',
                        category: "naturalgas",
                        categoryIcon: "../../images/feed/nature.png" ,
                        date: "01.01.2014",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        content: ""
                        },
                        {id: 7,
                       title: "Lorem ipsum dolor sit amet",
                       image: 'image7.jpg',
                        category: "news",
                        categoryIcon: "../../images/feed/news.png" ,
                        date: "01.01.2014",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        content: ""
                        },
                        {id: 8,
                        title: "Lorem ipsum dolor sit amet",
                        image: 'image8.jpg',
                        category: "saveenergy",
                        categoryIcon: "../../images/feed/saveenergy.png" ,
                        date: "01.01.2014",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        content: ""
                        },
                        {id: 9,
                       title: "Lorem ipsum dolor sit amet",
                       image: 'image9.jpg',
                        category: "nature",
                        categoryIcon: "../../images/feed/nature.png" ,
                        date: "01.01.2014",
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


           loadMore: loadMore
        });

        ///////////////////////

        //=> All broadcast listeners

        //////////////////////

        //=> All controller autostart functions
    }

})();