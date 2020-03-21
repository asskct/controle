import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCYiM_N7GUjedneMtmJ8sRq9a0qRgYy-OE",
  authDomain: "americanados-fc.firebaseapp.com",
  databaseURL: "https://americanados-fc.firebaseio.com",
  projectId: "americanados-fc",
  storageBucket: "americanados-fc.appspot.com",
  messagingSenderId: "402989651626",
  appId: "1:402989651626:web:dca329ef9118dee800a2d3"
};

firebase.initializeApp(config)

export default firebase