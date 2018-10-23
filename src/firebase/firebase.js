import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCs6dGG1M-AK2JhRtrY0RywMp-_DeUUZgU",
    authDomain: "pierate360.firebaseapp.com",
    databaseURL: "https://pierate360.firebaseio.com",
    projectId: "pierate360",
    storageBucket: "pierate360.appspot.com",
    messagingSenderId: "409873374040"
};
firebase.initializeApp(config);
export default firebase;