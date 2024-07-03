// import firebase from "firebase";

// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { initializeApp } from 'firebase/app';
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";

// import firebase from "firebase/compat/app";
// // Required for side-effects
// import "firebase/firestore";

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/storage';

// const fireaseapp = firebase.initializeApp({
//   apiKey: "AIzaSyBs4v4qEVVQGreVRHFbThhhNiQ8AVJ70Kc",
//   authDomain: "instagram-clone-app-4f17f.firebaseapp.com",
//   projectId: "instagram-clone-app-4f17f",
//   storageBucket: "instagram-clone-app-4f17f.appspot.com",
//   messagingSenderId: "878235495173",
//   appId: "1:878235495173:web:a46274c7507e0466b2256c",
//   measurementId: "G-CE26CCT7SV",
// });

// const firebaseConfig = {
//   apiKey: "AIzaSyBs4v4qEVVQGreVRHFbThhhNiQ8AVJ70Kc",
//   authDomain: "instagram-clone-app-4f17f.firebaseapp.com",
//   projectId: "instagram-clone-app-4f17f",
//   storageBucket: "instagram-clone-app-4f17f.appspot.com",
//   messagingSenderId: "878235495173",
//   appId: "1:878235495173:web:a46274c7507e0466b2256c",
//   measurementId: "G-CE26CCT7SV",
// };

// Use this to initialize the firebase App
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const firebaseApp = initializeApp(firebaseConfig);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth, db };

// const auth = firebase.auth();
// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(firebaseApp);

// // const storage = firebase.storage();
// const storage = getStorage(firebaseApp);
// // const db = firebaseApp.firestore();

// const db = getFirestore(firebaseApp);

// export { db, auth, storage };



// firebase.jsx
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBs4v4qEVVQGreVRHFbThhhNiQ8AVJ70Kc",
  authDomain: "instagram-clone-app-4f17f.firebaseapp.com",
  projectId: "instagram-clone-app-4f17f",
  storageBucket: "instagram-clone-app-4f17f.appspot.com",
  messagingSenderId: "878235495173",
  appId: "1:878235495173:web:a46274c7507e0466b2256c",
  measurementId: "G-CE26CCT7SV",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export { db, storage , auth };