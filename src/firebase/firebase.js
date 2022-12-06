import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "clone-86147.firebaseapp.com",
  projectId: "clone-86147",
  storageBucket: "clone-86147.appspot.com",
  messagingSenderId: "469365192988",
  appId: "1:469365192988:web:7cd71124c53e519b0962d9",
};

const app = initializeApp(firebaseConfig);
