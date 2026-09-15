import { db } from './firebase.js';
import { collection, getDocs } from "https://gstatic.com";

// कॉमन फंक्शन: डेटाबेस से डेटा लाकर स्क्रीन ग्रिड में भरने के लिए
async function loadData(collectionName, containerId, cardRenderer) {
    const container = document.getElementById(containerId);
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        if(querySnapshot.empty) {
            container.innerHTML = "<p>No data found.</p>";
            return;
        }
        container.innerHTML = ""; // लोडिंग टेक्स्ट हटाएँ
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            container.innerHTML += cardRenderer(data);
        });
    } catch (error) {
        console.error(`Error fetching ${collectionName}:`, error);
        container.innerHTML = "<p style='color:red;'>Failed to load data.</p>";
    }
}

// 1. कोर्स कार्ड रेंडरर
const courseRenderer = (data) => `
    <div class="card">
        <div style="font-size:40px; color:#e11d48; margin-bottom:10px;"><i class="fa-solid fa-graduation-cap"></i></div>
        <h3>${data.title || 'Course Title'}</h3>
        <p>${data.description || 'Course description details go here.'}</p>
    </div>
`;

// 2. बुक्स कार्ड रेंडरर
const bookRenderer = (data) => `
    <div class="card" style="border-top: 4px solid #3b82f6;">
        <img src="${data.image || 'https://placeholder.com'}" alt="Book Cover">
        <h3>${data.title || 'Book Title'}</h3>
        <p>${data.subtitle || 'Mathematics Reference'}</p>
    </div>
`;

// 3. रैंकर्स कार्ड रेंडरर
const rankerRenderer = (data) => `
    <div class="card ranker-card">
        <img src="${data.image || 'https://placeholder.com'}" style="border-radius:50%; width:100px; height:100px; margin:0 auto 10px;" alt="Ranker">
        <h3>${data.name || 'Student Name'}</h3>
        <p>${data.exam || 'IIT JAM / CSIR NET'}</p>
        <div class="rank-badge">Rank - ${data.rank || '00'}</div>
    </div>
`;

// पेज लोड होते ही सभी सेक्शन्स का डेटा मंगाना शुरू करें
document.addEventListener("DOMContentLoaded", () => {
    loadData("courses", "courses-grid", courseRenderer);
    loadData("books", "books-grid", bookRenderer);
    loadData("rankers", "rankers-grid", rankerRenderer);
});
