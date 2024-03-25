// ryuta 3 [3/4]

const btnStartPlus = document.querySelector(".btnStart__Plus");
btnStartPlus.addEventListener("click", mainSym);

const exersise = document.querySelector(".exersise");
const numberLabel = document.querySelectorAll(".number-label");
const numberInput = document.querySelector("#num-input");
const sendResults = document.querySelector(".send-results");
const formSum = document.querySelector(".form-sum");

const btnNulling = document.querySelector(".btnNulling");
btnNulling.addEventListener("click", nulling);


function mainSym() {
  function start() {
    exersise.style.display = "flex";
    btnStartPlus.style.display = "none";
    btnNulling.style.display = "flex";
  }
  start();

  function randomIntNumber(min, max) {
    var lenght = max - min + 1;
    var rand = Math.floor(Math.random() * lenght) + min;
    return rand;
  }

  function randomDey() {
    var items = ["▄", "●", "◆", "▲", "✿", "♥", "☀", "☁"];
    var dey = items[Math.floor(Math.random() * items.length)];
    return dey;
  }

  function mathOp(a, b, op) {
    switch (op) {
      case "▄":
        res = a + b;
        break;
      case "●":
        res = a - b;
        break;
      case "◆":
        res = a * b;
        break;
      case "▲":
        res = a / b;
        break;
      case "✿":
        res = a + b;
        break;
      case "☀":
        res = a - b;
        break;
      case "♥":
        res = a * b;
        break;
      case "☁":
        res = a / b;
        break;
    }
    return res;
  }

  var x, y, znak, answer, good = 0, error = 0;

  const getLabel = () => {
    numberLabel.forEach((label) => {
      x = randomIntNumber(1, 9);
      y = randomIntNumber(1, 9);
      znak = randomDey();

      res = x + znak + y;

      label.innerHTML = res;
    });
  };
  getLabel();

  const getResult = () => {
    formSum.addEventListener("change", (e) => {
      const t = e.target.value;

      res = mathOp(x, y, znak);

      if (res == t) {
        console.log("cool");
        good++;
      } else {
        error++;
        console.log("bad");
      }
      const examplePlusGood = document.querySelector(".example__plus__good");
      const examplePlusError = document.querySelector(".example__plus__error");

      examplePlusGood.innerHTML = "правильных: " + good;
      examplePlusError.innerHTML = "неправильных:  " + error;
    });

    sendResults.addEventListener("click", (e) => {
      e.preventDefault();
      getLabel();
      numberInput.value = "";
    });
  };
  getResult();

  const examplePlusGood = document.querySelector(".example__plus__good");
  const examplePlusError = document.querySelector(".example__plus__error");

  examplePlusGood.innerHTML = "правильных " + good;
  examplePlusError.innerHTML = "неправильных " + error;
}

function nulling() {
  exersise.style.display = "none";
  btnStartPlus.style.display = "flex";
  btnNulling.style.display = "none";
}
nulling();

