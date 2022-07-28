// DOM Selection
// 1. document.getElementById()
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Abu Abdirohman';

// 2. document.getElementByTagName
// HTMLCollections
// const p = document.getElementsByTagName('p');
// p[2].style.backgroundColor = 'lightblue';

// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')
const h1 = document.getElementsByTagName('h1')[0]
h1.style.fontSize = "50px"

// 3.  documet.getElementsByClassName()
// HTML Collection
const p1 = document.getElementsByClassName('p1')
p1[0].innerHTML = "Ini diubah dari javascript"

// 4. document.querySelector()
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green'
// p4.style.fontSize = '30px'

const li2 = document.querySelector('section#b ul li:nth-child(2)')
li2.style.backgroundColor = 'orange'

// 5. document.querySelectorAll()
const p = document.querySelectorAll('p')
// p[2].style.backgroundColor = 'lightblue'

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue'
}

// Spesific Searching
const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')
p4.style.backgroundColor = 'orange'