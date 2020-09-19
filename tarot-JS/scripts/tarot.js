function card(name, description, image){
  this.name = name;
  this.description = description;
  this.image = image;
}

var deck = [
  new card('Chariot', '', 'Chariot'),
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card,
  new card
  
];

function getRandom(num){
  var randomNumber = Math.floor(Math.random() * num);
  return randomNumber;
}

document.getElementById("draw").onclick = function(){
  var index = getRandom(78);
  var currentCard = deck[index];

  document.getElementById("display").innerHTML = '<img src="images/' + currentCard.image + '.jpg"><h3>' + currentCard.name + '</h3><p>' + currentCard.description + '</p>';
};
