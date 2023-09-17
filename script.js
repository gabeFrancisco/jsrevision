function btnAlert() {
  const input = document.getElementById("dataValue");
  alert(input.value);
  // input.style.padding = '2rem'

    let size = 1
    var interval = setInterval(() => {
      const list = document.getElementById("someList");
      const li = document.createElement("li");
      li.innerHTML = input.value;
      li.style.fontSize = `${size}px`
      size++
      list.appendChild(li);
    }, 1000)
}
