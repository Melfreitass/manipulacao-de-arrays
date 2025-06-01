//Remoção de itens inativos no menu

let menuNavegacao = [
  "Início",
  "Serviços",
  "Portfólio",
  "Blog",
  "Contato",
  "Login",
  "Área do cliente"
];

console.log("Menu navegação:");
console.table(menuNavegacao);

//Removendo itens
let removeItem = menuNavegacao.splice(1, 2);
console.log("Menu navegação atualizado (dois itens removidos):");
console.table(menuNavegacao);