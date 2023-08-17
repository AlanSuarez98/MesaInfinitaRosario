var año = document.getElementById("año-actual");
año.innerHTML = new Date().getFullYear();

var btnMenu = document.getElementById("btnMenu");
var menu = document.getElementById("listaNavMovil");

btnMenu.addEventListener("click", ()=> {
    if (menu.style.visibility === "hidden"){
        menu.style.visibility="visible";
    }
    else{
        menu.style.visibility= "hidden" ;
    }
});


function redirigirRealizarPedido() {
    // URL de la página de destino
    const urlDestino = 'https://w.app/MesaInfinitasRosario'; // Reemplaza con la URL de tu página de destino

    // Redirigir a la página de destino en una nueva pestaña o ventana
    window.open(urlDestino, '_blank');
}
function redirigirContacto() {
    // URL de la página de destino
    const urlDestino = 'https://api.whatsapp.com/send?phone=+543412143089'; // Reemplaza con la URL de tu página de destino

    // Redirigir a la página de destino en una nueva pestaña o ventana
    window.open(urlDestino, '_blank');
}
function redirigirIG() {
    // URL de la página de destino
    const urlDestino = 'https://www.instagram.com/mesa.infinita/'; // Reemplaza con la URL de tu página de destino

    // Redirigir a la página de destino en una nueva pestaña o ventana
    window.open(urlDestino, '_blank');
}
function redirigirMachimbre() {
    // URL de la página de destino
    const urlDestino = 'Pages/Machimbre/machimbre.html'; // Reemplaza con la URL de tu página de destino

    // Redirigir a la página de destino en la misma pestaña
    window.location.href = urlDestino;
}
function redirigirMadera() {
    // URL de la página de destino
    const urlDestino = 'Pages/Madera/Madera.html'; // Reemplaza con la URL de tu página de destino

    // Redirigir a la página de destino en la misma pestaña
    window.location.href = urlDestino;
}
function redirigirPeluche() {
    // URL de la página de destino
    const urlDestino = 'Pages/Peluche/Peluche.html'; // Reemplaza con la URL de tu página de destino

    // Redirigir a la página de destino en la misma pestaña
    window.location.href = urlDestino;
}
function redirigirRustica() {
    // URL de la página de destino
    const urlDestino = 'Pages/Rustica/Rustica.html'; // Reemplaza con la URL de tu página de destino

    // Redirigir a la página de destino en la misma pestaña
    window.location.href = urlDestino;
}


const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_csaqh9i';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Enviar';
        }, (err) => {
            btn.value = 'Enviar';
            console.log(JSON.stringify(err));
        });
});