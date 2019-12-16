const divide = (num1, num2) => {
  num1 = document.getElementById("first_number").value;
  num2 = document.getElementById("second_number").value;

  alert(num1 / num2);
};

document.getElementById("validate").addEventListener("click", divide);
