const winningCombos = [
  [0, 1, 2, 3],
  [3, 4, 5, 6],
  [7, 8, 9, 10], 
  [10, 11, 12, 13], 
  [14, 15, 16, 17], 
  [17, 18, 19, 20], 
  [21, 22, 23, 24], 
  [24, 25, 26, 27], 
  [28, 29, 30, 31], 
  [31, 32, 33, 34], 
  [35, 36, 37, 38], 
  [38, 39, 40, 41], 
  [0, 7, 14, 21], 
  [1, 8, 15, 22], 
  [2, 9, 16, 23], 
  [3, 10, 17, 24], 
  [4, 11, 18, 25], 
  [5, 12, 19, 26], 
  [6, 13, 20, 27], 
  [14, 21, 28, 35], 
  [15, 22, 29, 36], 
  [16, 23, 30, 37], 
  [17, 24, 31, 38], 
  [18, 25, 32, 39], 
  [19, 26, 33, 40], 
  [20, 27, 34, 41], 
  [14, 22, 30, 38], 
  [15, 23, 31, 39], 
  [16, 24, 32, 40], 
  [17, 25, 33, 41], 
  [17, 23, 29, 35], 
  [18, 24, 30, 36], 
  [19, 25, 31, 37], 
  [20, 26, 32, 38], 
  [10, 16, 22, 28], 
  [11, 17, 23, 29], 
  [12, 18, 24, 30], 
  [13, 19, 25, 31], 
  [7, 15, 23, 31], 
  [8, 16, 24, 32], 
  [9, 17, 25, 33], 
  [10, 18, 26, 34], 
  [0, 8, 16, 24], 
  [1, 9, 17, 25], 
  [2, 10, 18, 26], 
  [3, 11, 19, 27], 
  [3, 9, 15, 21], 
  [4, 10, 16, 22], 
  [5, 11, 17, 23], 
  [6, 12, 18, 24], 
  [36, 37, 38, 39], 
  [37, 38, 39, 40], 
  [29, 30, 31, 32], 
  [30, 31, 32, 33], 
  [22, 23, 24, 25], 
  [23, 24, 25, 26], 
  [15, 16, 17, 18], 
  [16, 17, 18, 19], 
  [8, 9, 10, 11], 
  [9, 10, 11, 12], 
  [1, 2, 3, 4], 
  [2, 3, 4, 5], 
  [7, 14, 21, 28], 
  [8, 15, 22, 29], 
  [9, 16, 23, 30], 
  [10, 17, 24, 31], 
  [11, 18, 25, 32], 
  [12, 19, 26, 33], 
  [13, 20, 27, 34],
]


const playerRed = 1
const playerYellow = -1
let winner, turn, circleArray
let numOfTurns


const gameBoard = document.querySelectorAll(".circle")
const message = document.getElementById("message")
const result = document.querySelector("#result")
const resetBtn = document.getElementById("resetBtn")


gameBoard.forEach(function(circle){
  circle.addEventListener("click", handleClick)
})


function handleClick(event){
  let circleIndex = parseInt(event.target.id)
  const correctIdx = checkPlacement(circleIndex)

    if (circleArray[correctIdx] === null && winner === null){
    circleArray[correctIdx] = turn
    turn = turn * -1
    numOfTurns += 1
    const turnMsg = turn === 1? 'Red' : 'Yellow'
    message.textContent = `Turn: ${turnMsg}`

    render()
    getWinner()
    }
}


function init() {
  circleArray = [
null, null, null, null, null, null, null,
null, null, null, null, null, null, null,
null, null, null, null, null, null, null,
null, null, null, null, null, null, null,
null, null, null, null, null, null, null,
null, null, null, null, null, null, null,
]

  turn = 1
  winner = null
  numOfTurns = 0
  message.textContent = ''
  render()
}


function checkPlacement(idx) {
  for (let i = idx + 35; i <= 41 && i >=0; i -=7){
    if (circleArray[i] === null){
      return i;
    }
  }
}

function getWinner(){
  for(let i = 0; i < winningCombos.length; i++){

    const a = winningCombos[i][0]
    const b = winningCombos[i][1]
    const c = winningCombos[i][2]
    const d = winningCombos[i][3]

      if (circleArray[a] + circleArray[b] + circleArray[c] + circleArray[d] === 4){
        message.content = 'Red Wins!';
          winner = 'Red'
          return('')
      }
  }
}