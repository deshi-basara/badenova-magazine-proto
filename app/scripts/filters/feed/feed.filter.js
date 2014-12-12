(function() {

    'use strict';

    angular
        .module('app')
        .filter('badFeedFilter', badFeedFilter);

    /**
     * Filter for converting bytes in a more understandable unit
     * https://github.com/niemyjski/angular-filters/blob/master/src/bytes/bytes-filter.js
     */
    function badFeedFilter() {
        return function(articles, feedFilter) {
            var resultArray = [];

            // loop through all articles
            for (var i = 0; i < articles.length; i++) {
                var currentArticle = articles[i];

                // check if the article category is activated
                var isActivated = feedFilter.indexOf(currentArticle.category);

                // if it is activated, push to the resultArray
                if(isActivated !== -1) {
                    resultArray.push(currentArticle);
                }
            };

            return resultArray;
        }
    }


})();