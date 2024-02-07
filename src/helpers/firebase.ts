import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore, collection } from "firebase/firestore";

export const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_APP_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
});

// // used for the firestore refs
// const db = getFirestore(firebaseApp);

// // here we can export reusable database references
// export const todosRef = collection(db, "todos");
