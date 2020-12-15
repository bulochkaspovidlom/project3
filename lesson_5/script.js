function showChess() {
  if ($('#content-data').find('*').length) {
    return;
  }

  var wrap = document.createElement("div");
  wrap.classList.add("chess-wrap");
  for (var i = 1; i <= 10; i++) {
    var row = createRow(i);
    for (var j = 1; j <= 10; j++) {
      var col = createCol(i, j);
      row.appendChild(col);
    }
    wrap.appendChild(row);
  }
  document.getElementById("content-data").appendChild(wrap);
}

function createRow(rowIndex) {
  var elem = document.createElement("div");
  elem.classList.add("chess-row");
  if (rowIndex == 1 || rowIndex == 10) {
    elem.setAttribute("style", "height: 40px;");
  }
  return elem;
}

function createCol(rowIndex, colIndex) {
  var elem = document.createElement("div");
  var text = document.createElement("span");
  var img = document.createElement("img");
  img.setAttribute("width", "50");
  img.setAttribute("height", "70");
  switch (rowIndex) {
    case 2:
      switch (colIndex) {
        case 2:
        case 9:
          img.setAttribute("src", "img/rook.png");
          img.setAttribute("alt", "rook");
          elem.appendChild(img);
          break;
        case 3:
        case 8:
          img.setAttribute("src", "img/horse.png");
          img.setAttribute("alt", "horse");
          elem.appendChild(img);
          break;
        case 4:
        case 7:
          img.setAttribute("src", "img/elephant.png");
          img.setAttribute("alt", "elephant");
          elem.appendChild(img);
          break;
        case 5:
          img.setAttribute("src", "img/queen.png");
          img.setAttribute("alt", "queen");
          elem.appendChild(img);
          break;
        case 6:
          img.setAttribute("src", "img/king.png");
          img.setAttribute("alt", "king");
          elem.appendChild(img);
          break;
      }
      break;
    case 3:
      switch (colIndex) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          img.setAttribute("src", "img/pawn.png");
          img.setAttribute("alt", "pawn");
          elem.appendChild(img);
          break;
      }
      break;
    case 8:
      switch (colIndex) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          img.setAttribute("src", "img/pawn-white.png");
          img.setAttribute("alt", "pawn-white");
          elem.appendChild(img);
          break;
      }
      break;
    case 9:
      switch (colIndex) {
        case 2:
        case 9:
          img.setAttribute("src", "img/rook-white.png");
          img.setAttribute("alt", "rook-white");
          elem.appendChild(img);
          break;
        case 3:
        case 8:
          img.setAttribute("src", "img/horse-white.png");
          img.setAttribute("alt", "horse-white");
          elem.appendChild(img);
          break;
        case 4:
        case 7:
          img.setAttribute("src", "img/elephant-white.png");
          img.setAttribute("alt", "elephant-white");
          elem.appendChild(img);
          break;
        case 5:
          img.setAttribute("src", "img/queen-white.png");
          img.setAttribute("alt", "queen-white");
          elem.appendChild(img);
          break;
        case 6:
          img.setAttribute("src", "img/king-white.png");
          img.setAttribute("alt", "king-white");
          elem.appendChild(img);
          break;
      }
      break;
  }
  elem.classList.add("chess-col");
  if (rowIndex == 1) {
    elem.classList.add("chess-row-title");
    switch (colIndex) {
      case 2:
        text.innerHTML = "A";
        break;
      case 3:
        text.innerHTML = "B";
        break;
      case 4:
        text.innerHTML = "C";
        break;
      case 5:
        text.innerHTML = "D";
        break;
      case 6:
        text.innerHTML = "E";
        break;
      case 7:
        text.innerHTML = "F";
        break;
      case 8:
        text.innerHTML = "G";
        break;
      case 9:
        text.innerHTML = "H";
        break;
    }
    elem.appendChild(text);
    switch (colIndex) {
      case 1:
        elem.setAttribute("style", "width: 40px; border-left: 1px solid #848383; border-top: 1px solid #848383;");
        break;
      case 10:
        elem.setAttribute("style", "width: 40px; border-right: 1px solid #848383; border-top: 1px solid #848383;");
        break;
      default:
        elem.setAttribute("style", "border-bottom: 1px solid #848383; border-top: 1px solid #848383;");
    }
  } else if (rowIndex == 10) {
    elem.classList.add("chess-row-title");
    switch (colIndex) {
      case 2:
        text.innerHTML = "A";
        break;
      case 3:
        text.innerHTML = "B";
        break;
      case 4:
        text.innerHTML = "C";
        break;
      case 5:
        text.innerHTML = "D";
        break;
      case 6:
        text.innerHTML = "E";
        break;
      case 7:
        text.innerHTML = "F";
        break;
      case 8:
        text.innerHTML = "G";
        break;
      case 9:
        text.innerHTML = "H";
        break;
    }
    elem.appendChild(text);
    switch (colIndex) {
      case 1:
        elem.setAttribute("style", "width: 40px; border-left: 1px solid #848383; border-bottom: 1px solid #848383;");
        break;
      case 10:
        elem.setAttribute("style", "width: 40px; border-right: 1px solid #848383; border-bottom: 1px solid #848383;");
        break;
      default:
        elem.setAttribute("style", "border-bottom: 1px solid #848383; border-top: 1px solid #848383;");
    }
  } else if (rowIndex % 2 == 0) {
    if ((colIndex == 1 || colIndex == 10) || colIndex % 2 == 1) {
      elem.setAttribute("style", "background-color:#888;");
      if (colIndex == 1 || colIndex == 10) {
        elem.classList.add("chess-col-title");
        text.innerHTML = (rowIndex - 1).toString();
        elem.appendChild(text);
        elem.setAttribute("style", "border-left: 1px solid #848383; border-right: 1px solid #848383;");
        if (colIndex == 1 && rowIndex == 10) {
          elem.setAttribute("style", "border-left: 1px solid #848383; border-bottom: 1px solid #848383;");
        }
        if (colIndex == 10 && rowIndex == 10) {
          elem.setAttribute("style", "border-right: 1px solid #848383; border-bottom: 1px solid #848383;");
        }
      }
    } else {
      elem.setAttribute("style", "background-color:#ccc;");
    }
  } else {
    if ((colIndex == 1 || colIndex == 10) || colIndex % 2 == 0) {
      elem.setAttribute("style", "background-color:#888;");
      if (colIndex == 1 || colIndex == 10) {
        elem.classList.add("chess-col-title");
        text.innerHTML = (rowIndex - 1).toString();
        elem.appendChild(text);
        elem.setAttribute("style", "border-left: 1px solid #848383; border-right: 1px solid #848383;");
      }
    } else {
      elem.setAttribute("style", "background-color:#ccc;");
    }
  }
  return elem;
}
