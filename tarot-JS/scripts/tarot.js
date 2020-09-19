function card(name, description, image){
  this.name = name;
  this.description = description;
  this.image = image;
}

var deck = [
  new card('Chariot', '', 'Chariot'),
  new card('Two of Cups', '', 'Cups02'),
  new card('Three of Cups', '', 'Cups03'),
  new card('Four of Cups', '', 'Cups04'),
  new card('Five of Cups', '', 'Cups05'),
  new card('Six of Cups', '', 'Cups06'),
  new card('Seven of Cups','','Cups07'),
  new card('Eight of Cups','','Cups08'),
  new card('Nine of Cups','','Cups09'),
  new card('Ten of Cups','','Cups10'),
  new card('Ace of Cups','','CupsAce'),
  new card('King of Cups','','CupsKing'),
  new card('Knight of Cups','','CupsKnight'),
  new card('Page of Cups','','CupsPage'),
  new card('Queen of Cups','','CupsQueen'),
  new card('Death','','Death'),
  new card('Devil','','Devil'),
  new card('Emperor','','Emperor'),
  new card('Empress','','Empress'),
  new card('The Fool','','Fool'),
  new card('Hanged Man','','Hanged_Man'),
  new card('Hermit','','Hermit'),
  new card('Hierophant','','Hierophant'),
  new card('High Priestess','','High_Priestess'),
  new card('Judgement','','Judgement'),
  new card('Justice','','Justice'),
  new card('The Lovers','','Lovers'),
  new card('Magician','','Magician'),
  new card('Moon','','Moon'),
  new card('Two of Pentacles','','Pents02'),
  new card('Three of Pentacles','','Pents03'),
  new card('Four of Pentacles','','Pents04'),
  new card('Five of Pentacles','','Pents05'),
  new card('Six of Pentacles','','Pents06'),
  new card('Seven of Pentacles','','Pents07'),
  new card('Eight of Pentacles','','Pents08'),
  new card('Nine of Pentacles','','Pents09'),
  new card('Ten of Pentacles','','Pents10'),
  new card('Ace of Pentacles','','PentsAce'),
  new card('King of Pentacles','','PentsKing'),
  new card('Knight of Pentacles','','PentsKnight'),
  new card('Page of Pentacles','','PentsPage'),
  new card('Queen of Pentacles','','PentsQueen'),
  new card('Star','','Star'),
  new card('Strength','','Strength'),
  new card('Sun','','Sun'),
  new card('Two of Swords','','Swords02'),
  new card('Three of Swords','','Swords03'),
  new card('Four of Swords','','Swords04'),
  new card('Five of Swords','','Swords05'),
  new card('Six of Swords','','Swords06'),
  new card('Seven of Swords','','Swords07'),
  new card('Eight of Swords','','Swords08'),
  new card('Nine of Swords','','Swords09'),
  new card('Ten of Swords','','Swords10'),
  new card('Ace of Swords','','SwordsAce'),
  new card('King of Swords','','SwordsKing'),
  new card('Knight of Swords','','SwordsKnight'),
  new card('Page of Swords','','SwordsPage'),
  new card('Queen of Swords','','SwordsQueen'),
  new card('Temperance','','Temperance'),
  new card('Tower','','Tower'),
  new card('Two of Wands','','Wands02'),
  new card('Three of Wands','','Wands03'),
  new card('Four of Wands','','Wands04'),
  new card('Five of Wands','','Wands05'),
  new card('Six of Wands','','Wands06'),
  new card('Seven of Wands','','Wands07'),
  new card('Eight of Wands','','Wands08'),
  new card('Nine of Wands','','Wands09'),
  new card('Ten of Wands','','Wands10'),
  new card('Ace of Wands','','WandsAce'),
  new card('King of Wands','','WandsKing'),
  new card('Knight of Wands','','WandsKnight'),
  new card('Page of Wands','','WandsPage'),
  new card('Queen of Wands','','WandsQueen'),
  new card('Wheel of Fortune','','Wheel_of_Fortune'),
  new card('World','','World')
  
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
