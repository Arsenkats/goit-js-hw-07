const item = document.querySelectorAll('.item');
console.log('Number of categories: ' + item.length);

for (const i of item) {
    console.log('Category: ' + i.firstElementChild.textContent);
    console.log('Elements: ' + i.lastElementChild.children.length);
}