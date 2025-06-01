// Histórico de navegação

let historico = [
  "login",
  "painel",
  "relatórios",
  "detalhes do cliente",
  "editar dados",
  "configurações",
  "logout"
];

//Invertendo a ordem das atualizações
let historicoInvertido = historico.reverse();
console.log(`\nHistórico começando pelo mais recente`);
console.table(historico);