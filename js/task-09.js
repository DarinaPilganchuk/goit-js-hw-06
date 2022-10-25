function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const spanEl= document.querySelector('.color');
console.log(spanEl)
const btnEl= document.querySelector('.change-color');
console.log(btnEl)

const onButtonClick =() =>{
  const bodyColor = getRandomHexColor();
  spanEl.textContent = bodyColor;
  document.body.style.backgroundColor = bodyColor;
};

btnEl.addEventListener("click",onButtonClick );





