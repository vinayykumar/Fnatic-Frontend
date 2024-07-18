import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//     apiKey: `${process.env.FIREBASE_APP_API_KEY}`,
//     authDomain: "fnatic-3ea4d.firebaseapp.com",
//     projectId: `${process.env.FIREBASE_APP_PROJECT_ID}`,
//     storageBucket: "fnatic-3ea4d.appspot.com",
//     messagingSenderId: "483885184103",
//     appId: `${process.env.FIREBASE_APP_ID}`,
//     measurementId: "G-HT4QQS5TRQ"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyBLpyGbxEwJgK9iFINbZFvHjXNvQ8J8iMc",
  authDomain: "fnatic-3ea4d.firebaseapp.com",
  projectId: "fnatic-3ea4d",
  storageBucket: "fnatic-3ea4d.appspot.com",
  messagingSenderId: "483885184103",
  appId: "1:483885184103:web:dbecbfaea56f28854f50c2",
  measurementId: "G-HT4QQS5TRQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, storage, googleProvider };
