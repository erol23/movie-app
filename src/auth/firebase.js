import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

export const createUser = async (email, password) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
  } catch (err) {
    alert(err.message);
  }
};
