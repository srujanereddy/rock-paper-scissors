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

function getHumanChoice(){
    //take input from the user
    let choice =prompt("Choose a number:\n1. Rock\n2. Paper\n3. Scissors");
    //if input is 1 return rock
    if(choice==1)
        return "rock";
    //if input is 2 return paper
    if(choice==2)
        return "paper";
    //otherwise return scissors
    return "scissors";
}

function playGame(){
    //create variables to track computer and human scores with initial values 0
    let humanScore=0;
    let computerScore=0;

    function playRound(humanChoice, computerChoice){
        //if both human and computer have same choice then draw
        if(humanChoice===computerChoice){
            console.log("Draw! Both are same.");
        }
        //increment the score based on the choices
        else if(humanChoice=="rock" && computerChoice=="scissors"){
            humanScore++;
            console.log("You win! Rock beats Scissors.");
        }
        else if(humanChoice=="rock" && computerChoice=="paper"){
            computerScore++;
            console.log("You lose! Paper beats Rock.");
        }
        else if(humanChoice=="paper" && computerChoice=="rock"){
            humanScore++;
            console.log("You win! Paper beats Rock.");
        }
        else if(humanChoice=="paper" && computerChoice=="scissors"){
            computerScore++;
            console.log("You lose! Scissors beat Paper.");
        }
        else if(humanChoice=="scissors" && computerChoice=="paper"){
            humanScore++;
            console.log("You win! Scissors beat paper.");
        }
        else{
            computerScore++;
            console.log("You lose! Rock beats Scissors.")
        }
    }

    let turns=5;
    while(turns--){
        const humanSelection = getHumanChoice();
        console.log("Human: "+humanSelection);
        const computerSelection = getComputerChoice();
        console.log("Computer: "+computerSelection);
        playRound(humanSelection,computerSelection);
        console.log(`Human: ${humanScore}    Computer: ${computerScore}`);
    }
    if(humanScore>computerScore)
        console.log("Human wins!!");
    else if(humanScore<computerScore)
        console.log("Computer wins!!");
    else
        console.log("It's a draw!!");
}

playGame();
