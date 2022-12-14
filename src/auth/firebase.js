import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged, 
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKOuLhQL-PyOPPV-42qeOSCbh4h4xfltI",
  authDomain: "movie-app-54f5f.firebaseapp.com",
  projectId: "movie-app-54f5f",
  storageBucket: "movie-app-54f5f.appspot.com",
  messagingSenderId: "326858529242",
  appId: "1:326858529242:web:2e9bf127ec56c2515508e3",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, password, displayName, navigate) => {
  try {
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
    await updateProfile(auth.currentUser, {
      displayName
    })
  } catch (error) {
    alert("The email address is already in use by another account!");
  }

  
};

export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    navigate('/');
  } catch (err) {
    alert(err.message);
  }
};

export const userObserver = async (setCurentUser) => {
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurentUser(user)
    } else {
      setCurentUser(null)
    }
  });
} 

export const SignOut = () => {
  signOut(auth)
}

export const signUpProvider = () =>{
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });
  signInWithPopup(auth, provider)
  
}
