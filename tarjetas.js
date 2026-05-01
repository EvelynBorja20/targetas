function crearTarjetas(){
    let divTarjetas = document.getElementById("divTarjetas");

    let desde = parseInt(document.getElementById("desde").value);
    let hasta = parseInt(document.getElementById("hasta").value);
    let salto = parseInt(document.getElementById("salto").value);

    // Validación
    if (isNaN(desde) || isNaN(hasta) || isNaN(salto) || salto <= 0){
        alert("Ingresa valores válidos");
        return;
    }

    divTarjetas.innerHTML = "";

    for (let i = desde; i <= hasta; i += salto){
        let tarjeta = document.createElement("div");
        tarjeta.className = "item";
        tarjeta.textContent = i;

        divTarjetas.appendChild(tarjeta);
    }
}
