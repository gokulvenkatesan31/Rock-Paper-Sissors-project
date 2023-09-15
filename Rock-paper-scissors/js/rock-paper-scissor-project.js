
let score=JSON.parse(localStorage.getItem("score") )||{
player:0,
computer:0,
tie:0
};
console.log(score);
document.querySelector(".js-score").innerHTML=`player: ${score.player}  ,  computer:  ${score.computer} , Tie:  ${score.tie}`;
const playerpick = (playermove)=>{
    const computermove=computerpick();
    let result;
    if (playermove==="rock"){
        if (computermove==="rock"){
            result="Tie";
            score.tie+=1;
        }
        else if (computermove==="paper"){
            score.computer+=1;
            result="computer win";
        }
        else{
            score.player+=1;
            result="player win";
        }
    }
    else if(playermove==="paper"){
        if (computermove==="rock"){
            score.player+=1;
            result="player win";
        }
        else if (computermove==="paper"){
            score.tie+=1;
            result="Tie";
        }
        else{
            score.computer+=1;
            result="computer win";
        }
    }
    else{
        if (computermove==="rock"){
            score.computer+=1;
            result="computer win";
        }
        else if (computermove==="paper"){
            score.player+=1;
            result="player win";
        }
        else{
            score.tie+=1;
            result="Tie";
        }

    }
    
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector(".js-result").innerHTML=`Player move : <img class="img-size" src="img/${playermove}-emoji.png"> \n
    Computer move : <img class="img-size" src="img/${computermove}-emoji.png">`;
    document.querySelector(".js-point").innerHTML=result;
    document.querySelector(".js-score").innerHTML=`player: ${score.player}  ,  computer:  ${score.computer} , Tie:  ${score.tie}`;
    
}
function computerpick(){
    computermove=""
    rndnum=Math.floor(Math.random()*3)
    if (rndnum=== 0){
        computermove="rock";
    }
    else if (rndnum=== 1){
        computermove="paper";
    }
    else{
        computermove="scissors";
    }
    return computermove;
}
let intervelver
function auto(){
  intervelver=setInterval(()=>{
    playermove=computerpick();
    playerpick(playermove)},1000);
}

const rockBtnElement=document.querySelector(".js-rock-btn");
const paperBtnElement=document.querySelector(".js-paper-btn");
const scissorsBtnElement=document.querySelector(".js-scissor-btn");
rockBtnElement.addEventListener('click',()=>{playerpick("rock")});
paperBtnElement.addEventListener('click',()=>{playerpick("paper")});
scissorsBtnElement.addEventListener('click',()=>{playerpick("scissors")});
document.body.addEventListener("keydown",(event)=>{
    if (event.key==='r'){
        playerpick("rock")
    }
    else if(event.key==='p'){
        playerpick("paper")
    }
    else if(event.key==='s'){
        playerpick("scissors")
    }

})