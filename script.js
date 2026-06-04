const gift = document.getElementById("gift-box");
const content = document.getElementById("main-content");
const screen = document.getElementById("gift-screen");
const music = document.getElementById("bgMusic");

gift.onclick = () => {

screen.style.display = "none";
content.style.display = "block";

music.play();

startTypewriter();
createBalloons();
createHearts();

};

function startTypewriter(){

const text =
"🥰 Happy Birthday!! Madam Jii 🥰 ";

let i = 0;

const target =
document.getElementById("typewriter");

let interval = setInterval(() => {

target.innerHTML += text.charAt(i);

i++;

if(i >= text.length)
clearInterval(interval);

},100);

}

function createBalloons(){

setInterval(()=>{

let b =
document.createElement("div");

b.className="balloon";

b.innerHTML="🎈";

b.style.left=
Math.random()*100+"vw";

b.style.animationDuration=
(5+Math.random()*5)+"s";

document.body.appendChild(b);

setTimeout(()=>{
b.remove();
},10000);

},500);

}

function createHearts(){

setInterval(()=>{

let h =
document.createElement("div");

h.className="balloon";

h.innerHTML="❤️";

h.style.left=
Math.random()*100+"vw";

h.style.animationDuration=
(4+Math.random()*4)+"s";

document.body.appendChild(h);

setTimeout(()=>{
h.remove();
},10000);

},700);

}