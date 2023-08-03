/*function calcSpace(amount, unit) {
  return `${amount * 4}${unit}`;
}

console.log(calcSpace(5, "px"));



function playTrackById(tracId) {
  ///отримати файл пісні і її запустити
}

function play(trackName, trackId) {
  console.log(`Запускаємо ${trackName}`);

  playTrackById(trackId);
}

function end(oldTrackName, newTrackName) {
  console.log(`Завершити грати ${oldTrackName}`);
  console.log(`Наступний трек ${newTrackName}`);
}

function pauseStop(curentTpackName) {
  console.log(`Трек ${curentTrackName} на паузі`);
}

function pausePlay(curentTpackName) {
  console.log(`Трек ${curentTrackName} грає по паузі`);

  reloadDataTreck();
  play();
}

function reloadDataTreck(amount) {
  if (amount <= 0) {
    console.log("Дані оновлено вказану кількість разів");
  } else {
    console.log("Повторне оновлення");
    //певний код для оновлення даних
    reloadDataTreck(amount - 1);
  }
}
reloadDataTreck(5);

function pauseStopByTreck(tpackName) {
  let originTrackName = tpackName;

  return function pauseStop() {
    console.log(`Трек ${originTrackName} на паузі`);
  };
}
const pauseStop1 = pauseStopByTreck("hahaha");

pauseStop1();

const pauseStop2 = pauseStopByTreck("Olala");

pauseStop2();

const runCommand = function (command, errorFn) {
  const result = command();
  if (!result) {
    return errorFn();
  }
};
runCommand(
  function () {
    console.log("Запуск команди");

    return 1 - 1;
  },
  function () {
    console.log("Помилка");
  }
);

// () => console.log("Помилка"); або  const testFunc = () => {}   то стрілкова функція

function pauseStopByTreck(tpackName, trackId) {
  return () => {
    stopTrackById(trackName);
    console.log(`Трек ${tpackId} на паузі`);
  };
}
const pauseStop1 = pauseStopByTreck("hahaha", 10);

pauseStop1();
const memoCalcSpace = (oldAmount = null, oldUnit = null, oldResult = null) => {
  return (amount, unit = "px") => {
    if (oldAmount === amount && unit === oldUnit) {
      console.log("Memo");
      return oldResult;
    }
    oldResult = `${amount * 4}${unit}`;
    oldAmount = amount;
    oldUnit = unit;

    return oldResult;
  };
};

const calcSpace = memoCalcSpace();
console.log(calcSpace(4));
console.log(calcSpace(4));


let square = function (a) {
  return a ** 2;
};
console.log("square(3)", square(3));*/
