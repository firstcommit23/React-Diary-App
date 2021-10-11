import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    getDocs,
    Firestore,
} from 'firebase/firestore/lite';

const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DB,
    projectId: process.env.REACT_APP_PID,
    storageBucket: process.env.REACT_APP_SB,
    messagingSenderId: process.env.REACT_APP_SID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MID,
};

const app = initializeApp(config);
const db = getFirestore(app);

export async function getDiary() {
    const diaryCol = collection(db, 'diary');
    const diarySnapshop = await getDocs(diaryCol);
    const diaryList = diarySnapshop.docs.map((doc) => doc.data());

    return diaryList;
}
