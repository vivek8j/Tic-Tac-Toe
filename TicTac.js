let boxes = document.querySelectorAll(".box");
let rset = document.querySelector("#btn");

let nextgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let newgame = document.querySelector("#new-game");

let player1win = document.querySelector("#p1-score");
let player2win = document.querySelector("#p2-score");

let turnO = true;

let Player1 = null;
let Player2 = null;

while (Player1 === null || Player1 === "") {
  Player1 = prompt("Player1 Name");
}

while (Player2 === null || Player2 === "") {
  Player2 = prompt("Player2 Name");
}

let uname1 = document.querySelector("#p1-name");
uname1.innerText = Player1;

let uname2 = document.querySelector("#p2-name");
uname2.innerText = Player2;

//number of wins of P1 and P2
let p1win = 0;
let p2win = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableboxes();
  msgcontainer.classList.add("hide");
  count = 0;

  uname1.style.color = "blue";
  uname1.style.fontWeight = "100";

  player1win.style.color = "black";
  player1win.style.fontWeight = "100";

  uname2.style.color = "brown";
  uname2.style.fontWeight = "100";

  player2win.style.color = "black";
  player2win.style.fontWeight = "100";
};

let count = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color = "blue";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "brown";
      turnO = true;
    }
    count++;

    box.disabled = true;

    checkwinner();
  });
});

const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  if (winner == "O") {
    msg.innerText = `Consgrats ${Player1}`;
    msg.style.color = "blue";
    p1win++;
    player1win.innerText = p1win;

    uname1.style.color = "green";
    uname1.style.fontWeight = "700";

    player1win.style.color = "green";
    player1win.style.fontWeight = "700";

    uname2.style.color = "black";
    uname2.style.fontWeight = "100";

    player2win.style.color = "black";
    player2win.style.fontWeight = "100";
  } else if (winner == "X") {
    msg.innerText = `Consgrats ${Player2}`;
    msg.style.color = "brown";
    p2win++;
    player2win.innerText = p2win;

    uname2.style.color = "green";
    uname2.style.fontWeight = "700";

    player2win.style.color = "green";
    player2win.style.fontWeight = "700";

    uname1.style.color = "black";
    uname1.style.fontWeight = "100";

    player1win.style.color = "black";
    player1win.style.fontWeight = "100";
  } else if (winner == 9) {
    msg.innerText = `Tie!!! ${Player1} and ${Player2} show more potential`;
    msg.style.color = "green";
    count = 0;
  }
  msgcontainer.classList.remove("hide");
  disableboxes();
};

const checkwinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        //console.log("Winner", pos1val);
        showWinner(pos1val);
      } else if (count == 9) {
        showWinner(count);
      }
    }
  }
};

const NewGame = () => {
  location.reload();
};

newgame.addEventListener("click", NewGame);
nextgamebtn.addEventListener("click", resetGame);
rset.addEventListener("click", resetGame);
