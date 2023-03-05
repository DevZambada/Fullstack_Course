
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#buttonCalcular');
const pResult = document.querySelector('#result')
const form = document.querySelector('#form');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues() {
    event.preventDefault();
    const sumaInput = input1.value + input2.value;
    pResult.innerText = 'Resultado: ' + sumaInput;
}
