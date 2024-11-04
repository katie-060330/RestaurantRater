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


  const registerFrom = document.querySelector('.register')
  registerFrom.addEventListener('submit', async (e) =>{
    e.preventDefault(); 
    //* check to see if the user is already rediterd if so do not allow the register of the user
    if(!( await checkIfUserExists(registerFrom.email.value))){
      
      //*adding user to the database
      addDoc(colRef,{
        firstName: registerFrom.firstName.value,
        lastName: registerFrom.lastName.value, 
        email: registerFrom.email.value, 
        password: registerFrom.password.value,
        id: genId
      } )
      .then(()=>{
        //*sending the user to the home page
        //TODO send the user id with the transition to the home page and show the user how to interact with the db
        // On the first page
        const params = new URLSearchParams();
        params.append("email", registerFrom.email.value);
        window.location.href = `home.html?${params.toString()}`;

        window.location.href = 'home.html';
        registerFrom.reset();
      })

    }
    else{
      console.log('User already exist');
    }
   
  })


async function checkIfUserExists(email){

  //*gets all of the objects with teh same email, should be one or zero becsue of this function 
  const usersQuery = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(usersQuery)

  //*if the snapshot is NOT empty then we know that there is a user 
  if(!querySnapshot.empty){
    console.log('user exists');
    return true; 
  }
  else{
    //*no user in the database with that email
    console.log('no such user add to database');
    return false;
  }
}

const loginForm = document.querySelector(".loginForm"); 
loginForm.addEventListener('submit', async (e) =>{
  e.preventDefault();
  if(checkIfUserExists(loginForm.email.value)){
    //* verify that teh user is the right pass word and email

    if(verifyUserInput(loginForm.email.value, loginForm.password.value)){
      //* send email to the next html page 

      const params = new URLSearchParams();
      params.append("email", loginForm.email.value);
      window.location.href = `home.html?${params.toString()}`;
    } 
  

  }
  else{
    console.log('you dont have an account with this email ');
  }
 
})

const verifyUserInput = async (email, pw) =>{
  //*gets all of the ONE users connectedt ot the email thanks to the function above 
  const usersQuery = query(collection(db, "users"), where("email", "==", email));
  const querySnapShot = await getDocs(usersQuery); 
  //*go thought the 
  for(let doc of querySnapShot.docs){
    if(doc.data().password === pw){

      console.log(doc.data());
      return true; 

    }
    else{
      console.log('Invalid input ');
      return false; 
    }
    
  }
  

}