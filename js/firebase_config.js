const firebaseConfig = {
  apiKey: "AIzaSyAwEcj8llBV26EOpXALXZ_ERp-b3xN3L0E",
  authDomain: "rat-tes.firebaseapp.com",
  databaseURL: "https://rat-tes-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rat-tes",
  storageBucket: "rat-tes.appspot.com",
  messagingSenderId: "847730881240",
  appId: "1:847730881240:web:26b8529af4da9d41471dad"
};

// Cek agar tidak inisialisasi dua kali (mencegah error rusak)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Definisikan semua variabel yang dibutuhkan aplikasi Anda
const database = firebase.database();
const auth = firebase.auth();
const db = database; // Jalur aman agar file yang pakai nama 'db' tidak error
