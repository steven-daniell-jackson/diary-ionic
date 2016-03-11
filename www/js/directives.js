angular.module('app.directives', [])


.directive('archivework', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      customTaskData : '='
    }, 
    templateUrl: 'templates/partials/taskPanel.html',
     link: function(scope, element, attrs) {
    // here is the problem, data is really undefined
    // console.log(scope.customTaskData);
}
  }; 
})


.directive('month', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      customMonth : '=',
      filterYear: '=',
      filterMonth: '='
    }, 
    templateUrl: 'templates/partials/month.html',
     link: function(scope, element, attrs) {
    // here is the problem, data is really undefined
    // console.log(scope.customMonth);
    // console.log(scope);
}
  }; 
})

.directive('taskpanel', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      customTaskData : '='
    }, 
    templateUrl: 'templates/partials/taskPanel.html',
     link: function(scope, element, attrs) {
    // here is the problem, data is really undefined
    // console.log(scope.customTaskData);
}
  }; 
});

