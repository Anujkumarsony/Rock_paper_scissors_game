let userScore=0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
 
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Match Draw";
    msg.style.backgroundColor = "#081b31";

}
const showWinner = (userWin) => {
    if (userWin) {
        console.log("you win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "you win!";
        msg.style.backgroundColor = "green";
    }else{
        console.log("you lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "you lose";
        msg.style.backgroundColor = "red";

    }
}

const playGmae = (userChoice) => {
    console.log("user Choice = ", userChoice);
    // generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);
    if (userChoice === compChoice) {
        drawGame();

    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true;
        }else if(userChoice === "Paper"){
            userWin = compChoice === "Scissors" ? false : true;
        }else{
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGmae(userChoice);
    })
})
