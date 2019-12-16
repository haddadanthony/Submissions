const input = document.getElementById("name");
const divi = document.createElement("div");

// Append div to body
document.body.appendChild(divi);

// Update the DOM
input.addEventListener("input", function() {
  divi.innerHTML = input.value;
});
