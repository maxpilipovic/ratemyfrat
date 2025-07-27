import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// --- New Functions for fetching ranked data ---

// Fetch top 5 most popular schools by review count
export const getPopularSchools = async () => {
  const schoolsRef = collection(db, 'schools');
  const q = query(schoolsRef, orderBy('reviewCount', 'desc'), limit(5));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Fetch top 5 most popular frats by review count
export const getPopularFrats = async () => {
  const fratsRef = collection(db, 'fraternities');
  const q = query(fratsRef, orderBy('reviewCount', 'desc'), limit(5));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Fetch top 5 highest-rated frats
export const getHighestRatedFrats = async () => {
  const fratsRef = collection(db, 'fraternities');
  const q = query(fratsRef, orderBy('averageRating', 'desc'), limit(5));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

