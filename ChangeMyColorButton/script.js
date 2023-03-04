let color = "white";
let textcolor = "white";
let buttoncolor = "black";

document.getElementById("changemycolor").addEventListener("click", function () {
  color = color === "white" ? "black" : "white";
  textcolor = textcolor === "white" ? "black" : "white";
  buttoncolor = buttoncolor === "black" ? "white" : "black";
  document.body.style.backgroundColor = color;
  document.getElementById("textcolor").style.color = textcolor;
  document.getElementById("changemycolor").style.backgroundColor = buttoncolor;
});
