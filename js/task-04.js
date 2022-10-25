let valueEl = Number(document.querySelector('#value').textContent);
let counterValue = document.querySelector('#value');
const BtnRemove =  document.querySelector('#counter').firstElementChild;
 console.log(BtnRemove)
 const BtnAdd =  document.querySelector('#counter').lastElementChild;
 console.log(BtnAdd)

 BtnRemove.addEventListener('click', () => {
  counterValue.innerText =valueEl ;
  valueEl -= 1;
  
   });
  
BtnAdd.addEventListener('click', () => {
  counterValue.innerText = valueEl;
          valueEl += 1;
        
          
    
        });
        

        
        