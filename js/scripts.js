var playerDice = [];
var handArray = [];

function diceRoller() {
  playerDice = [];
  while (playerDice.length < (5 -  handArray.length)) {
    var diceRoll = Math.floor(Math.random() * 6 + 1);
    playerDice.push(diceRoll);
  }
  console.log(playerDice);
  console.log(handArray);
};



$(function(){
  diceRoller();
  var index = 0;

  playerDice.forEach(function(die){
    classSelector = (".rolledDie"+index);
    $(classSelector).append("Die: "+playerDice[index]);
    index++;
  });

  $(".formDice").submit(function(){
    event.preventDefault();
    var diceArray = ["dice1", "dice2", "dice3", "dice4", "dice5"];

    diceArray.forEach(function(die){

      var userChecked = ("#"+die).toString();
      var value = parseInt($(userChecked).val());
      var tableKeep = playerDice[value];
        console.log("value: "+value);
      var diceToKeep = $(userChecked).is(':checked');
        if (diceToKeep === true) {
          handArray.push(tableKeep);
        }
    });
    diceRoller();
  });

});
