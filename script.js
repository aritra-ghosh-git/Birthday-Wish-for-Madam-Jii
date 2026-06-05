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
"welcomePage"
).style.display = "flex";

setTimeout(()=>{

document.getElementById(
"welcomePage"
).classList.add("fade-out");

setTimeout(()=>{

document.getElementById(
"welcomePage"
).style.display = "none";

document.getElementById(
"gift-screen"
).style.display = "flex";

document.getElementById(
"gift-screen"
).style.animation =
"fadeIn 1s ease forwards";

},1000);

},3000);
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

music.volume = 0;

let fadeIn = setInterval(()=>{

if(music.volume < 0.3){

music.volume += 0.02;

}else{

clearInterval(fadeIn);

}

},200);


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

},130);

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
// STACKING POLAROID PHOTOS
// ===========================

function startSlideshow(){

const slides =
document.querySelectorAll(".slide");

let current = 0;

const rotations =
[-6,4,-3,5,-5,3,-2,6];

function stackPhotos(){

if(current < slides.length){

slides[current]
.classList.add("active");

slides[current].style.zIndex =
current + 1;

slides[current].style.transform =
`rotate(${rotations[current]}deg) scale(1)`;

current++;

setTimeout(
stackPhotos,
2500
);

}else{

document.getElementById(
"voiceBtn"
).style.display =
"inline-block";

}

}

stackPhotos();

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



</div>

`;

setTimeout(()=>{
let fadeOut =
setInterval(()=>{

if(music.volume > 0.02){

music.volume -= 0.02;

}else{

music.pause();

clearInterval(fadeOut);

}

},150);

window.location.href="about:blank";

},3500);

});

const voiceNote =
document.getElementById("voiceNote");

voiceNote.addEventListener(
"play",
()=>{

let lowerMusic =
setInterval(()=>{

if(music.volume > 0.08){

music.volume -= 0.02;

}else{

clearInterval(lowerMusic);

}

},100);

});voiceNote.addEventListener(
"ended",
()=>{

let raiseMusic =
setInterval(()=>{

if(music.volume < 0.3){

music.volume += 0.02;

}else{

clearInterval(raiseMusic);

}

},150);

});
document
.getElementById("envelope")
.addEventListener("click",()=>{

document
.getElementById("envelopeContainer")
.style.display="none";

startTypewriter();

});