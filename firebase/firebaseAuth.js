// src/firebase/firebaseAuth.js
import { 
    signInWithPopup, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut 
  } from "firebase/auth";
  import { 
    auth, 
    googleProvider, 
  } from "./firebaseConfig";
  
  // Sign up with Email and Password
  export const emailSignUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error signing up with email and password", error);
    }
  };
  
  // Sign in with Email and Password
  export const emailSignIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error signing in with email and password", error);
    }
  };
  
  // Sign in with Google
  export const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };
  
  // Sign in with Discord
  export const discordSignIn = async () => {
    try {
      await signInWithPopup(auth, discordProvider);
    } catch (error) {
      console.error("Error signing in with Discord", error);
    }
  };
  
  // Sign out
  export const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };
  