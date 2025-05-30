//Cancelamento de última inscrição

let inscritos = [
  "Pedro", 
  "Larissa", 
  "João", 
  "Amanda", 
  "Lucas", 
  "Mariana"
];

console.log("Inscritos:");
console.table(inscritos);

//Removendo o último item da lista
let removeUltimoInscrito = inscritos.pop();
console.log("Lista com o último inscrito removido:");
console.table(inscritos);
