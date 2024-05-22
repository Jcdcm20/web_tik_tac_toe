const squares = Array.from(document.getElementById('game').getElementsByTagName('button'));
const start = document.getElementById('start');
let player = document.querySelector( 'input[name="option"]:checked').value;
const conditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
]

squares.forEach(square => {
  square.addEventListener('click', (e) => {
    if (e.target.innerText == '') {
      change_value(e);
      if(check_win(player)) {
        window.alert(player + " HAS WON!!!")
      } else if (check_draw()) {
        window.alert("It's a draw!")
      }
      player = change_player();
    }
  });
})

function change_value(e) {
  e.target.innerText = player;
}

function check_win(player) {
  return conditions.some(comb => {
    return comb.every(i => {
      return squares[i].innerText == player;
    })
  })
}

function check_draw() {
  return conditions.every(comb => {
    return comb.every(i => {
      return squares[i].innerText != '';
    })
  } )
}

function change_player() {
  return player == 'X' ? 'O' : 'X';
}

start.addEventListener('click', ()=>{
  squares.forEach(square => { square.innerText = ''});
  player = document.querySelector( 'input[name="option"]:checked').value;
})

