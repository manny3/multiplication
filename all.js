const multiplication = document.querySelector('.multiplication')
let str = ''

function add() {
  for (let i = 2; i <= 9; i++) {
    str += `
    <div class="data box box${i}">
    <div class="itemnum itemnum${i}">${i}</div>`
    for (let j = 1; j <= 9; j++) {
      str += `<div class="num num${j}">${i} X ${j} = ${i * j}</div>`
    }
    str += `</div>`
  }

  multiplication.innerHTML += str
}
add()
