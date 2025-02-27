window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  elemekFormazasa1();
  esemenykezeles1();
  esemenykezeles2();
});

function elemekElerese1() {
  const ELEM = document.querySelectorAll("section h2")[0];
  if (ELEM) {
    console.log(ELEM.innerHTML);
  }
}

function elemekElerese2() {
  const ELEM = document.getElementById("ide");
  if (ELEM) {
    ELEM.innerHTML = "<p>Jó reggelt!</p>";
  }
}

function elemekElerese3() {
  const ELEM = document.querySelectorAll(".ide")[0];
  if (ELEM) {
    const pElem = document.createElement("p");
    pElem.innerHTML = "Jó reggelt!";
    ELEM.appendChild(pElem);
  }
}

function elemekElerese4() {
  const listaElem = document.getElementsByClassName("lista");
  if (listaElem.length > 0) {
    let txt = "<ul>";
    for (let i = 0; i < 5; i++) {
      const szam = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
      txt += `<li>${szam}</li>`;
    }
    txt += "</ul>";
    listaElem[0].innerHTML = txt;
  }
}

function elemekFormazasa1() {
  const ELEM = document.getElementsByClassName("lista")[0];
  if (ELEM) {
    ELEM.classList.add("formazott");
  }
}

function esemenykezeles1() {
  const listaElem = document.getElementsByClassName("lista")[0];
  const kattintasutanElem = document.getElementsByClassName("kattintasutan")[0];

  listaElem.addEventListener("click", function () {
    kattintasutanElem.innerHTML = listaElem.innerHTML;
  });
}

function esemenykezeles2() {
  const feladatDiv = document.getElementsByClassName("feladat")[0];
   
  

}

