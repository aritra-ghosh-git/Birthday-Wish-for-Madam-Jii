// ===========================
// PASSWORD SYSTEM
// ===========================

const passwordBtn =
document.getElementById("passwordBtn");

passwordBtn.addEventListener("click", () => {

const password =
document.getElementById("passwordInput").value;

if(password === "@"){

document.getElementById(
"passwordScreen"
).style.display = "none";

document.getElementById(
"gift-screen"
).style.display = "flex";

}
else{

document.getElementById(
"errorText"
).innerHTML =
"❌ Wrong Password";

}

});

// ===========================
// GIFT OPENING
// ===========================

const gift =
document.getElementById("gift-box");

const music =
document.getElementById("bgMusic");

gift.addEventListener("click", () => {

document.getElementById(
"gift-screen"
).style.display = "none";

document.getElementById(
"main-content"
).style.display = "block";

music.play();

startTypewriter();

startFloatingHearts();

});

// ===========================
// TYPEWRITER TITLE
// ===========================

const titleText =
"🥰 Happy Birthday Madam Ji 🥰";

const messageText =
`Mohtarma...

Aap meri kahani ka woh hissa hain
jo shayad kabhi kabhi mere khayalon me
ek khoobsurat dua bankar rehta hai.

Aapki muskurahat hamesha yunhi salamat rahe,
aur aapki zindagi me khushiyan,
sukoon aur kamyabi kabhi kam na ho.

Aapki salgirah par meri har dua
sirf aapke naam hai. ❤️

Dil se likha hai...
Bura mat maniyega. 😊`;

function startTypewriter(){

let i = 0;

const target =
document.getElementById("typewriter");

const timer =
setInterval(() => {

target.innerHTML +=
titleText.charAt(i);

i++;

if(i >= titleText.length){

clearInterval(timer);

setTimeout(() => {

startMessageTyping();

},500);

}

},180);

}

// ===========================
// MESSAGE TYPEWRITER
// ===========================

function startMessageTyping(){

const box =
document.getElementById(
"message-box"
);

let i = 0;

const speed =
18000 / messageText.length;

const typing =
setInterval(() => {

box.innerHTML +=
messageText.charAt(i);

i++;

if(i >= messageText.length){

clearInterval(typing);

document.getElementById(
"nextBtn"
).style.display =
"inline-block";

}

},speed);

}

// ===========================
// FLOATING HEARTS
// ===========================

function startFloatingHearts(){

setInterval(() => {

const heart =
document.createElement("div");

heart.className = "heart";

heart.innerHTML =
Math.random() > 0.5
? "❤️"
: "🥰";

heart.style.left =
Math.random() * 100 + "vw";

heart.style.bottom = "-50px";

document.body.appendChild(
heart
);

setTimeout(() => {

heart.remove();

},8000);

},600);

}

// ===========================
// NEXT BUTTON
// ===========================

document.getElementById(
"nextBtn"
).addEventListener(
"click",
() => {

document.getElementById(
"main-content"
).style.display = "none";

document.getElementById(
"emojiPage"
).style.display = "block";

emojiBlast();

setTimeout(() => {

document.getElementById(
"emojiPage"
).style.display = "none";

document.getElementById(
"galleryPage"
).style.display = "block";

startSlideshow();

},5000);

}
);

// ===========================
// EMOJI BLAST
// ===========================

function emojiBlast(){

const container =
document.getElementById(
"emojiBlastContainer"
);

for(let i=0;i<90;i++){

const emoji =
document.createElement("div");

const emojis = [
"❤️",
"🥰",
"🌹"
];

emoji.innerHTML =
emojis[
Math.floor(
Math.random()*emojis.length
)
];
emoji.style.position =
"absolute";

emoji.style.left =
Math.random()*100 + "%";

emoji.style.top =
Math.random()*100 + "%";

emoji.style.fontSize =
(18 + Math.random()*25)
+ "px";

emoji.style.transition =
"all 5s linear";
emoji.style.willChange =
"transform, opacity";
container.appendChild(
emoji
);

setTimeout(() => {

emoji.style.transform =
`translate(
${(Math.random()-0.5)*800}px,
${(Math.random()-0.5)*800}px
)
rotate(720deg)`;

emoji.style.opacity =
"0";

},100);

setTimeout(() => {

emoji.remove();

},5000);

}

}

// ===========================
// SLIDESHOW
// ===========================

function startSlideshow(){

const slides =
document.querySelectorAll(
".slide"
);

let current = 0;

slides[current]
.classList.add("active");

const slideTimer =
setInterval(() => {

slides[current]
.classList.remove(
"active"
);

current++;

if(current >= slides.length){

clearInterval(
slideTimer
);

slides[
slides.length-1
].classList.add(
"active"
);

document.getElementById(
"voiceBtn"
).style.display =
"inline-block";

return;

}

slides[current]
.classList.add(
"active"
);

},3000);

}

// ===========================
// VOICE PAGE
// ===========================

document.getElementById(
"voiceBtn"
).addEventListener(
"click",
() => {

document.getElementById(
"galleryPage"
).style.display =
"none";

document.getElementById(
"voicePage"
).style.display =
"block";

}
);

// ===========================
// SHAYARI PAGE
// ===========================

document.getElementById(
"shayariBtn"
).addEventListener(
"click",
() => {

document.getElementById(
"voicePage"
).style.display =
"none";

document.getElementById(
"shayariPage"
).style.display =
"block";

}
);

// ===========================
// ENTER KEY SUPPORT
// ===========================

document.getElementById(
"passwordInput"
).addEventListener(
"keypress",
(e)=>{

if(e.key==="Enter"){

passwordBtn.click();

}

}
);// EXIT BUTTON

document
.getElementById("exitBtn")
.addEventListener("click",()=>{

document.body.innerHTML = `

<div style="
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background:linear-gradient(135deg,#ff7aa2,#ffd6e7);
color:white;
font-family:sans-serif;
text-align:center;
">

<h1>❤️ Thank You Madam Ji ❤️</h1>

<p style="font-size:22px;">
Bas Itna Hi Tha 😊
</p>

</div>

`;

setTimeout(()=>{

window.location.href="about:blank";

},2000);

});