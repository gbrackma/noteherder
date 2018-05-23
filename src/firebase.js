import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDYDOYyY4AtKjpQ5f2_aUCKEPFsQyuAPmU",
    authDomain: "noteherder-1818.firebaseapp.com",
    databaseURL: "https://noteherder-1818.firebaseio.com",
    projectId: "noteherder-1818",
    storageBucket: "",
    messagingSenderId: "837171186853"
  };
  
firebase.initializeApp(config);
export default firebase;