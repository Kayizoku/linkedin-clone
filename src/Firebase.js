import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAOjrFYybicDJrohzSP9MsS4tiLYqSIg9o",
    authDomain: "linkedin-clone-yt-addf4.firebaseapp.com",
    projectId: "linkedin-clone-yt-addf4",
    storageBucket: "linkedin-clone-yt-addf4.appspot.com",
    messagingSenderId: "17489735953",
    appId: "1:17489735953:web:b0307f7237bf78026e9cb0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};