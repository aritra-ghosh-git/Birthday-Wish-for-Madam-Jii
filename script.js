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

},140);

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
20000 / messageText.length;

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

// ===========================// ===========================
// NEXT BUTTON
// ===========================

document.getElementById(
"nextBtn"
).addEventListener(
"click",
() => {

const mainPage =
document.getElementById(
"main-content"
);

const emojiPage =
document.getElementById(
"emojiPage"
);

const galleryPage =
document.getElementById(
"galleryPage"
);

// Main Page Fade Out

mainPage.classList.add(
"pageFadeOut"
);

setTimeout(() => {

mainPage.style.display =
"none";

// Emoji Page Open

emojiPage.style.display =
"block";

emojiPage.classList.add(
"pageFadeIn"
);

emojiBlast();

// Emoji Page → Gallery

setTimeout(() => {

emojiPage.classList.remove(
"pageFadeIn"
);

emojiPage.classList.add(
"pageFadeOut"
);

setTimeout(() => {

emojiPage.style.display =
"none";

galleryPage.style.display =
"block";

galleryPage.classList.add(
"pageFadeIn"
);

startSlideshow();

},800);

},5000);

},800);

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
`translateY(0)
rotate(${rotations[current]}deg)
scale(1)`;
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

const galleryPage =
document.getElementById(
"galleryPage"
);

const voicePage =
document.getElementById(
"voicePage"
);

// Gallery Fade Out

galleryPage.classList.add(
"pageFadeOut"
);

setTimeout(() => {

galleryPage.style.display =
"none";

// Voice Page Fade In

voicePage.style.display =
"block";

voicePage.classList.add(
"pageFadeIn"
);

},800);

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

const voicePage =
document.getElementById(
"voicePage"
);

const shayariPage =
document.getElementById(
"shayariPage"
);

// Voice Page Fade Out

voicePage.classList.add(
"pageFadeOut"
);

setTimeout(() => {

voicePage.style.display =
"none";

// Shayari Page Fade In

shayariPage.style.display =
"block";

shayariPage.classList.add(
"pageFadeIn"
);

// Premium Rose Effect

roseRain();

},800);

}
);

// ENTER KEY SUPPORT

document.getElementById("passwordInput")
.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){
        passwordBtn.click();
    }

});

// EXIT BUTTON

document.getElementById("exitBtn")
.addEventListener("click",()=>{

    document.body.innerHTML = `

    <div style="
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    background:
    radial-gradient(circle at top left,#ff006e33,transparent 30%),
    radial-gradient(circle at top right,#ff4d6d33,transparent 30%),
    linear-gradient(
    135deg,
    #0f0f1a,
    #1a1025,
    #2b123f,
    #12091d
    );

    color:white;
    font-family:'Segoe UI',sans-serif;
    text-align:center;
    animation:fadeInExit 1.5s ease;
    ">

    <h1 style="
    font-size:3rem;
    color:#ff6ea8;
    text-shadow:
    0 0 10px #ff4d6d,
    0 0 20px #ff006e;
    ">
    ❤️ Thank You Madam Ji ❤️
    </h1>

    <p style="
    margin-top:20px;
    font-size:20px;
    ">
    May Your Smile Always Stay Beautiful 🌹
    </p>

    </div>

    `;

    let fadeOut = setInterval(()=>{

        if(music.volume > 0.02){

            music.volume -= 0.02;

        }else{

            music.pause();
            clearInterval(fadeOut);

        }

    },150);

    setTimeout(()=>{

        window.location.href="about:blank";

    },3500);

});

// VOICE NOTE MUSIC CONTROL

const voiceNote =
document.getElementById("voiceNote");

voiceNote.addEventListener("play",()=>{

    let lowerMusic =
    setInterval(()=>{

        if(music.volume > 0.08){

            music.volume -= 0.02;

        }else{

            clearInterval(lowerMusic);

        }

    },100);

});

voiceNote.addEventListener("ended",()=>{

    let raiseMusic =
    setInterval(()=>{

        if(music.volume < 0.3){

            music.volume += 0.02;

        }else{

            clearInterval(raiseMusic);

        }

    },150);

});

// ENVELOPE OPEN

document.getElementById("envelope")
.addEventListener("click",()=>{

    document.getElementById(
    "envelopeContainer"
    ).style.display="none";

    startTypewriter();

});

// SECRET MESSAGE

document.getElementById("secretBtn")
.addEventListener("click",()=>{

    document.getElementById(
    "secretMessage"
    ).style.display="block";

    document.getElementById(
    "secretBtn"
    ).style.display="none";

});