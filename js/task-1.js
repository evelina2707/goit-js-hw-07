const liElements = document.querySelector('#categories');
const items = liElements.querySelectorAll('li.item');
console.log(`Number of categories: ${items.length}`);

for (const item of items) {
  const title = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('ul li');
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements.length}`);
  
  
}