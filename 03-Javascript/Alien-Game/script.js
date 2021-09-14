// re-watch car object video for ideas on how functions interact

// Create a text based alien shooting game

// 3 types of ship - store in classes/objects
// each ship contains a score & function for when they are hit
// Game is over when all scores = 0
// scores will need to accessable throughout.

class Ship {
  constructor(shipType, currentPoints, pointsDeducted) {
    this.shipType = shipType;
    this.currentPoints = currentPoints;
    this.pointsDeducted = pointsDeducted;
  }

  deductPoints() {
    if (this.currentPoints >= 0) {
      return (this.currentPoints = this.currentPoints - this.pointsDeducted);
    } else {
      this.currentPoints = this.currentPoints;
    }
  }
}

let motherShip = new Ship("mother", 100, 100);
let defenseShip = new Ship("defense", 80, 10);
let attackShip = new Ship("attack", 48, 12);

// what happens when click shoot button
// a random ship object is hit.
// Check if ship has points left
// if not, check if other ships have 0 point - game over, or hit another ship
// if so deduct the points and update current points
let shipArr = [motherShip, defenseShip, attackShip];
let randomNum = 0;

let motherCurrentScore = document.querySelector(".mother-score");
let defenseCurrentScore = document.querySelector(".defense-score");
let attackCurrentScore = document.querySelector(".attack-score");

const shootButton = document.querySelector(".shoot-button");
shootButton.addEventListener("click", function () {
  //   check if all ships have 0 points
  if (
    motherShip.currentPoints === 0 &&
    defenseShip.currentPoints === 0 &&
    attackShip.currentPoints === 0
  ) {
    gameOver();
  } else {
    hitShip();
  }
});

function hitShip() {
  randomNum = shipArr[Math.floor(Math.random() * shipArr.length)];
  console.log(randomNum);
  if (
    randomNum.shipType === "attack" &&
    attackShip.currentPoints > 0
    // defenseShip.currentPoints > 0 &&
    // motherShip.currentPoints > 0
  ) {
    attackShip.deductPoints();
    attackCurrentScore.innerHTML = attackShip.currentPoints;
  } else if (
    randomNum.shipType === "defense" &&
    defenseShip.currentPoints > 0
    // attackShip.currentPoints > 0 &&
    // motherShip.currentPoints > 0
  ) {
    defenseShip.deductPoints();
    defenseCurrentScore.innerHTML = defenseShip.currentPoints;
  } else if (
    randomNum.shipType === "mother" &&
    motherShip.currentPoints > 0
    // defenseShip.currentPoints > 0 &&
    // attackShip.currentPoints > 0
  ) {
    motherShip.deductPoints();
    motherCurrentScore.innerHTML = motherShip.currentPoints;
  } else {
    gameOver();
  }
}

// mother ship - can take 1 hit
// each defence ship (5 of) can take 8 hits (40)
// each attack ship(8 of) can take 4 (32)

function gameOver() {
  alert("Game over");
  console.log(
    motherShip.currentPoints,
    defenseShip.currentPoints,
    attackShip.currentPoints
  );
}
