// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJIVZb5fAF87GNQkIdQ92zCMwSdwQNULY",
  authDomain: "yemektarifiuygulamasi-eb9b4.firebaseapp.com",
  projectId: "yemektarifiuygulamasi-eb9b4",
  storageBucket: "yemektarifiuygulamasi-eb9b4.appspot.com",
  messagingSenderId: "474864823949",
  appId: "1:474864823949:web:f75cf8817e27e891b43cc4",
 // measurementId: "G-FR82E153R4"
};

// Initialize Firebase
let app;
if(firebase.apps.length===0){
    app = firebase.initializeApp(firebaseConfig);
}
else{
    app=firebase.auth()
}

const auth=firebase.auth()
//const analytics = getAnalytics(app);
export{auth};