const input = document.getElementsByTagName("input");
const button = document.querySelector('button[type="button"]');

button.addEventListener("click", () => {
  if (confirm("Do u want to erase the input fields?")) {
    for (i = 0; i < input.length; i++) {
      input[i].value = "";
    }
  }
});
