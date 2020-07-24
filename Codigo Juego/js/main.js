let x=1;
let y=0;
function rollDice(){
  let die1 = document.getElementById("die1");
  let status = document.getElementById("status");
  let d1 = Math.floor(Math.random() * 6) + 1;
  let pos =d1 + y;
  die1.innerHTML = d1;
  status.innerHTML = "Tu posicion "+ pos +".";
  tiro.innerHTML = "Tu numero de tiro es "+x+".";
  x = x+1;
  y = pos;
  if (pos > 99){
    alert("EL juego ha terminado");
    y = 0;

  }
