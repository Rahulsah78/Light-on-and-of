let photo = document.getElementById("img");
photo.src = "img/of.png";

// document.querySelector('h1').innerHTML = bulb
let onbtn = document.getElementById("btnon");
let ofbtn = document.getElementById("btnof");
let text = document.getElementById('span')
onbtn.addEventListener("click", () => {
  photo.src = "img/on.png";
  text.innerText = 'on'
  onbtn.style.background = 'yellow'
  ofbtn.style.background = '#fff'
//   onbtn.style.background = 'white'
  onbtn.style.color = 'black'
});
ofbtn.addEventListener("click", () => {
  photo.src = "img/of.png";
  text.innerText = 'of';
  ofbtn.style.background = 'green'
  ofbtn.style.color = 'black'
  onbtn.style.background = 'white'


});