function guardar() {
 
    let n = document.getElementById("nombre").value  // muestra el nombre decodificado en el campo de texto
    let f = "../img/"+ document.getElementById("foto").value.substring(12)
    let p = parseFloat(document.getElementById("precio").value)
    let s = parseInt(document.getElementById("stock").value)
    alert(f)
    let producto = {
        nombre: n,
        foto: f,
        precio: p,
        stock: s
    }
    let url = "http://localhost:5000/productos"
    var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
       // redirect: 'follow'
    }
    fetch(url, options)
    .then(function () {
        console.log("creado")
        alert("Grabado")
        window.location.replace("../template/administracion.html");
        // Handle response we get from the API
    })
    .catch(err => {
        //this.errored = true
        alert("Error al grabar" )
        console.error(err);
    })
}
