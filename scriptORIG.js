let entrada = document.querySelector("#entrada");   
let boton = document.querySelector("#boton");      
let lista = document.querySelector("#lista");      

let listaPrevia ="";

// Funcion que añade elementos cuando hacemos clic en el botón Add
boton.onclick = function(){
    
    let tarea = entrada.value;
    if(tarea ==''){
        alert('Debe ingresar una tarea');
    }else{
    li = document.createElement('li');
    li.innerHTML = tarea;
    lista.insertBefore(li,lista.childNodes[0]);
    listaPrevia = listaPrevia + tarea;
    localStorage.setItem('listaLS', JSON.stringify(listaPrevia));
    entrada.value = '';
    }    
};

// localStorage.setItem("listaLS", JSON.stringify(lista));


// ALL: al hacer clic sobre ALL eliminará todas las tareas - Eliminación por HTML Collection
let opcionAll = document.getElementById("all")
    opcionAll.addEventListener("click",function(){

        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
          }

     localStorage.removeItem("listaLS")

    alert("Todas las tareas fueron eliminadas")
  })



// DONE: al hacer clic sobre DONE eliminará solo las tareas que fueron realizadas
let opcionDone = document.getElementById("done")
    opcionDone.addEventListener("click",function(){

        let tareaSeleccionada = document.getElementsByClassName("seleccionada");
        while(tareaSeleccionada.length > 0){
        
        lista.removeChild(tareaSeleccionada[0]);
        
       
        }
        

    alert("Las tareas seleccionadas fueron eliminadas")
  })



//Añade la clase de nombre "Seleccionada" a la tarea que fue elegida 
lista.onclick = function(ev){
    if(ev.target.tagName == 'LI'){
         ev.target.classList.toggle('seleccionada');
    }
};




