//funcion que me aplica el estilo a la opcion seleccionada en el menu y quita la previamente seleccionada 

function seleccionar(link){
    var opciones = document.querySelectorALL('#Links a');
    opciones[0].className = "";
    opciones[1].className = ""; 
    opciones[2].className = ""; 
    opciones[3].className = "";  
    opciones[4].className = ""; 
    link.className = "seleccionado"
}


//hacemos desaparecer el menu una vez que seleccionamos el modo responsive 

var x = document.getElementById("nav");
x.className =""

//funcion que muestra el menu responsive 

function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className==""){
        x.className = "responsive";
    }else{
        x.className ="";
    }
}

//detecto el scrolling para aplicar la animacion de las barras de habilidades

window.onscroll = function(){
    efectoHabilidades()
};

//funcion que aplica la animacion de las barras de habilidades

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills= window.innerHeight = skills.getBoundingClientRect().top;
    if (distancia_skills >=300) {
        document.getElementById("java").classList.add("barra-progreso1")
        document.getElementById("html").classList.add("barra-progreso2")
        document.getElementById("js").classList.add("barra-progreso3")
        document.getElementById("bd").classList.add("barra-progreso4")
    }

}