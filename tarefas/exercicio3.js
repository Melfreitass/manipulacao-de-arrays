//Último produto com defeito

let producao = [
  "mousepad",
  "placa de vídeo",
  "fonte de alimentação",
  "HD externo",
  "notebook gamer",
  "roteador"
];

console.log("Itens de  produção:");
console.table(producao);

let removeUltimoProduto = producao.pop();
console.log("Produção com último item removido:");
console.table(producao);