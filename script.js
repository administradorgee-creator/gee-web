function trabajaNosotros(){

    let respuesta = confirm(
        "Por favor envíanos tu solicitud por correo y adjunta tu hoja de vida."
    );

    if(respuesta){

        window.location.href =
        "mailto:CorreoUnico@GrupoEstrategicoEmpresarial.onmicrosoft.com" +
        "?subject=Solicitud de Empleo" +
        "&body=Buen día.%0D%0A%0D%0AAdjunto mi hoja de vida para participar en futuros procesos de selección.%0D%0A%0D%0AGracias.";

    }

}