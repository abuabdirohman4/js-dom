// 1. element.innerHTML
// const judul = document.getElementById('judul')
// judul.innerHTML = "<em>Abu Abdirohman</em>"

// const sectionA = document.querySelector('section#a')
// sectionA.innerHTML = "Hello World"


// 2. element.style.<property>

// 3. element.getAttribute()
//      element.setAttribute()
//      element.removetAttribute()

const judul = document.getElementsByTagName('h1')[0]
judul.setAttribute('name', 'abuAbdirohman')

// Cari tau isi attribute dengan getAttribute
judul.getAttribute('name')
judul.getAttribute('id')

// Hilangkan dengan removeAttribute
judul.removeAttribute('name')

// Tambah & manipulasi attribute class
judul.classList.add('satu')
judul.classList.remove('satu')
// Kalau tidak ada ditambah, kalau ada di hilangkan
judul.classList.toggle('dua')
// Cek isi class urutan ke 2 (base 0)
judul.classList.item(2)
// Cek apakah class 'dua' ada?
judul.classList.contains('dua')
judul.classList.replace('dua', 'tiga')