let btn = document.getElementById("btnmy");
let btn2 = document.getElementById("btnmy2");
let code = document.getElementsByClassName("copypaste")[0];
let rgb1 = "#c799c7ff";
let rgb2 = "#690e0eff";

const hexavalue = () => {
  let myhexavalues = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + myhexavalues[Math.floor(Math.random() * 16)];
  }
  return color;
};
const handlebutton = () => {
  rgb1 = hexavalue(); 
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
  code.innerHTML = `background-image:linear-gradient(to right,${rgb1},${rgb2})`;
};

const handlebutton2 = () => {
  rgb2 = hexavalue();
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
  code.innerHTML = `background-image:linear-gradient(to right,${rgb1},${rgb2})`;
};

btn.addEventListener("click", handlebutton);
btn2.addEventListener("click", handlebutton2);
