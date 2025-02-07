import { initializeApp, getApps } from "firebase/app";
// other imports
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  // ... other config values ...
};
// Check if the app is already initialized
if (getApps().length === 0) {
  initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully!');
} else {
  console.log('Firebase already initialized.');
}
// ... rest of the code ...
// Ensure the firebaseConfig values are correct by verifying in the Firebase console and double-checking for typos.
// Check for multiple instances of initializeApp and handle them accordingly.
// Check Firebase project settings to confirm that your web app is correctly configured and linked.