// Conferência de presença

let presenca = [
  "João Lima",
  "Carla Nunes",
  "Amanda Souza",
  "Bruno Ribeiro",
  "Fernanda Sales"
];

console.log("Lista de presença:");
console.table(presenca);

//Buscando valores na lista
let buscarPresenca = "Amanda Souza";
if (presenca.includes(buscarPresenca)) {
    console.log(`${buscarPresenca} compareceu à reunião`)
} else {
    console.log(`${buscarPresenca} não compareceu à reunião`);
}

