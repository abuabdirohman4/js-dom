// Manipulation Node
// Contoh 1
// Buat Element Baru
const pBaru = document.createElement('p')
// Buat Teks Baru
const teksPBaru = document.createTextNode("Paragraf Baru")
// Memasukkan Teks pada Element
pBaru.appendChild(teksPBaru);

// Tangkap section & simpan pBaru di akhir section A
const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru)


// Contoh 2
// Memasukkan diantara item 1 & 2

// Buat li baru
const liBaru = document.createElement('li')
const teksLiBaru = document.createTextNode('item Baru')
liBaru.appendChild(teksLiBaru)

const ul = document.querySelector('section#b ul')
const li2 = ul.querySelector('li:nth-child(2)')

ul.insertBefore(liBaru, li2)


// Contoh 3
// Penggunaan parenNode.removeChild() & replaceChild()
// parenNode.removeChild()
const link = document.getElementsByTagName('a')[0]
sectionA.removeChild(link)

// parenNode.replaceChild()
const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')

const h2Baru = document.createElement('h2')
const teksH2Baru = document.createTextNode('Hello World!')
h2Baru.appendChild(teksH2Baru)

sectionB.replaceChild(h2Baru, p4)


pBaru.style.backgroundColor = 'lightblue'
liBaru.style.backgroundColor = 'lightblue'
h2Baru.style.backgroundColor = 'lightblue'