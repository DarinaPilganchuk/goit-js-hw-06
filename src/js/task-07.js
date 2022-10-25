const inputEL = document.querySelector('#font-size-control')
const spanEl = document.querySelector('#text')
const handleInput =(event) => {
        spanEl.style.fontSize=event.currentTarget.value + 'px';     
  }
  
  inputEL.addEventListener('input', handleInput)

