// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref,set,push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfMUtUjdaQFkQIGbmb3fmUjAByWX-TnaI",
  authDomain: "todoappwithdatabase-7198d.firebaseapp.com",
  databaseURL: "https://todoappwithdatabase-7198d-default-rtdb.firebaseio.com",
  projectId: "todoappwithdatabase-7198d",
  storageBucket: "todoappwithdatabase-7198d.appspot.com",
  messagingSenderId: "865370747873",
  appId: "1:865370747873:web:a67c30390ea6f6c6f918a0",
  measurementId: "G-XDJT8VJDH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase();




var ulist = document.getElementById("unOrderlist")

window.addtodo = function (){
    var uval = document.getElementById("uservalue");
 
    var obj ={
        value:uval.value,
    }
    
    console.log(obj)
    obj.id = push(ref(db,"usersvalue/")).key
    const refrence = ref(db,`usersValue${obj.id}`)
    set(refrence,obj)

    // creating li 
    var cli = document.createElement('li');
    var cliText = document.createTextNode(uval.value)
    cli.appendChild(cliText)
    ulist.appendChild(cli)
    
    // after input value , doing it empty
    uval.value = "" ;

    // now creating del btn on li 
    var dbtn = document.createElement('button') ;
    var dbtnText = document.createTextNode("DELETE")
    dbtn.appendChild(dbtnText)
    cli.appendChild(dbtn)
    dbtn.setAttribute("class","btn")
    dbtn.setAttribute("onclick" , "deleteli(this)")
    
    // now creating edit btn on li 
    var ebtn = document.createElement('button') ;
    var eText = document.createTextNode("Edit ") ;
    ebtn.appendChild(eText) ;
    cli.appendChild(ebtn)
    
    ebtn.setAttribute("class" , "btn")
    ebtn.setAttribute("onclick" , "edittodovalue(this)")
    
    console.log(cli)
}    
    



// now creating Delete button Function from li 

window.deleteli =  function (e){
    e.parentNode.remove()
}

// now creating delete all button 

window.deleteall = function (){
    un0rderlist.innerHTML = "" ;
}

// now creating edit todo function 

window.edittodovalue = function (e){
    
    var val = e.parentNode.firstChild.nodeValue ;
    var edittodo = prompt("Edit Value" , val) ;
    e.parentNode.firstChild.nodeValue = edittodo ;
}