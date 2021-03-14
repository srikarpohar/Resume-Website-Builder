import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_91Ee11NKqKQROX2n08QSBBvIcPndd44",
  authDomain: "resume-website-builder.firebaseapp.com",
  projectId: "resume-website-builder",
  storageBucket: "resume-website-builder.appspot.com",
  messagingSenderId: "961821440701",
  appId: "1:961821440701:web:1ade41a5e5e9a3284f95d4",
  measurementId: "G-75JGB222Z9",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // .doc returns a ref object even if it idoesnt exists in firestore
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // so we will use snapshot of the documentref object above to check whether user exists
  // using the exists variable in the snapshot object below.
  const userSnapshot = await userRef.get();

  // if user doesnt exists, then we are adding the user in firestore
  // we have to use documentref object for it as it has methods for
  // crud operations(set-create, update, delete, get-query)
  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user, ", error);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

// setting up firebase auth
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setting up google sign in auth provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
