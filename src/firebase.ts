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

export async function getDiary() {
    // const diaryCol = collection(db, 'diary');
    // const diarySnapshop = await getDocs(diaryCol);
    // const diaryList = diarySnapshop.docs.map((doc) => doc.data());

    const diaryList = getDocs(collection(db, 'diary'));
    const result: any = [];
    (await diaryList).forEach((doc) =>
        result.push({
            id: doc.id,
            diary_date: doc.data().diary_date,
            ...doc.data(),
        })
    );
    return result;
}

export async function getDiaryDetail(docId: string) {
    // const q = collection(db, 'diary', docId);
    // console.log(q);
    // const diarySnapshop = await getDocs(q);
    // const diaryDetail = diarySnapshop.docs[0].data();

    // const diaryCol = collection(db, 'diary');
    // const diarySnapshop = await getDocs(diaryCol);
    // let detail = {};
    // diarySnapshop.docs.forEach((doc) => {
    //     if (doc.id === docId) detail = { ...doc.data() };
    // });

    const docRef = doc(db, 'diary', docId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        throw new Error('문서 아이디가 유효하지 않습니다.');
    }

    return docSnap.data();
}

export async function setData(colle: string, data: any) {
    try {
        await addDoc(collection(getFirestore(), colle), {
            ...data,
        });
    } catch (e) {}
}
