let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score")

//Comp. Generate Choice
const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

//Draw Game
const drawgame = () => {
    //console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31"
};

//If user and comp. so digit and color change 
const showWinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        userscore++;
        // console.log("you win!");
        userscorepara.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        // console.log("you lose!");
        msg.style.backgroundColor = "green";
    } else {
        //console.log("you lose!");
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lose! ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

//If to play the game so who will win the match
const playGame = (userchoice) => {
    //console.log("user choice = ", userchoice);
    //generate computer choice
    const compchoice = gencompchoice();
    console.log("comp choice = ", compchoice);

    if (userchoice === compchoice) {
        //match draw
        drawgame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compchoice === "scissors" ? false : true;
        } else {
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compchoice);
    }
};

//for all choice 
choices.forEach((choice) => {
    /*console.log(choice);*/
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});