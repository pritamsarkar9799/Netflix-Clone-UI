import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {getFirestore, addDoc, collection} from "firebase/firestore";
import {toast} from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyBw8z_xkT_wHpw6rTFxKZKCOlYJFFg6cyY",
  authDomain: "netflix-clone-8c088.firebaseapp.com",
  projectId: "netflix-clone-8c088",
  storageBucket: "netflix-clone-8c088.firebasestorage.app",
  messagingSenderId: "611884459420",
  appId: "1:611884459420:web:4cf064c8dd802535b15459"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
        //alert(error);
    }
}

const login = async (email, password)=>{
    try{
        await signInWithEmailAndPassword(auth, email, password);
    } catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
        //alert(error);
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};