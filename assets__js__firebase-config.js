<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDoB9ol7JFlol1L7D3_iSToOL7SNiLetgw",
    authDomain: "vortex-ai-3ee9a.firebaseapp.com",
    projectId: "vortex-ai-3ee9a",
    storageBucket: "vortex-ai-3ee9a.firebasestorage.app",
    messagingSenderId: "309755894107",
    appId: "1:309755894107:web:dd5b4c6f0d4ee066a9a27e",
    measurementId: "G-YK0B9YX54N"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
