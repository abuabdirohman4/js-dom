// DOM Selection
// 1. document.getElementById()
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Abu Abdirohman';

// 2. document.getElementByTagName
// HTMLCollections
const p = document.getElementsByTagName('p');
p[2].style.backgroundColor = 'lightblue';

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

// const h1 = document.getElementsByTagName('h1')
const h1 = document.getElementsByTagName('h1')[0]
h1.style.fontSize = "50px"

// 3.  documet.getElementsByClassName()
// HTML Collection
const p1 = document.getElementsByClassName('p1')
p[0].innerHTML = "Ini diubah dari javascript"

