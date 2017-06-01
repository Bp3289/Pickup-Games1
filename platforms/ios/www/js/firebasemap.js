(function(){


const config = {
        apiKey: "AIzaSyCzGwU5GWPoqyvVVASHOd7B_YpnIH-38hM",
        authDomain: "pickup-final.firebaseapp.com",
        databaseURL: "https://pickup-final.firebaseio.com",
        projectId: "pickup-final",
        storageBucket: "pickup-final.appspot.com",
        messagingSenderId: "769449152082"
      };
      firebase.initializeApp(config);

      const preObject = document.getElementById("map");

      const dbRefObject = firebase.database().ref().child('map');

      dbRefObject.on('click', snap => console.log(snap.val()));

    })