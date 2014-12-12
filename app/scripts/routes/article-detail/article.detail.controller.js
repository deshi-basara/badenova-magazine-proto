(function () {

    'use strict';

    angular
        .module('app')
        .controller('ArticleDetailCtrl', ArticleDetailCtrl);

    ArticleDetailCtrl.$inject = ['$scope', '$rootScope'];

    /**
     * Handles the landing view and all interactions
     */
    function ArticleDetailCtrl($scope, $rootScope) {
        var ctrl = this;

      $('.image-slider').slick({
          dots: true,
          infinite: false,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 4,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });

        //////////////////////

        angular.extend(ctrl, {

            article: [{}],
           
        });

        ///////////////////////

        //=> All broadcast listeners

        //////////////////////

        //=> All controller autostart functions
    }

})();