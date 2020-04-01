import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyBiyphoVvOaomkNO07bjoaMXHGS0VuBM4M",
  authDomain: "projectzero-uni.firebaseapp.com",
  databaseURL: "https://projectzero-uni.firebaseio.com",
  projectId: "projectzero-uni",
  storageBucket: "projectzero-uni.appspot.com",
  messagingSenderId: "1013882956179",
  appId: "1:1013882956179:web:a59efe8553d6a47030a066",
  measurementId: "G-36X5YQQ2MB"
}
firebase.initializeApp(config);
const databaseRef = firebase.database().ref()

export const userRef = databaseRef.child("users")

// export const journalRef = databaseRef.child("journals")