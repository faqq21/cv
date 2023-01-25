document.getElementById('boton-email').addEventListener('click', function(){
    document.getElementById("contactos").innerHTML="E-Mail: juan.pierce@example.com";
    document.getElementById('contactos').style.display='block';
})
document.getElementById('boton-telefono').addEventListener('click', function(){
    document.getElementById("contactos").innerHTML="Teléfono: (510) 867-8307";
    document.getElementById('contactos').style.display='block';

})
document.getElementById('boton-twitter').addEventListener('click', function(){
    document.getElementById("contactos").innerHTML="Twitter: @juniper04";
    document.getElementById('contactos').style.display='block';

})
document.getElementById('boton-instagram').addEventListener('click', function(){
    document.getElementById("contactos").innerHTML="Instagram: @juniper";
    document.getElementById('contactos').style.display='block';

})