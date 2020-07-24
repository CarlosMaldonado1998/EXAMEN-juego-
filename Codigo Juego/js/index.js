var x=1;
var y=0;
function rollDice(){
  var die1 = $('#die1').html();
  var status = $('#status').html();
  var d1 = Math.floor(Math.random() * 6) + 1;
  var pos =d1 + y;
  $('#die1').html(d1);

  y = pos;
  if (pos >= 20){
    $('#status').html("Tu posicion "+ 20 +".");
    alert("HA ganado el juego. Felicidades Jugador  1");
    y = 0;
  }else{
    $('#status').html("Tu posicion "+ pos +".");
  }

}

var Z=1//x
var W=0;//y
function rollDice2(){
  var die1 = $('#die2').html();
  var status = $('#status2').html();
  var d2 = Math.floor(Math.random() * 6) + 1;
  var pos2 =d2 + W;
  $('#die2').html(d2);

  W = pos2;
  if (pos2 >= 20){
    $('#status2').html("Tu posicion "+ 20 +".");
    alert("HA ganado el juego. Felicidades Jugador 2 ");
    W = 0;
  }else{
    $('#status2').html("Tu posicion "+ pos2 +".");
  }

}

