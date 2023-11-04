let button = document.getElementsByClassName("start-button")[0];
let container = document.getElementById("container");
let square1 = document.getElementById("square1");
let square2 = document.getElementById("square2");
let square3 = document.getElementById("square3");
let square4 = document.getElementById("square4");
let score = document.getElementById("score");
let mainSq = document.getElementById("wrapper");
let realScore = document.getElementById("real-score");

let count = [];
let userSquares = [];
let squares = [square1, square2, square3, square4];

function start() {
  count.push(getRandomSquare());
  showPath();
  button.style.display = "none";
  container.style.display = "none";
}

function showPath() {
  let i = 0;
  next();
  userSquares = [];
  realScore.innerHTML = "Level: " + (count.length - 1);
  function next() {
    if (i < count.length) {
      changeCol(count[i]);
      i += 1;
      setTimeout(next, 2000);
    }
  }
}

function changeCol(element) {
  element.style.opacity = 0.6;
  setTimeout(() => {
    element.style.opacity = 1;
  }, 1000);
}

function getRandomSquare() {
  let randomNumber = Math.floor(Math.random() * 4);
  return squares[randomNumber];
}

function userClick(squareNum) {
  changeCol(squareNum);
  userSquares.push(squareNum);
  if (checkArray()) {
    count.push(getRandomSquare());
    setTimeout(showPath, 3000);
  } else if (checkArray() == false && userSquares.length == count.length) {
    mainSq.style.display = "none";
    score.innerHTML = "Your Score: " + (userSquares.length - 1);
    container.style.display = "";
    container.style.backgroundColor = "#6728a3";
    container.style.width = "500px";
    container.style.height = "500px";
  }
}

function checkArray() {
  if (userSquares.length != count.length) {
    return false;
  } else {
    let result = false;

    for (let j = 0; j < userSquares.length; j++) {
      if (userSquares[j] !== count[j]) {
        return false;
      } else {
        result = true;
      }
    }
    return result;
  }
}
