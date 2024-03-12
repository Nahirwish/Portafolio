import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDdS_9dz5FBCKgYLB1TjfuvytwfRYpyP9w",
  authDomain: "portfoliodb-aaa53.firebaseapp.com",
  projectId: "portfoliodb-aaa53",
  storageBucket: "portfoliodb-aaa53.appspot.com",
  messagingSenderId: "732113463560",
  appId: "1:732113463560:web:42a1a955a6c03a0a5424bd",
  measurementId: "G-39SEJP5LRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);