var elem= document.getElementById('pid');
var anim;
var currentPos=20;
var s=elem.style.backgroundPosition

function move(){
currentPos+=1;
elem.style.backgroundPosition=currentPos+"px 0px"
    if(Math.abs(currentPos)>=300){
      currentPos=-50;
    }
    anim=requestAnimationFrame(move);
}
move();

var date= new Date;
document.getElementById('year').textContent=date.getFullYear();
