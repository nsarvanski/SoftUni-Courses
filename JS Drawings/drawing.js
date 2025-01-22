"use strict";
function drawRightAngledTriangle(rows) {
  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    pattern += "*".repeat(i) + "\n";
  }
  return pattern;
}
function drawSquareWithHollowCenter(rows) {
  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    if (i === 1 || i === rows) {
      pattern += "*".repeat(rows) + "\n";
    } else {
      pattern += "*" + " ".repeat(rows - 2) + "*" + "\n";
    }
  }
  return pattern;
}
function drawDiamond(rows) {
  let pattern = "";
  let mid = Math.floor(rows / 2);
  for (let i = 0; i <= mid; i++) {
    pattern += " ".repeat(mid - i) + "*".repeat(2 * i + 1) + "\n";
  }

  for (let i = mid - 1; i >= 0; i--) {
    pattern += " ".repeat(mid - i) + "*".repeat(2 * i + 1) + "\n";
  }

  return pattern;
}
function drawHollowSquare(rows) {
  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    if (i === 1 || i === rows) {
      pattern += "*".repeat(rows) + "\n";
    } else {
      pattern += "*" + " ".repeat(rows - 2) + "*" + "\n";
    }
  }
  return pattern;
}
function drawPyramid(rows) {
  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    pattern += " ".repeat(rows - i) + "*".repeat(2 * i - 1) + "\n";
  }
  return pattern;
}
function drawReversePyramid(rows) {
  let pattern = "";
  for (let i = rows; i >= 1; i--) {
    pattern += " ".repeat(rows - i) + "*".repeat(2 * i - 1) + "\n";
  }
  return pattern;
}

function drawRectangleWithHollowCenter(rows, cols) {
  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    if (i === 1 || i === rows) {
      pattern += "*".repeat(cols) + "\n";
    } else {
      pattern += "*" + " ".repeat(cols - 2) + "*" + "\n";
    }
  }
  return pattern;
}
