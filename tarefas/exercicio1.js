let promocoes = [
    "teclado mecânico",
    "mouse gamer",
    "monitor ultrawide",
    "cadeira ergonômica",
    "webcam HD",
    "fone bluetooth",
    "notebook i5",
    "hub USB"
  ];
console.log("Promoções:");
console.table(promocoes);

promocoes.push( "SSD 1TB", "mesa digitalizadora");
console.log("Promoções com novos produtos adicionados:");
console.table(promocoes);