function getComputerChoice(){
    //generate a random number from 1 to 3 and store in a variable
    let choice=Math.floor(Math.random()*3)+1;
    //if variable is 1 then return rock
    if(choice==1)
        return "rock";
    //if variable is 2 then return paper
    if(choice==2)
        return "paper";
    //otherwise return scissors for 3
    return "scissors";
}

let humanScore=0;
let computerScore=0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const humanScoreDisplay = document.querySelector("#humanScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");

const resetButton = document.querySelector("#reset");

const humanChoiceImage = document.querySelector("#humanChoiceImage");
const computerChoiceImage = document.querySelector("#computerChoiceImage");

const resultPara = document.createElement("p");
resultPara.setAttribute("class", "result-text");

const div = document.createElement("div");
div.setAttribute("class","result");


function checkWin(){
    if(humanScore==5 || computerScore==5){
        const resetDiv = document.querySelector("#resetButton");
        const containerDiv = document.querySelector(".container");
        containerDiv.insertBefore(div,resetDiv);
        div.appendChild(resultPara);
    }

    if(humanScore==5){
        resultPara.textContent="You win";
        resultPara.style.color= "#16F529";
    }

    if(computerScore==5){
        resultPara.textContent="You lose";
        resultPara.style.color = "red";
    }

}

rock.addEventListener("click", () => {
    if(humanScore<5 && computerScore<5){
        let computerSelection = getComputerChoice();
        humanChoiceImage.src= "images/Rock.png";
        computerChoiceImage.src= "images/Rock.png";
        playRound("rock", computerSelection);
        humanScoreDisplay.textContent=`Human Score : ${humanScore}`;
        computerScoreDisplay.textContent=`Computer Score : ${computerScore}`;
        checkWin();
    }
});

paper.addEventListener("click", () => {
    if(humanScore<5 && computerScore<5){
        let computerSelection = getComputerChoice();
        humanChoiceImage.src= "images/Paper.png";
        computerChoiceImage.src= "images/Paper.png";
        playRound("paper", computerSelection);
        humanScoreDisplay.textContent=`Human Score : ${humanScore}`;
        computerScoreDisplay.textContent=`Computer Score : ${computerScore}`;
        checkWin();
    }
});

scissors.addEventListener("click", () => {
    if(humanScore<5 && computerScore<5){
        let computerSelection = getComputerChoice();
        humanChoiceImage.src= "images/Scissors.png";
        computerChoiceImage.src= "images/Scissors.png";
        playRound("scissors", computerSelection);
        humanScoreDisplay.textContent=`Human Score : ${humanScore}`;
        computerScoreDisplay.textContent=`Computer Score : ${computerScore}`;
        checkWin();
    }
});

resetButton.addEventListener("click", () => {
    humanScore=0;
    computerScore=0;
    humanChoiceImage.src="images/white.jpg";
    computerChoiceImage.src= "images/white.jpg";
    humanScoreDisplay.textContent="Human Score :";
    computerScoreDisplay.textContent="Computer Score :";
    resultPara.textContent="";
    humanChoiceImage.style.border = "2px solid black";
    computerChoiceImage.style.border = "2px solid black";
    div.remove();
})

function playRound(humanChoice, computerChoice){
    //if both human and computer have same choice then draw
    if(humanChoice===computerChoice){
        humanChoiceImage.style.border = "2px solid black";
        computerChoiceImage.style.border = "2px solid black";
    }
    //increment the score based on the choices
    else if(humanChoice=="rock" && computerChoice=="scissors"){
        humanScore++;
        humanChoiceImage.src= "images/Rock.png";
        computerChoiceImage.src= "images/Scissors.png";
        humanChoiceImage.style.border = "2px solid #16F529";
        computerChoiceImage.style.border = "2px solid red";
    }
    else if(humanChoice=="rock" && computerChoice=="paper"){
        computerScore++;
        humanChoiceImage.src= "images/Rock.png";
        computerChoiceImage.src= "images/Paper.png";
        humanChoiceImage.style.border = "2px solid red";
        computerChoiceImage.style.border = "2px solid #16F529";
    }
    else if(humanChoice=="paper" && computerChoice=="rock"){
        humanScore++;
        humanChoiceImage.src= "images/Paper.png";
        computerChoiceImage.src= "images/Rock.png";
        humanChoiceImage.style.border = "2px solid #16F529";
        computerChoiceImage.style.border = "2px solid red";
    }
    else if(humanChoice=="paper" && computerChoice=="scissors"){
        computerScore++;
        humanChoiceImage.src= "images/Paper.png";
        computerChoiceImage.src= "images/Scissors.png";
        humanChoiceImage.style.border = "2px solid red";
        computerChoiceImage.style.border = "2px solid #16F529";
    }
    else if(humanChoice=="scissors" && computerChoice=="paper"){
        humanScore++;
        humanChoiceImage.src= "images/Scissors.png";
        computerChoiceImage.src= "images/Paper.png";
        humanChoiceImage.style.border = "2px solid #16F529";
        computerChoiceImage.style.border = "2px solid red";
    }
    else{
        computerScore++;
        humanChoiceImage.src= "images/Scissors.png";
        computerChoiceImage.src= "images/Rock.png";
        humanChoiceImage.style.border = "2px solid red";
        computerChoiceImage.style.border = "2px solid #16F529";
    }
    
}