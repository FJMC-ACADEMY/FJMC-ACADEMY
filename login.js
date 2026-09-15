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


    message.innerText = "Logging in...";


    try {

        const userCredential =
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );


        console.log(
            "LOGIN SUCCESS:",
            userCredential.user.uid
        );


        message.innerText =
            "Login successful!";


        // Go to student dashboard
        window.location.href =
            "dashboard.html";


    } catch (error) {

        console.error(
            "LOGIN ERROR:",
            error.code,
            error.message
        );


        message.innerText =
            "Login failed: " +
            error.message;

    }

});
