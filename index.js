const questions = [{
    question: 'question one',
    answer: 'answer 1',
    answer: 'answer 2',
    answer: 'answer 3',
    answer: 'answer 4',
},
{
    question: 'question 2',
    answer: 'answer 1',
    answer: 'answer 2',
    answer: 'answer 3',
    answer: 'answer 4'
}]

scoreCount = 3

let question = document.getElementById('question')
let answerDiv = document.getElementById('answer')
let start = document.getElementById('start')
let game = document.getElementById('game')
let startGameButton = document.getElementById('start-button')
let restartGameButton = document.getElementById('restart-button')
let score = document.getElementById('score')

startGameButton.addEventListener('click', startGame)
restartGameButton.addEventListener('click', restartGame)

function startGame() {
    console.log('start game')
    start.classList.add('hide') 
    game.classList.remove('hide')
    score.innerHTML += scoreCount
    
}

function correctAnswer(){
    
}

function wrongAnswer() {
    
}
function restartGame() {
    console.log('RE-start game')
    start.classList.remove('hide') 
    game.classList.add('hide') 

}

