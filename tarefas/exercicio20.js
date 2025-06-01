//Formatando lista de preços

let precos = [
  129.9,
  399.5,
  259.0,
  89.9,
  599.99,
  39.5,
  999.0
];

//Deixano em formato de moeda
let precosFormatados = precos.map(preco => "R$" + preco.toFixed(2));
console.log("Preços em moeda brasileira:", precosFormatados);
