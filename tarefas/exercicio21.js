// Filtrar itens acima do estoque mínimo

let estoque = [
  {produto: "Teclado", quantidade: 5 },
  {produto: "Mouse", quantidade: 12 },
  {produto: "Monitor", quantidade: 3 },
  {produto: "Notebook", quantidade: 18 },
  {produto: "Impressora", quantidade: 9 },
  {produto: "Webcam", quantidade: 20 }
];

//Filtrando os produtos do estoque
let estoque10unidades = estoque.filter(produto => produto.quantidade > 10);
console.log("Produtos no estoque com mais de 10 unidades:");
console.table(estoque10unidades);