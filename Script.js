const myButton = document.querySelector("#myButton");
const messaje = document.querySelector("#email-error");
const correo = document.querySelector("#input-email");


myButton.addEventListener("click", () => {
  capturarValor();
});
correo.addEventListener('input',()=>{
   messaje.style.visibility = "hidden"
})

function capturarValor() {
  const valor = correo.value;
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);

  messaje.style.visibility = regexCorreo ? "hidden" : "visible" ;
}
