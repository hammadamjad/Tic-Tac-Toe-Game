var squares = document.querySelectorAll("td");
var Msg = document.getElementById("msg");

function btnRes() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
    squares[i].style.backgroundColor = "white";
  }
  Msg.textContent = "";
}

function colorChange(a, b, c) {
  a.style.backgroundColor = "red";
  b.style.backgroundColor = "red";
  c.style.backgroundColor = "red";
  Msg.textContent = "Congratulations!!!! You have won the game...";
}

function finish(a) {
  if (
    squares[0].textContent == a &&
    squares[1].textContent == a &&
    squares[2].textContent == a
  ) {
    colorChange(squares[0], squares[1], squares[2]);
  } else if (
    squares[0].textContent == a &&
    squares[3].textContent == a &&
    squares[6].textContent == a
  ) {
    colorChange(squares[0], squares[3], squares[6]);
  } else if (
    squares[0].textContent == a &&
    squares[4].textContent == a &&
    squares[8].textContent == a
  ) {
    colorChange(squares[0], squares[4], squares[8]);
  } else if (
    squares[2].textContent == a &&
    squares[5].textContent == a &&
    squares[8].textContent == a
  ) {
    colorChange(squares[2], squares[5], squares[8]);
  } else if (
    squares[6].textContent == a &&
    squares[7].textContent == a &&
    squares[8].textContent == a
  ) {
    colorChange(squares[6], squares[7], squares[8]);
  } else if (
    squares[1].textContent == a &&
    squares[4].textContent == a &&
    squares[7].textContent == a
  ) {
    colorChange(squares[1], squares[4], squares[7]);
  } else if (
    squares[2].textContent == a &&
    squares[4].textContent == a &&
    squares[6].textContent == a
  ) {
    colorChange(squares[2], squares[4], squares[6]);
  } else if (
    squares[3].textContent == a &&
    squares[4].textContent == a &&
    squares[5].textContent == a
  ) {
    colorChange(squares[3], squares[4], squares[5]);
  }
}

function System() {
  var index = Math.floor(Math.random() * squares.length);
  for (var i = 0; i < 100; i++) {
      console.log(index)
    if (squares[index].textContent != "") {
      index = Math.floor(Math.random() * squares.length);
    } else {
      squares[index].textContent = "O";
      break;
    }
  }
  finish("O");
}

function giveValue() {
  this.textContent = "X";
  finish("X");
  System();
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", giveValue);
}
