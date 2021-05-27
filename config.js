import firebase from 'firebase'; 
require('@firebase/firestore'); 
var firebaseConfig = { apiKey: "AIzaSyB3KG1lSjUFaHl0mwvc2LhenOxuu5VgiWg",
authDomain: "wilyapp-7fe42.firebaseapp.com",
projectId: "wilyapp-7fe42",
storageBucket: "wilyapp-7fe42.appspot.com",
messagingSenderId: "7583170599",
appId: "1:7583170599:web:aa9ea9c36d6151110ace02" };
 // Initialize Firebase // firebase.initializeApp(firebaseConfig); 
 if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); } 
 export default firebase.firestore();
