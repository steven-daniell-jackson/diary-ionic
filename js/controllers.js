angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
      
.controller('overviewCtrl', function($scope) {

})
   
.controller('recentEntriesCtrl', function($scope, Task) {
 
 $scope.User = {};
$scope.errorMessage = '';

// $scope.name = "testsasd";
$scope.preloader = true;

// Access factory and assign the returned data
Task.all()
.success(function(data) {
	
            $scope.entries = data;
            $scope.entries.reverse()
            $scope.preloader = false;
            // console.log($scope.entries);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
  
        

})
   
.controller('archiveCtrl', function($scope, $location, Task) {


 $scope.User = {};
   $scope.errorMessage = '';

   // $scope.name = "testsasd222";.
$scope.id = 42;
   $scope.preloader = true;

// Get the page location and strip the year. and month from it
$scope.location = $location.path();
$scope.year = $scope.location.substr(7, 4);
$scope.filterMonth = $scope.location.substr(20);

console.log($scope.filterMonth)

// debug location
// console.log($scope.year);
// console.log($scope.filterMonth);



// Access factory and assign the returned data
Task.all()
.success(function(data) {
    $scope.entries = data;
    $scope.preloader = false;

// Self activating function to get months
$scope.months = [];

(function () {

// Loop through the invoice JSON object returned from api
  for (x in $scope.entries) {


// If the year matches the year in the url. Find the months
     if ($scope.entries[x].yearFilter == $scope.year){
    // Check to see if month already exists

    // console.log($scope.entries[x])
    if ($scope.months.indexOf($scope.entries[x].monthFilter) == -1) {
        $scope.months.push($scope.entries[x].monthFilter);

    }
}



}

})();



})
// If error on database connection. Return error message
.error(function(data) {
    console.log('Error: ' + data);
});

})
   



.controller('archiveListingCtrl', function($scope, $location, Task) {


 $scope.User = {};
   $scope.errorMessage = '';

   // $scope.name = "testsasd222";.
$scope.id = 42;
   $scope.preloader = true;

// Get the page location and strip the year. and month from it
$scope.location = $location.path();
$scope.year = $scope.location.substr(15, 4);
$scope.filterMonth = $scope.location.substr(20);

console.log($scope.filterMonth)

// debug location
// console.log($scope.year);
// console.log($scope.filterMonth);



// Access factory and assign the returned data
Task.all()
.success(function(data) {
    $scope.entries = data;
    $scope.preloader = false;

// Self activating function to get months
$scope.months = [];

(function () {

// Loop through the invoice JSON object returned from api
  for (x in $scope.entries) {


// If the year matches the year in the url. Find the months
     if ($scope.entries[x].yearFilter == $scope.year){
    // Check to see if month already exists

    // console.log($scope.entries[x])
    if ($scope.months.indexOf($scope.entries[x].monthFilter) == -1) {
        $scope.months.push($scope.entries[x].monthFilter);

    }
}



}

})();



})
// If error on database connection. Return error message
.error(function(data) {
    console.log('Error: ' + data);
});

})




.controller('searchCtrl', function($scope, Task, $window) {

   $scope.User = {};
   $scope.errorMessage = '';


$scope.preloader = true;

$scope.reloadRoute = function() {
  $scope.clientNameFilter = '';
   $window.location.reload();
}

// Access factory and assign the returned data
Task.all()
.success(function(data) {
    $scope.entries = data;
$scope.preloader = false;


})
// If error on database connection. Return error message
.error(function(data) {
    console.log('Error: ' + data);
});

})
   
.controller('aboutMeCtrl', function($scope) {

})
   
.controller('contactCtrl', function($scope) {

})
   
.controller('newEntryCtrl', function($scope, Task) {


console.log($scope.newEntry)

// Submit function bound on "Submit" button on form
$scope.submit = function(form){


// Check if form is valid
if(form.$valid) {

  $scope.workdone = '';


// Debug: 
console.log("Form valid")

// Use Data-binding to build object to send to API
var formData = {

  platform: form.platform.$viewValue,
  clientname: form.client.$viewValue,
  url: form.url.$viewValue,
  workdone: form.workdone.$viewValue,
  date: form.date.$viewValue,
  monthfilter: form.yearfilter.$viewValue,
  yearfilter: form.monthfilter.$viewValue,
  comments: form.comments.$viewValue

}

// Call factory and submit the formData for processing
Task.create(formData)

 // If successful print returned message form API else print error
 .success(function(data) {

// Clear form
window.location.reload(); 



// Data binding on status to log API returned message
$scope.status = data.message;

})
 .error(function(data) {
  console.log('Error: ' + data);
 });


}

}

})
 


