import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "linkedin-clone-fde42.firebaseapp.com",
  projectId: "linkedin-clone-fde42",
  storageBucket: "linkedin-clone-fde42.appspot.com",
  messagingSenderId: "96283594665",
  appId: "1:96283594665:web:746363bd2e1293d5b93eb8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
