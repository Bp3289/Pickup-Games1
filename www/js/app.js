
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

// .controller('SearchCtrl', function($scope, $state){
//   $scope.data = {};

//   $scope.countryCode = 'US';

//   $scope.onAddressSelection = function(location){
//     var a = location.address_components;
//   };
// })

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
 var options = {timeout: 10000, enableHighAccuracy: true};

 var newSpots = [];
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
      
  google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
    var marker = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: latLng
  }); 

    $scope.map.addListener('click', function(event) {  
    addMarker(event.latLng);  
  }); 
      function addMarker(location) {  
      var brandNew = new google.maps.Marker({  
        position: location,  
        map: $scope.map,  
    });  
  newSpots.push(brandNew);
  
   google.maps.event.addListener(brandNew, 'click', function(){
    brandNewWindow.open($scope.map, brandNew);
  });

}

  var basketball = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: {lat:39.760609, lng:-105.010492},
      icon: {
        url: "img/BasketBall.png",
        scaledSize: new google.maps.Size(40, 40)
      }
  }); 

  var baseball = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: {lat:39.762844, lng:-105.026676},
      icon: {
        url:"img/baseball-icon.png",
        scaledSize: new google.maps.Size(40, 40)
      }
    });

  var volleyball = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: {lat:39.769609, lng:-105.004814},
      icon: {
        url: "img/volleyball-icon.png",
        scaledSize: new google.maps.Size(40, 40)
      }
  });

  var football = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: {lat:39.772713, lng:-105.002863},
      icon: {
        url: "img/Football-icon.png",
        scaledSize: new google.maps.Size(40, 40)
      }
  });

  var infoWindow = new google.maps.InfoWindow({
      content: "Here I am!"
  });
  var basketballWindow = new google.maps.InfoWindow({
      content: '<div id="iw-container">' +
                    '<div class="iw-basketball">Basketball</div>' +
                    '<br>'+
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">Time: 4pm-7pm</div>' +
                      '<br>'+
                      '<div class="iw-subTitle">Name: Billy Wade</div>' +
                      '<br>'+
                      '<p>Description: Looking to get a 7 on 7 game going, tackle only, non of that two hand touch crap!</p>' +
                       '<div class="iw-subTitle">Contact: 376-908-9071</div>' +
                       '<br>'+
                       '<form class="compete">'+
                       '<input type="checkbox" class="attend"> Will you compete?<br>'+
                       '<br>'+
                       '<input type="submit" value="Submit">'+
                       '</form>'+
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'
  });

  var baseballWindow = new google.maps.InfoWindow({
      content: '<div id="iw-container">' +
                    '<div class="iw-baseball">Baseball</div>' +
                    '<br>'+
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">Time: 4pm-7pm</div>' +
                      '<br>'+
                      '<div class="iw-subTitle">Name: Billy Wade</div>' +
                      '<br>'+
                      '<p>Description: Looking to get a 7 on 7 game going, tackle only, non of that two hand touch crap!</p>' +
                       '<div class="iw-subTitle">Contact: 376-908-9071</div>' +
                       '<br>'+
                       '<form class="compete">'+
                       '<input type="checkbox" class="attend"> Will you compete?<br>'+
                       '<br>'+
                       '<input type="submit" value="Submit">'+
                       '</form>'+
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'
  });

  var volleyWindow = new google.maps.InfoWindow({
      content: '<div id="iw-container">' +
                    '<div class="iw-volley">Volleyball</div>' +
                    '<br>'+
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">Time: 4pm-7pm</div>' +
                      '<br>'+
                      '<div class="iw-subTitle">Name: Billy Wade</div>' +
                      '<br>'+
                      '<p>Description: Looking to get a 7 on 7 game going, tackle only, non of that two hand touch crap!</p>' +
                       '<div class="iw-subTitle">Contact: 376-908-9071</div>' +
                       '<br>'+
                       '<form class="compete">'+
                       '<input type="checkbox" class="attend"> Will you compete?<br>'+
                       '<br>'+
                       '<input type="submit" value="Submit">'+
                       '</form>'+
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'
  });

  var footballWindow = new google.maps.InfoWindow({
      content: '<div id="iw-container">' +
                    '<div class="iw-football">Football</div>' +
                    '<br>'+
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">Time: 4pm-7pm</div>' +
                      '<br>'+
                      '<div class="iw-subTitle">Billy Wade</div>' +
                      '<br>'+
                      '<p>Looking to get a 7 on 7 game going, tackle only, none of that two hand touch crap!</p>' +
                      '<br>'+
                       '<div class="iw-subTitle">Contact: 376-908-9071</div>' +
                       '<br>'+
                       '<form class="compete">'+
                       '<input type="checkbox" class="attend"> Will you compete?<br>'+
                       '<br>'+
                       '<input type="submit" value="Submit">'+
                       '</form>'+
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'
  });

  var brandNewWindow = new google.maps.InfoWindow({
      content: '<form>' +
      'Type of sport:<br>'+
      '<input type="text" class="sport">' +
      'Time:<br>'+
      '<input type="text" class="sport">'+
      'Name:'+
      '<input type="text" class="sport">'+
      'Description:<br>'+
      '<input type="text" class="sport">'+
      'Contact:<br>'+
      '<input type="text" name="contact">'+
      '<input type="submit" value="Submit">'+
      '</form>'
  });
 
  google.maps.event.addListener(marker, 'click', function () {
      infoWindow.open($scope.map, marker);
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

  google.maps.event.addListener(newSpots, 'click', function(){
    brandNewWindow.open($scope.map, brandNew);
  }); 
});


 
  }, function(error){
    console.log("Could not get location");
  });


});


