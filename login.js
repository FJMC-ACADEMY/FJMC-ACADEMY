import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


const form = document.getElementById("loginForm");

const message = document.getElementById("loginMessage");


form.addEventListener("submit", async function(e) {

    e.preventDefault();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;


    try {

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        window.location.href =
            "dashboard.html";

    }
try {
    const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
    );

    console.log("LOGIN SUCCESS:", userCredential.user.uid);

    window.location.href = "dashboard.html";

} catch (error) {

    console.error("LOGIN ERROR:", error.code, error.message);

    document.getElementById("errorMessage").innerText =
        error.message;
}

    catch(error) {

        console.error(error);

        message.innerText =
            alert
            "Invalid email or password.";

    }

});
