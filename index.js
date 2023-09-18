const buttons = document.querySelectorAll('button');
const resultEl = document.querySelector(".result")
const userScore = document.querySelector('.user-score')
const botScore = document.querySelector('.computer-score')

const finalScore = document.querySelector(".final-score")
const finalResult = document.querySelector(".final-result")
const game = document.querySelector(".game")
const repeatBtn = document.getElementById('repeat')

repeatBtn.addEventListener('click',()=>{
    window.location.reload()            
})


let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click',()=>{
        const result = play(button.id, computerChoise())
        resultEl.textContent = result
    })
})

function computerChoise (){
    const choice = [ 'rock', 'paper', 'scissor' ];
    const randomChoise = Math.floor(Math.random()* choice.length);
    return choice[randomChoise]
}

function play(playerChoise, computerChoise){
    if(playerChoise === computerChoise){
        return "it's a Tie"
    }else if(playerChoise === 'rock' && computerChoise === 'scissor' || playerChoise === 'paper' && computerChoise === 'rock' || playerChoise === 'scissor' && computerChoise === 'rock'){
        playerScore++;
        if(playerScore === 3){
            finalScore.classList.remove('hide')
            game.classList.add('hide')
            finalResult.classList.add('win')
        }
        userScore.textContent = playerScore
        return `You Win ${playerChoise} beats ${computerChoise}`
    }else{
        computerScore++;
        if(computerScore === 3){
            finalScore.classList.remove('hide')
            game.classList.add('hide')
            finalResult.classList.add('lose')
            finalResult.textContent = "You lose"
        }
        botScore.textContent = computerScore
        return `You lose ${computerChoise} beats ${playerChoise}`
    }
}
