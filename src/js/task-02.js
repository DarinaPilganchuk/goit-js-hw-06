const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listArr = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const li = document.createElement('li');
  li.textContent = ingredients[i];
  li.classList.add('item');
  listArr.push(li);
}

const ul = document.querySelector('#ingredients');
ul.append(...listArr);
console.log(ul);

