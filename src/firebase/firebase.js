import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCFN8btV__41CitJCbI3aprzDeh9C65uxE",
  authDomain: "virtual-solutions-c7861.firebaseapp.com",
  databaseURL: "https://virtual-solutions-c7861-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "virtual-solutions-c7861",
  storageBucket: "virtual-solutions-c7861.appspot.com",
  messagingSenderId: "966939922019",
  appId: "1:966939922019:web:a9f1bb0c887f5dac563256",
  measurementId: "G-6RNP9DLZHS"
};
// Other imports...

export const firebaseApp = initializeApp(firebaseConfig);

// Other Firebase configurations...

const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signUpWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };

  const putData = async (key, data) => {
    try {
      await set(ref(database, key), data);
    } catch (error) {
      throw error;
    }
  };

  return (
    <FirebaseContext.Provider value={{ signUpWithEmailAndPassword, putData }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};