let entrada = document.querySelector("#entrada");   
let boton = document.querySelector("#boton");      
let lista = document.querySelector("#lista");      

// let listaPrevia ="";



class claseLista {
    constructor(tarea2){
        this._tarea2 = tarea2;
        this.tareas = [];
       

        this.inicializarTareas();  // inicializamos siempre una tarea
    }

  

    inicializarTareas(){
    console.log("Inicializando tarea");    
    // this._tareas = [];
    } 
    

    anadirTarea(tarea3){
        this.tareas.push(tarea3);
        // this._tareas.push(tarea3);
    }
    
};

let objetoLista = new claseLista();



// Funcion que añade elementos cuando hacemos clic en el botón Add
boton.onclick = function(){
    
    let nuevaTarea = entrada.value;
    if(nuevaTarea ==''){
        alert('Debe ingresar una tarea');
    }else{
        objetoLista.anadirTarea(nuevaTarea);
        li = document.createElement('li');
        li.innerHTML = objetoLista.tareas[objetoLista.tareas.length-1];
        lista.insertBefore(li,lista.childNodes[0]);
        entrada.value = '';

    

    };  
};

// localStorage.setItem("listaLS", JSON.stringify(lista));

/*

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

*/


