//Erro de importação

let importados = [
  "carregador portátil",
  "cabo HDMI",
  "leitor biométrico",
  "controle sem fio",
  "webcam 4K"
];

console.log("Produtos Importados:");
console.table(importados);

//Removendo o primeiro item da lista
let removePrimeiroProduto = importados.shift();
console.log("Produtos importados com o primeiro item removido:");
console.table(importados);
