"use strict";

const buttonTwo = document.getElementById("buttonTwo");

const resultOne = document.getElementById("resultOne");
const resultTwo = document.getElementById("resultTwo");
const patternOutput = document.getElementById("patternOutput");

function getValueOne() {
  const figureSelector = document.getElementById("figureSelector").value;
  const rows = parseInt(document.getElementById("rowSelector").value);
  const figureValue = parseInt(figureSelector);
  const invalidImage = document.getElementById("invalidInputImage");
  if (
    isNaN(figureValue) ||
    figureValue < 1 ||
    figureValue > 7 ||
    isNaN(rows) ||
    rows < 1 ||
    rows > 20
  ) {
    invalidImage.classList.remove("hidden");
    invalidImage.style.display = "block";
    resultOne.innerText = "Please select a valid number between 1 and 7.";
    resultTwo.innerText = "";
    patternOutput.innerText = "";
    return;
  } else {
    invalidImage.classList.add("hidden");
    invalidImage.style.display = "none";
  }

  resultOne.innerText = "You selected figure number: " + figureValue;

  let pattern = "";

  switch (figureValue) {
    case 1:
      pattern = drawRightAngledTriangle(rows);
      break;
    case 2:
      pattern = drawSquareWithHollowCenter(rows);
      break;
    case 3:
      pattern = drawDiamond(rows);
      break;
    case 4:
      pattern = drawHollowSquare(rows);
      break;
    case 5:
      pattern = drawPyramid(rows);
      break;
    case 6:
      pattern = drawReversePyramid(rows);
      break;
    case 7:
      pattern = drawRectangleWithHollowCenter(rows, rows + 5);
      break;
  }

  patternOutput.innerText = pattern;
}

buttonTwo.addEventListener("click", getValueOne, patternOutput);
