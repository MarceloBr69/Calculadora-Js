const display = document.querySelector("#display");
const numeros = document.querySelectorAll("button");

numeros.forEach((btn) => {
    btn.addEventListener("click", () =>{
        if(btn.id === "="){
            display.value = eval(display.value); //eval guarda los valores y los utiliza de forma automatica js
        } else if (btn.id === "ac"){
            display.value = "";
        } else if (btn.id === "de"){
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.id
        }
    })
})