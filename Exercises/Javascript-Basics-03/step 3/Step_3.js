const changeColor = e => {
  const text = document.getElementById("text");
  if (e.target.getAttribute("class").includes("red")) {
    console.log("red");
    text.style.color = "red";
  } else if (e.target.getAttribute("class").includes("blue")) {
    text.style.color = "blue";
  } else if (e.target.getAttribute("class").includes("green")) {
    text.style.color = "green";
  }
};

document.querySelector(".green").addEventListener("click", changeColor);
document.querySelector(".red").addEventListener("click", changeColor);
document.querySelector(".blue").addEventListener("click", changeColor);
