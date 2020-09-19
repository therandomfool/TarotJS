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
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','',''),
  new card('','','')
  
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
