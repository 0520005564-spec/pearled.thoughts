// PAGE SWITCH
function showPage(page){
  document.getElementById("mainPage").style.display="none";
  document.getElementById("infoPage").style.display="none";
  document.getElementById("privatePage").style.display="none";
  document.getElementById(page+"Page").style.display="block";
}

// MODE
function setMode(mode){
  document.body.classList.remove("dark","white");
  if(mode==="dark") document.body.classList.add("dark");
  if(mode==="white") document.body.classList.add("white");
}

// QUOTE
const quotes=["you are enough","you matter","slow down","rest is okay"];
document.getElementById("quote").innerText=quotes[new Date().getDate()%quotes.length];

// MESSAGE
function showMessage(){
  const m=["be kind to yourself","you’re doing okay","you matter"];
  document.getElementById("message").innerText=m[Math.floor(Math.random()*m.length)];
}

// REFLECT
function reflect(){
  let input=document.getElementById("reflectionInput").value;
  document.getElementById("reflectionOutput").innerText="you said: "+input;
}

// SAVE JOURNAL
const journal=document.getElementById("journalInput");
journal.value=localStorage.getItem("journal")||"";
journal.oninput=()=>localStorage.setItem("journal",journal.value);

// SAVE MIRROR
const mirror=document.getElementById("reflectionInput");
mirror.value=localStorage.getItem("mirror")||"";
mirror.oninput=()=>localStorage.setItem("mirror",mirror.value);

// PASSWORD
const PASSWORD="1234";
function unlockDiary(){
  let input=document.getElementById("passwordInput").value;
  if(input===PASSWORD){
    document.getElementById("lockScreen").style.display="none";
    document.getElementById("diaryContent").style.display="block";
  } else {
    document.getElementById("errorMsg").innerText="wrong password";
  }
}

// SAVE PRIVATE
const privateDiary=document.getElementById("privateDiary");
privateDiary.value=localStorage.getItem("privateDiary")||"";
privateDiary.oninput=()=>localStorage.setItem("privateDiary",privateDiary.value);

// MUSIC
const songs=[
"https://www.bensound.com/bensound-music/bensound-slowmotion.mp3",
"https://www.bensound.com/bensound-music/bensound-love.mp3"
];

let current=0, playing=false;
const music=document.getElementById("bgMusic");

function load(i){music.src=songs[i];}
load(current);

function toggleMusic(){ playing?music.pause():music.play(); playing=!playing; }
function nextSong(){ current=(current+1)%songs.length; load(current); music.play(); }
function prevSong(){ current=(current-1+songs.length)%songs.length; load(current); music.play(); }
function randomSong(){ current=Math.floor(Math.random()*songs.length); load(current); music.play(); }
