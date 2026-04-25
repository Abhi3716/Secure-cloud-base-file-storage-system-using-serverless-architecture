
const firebaseConfig = {
  apiKey: "AIzaSyCxcX8syyY0US76LOV5KPVuRrGYov3QsNg",
  authDomain: "cloud-27ae5.firebaseapp.com",
  projectId: "cloud-27ae5",
  storageBucket: "cloud-27ae5.firebasestorage.app",
  messagingSenderId: "1008253540495",
  appId: "1:1008253540495:web:302f9de8951fdfc89738fa"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
//const functions = firebase.app().functions("us-central1");
