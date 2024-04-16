let turn = "x";
let check = [];
function end(e1, e2, e3) {
  title.innerHTML = `${check[e2]} winner`;
  document.getElementById("box" + e1).style.backgroundColor = "green";
  document.getElementById("box" + e2).style.backgroundColor = "green";
  document.getElementById("box" + e3).style.backgroundColor = "green";
  setInterval(function () {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 3000);
}
function win() {
  for (i = 1; i < 10; i++) {
    check[i] = document.getElementById("box" + i).innerHTML;
  }
  if (check[1] == check[2] && check[2] == check[3] && check[2] != "") {
    end(1, 2, 3);
  } else if (check[4] == check[5] && check[5] == check[6] && check[5] != "") {
    end(4, 5, 6);
  } else if (check[7] == check[8] && check[8] == check[9] && check[8] != "") {
    end(7, 8, 9);
  } else if (check[1] == check[4] && check[4] == check[7] && check[4] != "") {
    end(1, 4, 7);
  } else if (check[2] == check[5] && check[5] == check[8] && check[5] != "") {
    end(2, 5, 8);
  } else if (check[3] == check[6] && check[6] == check[9] && check[6] != "") {
    end(3, 6, 9);
  } else if (check[1] == check[5] && check[5] == check[9] && check[5] != "") {
    end(1, 5, 9);
  } else if (check[3] == check[5] && check[5] == check[7] && check[5] != "") {
    end(3, 5, 7);
  }
}

function game(id) {
  let x0 = document.getElementById("title");
  let box = document.getElementById(id);
  if (turn == "x" && box.innerHTML == "") {
    box.innerHTML = "x";
    x0.innerHTML = "o play";
    turn = "o";
  } else if (turn == "o" && box.innerHTML == "") {
    box.innerHTML = "o";
    x0.innerHTML = "x play";
    turn = "x";
  }
  win();
}
