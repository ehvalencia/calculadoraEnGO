//realizar clases segun las operaciones
//let a = prompt("");
//let b = prompt("");

//let num1
/*
let num2
let resultado
const calculadora  = document.querySelector('.calculadora')
const boton = calculadora.querySelector('.calculadora__boton')

oton.addEventListener('click', e => {
    if (e.target.matches('Calcular')) {
   
    }
   })



function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}
function multiplicacion(a, b) {
    return a * b;
}
function division(a, b){
    return a / b;
}

switch (operacion)  {
    case "sumar":
    resultado = num1 + num2
    break

    case "restar":
    resultado = num1 - num2
    break

    case "multiplicar":
    resultado = num1 * num2
    break

    case "dividir":
    //resultado = num1 / num2
  //  break
//}
//prueba
*/
const form = document.querySelector('form');
const resultado = document.querySelector('#resultado');

// Escuchar el evento de envío del formulario
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevenir la recarga de la página
  const num1 = parseFloat(form.num1.value);
  const operacion = form.operacion.value;
  const num2 = parseFloat(form.num2.value);
  let resultadoCalculado;

  // Realizar la operación correspondiente
  if (operacion === 'sumar') {
    resultadoCalculado = num1 + num2;
  } else if (operacion === 'restar') {
    resultadoCalculado = num1 - num2;
  } else if (operacion === 'multiplicar') {
    resultadoCalculado = num1 * num2;
  } else if (operacion === 'dividir') {
    resultadoCalculado = num1 / num2;
  }

  // Mostrar el resultado en la página web
  resultado.textContent = resultadoCalculado;
});