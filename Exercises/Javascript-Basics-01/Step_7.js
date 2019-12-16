const result = (shoe_size, birth_year) => {
  shoe_size = document.getElementById("shoe_size").value;
  birth_year = document.getElementById("year").value;

  alert((shoe_size * 2 + 5) * 50 - birth_year + 1766);
};

document.getElementById("validate").addEventListener("click", result);
