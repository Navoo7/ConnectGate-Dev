"use client";

import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCl2FFrXL6mjH5jOqAxUDTEhLmKmcARwJo",
  authDomain: "connectgate-app.firebaseapp.com",
  databaseURL: "https://connectgate-app-default-rtdb.firebaseio.com",
  projectId: "connectgate-app",
  storageBucket: "connectgate-app.appspot.com",
  messagingSenderId: "158067313028",
  appId: "1:158067313028:web:8ee9197e18caa15dc6b5d1",
  measurementId: "G-YCV304PLPG"
};

// Initialize Firebase only once
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
let analytics = null;

if (typeof window !== 'undefined') {
  isSupported().then(supported => {
    if (supported && process.env.NODE_ENV === 'production') {
      analytics = getAnalytics(app);
    }
  }).catch(console.error);
}

export { app, db, storage, analytics };