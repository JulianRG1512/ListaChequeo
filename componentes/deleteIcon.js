


const deleteIcon = () => { // funcion para crear el btn eliminar
    const i = document.createElement("i"); // se crea el elemento "icono eliminar" 
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon"); //se agregan las clases css
    i.addEventListener("click", eliminarTarea); // permite que se ejecute la funcion eliminar tarea al hacer click
    return i;
    };

const eliminarTarea = (event) => {              // .parentElemnt, devuelve el elemento padre
    const parent = event.target.parentElement; // permite la ubicacion del elemento padre, es este caso el Li o tarea
        parent.remove();                      // remove () metodo que permite eliminar.
    }; 

    export default deleteIcon;