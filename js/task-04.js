let valueEl = Number(document.querySelector('#value').textContent);
let counterValue = document.querySelector('#value');
const BtnAdd =  document.querySelector('#counter').firstElementChild;
 console.log(BtnAdd)
 const BtnRemove =  document.querySelector('#counter').lastElementChild;
 console.log(BtnRemove)
BtnRemove.addEventListener('click', () => {
        
          valueEl -= 1;
        
          counterValue.innerText = valueEl;
    
        });
        

        BtnAdd.addEventListener('click', () => {
          valueEl += 1;
          counterValue.innerText =valueEl ;
           });
          
        