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
                        {
                            "id": 1,
                            "image": "image1.jpg",
                            "title": "Lost in Nature",
                            "category": "nature",
                            "categoryIcon": "nature.png" ,
                            "date": "01.01.2014",
                            "author": "Max Mustermann",
                            "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        },
                        {
                            "id": 2,
                            "title": "Lorem ipsum dolor sit amet",
                            "image": "image2.jpg",
                            "category": "culture",
                            "categoryIcon": "culture.png" ,
                            "date": "01.01.2014",
                            "author": "Max Mustermann",
                            "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        },
                        {
                            "id": 3,
                            "title": "Lorem ipsum dolor sit amet",
                            "image": "image3.jpg",
                            "category": "family",
                            "categoryIcon": "family.png" ,
                            "date": "01.01.2014",
                            "author": "Max Mustermann",
                            "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        },
                        {
                            "id": 4,
                            "title": "Lorem ipsum dolor sit amet",
                            "image": "image4.jpg",
                            "category": "freetime",
                            "categoryIcon": "freetime.png" ,
                            "date": "01.01.2014",
                            "author": "Max Mustermann",
                            "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        },
                        {
                            "id": 5,
                            "title": "Lorem ipsum dolor sit amet",
                            "image": "image5.jpg",
                            "category": "greenenergy",
                            "categoryIcon": "greenenergy.png" ,
                            "date": "01.01.2014",
                            "author": "Max Mustermann",
                            "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        },
                        {
                            "id": 6,
                            "title": "Lorem ipsum dolor sit amet",
                            "image": "image6.jpg",
                            "category": "naturalgas",
                            "categoryIcon": "nature.png" ,
                            "date": "01.01.2014",
                            "author": "Max Mustermann",
                            "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        },
                        {
                            "id": 7,
                            "title": "Lorem ipsum dolor sit amet",
                            "image": "image7.jpg",
                            "category": "news",
                            "categoryIcon": "news.png" ,
                            "date": "01.01.2014",
                            "author": "Max Mustermann",
                            "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        },
                        {
                            "id": 8,
                            "title": "Lorem ipsum dolor sit amet",
                            "image": "image8.jpg",
                            "category": "saveenergy",
                            "categoryIcon": "saveenergy.png" ,
                            "date": "01.01.2014",
                            "author": "Max Mustermann",
                            "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        },
                        {
                            "id": 9,
                            "title": "Lorem ipsum dolor sit amet",
                            "image": "image9.jpg",
                            "category": "nature",
                            "categoryIcon": "nature.png" ,
                            "date": "01.01.2014",
                            "author": "Max Mustermann",
                            "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
                        }
            ],
            teaserArticle: {
                    "id": 0,
                    "title": "Lorem ipsum dolor sit amet",
                    "image": "image9.jpg",
                    "category": "nature",
                    "categoryIcon": "nature.png" ,
                    "date": "01.01.2014",
                    "author": "Max Mustermann",
                    "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
            },

            getAllArticles: getAllArticles,
            getTeaserArticle: getTeaserArticle
        };

        return service;

        ///////////////



        /**
         * Returns all articles.
         */
        function getAllArticles() {
            return service.allArticles;
        }

        /**
         * Returns the teaser article.
         */
        function getTeaserArticle() {
            return service.teaserArticle;
        }

    }


})();