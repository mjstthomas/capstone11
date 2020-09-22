import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyClqX60Rb6JpCVwu0x1PtUstZGhH9sc-GA",
  authDomain: "dev-it-58d22.firebaseapp.com",
  databaseURL: "https://dev-it-58d22.firebaseio.com",
  projectId: "dev-it-58d22",
  storageBucket: "dev-it-58d22.appspot.com",
  messagingSenderId: "503067208671",
  appId: "1:503067208671:web:623eca30e3878690fd326a"
};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage();

export {storage, firebase as default};