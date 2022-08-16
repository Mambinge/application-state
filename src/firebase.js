import firebase from "firebase";
import { ref, onUnmounted } from "vue";
import store from "./store";

const config = {
  apiKey: "AIzaSyASZbSKWNsI37gONsCXosVZD1k7f_97Kpw",
  authDomain: "vue-crud-b650b.firebaseapp.com",
  projectId: "vue-crud-b650b",
  storageBucket: "vue-crud-b650b.appspot.com",
  messagingSenderId: "709120898419",
  appId: "1:709120898419:web:244ba2f21944b7709d0106",
  measurementId: "G-MDP1TZ2KM6",
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const usersCollection = db.collection('users');

export const createUser = user => {
  return usersCollection.add(user);
};

export const getUser = async id => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user);
};

export const deleteUser = (id) => {
  return usersCollection.doc(id).delete();
};

export const useLoadUsers = () => {
    const users = ref([])
    const close = usersCollection.onSnapshot(snapshot => {
      users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return users
  }

firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
})

// firebase.getCurrentUser = () => {
//     return new Promise((resolve, reject) => {
//         const unsubscribe = firebase.auth().onAuthStateChanged(user => {
//             store.dispatch("fetchUser", user);
//             unsubscribe();
//             resolve(user);
//         }, reject);
//     })
// };