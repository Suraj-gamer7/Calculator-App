let currNumber = document.getElementById("currNumber");
let history = document.getElementById("history");
const buttons = document.getElementsByClassName("calcButton");
const CE = document.getElementById("CE");
const C = document.getElementById("C");

let EvaluationString = history.innerText;

const setCurrNumber = (number) => {
  currNumber.value = number;
};

const setHistory = (historyValue) => {
  history.innerText = historyValue;
};

const handleMultiplication = (number) => {
  EvaluationString = EvaluationString + number + "*";
  setHistory(EvaluationString);
  setCurrNumber("");
};

const handleDivision = (number) => {
  EvaluationString = EvaluationString + number + "/";
  setHistory(EvaluationString);
  setCurrNumber("");
};

const handleSubtraction = (number) => {
  EvaluationString = EvaluationString + number + "-";
  setHistory(EvaluationString);
  setCurrNumber("");
};

const handleAddition = (number) => {
  EvaluationString = EvaluationString + number + "+";
  setHistory(EvaluationString);
  setCurrNumber("");
};

const changeOperation = (operation) => {
  EvaluationString =
    String(EvaluationString).substring(0, EvaluationString.length - 1) +
    operation;
  setHistory(EvaluationString);
};

const calcResult = (number) => {
  let result = eval(EvaluationString + number);
  return String(result).length > 16 ? String(result).substring(0, 16) : result;
};

C.addEventListener("click", () => {
  setHistory("");
  setCurrNumber("");
  EvaluationString = "";
});

CE.addEventListener("click", () => {
  let number = currNumber.value;
  number = number.substring(0, number.length - 1);
  setCurrNumber(number);
});

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    let number = currNumber.value;
    let key = e.target.innerText;
    switch (key) {
      case "+":
        if (!number == "") {
          handleAddition(number);
        }
        if (EvaluationString != "") {
          changeOperation("+");
        }
        break;

      case "-":
        if (!number == "") {
          handleSubtraction(number);
        }
        if (EvaluationString != "") {
          changeOperation("-");
        }
        break;

      case "x":
        if (!number == "") {
          handleMultiplication(number);
        }
        if (EvaluationString != "") {
          changeOperation("*");
        }
        break;

      case "÷":
        if (!number == "") {
          handleDivision(number);
        }
        if (EvaluationString != "") {
          changeOperation("/");
        }
        break;

      case "=":
        if (!number == "") {
          setHistory(EvaluationString + number + "=");
          setCurrNumber(calcResult(number));
          EvaluationString = "";
        }
        break;

      default:
        if (key == "." && number == "") {
          number += "0.";
        } else {
          number += key;
        }
        if (!isNaN(number)) {
          setCurrNumber(number);
        }
        break;
    }
  });
}
