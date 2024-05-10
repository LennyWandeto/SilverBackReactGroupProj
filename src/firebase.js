import { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, doc, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCNyE88xC2JdXK-0CoZQkps2E8UxMqYxFI",
  authDomain: "moringaflix.firebaseapp.com",
  projectId: "moringaflix",
  storageBucket: "moringaflix.appspot.com",
  messagingSenderId: "999224675216",
  appId: "1:999224675216:web:12dd583fe6b6a667170115"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)





const signup = async (name, email, password)=>{
    try {
        const res= await createUserWithEmailAndPassword(auth, email, password); 
        const user = res.user;

        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
            
        });
        toast.success("Welcome to MoringaFlix!")
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async(email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Logged In!");
    }  catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const logout = async()=>{
    toast.info("You just logged out, you must sign in again.")
    signOut(auth);
}




export {auth, db, login, signup, logout} 