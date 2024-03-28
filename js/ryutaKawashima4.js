// ryuta 4 [4/4] color words

const exersise = document.querySelector(".exersise");

const btnStartColor = document.querySelector(".btnStart__Plus");
btnStartColor.addEventListener("click", mots);

const btnStartNext = document.querySelector(".btnStart__Next");
btnStartNext.addEventListener("click", mots);

const btnNulling = document.querySelector(".btnNulling");
btnNulling.addEventListener("click", nulling);

var tests = document.querySelectorAll(".test1");


const quotes = [
  'Красный', 'Оранжевый', 'Желтый', 'Зеленый', 'Голубой', 'Синий', 'Фиолетовый', 'Серый', 'Черный', 'Коричневый', 'Розовый', 'Белый',
  'Алый', 'Баклажановый', 'Бирюзовый', 'Васильковый', 'Горчичный', 'Изумруд', 'Кирпичный', 'Коралловый', 'Малиновый', 'Медный', 'Мятный',
  'Серебряный'];

function mots() {
  function start() {
    exersise.style.display = "flex";
    btnStartColor.style.display = "none";
    btnNulling.style.display = "flex";
  }
  start();

  tests.forEach((test) => {
    let a = quotes[Math.floor(Math.random() * quotes.length)];
    test.innerHTML = a;

    //

    var r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    test.style.color = "rgb(" + r + "," + g + "," + b + ")";
  });
}

// ################################################################################

//  секундомер 
let timer = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("resetBtn");

let seconds = 0;
let minutes = 0;
let interval;

function updateTime() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
    if (minutes == 5) {
      alert("Прошло 5 минут");
    }
  }
  timer.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

startBtn.addEventListener("click", () => {
  interval = setInterval(updateTime, 1000);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  resetBtn.disabled = false;
});

pauseBtn.addEventListener("click", () => {
  clearInterval(interval);
  startBtn.disabled = false;
  pauseBtn.disabled = true;
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  timer.textContent = "00:00";
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  resetBtn.disabled = true;
});

// ============================

function nulling() {
  exersise.style.display = "none";
  btnStartColor.style.display = "flex";
  btnNulling.style.display = "none";
}
nulling();
