import * as firebase from 'firebase';
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBzu5hDOHJHrHIJov-EKDKtRHaAai0DlFk",
    authDomain: "storyhub-17e52.firebaseapp.com",
    databaseURL: "https://storyhub-17e52.firebaseio.com",
    projectId: "storyhub-17e52",
    storageBucket: "storyhub-17e52.appspot.com",
    messagingSenderId: "916007253126",
    appId: "1:916007253126:web:b16d432493f888418e0d07"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();