//Relatório de férias: Primeira semana

let diasFaltas = [
  "Carlos – Segunda",
  "Carlos – Terça",
  "Carlos – Quarta",
  "Carlos – Quinta",
  "Carlos – Sexta",
  "Carlos – Segunda (semana 2)",
  "Carlos – Terça (semana 2)",
  "Carlos – Quarta (semana 2)"
];

console.log("Férias:");
console.table(diasFaltas);

//Extraindo parte da lista
console.log(`\nSomente a primeira semana de férias:`);
console.table(diasFaltas.slice(0, 5));
