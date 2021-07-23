import firebase from '@react-native-firebase/app';
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const credentials = {
    apiKey: "AIzaSyC2LhMTLya8gcbcAIkbdoSDDdfR5TDF0_0",
    authDomain: "apartment-raghu.firebaseapp.com",
    projectId: "apartment-raghu",
    storageBucket: "apartment-raghu.appspot.com",
    messagingSenderId: "101829181079",
    appId: "1:101829181079:web:64c96c1ae1e6e53d45b3d2",
    measurementId: "G-727H64VY79"
  };

  const config = {
    name: 'SECONDARY_APP',
  };
  // Initialize Firebase
  
await firebase.initializeApp(credentials, config);