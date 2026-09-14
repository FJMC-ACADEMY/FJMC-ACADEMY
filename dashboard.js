import {
    auth,
    db
} from "./firebase.js";


import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


const container =
    document.getElementById("coursesContainer");


const studentName =
    document.getElementById("studentName");


onAuthStateChanged(auth, async (user) => {

    if (!user) {

        window.location.href =
            "login.html";

        return;

    }


    const studentRef =
        doc(db, "students", user.uid);


    const studentSnap =
        await getDoc(studentRef);


    if (!studentSnap.exists()) {

        container.innerHTML =
            "<p>Student profile not found.</p>";

        return;

    }


    const student =
        studentSnap.data();


    studentName.innerText =
        student.name || user.email;


    const courses =
        student.courses || [];


    if (courses.length === 0) {

        container.innerHTML =
            "<p>No course assigned yet.</p>";

        return;

    }


    for (const courseId of courses) {

        const courseRef =
            doc(db, "courses", courseId);


        const courseSnap =
            await getDoc(courseRef);


        if (!courseSnap.exists()) continue;


        const course =
            courseSnap.data();


        const div =
            document.createElement("div");


        div.className = "course";


        div.innerHTML = `

            <h3>
                ${course.title}
            </h3>

            <p>
                ${course.description || ""}
            </p>

            <button>
                Open Course
            </button>

        `;


        div.querySelector("button")
            .addEventListener("click", () => {

                window.location.href =
                    "course.html?id=" +
                    courseId;

            });


        container.appendChild(div);

    }

});


document
    .getElementById("logoutBtn")
    .addEventListener("click", async () => {

        await signOut(auth);

        window.location.href =
            "login.html";

    });