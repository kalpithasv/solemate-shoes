import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBBUDK-BFnjx5qoP9dWqfhiHKFtZGw9Iic',
  authDomain: 'solemate-shoes.firebaseapp.com',
  projectId: 'solemate-shoes',
  storageBucket: 'solemate-shoes.appspot.com',
  messagingSenderId: '785017758969',
  appId: '1:785017758969:web:9468f76a7db2cbd8846e28',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default app;
