const pass = document.getElementById("password");
const confirm = document.getElementById("confirmation");

const check = (pass, conf) => {
  return pass == conf;
};

const test = () => {
  if (check(pass.value, confirm.value)) {
    pass.style.borderColor = "green";
    confirm.style.borderColor = "green";
    return;
  }
  pass.style.borderColor = "red";
  confirm.style.borderColor = "red";
};

document.querySelector('button[type="button"]').addEventListener("click", test);
