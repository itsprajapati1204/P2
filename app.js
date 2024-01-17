let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepoint =document.querySelector("#user-score");
const compScorepoint =document.querySelector("#comp-score");



const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = () => {
  console.log("Game was draw");
  msg.innerText = "Game Draw.Play again";
  msg.style.backgroundColor = "#ff7700";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorepoint.innerText=userScore;
    console.log("You Win!");
    msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice} `;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorepoint.innerText=compScore;
    console.log("You lose");
    msg.innerText = `You lose ! Your ${compChoice} beats your ${userChoice} `;
    msg.style.backgroundColor = "Red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice =", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
