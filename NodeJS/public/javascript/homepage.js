if(localStorage.getItem('token') != null){
    username = localStorage.getItem('username')
    document.getElementById("signinelement").innerHTML = `
        <a href="#" id="signintext">Hello, ${username}</a>
    `
}
