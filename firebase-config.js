// Firebase SDK Imports from CDN (v10.8.0)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Firebase configuration using credentials provided by User
const firebaseConfig = {
  apiKey: "AIzaSyDm_GkC0sLhRx9t6DC2Ur4Ojr7UBml772s",
  authDomain: "dashiell-doyle.firebaseapp.com",
  projectId: "dashiell-doyle",
  storageBucket: "dashiell-doyle.firebasestorage.app",
  messagingSenderId: "472626140263",
  appId: "1:472626140263:web:60a03ee62d5119b23830c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
