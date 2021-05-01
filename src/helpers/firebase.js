import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

import env from 'react-dotenv';

const firebaseConfig = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  databaseURL: env.FIREBASE_DATABASE_URL,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
  appId: env.FIREBASE_APP_ID,
  measurementId: env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
firebase.auth().signInAnonymously();

export default firebase;