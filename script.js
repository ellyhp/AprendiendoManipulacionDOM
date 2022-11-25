const input1 = document.querySelector('#name');
const input2 = document.querySelector('#lastname');
const input3 = document.querySelector('#num1');
const input4 = document.querySelector('#num2');
const boton = document.querySelector('#bot');
const resultado = document.querySelector('#Result');
const resultado2 = document.querySelector('#ResultSuma');

boton.addEventListener('click',btnOnClick);

function btnOnClick(){
    const i = Number(input3.value);
    const e = Number(input4.value);
    const suma = i + e;
    const juntos = input1.value + " "+ input2.value;
    resultado.innerText = "Nombre completo " + juntos;
    resultado2.innerText = "Suma: " + suma;
}