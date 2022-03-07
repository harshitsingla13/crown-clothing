import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDgtfYK3_MLuy0l54YXd49xrJ97Xn6ft3c",
  authDomain: "crown-db-24aa6.firebaseapp.com",
  projectId: "crown-db-24aa6",
  storageBucket: "crown-db-24aa6.appspot.com",
  messagingSenderId: "168846353955",
  appId: "1:168846353955:web:06ab7aeedb1579a7127396",
  measurementId: "G-DGY9WYK37Z",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
