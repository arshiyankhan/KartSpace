if(localStorage.getItem('token') != null){
  window.location.href = '/';
}

function signin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch(`http://localhost:5000/login?username=${username}&password=${password}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.status != "401") {
        localStorage.setItem("token", data.token)
        localStorage.setItem("username", data.username)
        window.location.href = '/';
      }
      else {
        console.log("Invalid Credentials!")
      }
    })
};
