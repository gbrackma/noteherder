import firebase from 'firebase/app'
import database from 'firebase/database'
import Rebase from 're-base'
import 'firebase/auth'

var config = {
    apiKey: "YPUR API",
    authDomain: "YOUR AUTH DOMAIN",
    databaseURL: "YOUR DATABASE",
    projectId: "YOUR PROJECT ID",
    storageBucket: "YOUR STORAGE BUCKET",
    messagingSenderId: "YOUR MESSEGING ID"
  };
  

var app = firebase.initializeApp(config);
var db = firebase.database(app);
var base = Rebase.createClass(db);

export const githubProvider = new firebase.auth.GithubAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = app.auth()


export default base;