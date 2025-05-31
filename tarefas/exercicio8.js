//Alunos transferidos

let chamada = [
  "Carlos",
  "Fernanda",
  "João",
  "Mariana",
  "Lucas",
  "Camila"
];

console.log("Chamada:");
console.table(chamada);

//Adicionando itens no início do array
chamada.unshift("Beatriz", "Rafaela");
console.log(`\nChamada com novas alunas adicionadas:`);
console.table(chamada);
