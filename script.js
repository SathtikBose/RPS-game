let userFinalScore = 0;
let compFinalScore = 0;

const choices = document.querySelectorAll(".choice");
const DisplayUser = document.querySelector("#UserScore");
const DisplayComp = document.querySelector("#CompScore");
const MsgDispay = document.querySelector("#msg");
const ResetGame = document.querySelector("#NewGame");

const genComputerChoice = () => {
    const option = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

const drawGame = () => {
    MsgDispay.textContent = "This Round was a draw";
};


const displayScore = (userFinalScore , compFinalScore) =>{
    if (userFinalScore !== 100 && compFinalScore !== 100){
        DisplayUser.textContent = userFinalScore;
        DisplayComp.textContent = compFinalScore;
    }
    else{
        ResetTheGame();
    }
};


const ResetTheGame = () => {
    userFinalScore = 0;
    compFinalScore = 0;
    displayScore(userFinalScore , compFinalScore);
    MsgDispay.textContent = "Play Your Move"
};

const showWinner  = (UserWin) => {
    if (UserWin){
        userFinalScore++;
        displayScore(userFinalScore , compFinalScore);
        MsgDispay.textContent = "User Won this Round";

    }
    else{
        compFinalScore++;
        displayScore(userFinalScore , compFinalScore);
        MsgDispay.textContent = "Computer won this Round";
    }
};

const playGame = (UserChoice) => {
    const CompChoice = genComputerChoice();

    if (UserChoice === CompChoice){
        drawGame();
    }
    else{
        let UserWin = true;
        if (UserChoice === "rock"){
            if (CompChoice === "paper"){
                UserWin = false;
            }
            else{
                UserWin = true;
            }
        }
        else if (UserChoice === "paper"){
            if (CompChoice == "rock"){
                UserWin = true;
            }
            else{
                UserWin = false;
            }
        }
        else{ // user choice = sciissor
            if (CompChoice == "paper"){
                UserWin = true;
            }
            else{
                UserWin = false;
            }
        }
        showWinner(UserWin);
    }
    
};


choices.forEach((choice) =>{
    choice.addEventListener("click" , ()=>{ 
        const UserChoice = choice.getAttribute("id");
        playGame(UserChoice);
    })
})

ResetGame.addEventListener("click",() => {
    ResetTheGame();
})