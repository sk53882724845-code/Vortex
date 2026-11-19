VORTEX AI WEBSITE — SETUP GUIDE

ZIP ke andar complete static site hai: homepage, login, signup, dashboard, request form, contact, privacy, terms, CSS, JavaScript, Firebase config placeholder, Firestore rules.

1. FIREBASE CONFIG
Firebase Console > Project settings > General > Your apps > Web app config.
assets/js/firebase-config.js mein apiKey, authDomain, projectId aur appId replace karein. Sirf Firebase web-app config use karein. Service-account JSON/private key kabhi browser files mein na daalein.

2. AUTHENTICATION
Firebase Console > Authentication > Sign-in method mein Email/Password enable karein. Email link (passwordless) bhi enable karein agar magic-link login chahiye.
Authentication > Settings > Authorized domains mein sk53882724845-code.github.io add karein. Custom domain ho to woh bhi add karein.

3. FIRESTORE
Firestore Database banayein aur firestore.rules ka content Rules tab mein publish karein. Signup par users/{uid} profile credits=0 ke saath banta hai. Client apna credit balance edit nahi kar sakta. Admin credit updates ke liye secure server-side trusted environment chahiye.

4. GITHUB PAGES
ZIP extract karke saare folders/files repository ke root mein upload karein. index.html root mein hona chahiye. GitHub repo > Settings > Pages > Deploy from branch > main / root.

5. EMAIL REQUEST
request.html ka form quiltclient@zohomail.in ko prefilled email draft kholta hai. Visitor ko apne mail app mein Send press karna hoga. GitHub Pages alone automatic email send nahi kar sakta. Automatic delivery ke liye backend ya email service chahiye.

6. IMPORTANT SECURITY
- HTTPS use karein.
- Google/YouTube password kabhi apne form mein collect na karein. Channel authorization ke liye official Google OAuth consent flow use karein.
- Firebase config browser mein visible hota hai; actual protection Authentication + Firestore Security Rules se hoti hai.
- Privacy Policy/Terms ko actual data handling ke mutabik edit/review karein.
- Google Safe Browsing warning sirf design change se automatically nahi hategi. Repo ke sabhi pages/scripts inspect karein, compromised content remove karein, phir Google Search Console > Security Issues mein review request karein.
