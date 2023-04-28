const firebaseConfig = {
    apiKey: "AIzaSyCoKiq8FVwm44IDTXeuH9_of1dfqf4c0I0",
    authDomain: "signup-carpooling.firebaseapp.com",
    databaseURL: "https://signup-carpooling-default-rtdb.firebaseio.com",
    projectId: "signup-carpooling",
    storageBucket: "signup-carpooling.appspot.com",
    messagingSenderId: "378271363708",
    appId: "1:378271363708:web:58d1d8e3d1df2fd899cff9",
    measurementId: "G-WBKTC2LMQX"
  };
  firebase.initializeApp(firebaseConfig);


var signupdb = firebase.database().ref('Signup-Carpooling');
document.getElementById('signup').addEventListener('submit',submitform);

function submitform(e){
    e.preventDefault();
    var firstname = getElementByVal('firstname');
    var lastname = getElementByVal('lastname');
    var email = getElementByVal('email');
    var gender = getElementByVal('gender');
    var mobileno = getElementByVal('mobileno');
    var pass = getElementByVal('pass');
    saveSignups(firstname,lastname,email,gender,mobileno,pass);
    
}
const saveSignups = (firstname,lastname,email,gender,mobileno,pass) =>{
 var newSignupform = signupdb.push();
 newSignupform.set({
    firstname : firstname,
    lastname : lastname,
    email : email,
    gender : gender,
    mobileno : mobileno,
    pass : pass,

 });
};
const getElementByVal = (id) => {
    return document.getElementById(id).value;
};