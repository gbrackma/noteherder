import firebase from 'firebase/app'
import database from 'firebase/database'
import Rebase from 're-base'

var config = {
    apiKey: "AIzaSyDYDOYyY4AtKjpQ5f2_aUCKEPFsQyuAPmU",
    authDomain: "noteherder-1818.firebaseapp.com",
    databaseURL: "https://noteherder-1818.firebaseio.com",
    projectId: "noteherder-1818",
    storageBucket: "",
    messagingSenderId: "837171186853"
  };
  
var app = firebase.initializeApp(config);
var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base;