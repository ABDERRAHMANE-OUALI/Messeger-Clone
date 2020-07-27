import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCFKbYrVZ-xQJpWWkQ1tzrNsVNhycPq8jc",
    authDomain: "messenger-clone-cd520.firebaseapp.com",
    databaseURL: "https://messenger-clone-cd520.firebaseio.com",
    projectId: "messenger-clone-cd520",
    storageBucket: "messenger-clone-cd520.appspot.com",
    messagingSenderId: "574163687413",
    appId: "1:574163687413:web:1fca7ae8dc0316218632bc",
    measurementId: "G-QC4M6HM4WR"
});
const db = firebaseApp.firestore();

export default db;
