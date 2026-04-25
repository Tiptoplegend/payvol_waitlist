import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDtCSf9FkvbNhDT_UUOTBN73nhySC3yTyA",
  authDomain: "payvol-wishlist.firebaseapp.com",
  projectId: "payvol-wishlist",
  storageBucket: "payvol-wishlist.firebasestorage.app",
  messagingSenderId: "648930395954",
  appId: "1:648930395954:web:c092cfe4bd3bc77f79b92b",
  measurementId: "G-CW7VEBN31L"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const analytics = getAnalytics(app);
