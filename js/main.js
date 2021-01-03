var rate1UberX = 8000,
  rate2UberX = 12000,
  rate3UberX = 10000,
  timeWaitingUberX = 2000;
var rate1UberSUV = 9000,
  rate2UberSUV = 14000,
  rate3UberSUV = 12000,
  timeWaitingUberSUV = 3000;
var rate1UberBlack = 10000,
  rate2UberBlack = 16000,
  rate3UberBlack = 14000,
  timeWaitingUberBlack = 4000;
var totalMoney = 0;

function getInputKMFunction() {
  return parseFloat(document.querySelector(".inputKM").value);
}
function getInputWaitTimeFunction() {
  var isNa = parseFloat(document.querySelector(".inputWaitTime").value);
  if (isNaN(isNa)) {
    return 0;
  } else return isNa;
}

function checkUberType() {
  var isUberX = document.querySelector("#uberX").checked;
  var isUberSUV = document.querySelector("#uberSUV").checked;
  var isUberBlack = document.querySelector("#uberBlack").checked;

  if (isUberX == true) {
    return "UberX";
  } else if (isUberSUV == true) {
    return "UberSUV";
  } else if (isUberBlack == true) {
    return "UberBlack";
  } else return false;
}

// check rate Money
function checkRate1Uber() {
  if (checkUberType() == "UberX") {
    return rate1UberX;
  } else if (checkUberType() == "UberSUV") {
    return rate1UberSUV;
  } else if (checkUberType() == "UberBlack") {
    return rate1UberBlack;
  } else return 0;
}
function checkRate2Uber() {
  if (checkUberType() == "UberX") {
    return rate2UberX;
  } else if (checkUberType() == "UberSUV") {
    return rate2UberSUV;
  } else if (checkUberType() == "UberBlack") {
    return rate2UberBlack;
  } else return 0;
}
function checkRate3Uber() {
  if (checkUberType() == "UberX") {
    return rate3UberX;
  } else if (checkUberType() == "UberSUV") {
    return rate3UberSUV;
  } else if (checkUberType() == "UberBlack") {
    return rate3UberBlack;
  } else return 0;
}

// check time waiting
function checkTimeWaiting() {
  if (checkUberType() == "UberX") {
    return timeWaitingUberX;
  } else if (checkUberType() == "UberSUV") {
    return timeWaitingUberSUV;
  } else if (checkUberType() == "UberBlack") {
    return timeWaitingUberBlack;
  } else return 0;
}

document.querySelector(".calMoney").addEventListener("click", function () {
  var getInputKM = getInputKMFunction();
  var getInputWaitTime = getInputWaitTimeFunction();

  //   Check isNaN
  if (checkUberType() == false) {
    alert("Bạn chưa chọn loại xe");
  }
  if (isNaN(getInputKM)) {
    alert("Bạn chưa nhập số KM");
  }
  if (isNaN(getInputWaitTime)) {
    getInputWaitTime = 0;
  }

  //   Check < 0
  if (getInputWaitTime < 0) {
    alert("Thời gian chờ phải lớn hơn hoặc bằng 0");
  }
  if (getInputKM <= 0) {
    alert("số Km phải lớn hơn 0");
  }

  if (checkUberType() == "UberX") {
    if (getInputKM <= 1) {
      totalMoney =
        getInputKM * rate1UberX + getInputWaitTime * timeWaitingUberX;
    } else if (getInputKM <= 20) {
      totalMoney =
        1 * rate1UberX +
        (getInputKM - 1) * rate2UberX +
        getInputWaitTime * timeWaitingUberX;
    } else {
      totalMoney =
        1 * rate1UberX +
        19 * rate2UberX +
        (getInputKM - 20) * rate3UberX +
        getInputWaitTime * timeWaitingUberX;
    }
  } else if (checkUberType() == "UberSUV") {
    if (getInputKM <= 1) {
      totalMoney =
        getInputKM * rate1UberSUV + getInputWaitTime * timeWaitingUberSUV;
    } else if (getInputKM <= 20) {
      totalMoney =
        1 * rate1UberSUV +
        (getInputKM - 1) * rate2UberSUV +
        getInputWaitTime * timeWaitingUberSUV;
    } else {
      totalMoney =
        1 * rate1UberSUV +
        19 * rate2UberSUV +
        (getInputKM - 20) * rate3UberSUV +
        getInputWaitTime * timeWaitingUberSUV;
    }
  } else if (checkUberType() == "UberBlack") {
    if (getInputKM <= 1) {
      totalMoney =
        getInputKM * rate1UberBlack + getInputWaitTime * timeWaitingUberBlack;
    } else if (getInputKM <= 20) {
      totalMoney =
        1 * rate1UberBlack +
        (getInputKM - 1) * rate2UberBlack +
        getInputWaitTime * timeWaitingUberBlack;
    } else {
      totalMoney =
        1 * rate1UberBlack +
        19 * rate2UberBlack +
        (getInputKM - 20) * rate3UberBlack +
        getInputWaitTime * timeWaitingUberBlack;
    }
  }

  if (!isNaN(totalMoney) && getInputKM > 0 && getInputWaitTime >= 0) {
    document.querySelector(".totalMoney").innerHTML = totalMoney;
    document.querySelector("#divThanhTien").classList.add("d-block");
  }
});

// caculate TimeWaiting
function calTimeWaiting() {
  document.querySelector(
    ".row-4 .uberUse"
  ).innerHTML = getInputWaitTimeFunction();
  document.querySelector(".row-4 .uberRate").innerHTML = checkTimeWaiting();
  return (document.querySelector(".row-4 .uberMoney").innerHTML =
    checkTimeWaiting() * getInputWaitTimeFunction());
}

// Calculate money max1
function calMoneyUberMax1km() {
  document.querySelector(".row-1 .uberName").innerHTML = checkUberType();
  document.querySelector(".row-1 .uberUse").innerHTML = getInputKMFunction();
  document.querySelector(".row-1 .uberRate").innerHTML = checkRate1Uber();
  var total1 = (document.querySelector(".row-1 .uberMoney").innerHTML =
    getInputKMFunction() * checkRate1Uber());

  document.querySelectorAll(".totalMoney")[1].innerHTML =
    total1 + calTimeWaiting();
}

// calculate money max20
function calMoneyUberMax20km() {
  document.querySelector(".row-1 .uberName").innerHTML = checkUberType();
  document.querySelector(".row-1 .uberUse").innerHTML = 1;
  document.querySelector(".row-1 .uberRate").innerHTML = checkRate1Uber();
  var total1 = (document.querySelector(".row-1 .uberMoney").innerHTML =
    1 * checkRate1Uber());

  document.querySelector(".row-2 .uberName").innerHTML = checkUberType();
  document.querySelector(".row-2 .uberUse").innerHTML =
    getInputKMFunction() - 1;
  document.querySelector(".row-2 .uberRate").innerHTML = checkRate2Uber();
  var total2 = (document.querySelector(".row-2 .uberMoney").innerHTML =
    (getInputKMFunction() - 1) * checkRate2Uber());
  document.querySelectorAll(".totalMoney")[1].innerHTML =
    total1 + total2 + calTimeWaiting();
}
// calculate money min 20km
function calMoneyUberMin20km() {
  document.querySelector(".row-1 .uberName").innerHTML = checkUberType();
  document.querySelector(".row-1 .uberUse").innerHTML = 1;
  document.querySelector(".row-1 .uberRate").innerHTML = checkRate1Uber();
  var total1 = (document.querySelector(".row-1 .uberMoney").innerHTML =
    1 * checkRate1Uber());

  document.querySelector(".row-2 .uberName").innerHTML = checkUberType();
  document.querySelector(".row-2 .uberUse").innerHTML = 19;
  document.querySelector(".row-2 .uberRate").innerHTML = checkRate2Uber();
  var total2 = (document.querySelector(".row-2 .uberMoney").innerHTML =
    19 * checkRate2Uber());

  document.querySelector(".row-3 .uberName").innerHTML = checkUberType();
  document.querySelector(".row-3 .uberUse").innerHTML =
    getInputKMFunction() - 20;
  document.querySelector(".row-3 .uberRate").innerHTML = checkRate3Uber();
  var total3 = (document.querySelector(".row-3 .uberMoney").innerHTML =
    (getInputKMFunction() - 20) * checkRate3Uber());
  document.querySelectorAll(".totalMoney")[1].innerHTML =
    total1 + total2 + total3 + calTimeWaiting();
}

document.querySelector(".printInvoice").addEventListener("click", function () {
  if (getInputKMFunction() <= 1) {
    document.querySelector(".row-1").classList.add("d-flex");
    document.querySelector(".row-4").classList.add("d-flex");
    document.querySelector(".row-5").classList.add("d-flex");

    calMoneyUberMax1km();
  } else if (getInputKMFunction() <= 20) {
    document.querySelector(".row-1").classList.add("d-flex");
    document.querySelector(".row-2").classList.add("d-flex");
    document.querySelector(".row-4").classList.add("d-flex");
    document.querySelector(".row-5").classList.add("d-flex");

    calMoneyUberMax20km();
  } else if (getInputKMFunction() > 20) {
    document.querySelector(".row-1").classList.add("d-flex");
    document.querySelector(".row-2").classList.add("d-flex");
    document.querySelector(".row-3").classList.add("d-flex");
    document.querySelector(".row-4").classList.add("d-flex");
    document.querySelector(".row-5").classList.add("d-flex");

    calMoneyUberMin20km();
  }
});
