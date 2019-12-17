const toggle = e => {
  const text = document.getElementById("texte");

  if (e.target.getAttribute("id") == "show") {
    text.style.display = "block";
  } else if (e.target.getAttribute("id") == "hide") {
    text.style.display = "none";
  }
};

document.getElementById("show").addEventListener("click", toggle);
document.getElementById("hide").addEventListener("click", toggle);
