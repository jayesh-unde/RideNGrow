var btnLogin = document.getElementById('do-login');
var idLogin = document.getElementById('login');
var username = document.getElementById('username');
btnLogin.onclick = function(){
  idLogin.innerHTML = '<p>You are successfully signed in </p><h1>' +username.value+ '</h1><br><a href="ownerpage.html" class="forgot"><strong>Go to your account</strong></a>';
}