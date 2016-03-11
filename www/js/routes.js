angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('overview', {
    url: '/overview',
    templateUrl: 'templates/overview.html',
    controller: 'overviewCtrl'
  })

  .state('recentEntries', {
    url: '/recent-entries',
    templateUrl: 'templates/recentEntries.html',
    controller: 'recentEntriesCtrl'
  })

  .state('archive', {
    url: '/archive',
    templateUrl: 'templates/archive.html',
    controller: 'archiveCtrl'
  })

  .state('search', {
    url: '/search',
    templateUrl: 'templates/search.html',
    controller: 'searchCtrl'
  })

  .state('aboutMe', {
    url: '/about-me',
    templateUrl: 'templates/aboutMe.html',
    controller: 'aboutMeCtrl'
  })

  .state('contact', {
    url: '/contact',
    templateUrl: 'templates/contact.html',
    controller: 'contactCtrl'
  })

  .state('newEntry', {
    url: '/new-entry',
    templateUrl: 'templates/newEntry.html',
    controller: 'newEntryCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/home')

  

});