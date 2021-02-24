
import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyAzZqAsay3hPELM5xjiToq2msgCwJHQxRE",
    authDomain: "booksanta-99bb1.firebaseapp.com",
    projectId: "booksanta-99bb1",
    storageBucket: "booksanta-99bb1.appspot.com",
    messagingSenderId: "291029458297",
    appId: "1:291029458297:web:0e6b0f1b1b87d0e3f363a8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
