/*!
 * Deshi-Basara <simon@i-was-perfect.net>
 * Badenova-Magazine-Proto v0.0.1 (https://github.com/deshi-basara/badenova-magazine-proto)
 */

'use strict';

// angular.module is a global place for creating, registering and retrieving Angular modules.
// 'app' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'.
angular
  .module('app', [
  'ui.router',
  'ngAnimate',
  'LocalStorageModule',
  'infinite-scroll',
  'ui.bootstrap',
  'LocalStorageModule',
  'uiGmapgoogle-maps',
  'truncate'
])

.constant('config', {
  'name': 'development',
  'apiUrl': 'http://localhost:1337'
})

.config(function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {

  /**
   * This app uses AngularUI Router which uses the concept of states
   * Learn more here: https://github.com/angular-ui/ui-router
   * Set up the various states which the app can be in.
   */
  $stateProvider

    // setup an abstract state for the navigation directive
    .state('nav', {
      abstract: true,
      templateUrl: 'scripts/routes/nav/nav.index.tpl.html',
      controller: 'NavCtrl',
      controllerAs: 'ctrl'
    })

    /*.state('nav.landing', {
      url: '/',
      templateUrl: 'scripts/routes/landing/landing.index.tpl.html',
      controller: 'LandingCtrl',
      controllerAs: 'ctrl'
    })*/

    .state('nav.article-detail', {
      url: '/article-detail',
      templateUrl: 'scripts/routes/article-detail/article.detail.index.tpl.html',
      controller: 'ArticleDetailCtrl',

    })

    .state('nav.overview', {
      url: '/overview',
      templateUrl: 'scripts/routes/overview/overview.index.tpl.html',
      controller: 'OverviewCtrl',
      controllerAs: 'ctrl'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/overview');


  /**
   * Load the googlemaps sdk async on runtime
   */
  uiGmapGoogleMapApiProvider.configure({
      //    key: 'your api key',
      libraries: 'weather,geometry,visualization'
  });

})

.run(function(AuthService, FeedService) {

  // initiate feed, if not happended previously
  FeedService.initFeed(function(err) {

  });
});