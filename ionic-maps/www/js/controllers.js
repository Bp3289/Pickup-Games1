"use strict";

$(document).ready(function() {
      // Initialize Firebase
      const config = {
        apiKey: "AIzaSyCzGwU5GWPoqyvVVASHOd7B_YpnIH-38hM",
        authDomain: "pickup-final.firebaseapp.com",
        databaseURL: "https://pickup-final.firebaseio.com",
        projectId: "pickup-final",
        storageBucket: "pickup-final.appspot.com",
        messagingSenderId: "769449152082"
      };
      if (!firebase.apps.length) {
		    firebase.initializeApp(config);
	  }
      // firebase.initializeApp(config);
      var rootRef = firebase.database().ref();


      //Get Elements
      const txtEmail = document.getElementById('txtEmail');
      const txtPassword = document.getElementById('txtPassword');
      const btnLogin = document.getElementById('btnLogin');
      const btnSignUp = document.getElementById('btnSignUp');
      const btnLogout = document.getElementById('btnLogout');

      //Add Login event
      btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //Sign in 
        const promise = firebase.auth().signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
      })

      btnSignUp.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //Sign in 
        const promise = firebase.auth().createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));

      });

      btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
      });

      //Add a realtime listner
      firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
          // console.log(firebaseUser);
          btnLogout.classList.remove('hide');
          // window.location = '/#/map';
        } else {
          console.log("not logged in");
          btnLogout.classList.add('hide');
        }
      });
});
