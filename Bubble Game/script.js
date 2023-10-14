var timer = 60;
var score=0;
var hitnum=0;

function scoreadd(){
    
    score += 10
    document.querySelector('#scorecount').textContent = score;
}

function newhit(){
     hitnum=Math.floor(Math.random()*10);
    document.querySelector('#hitnum').textContent = hitnum;
}

function makebubble(){
    var cool = "";
for(var i=1;i<=130;i++)
{
    var coolnum = Math.floor(Math.random()*10);
   cool += `<div class="bubble">${coolnum}</div>`;
}

document.querySelector("#pbtm").innerHTML = cool;
}

function runTimer(){
   var timerint= setInterval(function(){
        if(timer>0)
        {
            timer--;
            document.querySelector("#timerinterval").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector('#pbtm').innerHTML = `<h1>Game over Final Score</h1> <h1>${score}<h1>`
        }
        
    },1000)
}

document.querySelector('#pbtm').addEventListener("click" , function(details){
    var clickednumber = Number(details.target.textContent);
    if( clickednumber === hitnum){
        scoreadd();
        makebubble();
        newhit();
    }
})

runTimer();
makebubble();
newhit();






