import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCk3Hzq1yF09oRpQr9rZ7OBW0_V5XiEq5E",
    authDomain: "onlinebookstore-745b4.firebaseapp.com",
    projectId: "onlinebookstore-745b4",
    storageBucket: "onlinebookstore-745b4.appspot.com",
    messagingSenderId: "323521196863",
    appId: "1:323521196863:web:94e2504e23fcad6917598a",
    measurementId: "G-F9RXPLBE9F"
};
  

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.firestore();
const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export default auth;