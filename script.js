import checkComplet from "./componentes/checkcomplet.js";
import deleteIcon from "./componentes/deleteIcon.js";


const btn = document.querySelector("[data-fomr-btn]"); // permite seleccionar el boton

const crearTarea = (evento) => { // funcion que permite crear la tarea sin que se recargue la pagina
    evento.preventDefault(); // metodo que permite que la pagina no se recargue y que el vr del input no se borre
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;

    const lista = document.querySelector ("[data-list]"); //selecciono la lista "<ul>"
    const tarea = document.createElement("li"); //creo un elemeto "<li>", item de la lista
    tarea.classList.add("card"); /*agrego la clase que teniamos para el "li" y asi queda con el estilo del css */
    input.value = ""; // dando un valor vacio al input, para  dejarlo en blanco

    const taskContent = document.createElement ("div"); // creando un elemento "<div>"
    

    
    const titleTask = document.createElement("span"); // se crea el elemento span 
    titleTask.classList.add("task");    // se agrega la clase task del span (css) al elemento titleTask
    titleTask.innerText = valor;  // estamos cambiando el contenido del texto del elemento span por el valor del input
    
    taskContent.appendChild(checkComplet ()); // agregando el check al div.
    taskContent.appendChild(titleTask); // agregando el elemento span al div, agrega un nodo hijo dentro de un nodo padre 
        
    //tarea.innerHTML = contenido;
    tarea.appendChild(taskContent) // agregando el div, dentro del Li
    tarea.appendChild(deleteIcon ()); // agrgando la funcion de creacion del btn eliminar a la tarea que es el mismo item de la lista
    lista.appendChild(tarea);/*permite agregar la tarea a la lista, el padre la lista y el hijo la tarea  */

    
};


    btn.addEventListener("click",crearTarea); //permite que crear la tarea al hacer click, se encuentra asociada a la funcion flecha crearTarea


   

    

