
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//lanchhaim

const firebaseConfig = {
  apiKey: "AIzaSyCme6LwhRAFQtrvcbrPq_w12afgwF4lnw8",
  authDomain: "clone-86ab4.firebaseapp.com",
  projectId: "clone-86ab4",
  storageBucket: "clone-86ab4.appspot.com",
  messagingSenderId: "727869274918",
  appId: "1:727869274918:web:4efe3eeef0c2e9a6e5dfe7"
};

//vannanchin

// const firebaseConfig = {
//   apiKey: "AIzaSyBmkdMc_Ek6CnA6s5tVsvRDMeVpcr-k7lI",
//   authDomain: "email-clone-95af1.firebaseapp.com",
//   projectId: "email-clone-95af1",
//   storageBucket: "email-clone-95af1.appspot.com",
//   messagingSenderId: "32920330378",
//   appId: "1:32920330378:web:e0a2ed2692323a34bb8d73"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyDlECRVmnnYQ-BlgY9eKd8sn3GBX8ry144",
//   authDomain: "clone-4964a.firebaseapp.com",
//   projectId: "clone-4964a",
//   storageBucket: "clone-4964a.appspot.com",
//   messagingSenderId: "352689723405",
//   appId: "1:352689723405:web:9c4c41764b3b14d0085d44"
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

