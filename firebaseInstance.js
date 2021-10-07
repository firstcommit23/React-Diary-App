import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messageingSenderId: process.env.REACT_APP_MESSAGINH_ID,
    appId: process.env.REACT_APP_APP_ID,
};

firebase.initalizeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authServicde = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
