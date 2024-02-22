/* declaration variable */

var plusBtns = Array.from(document.querySelectorAll('.fa-plus-circle'))
var minusBtns = Array.from(document.querySelectorAll('.fa-minus-circle'))
var reactBtns = Array.from(document.querySelectorAll('.fa-heart'))
var deleteBtns = Array.from(document.querySelectorAll('.fa-trash-alt'))
var cards = Array.from(document.querySelectorAll('.mb-3'))

/* bouton '+' action */
for (let plus of plusBtns) {
  plus.addEventListener('click', function () {
    plus.nextElementSibling.innerHTML++
    total()
  })
}
/* bouton '-' action */
for (let minus of minusBtns) {
  minus.addEventListener('click', function () {
    minus.previousElementSibling.innerHTML > 0
      ? minus.previousElementSibling.innerHTML--
      : null
    /* appel du fonction somme */
    total()
  })
}
/* bouton 'suprimer' action */
for (let i in deleteBtns) {
  deleteBtns[i].addEventListener('click', function () {
    cards[i].remove()
    /* appel du fonction somme */
    total()
  })
}
/* somme fonction */
function total () {
  let qte = Array.from(document.querySelectorAll('.qute'))
  let price = Array.from(document.querySelectorAll('.unitt-price'))
  let s = 0
  for (let i = 0; i < price.length; i++) {
    s = s + price[i].innerHTML * qte[i].innerHTML
  }
  document.getElementById('total-price').innerHTML = s
}
/* bouton heart reaction red, black*/

for (let heart of reactBtns)
  heart.addEventListener('click', function () {
    if (heart.style.color == 'black') {
      heart.style.color = 'red'
    } else {
      heart.style.color = 'black'
    }
  })
