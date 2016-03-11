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
      'dairy': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu', {
    url: '/dairy',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.overview', {
    url: '/overview',
    views: {
      'dairy': {
        templateUrl: 'templates/overview.html',
        controller: 'overviewCtrl'
      }
    }
  })

  .state('menu.recentEntries', {
    url: '/recent-entries',
    views: {
      'dairy': {
        templateUrl: 'templates/recentEntries.html',
        controller: 'recentEntriesCtrl'
      }
    }
  })

  .state('menu.archive', {
    url: '/archive',
    views: {
      'dairy': {
        templateUrl: 'templates/archive.html',
        controller: 'archiveCtrl'
      }
    }
  })

  .state('menu.search', {
    url: '/search',
    views: {
      'dairy': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('menu.aboutMe', {
    url: '/about-me',
    views: {
      'dairy': {
        templateUrl: 'templates/aboutMe.html',
        controller: 'aboutMeCtrl'
      }
    }
  })

  .state('menu.contact', {
    url: '/contact',
    views: {
      'dairy': {
        templateUrl: 'templates/contact.html',
        controller: 'contactCtrl'
      }
    }
  })

  .state('newEntry', {
    url: '/new-entry',
    templateUrl: 'templates/newEntry.html',
    controller: 'newEntryCtrl'
  })

  .state('menu.archive2016', {
    url: '/2016',
    views: {
      'dairy': {
        templateUrl: 'templates/archive2016.html',
        controller: 'archiveCtrl'
      }
    }
  })

.state('menu.archive2015', {
    url: '/2015',
    views: {
      'dairy': {
        templateUrl: 'templates/archive2015.html',
        controller: 'archiveCtrl'
      }
    }
  })


.state('menu.archive2015month', {
    url: '/archive/2015/:monthFilter',
    views: {
      'dairy': {
        templateUrl: 'templates/archiveListing.html',
        controller: 'archiveListingCtrl'
       
      }
    }
  })

.state('menu.archive2016month', {
    url: '/archive/2016/:monthFilter',
    views: {
      'dairy': {
        templateUrl: 'templates/archiveListing.html',
        controller: 'archiveListingCtrl'
       
      }
    }
  })




$urlRouterProvider.otherwise('/dairy/home')

  

});