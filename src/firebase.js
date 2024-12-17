import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { use } from "react";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDJFTjmdnWvjpUiCT2pXvBTeNbozUa3Y9U",
  authDomain: "netflix-clone-c8f81.firebaseapp.com",
  projectId: "netflix-clone-c8f81",
  storageBucket: "netflix-clone-c8f81.firebasestorage.app",
  messagingSenderId: "241301134283",
  appId: "1:241301134283:web:15be3e1278ce43d844b44e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
