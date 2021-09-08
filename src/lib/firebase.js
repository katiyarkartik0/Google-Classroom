import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB8cq7x9wGmWy3KVpPvilGyoj1svS8ZW-M",
    authDomain: "classroom-84e1a.firebaseapp.com",
    projectId: "classroom-84e1a",
    storageBucket: "classroom-84e1a.appspot.com",
    messagingSenderId: "294230440129",
    appId: "1:294230440129:web:f2cd07ce60d5354d0b3c40"
  };

firebase.initializeApp(firebaseConfig);
let provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const firestore = firebase.firestore()
export const signInWithGoogle = ()=>{
    auth.signInWithPopup(provider)
}
export default firebase;

