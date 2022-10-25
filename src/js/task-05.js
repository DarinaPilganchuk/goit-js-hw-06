const inputEl= document.querySelector('#name-input')
console.log(inputEl)
const spanEl=document.querySelector('#name-output')

inputEl.addEventListener('input', onInputChange)
function onInputChange(event){
    console.log(event.currentTarget.value)
    spanEl.textContent =event.currentTarget.value;
    inputEl !== ' ' ? (outputEl.innerText = inputEl.trim()) : 'anonumys';
}