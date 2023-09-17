let interval;
let list = document.getElementById("someList");

function btnAlert() {
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
