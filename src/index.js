import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, getDocs, 
    addDoc, deleteDoc, doc, 
    onSnapshot, 
    query, where
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

  //? Registering users to the databse 

  const registerFrom = document.querySelector('.register')
  registerFrom.addEventListener('submit', (e) =>{
    e.preventDefault(); 
    //TODO check to see if the user is already rediterd if so do not allow the register of the user

    addDoc(colRef,{
      firstName: registerFrom.firstName.value,
      lastName: registerFrom.lastName.value, 
      email: registerFrom.email.value, 
      password: registerFrom.password.value
    } )
    .then(()=>{
      //TODO send the user to the home page 
      registerFrom.reset();
    })
  })

  // const addBookForm = document.querySelector('.add')
// addBookForm.addEventListener('submit', (e) => {
//   e.preventDefault()

//   addDoc(colRef, {
//     title: addBookForm.title.value,
//     author: addBookForm.author.value,
//   })
//   .then(() => {
//     addBookForm.reset()
//   })
// })



// const addValuesToDb = (email, password) => {
//     db.collection("user").add({
//         email: email, 
//         password: password, 
//         name: "katie"
//     }).then(() => {
//         console.log('User added:', email);
//     }).catch((error) => {
//         console.error('Error adding user:', error);
//     });
// };

//!getting data
  //?collection refrence 


  //quereys 
  //?get the field that are equal to rober munch 
  // const q = query(colRef, where("title", "==", "robert munch"))

  //?get the colection data

  
//TODO to get the users equal to something use q defined above 
  //!Real time listners
  // onSnapshot(colRef, (snapshot)=>{
  //   let box = []
  //   snapshot.docs.forEach((doc) =>{
  //       box.push({... doc.data(), id: doc.id})
  //   })
  //   console.log(box);

  // })

    
    

  //!adding 


// const addUserForm = document.querySelector('.loginForm')
// addUserForm.addEventListener('submit', (e) =>{
//     e.preventDefault(); 
//     addDoc(colRef, {
//         author: addUserForm.email.value, 
//         title: addUserForm.password.value
//     })
//     .then(()=>{
//         addUserForm.reset();
//     })
// })



//!deleting data

// const deleteUserForm = document.querySelector('.delete')
// deleteUserForm.addEventListener('click', (e)=>{
//     e.preventDefault(); 

//     const docRef = doc(db, 'box', deleteUserForm.id.value)
//     deleteDoc(docRef)
//     .then(() =>{
//         deleteUserForm.reset();
//     })
// })

// const deleteBookForm = document.querySelector('.delete')
// deleteBookForm.addEventListener('submit', (e) => {
//   e.preventDefault()

//   const docRef = doc(db, 'box', deleteBookForm.id.value)

//   deleteDoc(docRef)
//     .then(() => {
//       deleteBookForm.reset()
//     })
// })

// submitButton.addEventListener('submit', (event) => {
//     event.preventDefault(); //preventing the dfault action of refrshing the page 

//         addDoc(colRef, {
//             title: addUserForm.email.value, 
//             author: addUserForm.password.value
//         })
//         .then(() =>{
//             addUserForm.request()
//         })


//     addValuesToDb(emailInput, passwordInput);
// });

// const addBookForm = document.querySelector('.add')
// addBookForm.addEventListener('submit', (e) => {
//   e.preventDefault()

//   addDoc(colRef, {
//     title: addBookForm.title.value,
//     author: addBookForm.author.value,
//   })
//   .then(() => {
//     addBookForm.reset()
//   })
// })


