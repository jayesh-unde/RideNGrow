var userData = {
  name: username.value,
  password: pass.value,
};
usersRef.add(userData)
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });



var btnLogin = document.getElementById('do-login');
var idLogin = document.getElementById('login');
var pass = document.getElementById('pass');
var username = document.getElementById('username');
