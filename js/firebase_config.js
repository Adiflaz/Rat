// Firebase Configuration (COMPAT MODE)
const firebaseConfig = {
  apiKey: "AIzaSyAwEcj8llBV26EOpXALXZ_ERp-b3xN3L0E",
  authDomain: "rat-tes.firebaseapp.com",
  databaseURL: "https://rat-tes-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rat-tes",
  storageBucket: "rat-tes.firebasestorage.app",
  messagingSenderId: "847730881240",
  appId: "1:847730881240:android:943f872f2b04bc8f471dad"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Global database reference
const database = firebase.database();