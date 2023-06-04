// Logic for slider
let firstPage = document.getElementById("first");
let secondPage = document.getElementById("second");
function slider() {
  if (firstPage.classList == "block") {
    firstPage.classList.remove("block");
    firstPage.classList.add("hidden");
    secondPage.classList.remove("hidden");
    secondPage.classList.add("block");
  } else if (firstPage.classList == "hidden") {
    firstPage.classList.remove("hidden");
    firstPage.classList.add("block");
    secondPage.classList.remove("block");
    secondPage.classList.add("hidden");
  }
}

// Inv Logic
let firstInv = document.getElementById("firstInv");
let secondInv = document.getElementById("secondInv");
function Inv() {
  if (firstInv.classList == "block") {
    firstInv.classList.remove("block");
    firstInv.classList.add("hidden");
    secondInv.classList.remove("hidden");
    secondInv.classList.add("block");
  } else if (firstInv.classList == "hidden") {
    firstInv.classList.remove("hidden");
    firstInv.classList.add("block");
    secondInv.classList.remove("block");
    secondInv.classList.add("hidden");
  }
}

// Calculator functoinality
let input = document.getElementById("inputField");
// for inserting value in input
function insertValue(e) {
  input.value += e;
}
// for clear
function clearFunc() {
  input.value = "";
}
// for removeOne element
function Del() {
  let value = input.value;
  let createNew = value.toString().slice(0, value.length - 1);
  input.value = createNew;
}

// for evaluate
function EvalueateFunc() {
  if (input.value.includes("^")) {
    let index = input.value.indexOf("^");
    let value1 = parseInt(input.value.slice(0, index));
    let value2 = parseInt(input.value.slice(index + 1, input.value.length));
    input.value = Math.pow(value1, value2);
  }
  // Factorial
  if (input.value.includes("!")) {
    function factorial(n) {
      if (n === 0 || n === 1) {
        return 1;
      } else {
        return n * factorial(n - 1);
      }
    }
    let valueInt = parseInt(input.value);
    input.value = factorial(valueInt);
  }

  try {
    let result = eval(input.value);
    input.value = result;
  } catch (error) {
    input.value = "ERROR";
  }
}
