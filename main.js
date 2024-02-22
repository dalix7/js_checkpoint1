var plusBtns = Array.from(document.querySelectorAll('.fa-plus-circle'))
var minusBtns = Array.from(document.querySelectorAll('.fa-minus-circle'))
var reactBtns = Array.from(document.querySelectorAll('.fa-heart'))
var deleteBtns = Array.from(document.querySelectorAll('.fa-trash-alt'))
var cards = Array.from(document.querySelectorAll('.mb-3'))
for (let plus of plusBtns) {
  plus.addEventListener('click', function () {
    plus.nextElementSibling.innerHTML++
    total()
  })
}
for (let minus of minusBtns) {
  minus.addEventListener('click', function () {
    minus.previousElementSibling.innerHTML > 0
      ? minus.previousElementSibling.innerHTML--
      : null
    total()
  })
}

for (let i in deleteBtns) {
  deleteBtns[i].addEventListener('click', function () {
    cards[i].remove()
    total()
  })
}
function total () {
  let qte = Array.from(document.querySelectorAll('.qute'))
  let price = Array.from(document.querySelectorAll('.unitt-price'))
  let s = 0
  for (let i = 0; i < price.length; i++) {
    s = s + price[i].innerHTML * qte[i].innerHTML
  }
  document.getElementById('total-price').innerHTML = s
}
/* 
for (let heart of reactBtns) {
  heart.addEventListener('click', function () {
    heart.style.Color == 'black'
      ? (heart.style.Color = 'red')
      : (heart.style.Color = 'black')
  })
} */
for (let heart of reactBtns)
  heart.addEventListener('click', function () {
    if (heart.style.color == 'black') {
      heart.style.color = 'red'
    } else {
      heart.style.color = 'black'
    }
  })
/* for (let j = 0; j < heart.length; j++) {
  heart[j].addEventListener('click', function () {
    heart[j].style.color == 'black'
      ? (heart[j].style.color = 'red')
      : (heart[j].style.color = 'black')
  })
} */
