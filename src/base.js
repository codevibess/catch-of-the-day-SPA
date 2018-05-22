import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC0mRJsXhEeKaxCILTvO7uKbhnw-Qqj6bw",
    authDomain: "catch-of-the-day-c30cb.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-c30cb.firebaseio.com", 
});

const base = Rebase.createClass(firebase.database());

export {firebaseApp};

export default base;