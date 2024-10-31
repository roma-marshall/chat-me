const firebaseConfig = {
  databaseURL: "https://vue-app-db753-default-rtdb.europe-west1.firebasedatabase.app",
  // apiKey: import.meta.env.VITE_API_KEY, // local
  apiKey: process.env.VITE_API_KEY, // vercel
  authDomain: "vue-app-db753.firebaseapp.com",
  projectId: "vue-app-db753",
  storageBucket: "vue-app-db753.firebasestorage.app",
  messagingSenderId: "216666859258",
  appId: "1:216666859258:web:d8a71442ea367839a3cb43"
};

export default firebaseConfig