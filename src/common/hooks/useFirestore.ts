import { Firestore } from "firebase/firestore";
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";

export default function useFirestore(): Firestore {
    const config = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_APP_ID,
    };
    const app = initializeApp(config);

    return getFirestore(app);
}