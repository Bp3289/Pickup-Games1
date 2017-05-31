
"use strict";


// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'firebase', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {
 
  $stateProvider

  .state('landing', {
    url: '/',
    templateUrl: 'templates/landing.html',
    controller: 'LandCtrl'
  })


  .state('map', {
    url: '/map',
    templateUrl: 'templates/map.html',
    controller: 'MapCtrl'
  });
 
  $urlRouterProvider.otherwise("/");
 
})

.controller('LandCtrl', function($scope, $state){

})

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
 var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    //Wait until the map is loaded
  google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
    var marker = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: latLng
  }); 

  var basketball = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: {lat:39.760609, lng:-105.010492}
  }); 

  var baseball = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: {lat:39.762844, lng:-105.026676}
    });

  var volleyball = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: {lat:39.769609, lng:-105.004814}
  });

  var football = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: {lat:39.772713, lng:-105.002863}
  });

  var infoWindow = new google.maps.InfoWindow({
      content: "Here I am!"
  });
  var basketballWindow = new google.maps.InfoWindow({
      content: '<div id="iw-container">' +
                    '<div class="iw-title">Basketball</div>' +
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">4pm-7pm</div>' +
                      '<div class="iw-id">Billy Wade</div>' +
                      '<p>Looking to get a 7 on 7 game going, tackle only, non of that two hand touch crap!</p>' +
                      '<div class="iw-subTitle">Contacts</div>' +
                       '<div class="iw-contact">376-908-9071</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'
  });

  var baseballWindow = new google.maps.InfoWindow({
      content: '<div id="iw-container">' +
                    '<div class="iw-title">Baseball</div>' +
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">4pm-7pm</div>' +
                      '<div class="iw-id">Billy Wade</div>' +
                      '<p>Looking to get a 7 on 7 game going, tackle only, non of that two hand touch crap!</p>' +
                      '<div class="iw-subTitle">Contacts</div>' +
                       '<div class="iw-contact">376-908-9071</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'
  });

  var volleyWindow = new google.maps.InfoWindow({
      content: '<div id="iw-container">' +
                    '<div class="iw-title">Volleyball</div>' +
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">4pm-7pm</div>' +
                      '<div class="iw-id">Billy Wade</div>' +
                      '<p>Looking to get a 7 on 7 game going, tackle only, non of that two hand touch crap!</p>' +
                      '<div class="iw-subTitle">Contacts</div>' +
                       '<div class="iw-contact">376-908-9071</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'
  });

  var footballWindow = new google.maps.InfoWindow({
      content: '<div id="iw-container">' +
                    '<div class="iw-title">Football</div>' +
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">4pm-7pm</div>' +
                      '<div class="iw-id">Billy Wade</div>' +
                      '<p>Looking to get a 7 on 7 game going, tackle only, non of that two hand touch crap!</p>' +
                      '<div class="iw-subTitle">Contacts</div>' +
                       '<div class="iw-contact">376-908-9071</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'
  });
 
  google.maps.event.addListener(marker, 'click', function () {
      infoWindow.open($scope.map, marker, basketball, baseball, volleyball);
  }); 

  google.maps.event.addListener(basketball, 'click', function(){
    basketballWindow.open($scope.map, basketball);
  });

  google.maps.event.addListener(baseball, 'click', function(){
    baseballWindow.open($scope.map, baseball);
  });   
 
  google.maps.event.addListener(volleyball, 'click', function(){
    volleyWindow.open($scope.map, volleyball);
  });

  google.maps.event.addListener(football, 'click', function(){
    footballWindow.open($scope.map, football);
  }); 
});
 
  }, function(error){
    console.log("Could not get location");
  });


});


