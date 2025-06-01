//Verificação de produto em estoque

let estoque = [
  "mesa para PC",
  "cadeira gamer",
  "monitor 27 polegadas",
  "hub USB",
  "mouse sem fio"
];

console.log("Estoque:");
console.table(estoque);

//Buscando valores na lista
let buscarValor = "cadeira gamer";
if (estoque.includes(buscarValor)) {
    console.log(`${buscarValor} está disponível no estoque`);
} else {
    console.log(`${buscarValor} não está disponível no estoque`);
}