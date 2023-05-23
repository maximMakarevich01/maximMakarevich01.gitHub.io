function openDropdown() {
  document.getElementById("orderDropdown").classList.toggle("show");
  document.getElementById("orderBtn").classList.toggle("colorChange");
}

let slider = document.getElementById("slider");
let output = document.getElementById("value");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value + "%";
};
