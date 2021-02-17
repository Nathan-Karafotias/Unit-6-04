let a = 0
let b = 0
let h = 0
let total = 0

document.getElementById('check').addEventListener('click', buttonon)

function buttonon() {
  a = document.getElementById('input2').value
  h = document.getElementById('input1').value
  b = document.getElementById('input3').value

 a = parseInt(a)
 b = parseInt(b)
 h = parseInt(h)

 total = (a + b) / 2 * h

  alert(total)
}