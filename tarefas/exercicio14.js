//Destaques da semana no blog

let artigosBlog = [
  "Como usar Docker com Node.js",
  "5 erros comuns em JavaScript",
  "Introdução ao TypeScript",
  "Clean Code na prática",
  "Design Patterns úteis",
  "Refatoração de código",
  "Boas práticas de API REST",
  "Segurança em aplicações web"
];

console.log("Artigos:");
console.table(artigosBlog);

//Extraindo parte da lista
console.log(`\nOs quatro artigos mais recentes:`);
console.table(artigosBlog.slice(0, 4));
