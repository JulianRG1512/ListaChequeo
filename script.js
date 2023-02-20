
( () =>{ // Immediately invoked function expression - IIFE, son funciones que se ejecutan al declararse y permiten dar seguridad al codigo.

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
    taskContent.appendChild(checkComplet ()); // agregando el check al div.
    
    const titleTask = document.createElement("span"); // se crea el elemento span 
    titleTask.classList.add("task");    // se agrega la clase task del span (css) al elemento titleTask
    titleTask.innerText = valor;  // estamos cambiando el contenido del texto del elemento span por el valor del input
    taskContent.appendChild(titleTask); // agregando el elemento span al div, agrega un nodo hijo dentro de un nodo padre 


    const contenido = 
        `
        <i class="fas fa-trash-alt trashIcon icon"></i>
        ` 
    
    //tarea.innerHTML = contenido;

    tarea.appendChild(taskContent) // agregando el div, dentro del Li
    lista.appendChild(tarea);/*permite agregar la tarea a la lista, el padre la lista y el hijo la tarea  */

    
};


btn.addEventListener("click",crearTarea); //permite que crear la tarea al hacer click, se encuentra asociada a la funcion flecha crearTarea

// funcion flecha que crea el elemento i correspondiente al buttonCheck
const checkComplet = () =>{
    const i = document.createElement("i"); // se crea el elemento i 
    i.classList.add("far", "fa-check-circle","icon" );   // se agregan las clases que permiten modificar por el css
    i.addEventListener("click", tareaCompleta); // evento que ocurre al hacer click, se invoca la funcion "tareaCompleta"
    return i
};


const tareaCompleta= (event) =>{
        const elemento= event.target;
        elemento.classList.toggle("fas"); // agrega clase "add" - "toggle" si la clase existe la quita y si no existe la pone
        elemento.classList.toggle("completeIcon"); // agrega clase "add"
        elemento.classList.toggle("far"); // quita clase "remove"
        
        
}; 
}) ();