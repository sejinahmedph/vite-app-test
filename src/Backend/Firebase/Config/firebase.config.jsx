import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
    projectId: "programming-hero-e1f03",
    storageBucket: "programming-hero-e1f03.appspot.com",
    messagingSenderId: "527459708903",
    appId: "1:527459708903:web:b0baf2e95d5a584af6d742",
    measurementId: "G-K61FNTM1CJ",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app, analytics };