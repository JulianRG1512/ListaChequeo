const btn = document.querySelector("[data-fomr-btn]");

const creartarea = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
};

    console.log(btn);

    btn.addEventListener("click",creartarea); 
    
