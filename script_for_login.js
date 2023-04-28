var btnLogin = document.getElementById('do-login');
var idLogin = document.getElementById('login');
var username = document.getElementById('username');
btnLogin.onclick = function(){
  idLogin.innerHTML = '<h1><p>You are logged in, </p>' +username.value+ '</h1><br><a href="userpage.html" class="forgot"><strong>Go to your account</strong></a>';
}