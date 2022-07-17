const loginForm = document.getElementById("form");
const loginButton = document.getElementById("button");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "admin") {
        location.href = "http://127.0.0.1:5500/template/administracion.html"
    } else {
        location.href = "http://127.0.0.1:5500/template/productos.html";
        alert("Usuario logeado exitosamente");
    }
})


function createuser(){
    let name = document.getElementById('userName').value
    let password = document.getElementById('pwd').value

    let usuario={
        name:name,
        password:password,
    }
    let url ='http://127.0.0.1:5000/user'
    var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            location.href = "login.html"
 
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}



        