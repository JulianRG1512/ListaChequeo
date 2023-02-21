 
 
 
 
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

    export default checkComplet;