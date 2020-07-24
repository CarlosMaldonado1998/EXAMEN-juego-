$(document).ready(function () {
  $('#BtnJug2').attr("disabled", true);
  $('#Comprobacion').attr("disabled", true);
})






var x=1;
var y=0;
function rollDice(){
  var die1 = $('#die1').html();
  var status = $('#status').html();
  var d1 = Math.floor(Math.random() * 6) + 1;
  //Pos es la posicion que se movera la ficha
  var pos =d1 + y;
  $('#die1').html(d1);

  //El valor de la posicion
  y = pos;

  $( '.Mapa .Cuadrado' )
    .eq( pos )
    .html( $( '.ficha' ) );

  var instruccion1 = Math.floor(Math.random() * 10) + 1;
  $('.ficha').html(instruccion1);
  if (y === 43){
    $('#status').html("Tu posicion "+ 43 +".");
    alert("HA ganado el juego. Felicidades Jugador  1");
    y = 0;
  }else if(y > 43){
      y = y - d1;
      $('#status').html("Tu posicion "+ y +".");
  }else{
      $('#status').html("Tu posicion "+ y +".");
  }
  $('#BtnJug1').attr("disabled", true);
  $('#Comprobacion').attr("disabled", false);
}

var Z=1//x
var W=0;//y
function rollDice2(){
  var die1 = $('#die2').html();
  var status = $('#status2').html();
  var d2 = Math.floor(Math.random() * 6) + 1;

  //Pos2 es la posicion que se movera la ficha
  var pos2 =d2 + W;
  $('#die2').html(d2);
//El valor de la posicion
  W = pos2;


  $( '.Mapa2 .Cuadrado2' )
    .eq( pos2 )
    .html( $( '.ficha2' ) );
  var instruccion2 = Math.floor(Math.random() * 10) + 1;
  $('.ficha2').html(instruccion2);
  if (W === 43){
    $('#status').html("Tu posicion "+ 43 +".");
    alert("HA ganado el juego. Felicidades Jugador  1");
    W = 0;
  }else if(W > 43){
    W = W - d2;
    $('#status').html("Tu posicion "+ W +".");
  }else{
    $('#status').html("Tu posicion "+ W +".");
  }
  $('#BtnJug2').attr("disabled", true);
  $('#Comprobacion').attr("disabled", false);
}

<!--Opcion de habilitar/deshabilitar-->

var codigo = 0;

$('#Comprobacion').click(function () {

  if(codigo === 0){
    $('#BtnJug2').attr("disabled", false);
    $('#BtnJug1').attr("disabled", true);
    codigo = 1;
  }else{
    $('#BtnJug2').attr("disabled", true);
    $('#BtnJug1').attr("disabled", false);
    codigo = 0;
  }
  $('#Comprobacion').attr("disabled", true);
});







