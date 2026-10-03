const screens=[...document.querySelectorAll(".screen")];
function go(id){screens.forEach(s=>s.classList.toggle("active",s.id===id));}
document.getElementById("login").addEventListener("submit",e=>{
 e.preventDefault();
 const p=document.getElementById("password");
 if(p.value==="0810"){go("welcome"); burst();}
 else {document.getElementById("error").textContent="That isn't the secret code ♡";p.value="";p.focus();}
});
document.querySelectorAll(".next").forEach(b=>b.addEventListener("click",()=>go(b.dataset.next)));
document.querySelectorAll(".penguin").forEach(b=>b.addEventListener("click",()=>{
 document.getElementById("penguinMsg").textContent="Good choice. Your surprise is waiting…";
 setTimeout(()=>{go("game");startGame()},700);
}));
let gameStarted=false,score=0;
function startGame(){
 if(gameStarted)return; gameStarted=true; score=0; const box=document.getElementById("gamebox");
 const scoreEl=box.querySelector(".score");
 function spawn(){
   if(score>=5)return;
   const x=document.createElement("button");x.className="butterfly";x.textContent="🦋";
   x.style.left=(5+Math.random()*88)+"%";x.style.top=(15+Math.random()*72)+"%";
   x.onclick=()=>{score++;scoreEl.textContent=score+" / 5";x.remove(); if(score>=5){setTimeout(()=>go("letter"),650)}else setTimeout(spawn,220)};
   box.appendChild(x);setTimeout(()=>{if(x.isConnected){x.remove();spawn()}},1600);
 }
 spawn();
}
function burst(){
 for(let i=0;i<16;i++){const h=document.createElement("div");h.className="heart";h.textContent=Math.random()>.5?"♥":"♡";h.style.left=Math.random()*100+"vw";h.style.bottom="-20px";h.style.fontSize=(12+Math.random()*24)+"px";h.style.animationDelay=Math.random()*.8+"s";document.body.appendChild(h);setTimeout(()=>h.remove(),5000)}
}
setInterval(()=>{if(document.querySelector("#final.active"))burst()},2600);
