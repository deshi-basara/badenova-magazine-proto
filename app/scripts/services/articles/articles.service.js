(function() {

    'use strict';

    angular
        .module('app')
        .factory('ArticlesService', ArticlesService);

    ArticlesService.$inject = [];

    /**
     * Service for checking if the current user is authenticated
     */
    function ArticlesService() {

        var service = {
            allArticles: [
                        {"id": 1,
                        "image": "image1.jpg",
                        "title": "Lost in Nature",
                        "category": "nature",
                        "categoryIcon": "../../images/feed/nature.png" ,
                        "date": "01.01.2014",
                        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        "content": ""
                        },
                        {"id": 2,
                       "title": "Lorem ipsum dolor sit amet",
                       "image": "image2.jpg",
                        "category": "culture",
                        "categoryIcon": "../../images/feed/culture.png" ,
                        "date": "01.01.2014",
                        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        "content": ""
                        },
                        {"id": 3,
                       "title": "Lorem ipsum dolor sit amet",
                       "image": "image3.jpg",
                        "category": "family",
                        "categoryIcon": "../../images/feed/family.png" ,
                        "date": "01.01.2014",
                        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        "content": ""
                        },
                        {"id": 4,
                        "title": "Lorem ipsum dolor sit amet",
                        "image": "image4.jpg",
                        "category": "freetime",
                        "categoryIcon": "../../images/feed/freetime.png" ,
                        "date": "01.01.2014",
                        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        "content": ""
                        },
                        {"id": 5,
                       "title": "Lorem ipsum dolor sit amet",
                       "image": "image5.jpg",
                        "category": "greenenergy",
                        "categoryIcon": "../../images/feed/greenenergy.png" ,
                        "date": "01.01.2014",
                        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        "content": ""
                        },
                        {"id": 6,
                        "title": "Lorem ipsum dolor sit amet",
                        "image": "image6.jpg",
                        "category": "naturalgas",
                        "categoryIcon": "../../images/feed/nature.png" ,
                        "date": "01.01.2014",
                        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        "content": ""
                        },
                        {"id": 7,
                       "title": "Lorem ipsum dolor sit amet",
                       "image": "image7.jpg",
                        "category": "news",
                        "categoryIcon": "../../images/feed/news.png" ,
                        "date": "01.01.2014",
                        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        "content": ""
                        },
                        {"id": 8,
                        "title": "Lorem ipsum dolor sit amet",
                        "image": "image8.jpg",
                        "category": "saveenergy",
                        "categoryIcon": "../../images/feed/saveenergy.png" ,
                        "date": "01.01.2014",
                        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        "content": ""
                        },
                        {"id": 9,
                       "title": "Lorem ipsum dolor sit amet",
                       "image": "image9.jpg",
                        "category": "nature",
                        "categoryIcon": "../../images/feed/nature.png" ,
                        "date": "01.01.2014",
                        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        "content": ""
                        }
            ],

            getAllArticles: getAllArticles
        };

        return service;

        ///////////////



        /**
         * Fetches all feedItems from the localStorage
         */
        function getAllArticles() {
            console.log(service.allArticles);
            return service.allArticles;
        }

    }


})();