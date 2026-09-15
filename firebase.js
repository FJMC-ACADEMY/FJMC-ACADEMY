import { initializeApp } from "https://gstatic.com";
import { getFirestore } from "https://gstatic.com";
import { getAuth } from "https://gstatic.com";

// ⚠️ यहाँ अपने खुद के Firebase Console प्रोजेक्ट की कॉन्फ़िगरेशन डिटेल्स डालें
const firebaseConfig = {
    apiKey: "AIzaSyDP4fDjIdc7MENDhG1oeHRtBiQ4RCS_fzk",
    authDomain: "fjmc-academy.firebaseapp.com",
    projectId: "fjmc-academy",
    storageBucket: "fjmc-academy.firebasestorage.app",
    messagingSenderId: "251378819994",
    appId: "1:251378819994:web:0db31e0cf277686e475023"
    measurementId: "G-TNCX8J9VZ7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
