const firebase=require('firebase')
const firebaseConfig = {
    apiKey: "AIzaSyDQvcZV-FEk3u38wu3lnAXUrM1T9KNi2lw",
    authDomain: "loyalty-chat.firebaseapp.com",
    projectId: "loyalty-chat",
    storageBucket: "loyalty-chat.appspot.com",
    messagingSenderId: "696988966456",
    appId: "1:696988966456:web:bc2cd9d13d70e8a78790cd",
    measurementId: "G-EJ4XZWM3T0"
  };
  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const User=db.collection('users');
  module.exports=User;