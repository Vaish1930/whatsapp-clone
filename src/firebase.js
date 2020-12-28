import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBU3H1vzClCgmhLzfdF0mplsTaIeouT-MQ",
  authDomain: "whatsapp-clone-d3d2e.firebaseapp.com",
  projectId: "whatsapp-clone-d3d2e",
  storageBucket: "whatsapp-clone-d3d2e.appspot.com",
  messagingSenderId: "831517344647",
  appId: "1:831517344647:web:140b58f4c93259ecb20922",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
