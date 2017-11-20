
var n =  Math.floor(Math.random()*10)+1;
var incr = 10;

function doThings(){
var p = document.getElementById('answer');
var textInput = document.getElementById('textInput');
var number=document.getElementById('number');
var newGame = document.getElementById('newGame');
var ngb = document.getElementById('newGameButton');
number.innerHTML=n;

var run = true;

do {

if (textInput.value==n){
    incr=incr+10;
    answer.innerHTML="RÄTT!! Du är ju fan grym!?\nVill du spela igen med tal 1-"+%incr;
    textInput.value=null;
    ngb.style.display="inline";
  n =  Math.floor(Math.random()*incr)+1;

  break;
}
if(textInput.value<n){
  answer.innerHTML="För litet!";
  textInput.value=null;
  break;
}
if(textInput.value>n){
  answer.innerHTML="För stort!";
  textInput.value=null;
  break;
}
}while(run)

}
