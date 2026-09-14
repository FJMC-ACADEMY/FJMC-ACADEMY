// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

import {
    getStorage
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js";


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

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);


export {
    app,
    auth,
    db,
    storage
};
