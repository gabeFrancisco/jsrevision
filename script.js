let interval;
let list = document.getElementById("someList");

function msgAlert() {
  const input = document.getElementById("dataValue");
  alert(input.value);
  // input.style.padding = '2rem'

  let size = 1;
  interval = setInterval(() => {
    const li = document.createElement("li");
    li.innerHTML = input.value;
    li.style.fontSize = `${size}px`;
    size++;
    list.appendChild(li);
  }, 1000);
}

function worldClear() {
  clearInterval(interval);
  list.innerHTML = "";
}

let tableBody = document.getElementById("dataTable");

let data = [
  {
    name: "Gabriel Francisco",
    age: "24",
  },
  {
    name: "Sara Limberger",
    age: "20",
  },
];

function loadData() {
  clearData();
  data.map((el, index) => {
    let row = document.createElement("tr");
    let idH = document.createElement("th");
    let nameD = document.createElement("td");
    let ageD = document.createElement("td");

    idH.innerText = index;
    nameD.innerText = el.name;
    ageD.innerText = el.age;

    row.append(idH, nameD, ageD);
    tableBody.appendChild(row);
  });
}

function clearData() {
  tableBody.innerHTML = "";
}

function addDatarow() {
  let name = document.getElementById("name");
  let age = document.getElementById("age");
  let msg = document.getElementById("msg");

  if (name.value === "" || age.value === "") {
    msg.innerText = "Preencha os campos acima!";
    throw new Error("Preencha os campos!");
  }

  data.push({ name: name.value, age: age.value });
  name.setAttribute("value", "")
  age.setAttribute("value", "")
  msg.innerText = "";

  loadData();
}
