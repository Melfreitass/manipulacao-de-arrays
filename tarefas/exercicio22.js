// Alunos com média acima de 7

let alunos = [
  { nome: "Carlos", media: 6.5 },
  { nome: "Fernanda", media: 7.2 },
  { nome: "Lucas", media: 8.1 },
  { nome: "Marina", media: 5.9 },
  { nome: "João", media: 7.0 },
  { nome: "Aline", media: 9.3 }
];

//Filtrando media dos alunos
let alunosMedia = alunos.filter(aluno => aluno.media >= 7);
console.log("Alunos que atngiram a média:");
console.table(alunosMedia);