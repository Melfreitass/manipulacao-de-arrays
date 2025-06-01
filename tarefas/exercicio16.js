//Substituição de matérias na grade

let gradeCurricular = [
  "Matemática",
  "Português",
  "Biologia",
  "Física",
  "História",
  "Educação Física",
  "Inglês"
];

console.log("Grade curricular:");
console.table(gradeCurricular);

//Alterando itens
let removeDisciplina = gradeCurricular.splice(2, 2, "Programação", "Robótica");
console.log("Grade curricular com disciplinas alteradas:");
console.table(gradeCurricular);
