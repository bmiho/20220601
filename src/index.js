import "./styles.css";
//
var num = 1;
var elm = document.createElement("button");
elm.innerHTML = num;
elm.setAttribute("id", num);
elm.setAttribute("class", "circle");
elm.setAttribute("onclick", "remove()");
document.getElementById("main").appendChild(elm);

document.remove = function () {
  document.getElementById("main").removeChild(document.getElementById("1"));
};
