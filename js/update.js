var args = location.search.substr(1).split('&');
// lee los argumentos pasados a este formulario
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(args)
document.getElementById("Id").value = parts[0][1] 
document.getElementById("nombre").value = decodeURI(parts[1][1]) //decodeURIhace q no aparezca el % 
document.getElementById("foto").value = parts[2][1]
document.getElementById("precio").value = parts[3][1]
document.getElementById("stock").value = parts[4][1]
 
function modificar() {
    let id = document.getElementById("Id").value
    let n = document.getElementById("nombre").value
    let f = "../img/"+ document.getElementById("foto").value.substring(12)
    let p = parseFloat(document.getElementById("precio").value)
    let s = parseInt(document.getElementById("stock").value)
    let producto = {
        nombre: n,
        foto: f,
        precio: p,
        stock: s
    }
    let url = "http://localhost:5000/productos/"+id
    var options = {
        body: JSON.stringify(producto),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            location.href = "administracion.html"
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}
