import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, getDocs, getDoc,
    addDoc, deleteDoc, doc, 
    onSnapshot, 
    query, where,
    QuerySnapshot
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBa-dzmJuhNJqWfi1DvE-ZYQrdf5xoJS6Y",
    authDomain: "fir-project-6f3a4.firebaseapp.com",
    projectId: "fir-project-6f3a4",
    storageBucket: "fir-project-6f3a4.firebasestorage.app",
    messagingSenderId: "934572403483",
    appId: "1:934572403483:web:f8082552386690f01381be"
  };

  //*initlaize the app
  initializeApp(firebaseConfig)

  //* initliazing the databse 
  const db = getFirestore(); 

  //*collection refrence 
  const colRef = collection(db, 'users')

  //!maybe have a js file for the database and then import it to not copy and paste the initlaization to each file 


const welcome = ()=>{
    const params = new URLSearchParams(window.location.search);
    const value = params.get("id");
    console.log(value); 

}
welcome(); 