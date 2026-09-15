// ================= MOBILE MENU =================

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


// ================= ENQUIRY FORM =================

document
    .getElementById("enquiryForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const phone =
            document.getElementById("phone").value;

        const course =
            document.getElementById("course").value;

        const message =
            document.getElementById("message").value;


        if (!name || !phone || !course) {

            alert("Please fill all required fields.");

            return;

        }


        alert(
            "Thank you " +
            name +
            "! Your enquiry has been received."
        );


        document
            .getElementById("enquiryForm")
            .reset();

});
// Firebase ऑथेंटिकेशन इम्पोर्ट करें (अपने कॉन्फ़िगरेशन के हिसाब से)
import { getAuth, signInWithEmailAndPassword } from "https://gstatic.com";

const auth = getAuth();
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // 1. सबसे ज़रूरी: यह लाइन पेज को रीलोड होने से रोकेगी

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // 2. Firebase से लॉगिन प्रोसेस शुरू करें
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // लॉगिन सफल होने पर यह ब्लॉक चलेगा
            console.log("Logged in user:", userCredential.user);
            
            // 3. यहाँ अगले पेज (जैसे वीडियो या डैशबोर्ड) पर भेजें
            window.location.href = "dashboard.html"; // अपने अगले पेज का नाम यहाँ डालें
        })
        .catch((error) => {
            // अगर ईमेल/पासवर्ड गलत है या कोई और एरर है
            console.error("Login Failed:", error.message);
            alert("Error: " + error.message); // इससे यूजर को पता चलेगा कि क्या गलती है
        });
});
