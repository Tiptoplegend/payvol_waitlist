import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtCSf9FkvbNhDT_UUOTBN73nhySC3yTyA",
  authDomain: "payvol-wishlist.firebaseapp.com",
  projectId: "payvol-wishlist",
  storageBucket: "payvol-wishlist.firebasestorage.app",
  messagingSenderId: "648930395954",
  appId: "1:648930395954:web:c092cfe4bd3bc77f79b92b",
  measurementId: "G-CW7VEBN31L",
};

const app = initializeApp(firebaseConfig);

const firestoreDatabaseId = import.meta.env.VITE_FIRESTORE_DATABASE_ID?.trim();
export const db = firestoreDatabaseId 
  ? getFirestore(app, firestoreDatabaseId)
  : getFirestore(app);

void isSupported().then((yes) => {
  if (yes) getAnalytics(app);
});
