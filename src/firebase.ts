import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    addDoc,
    getDoc,
    getDocs,
    query,
    where,
    orderBy,
    limit,
    setDoc,
    updateDoc,
    doc,
    serverTimestamp,
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

export async function getDocuments(collectionName: string) {
    // const diaryCol = collection(db, 'diary');
    // const diarySnapshop = await getDocs(diaryCol);
    // const diaryList = diarySnapshop.docs.map((doc) => doc.data());
    const result: any = [];

    const crt = collection(db, collectionName);
    const snapshot = await getDocs(crt);

    await snapshot.forEach((child) => {
        let id = child.id;
        let data = child.data();

        result.push({ id, ...data });
    });

    return result;
}

export async function getDocument(collectionName: string, documentId: string) {
    const docRef = doc(db, collectionName, documentId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        throw new Error('문서 아이디가 유효하지 않습니다.');
    }

    return docSnap.data();
}

export async function postDocument(colle: string, data: any) {
    try {
        await addDoc(collection(getFirestore(), colle), {
            ...data,
        });
    } catch (e) {}
}
