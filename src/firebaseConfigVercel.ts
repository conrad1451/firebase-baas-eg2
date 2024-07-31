// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// Module '"firebase/firestore"' has no exported member 'ref'.ts(2305)
// import { ref } from "firebase/firestore";

// source: https://firebase.google.com/docs/database/web/read-and-write
import { getDatabase, ref } from "firebase/database";

// import { CollectionReference } from "firebase/firestore";
// import { collection } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// '"firebase/firestore"' has no exported member named 'collectionRef'. Did you mean 'collection'?ts(2724)
// import { collectionRef } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvLawQO_UOctl4uIpvM-nHyMUv20EFNf0",
  authDomain: "fir-frontend-74f54.firebaseapp.com",
  projectId: "fir-frontend-74f54",
  storageBucket: "fir-frontend-74f54.appspot.com",
  messagingSenderId: "989452596283",
  appId: "1:989452596283:web:0f9d64cb4e60db7b5e181e",
  measurementId: "G-CBK5VXPGYK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const database = getFirestore(app);
export const database = getDatabase(app);

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

export const mySampleDataRef = ref(database, "mysampledata");

// export const myRef = app.database().ref();

// export const analytics = getAnalytics(app);

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// did not work...
// export const writeUserData(userId, name, email, imageUrl) = function {
//     const db = getDatabase();
//     set(ref(db, 'users/' + userId), {
//       username: name,
//       email: email,
//       profile_picture : imageUrl
//     });
//   }
