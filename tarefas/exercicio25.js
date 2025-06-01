//Últimas atualizações do sistema

let atualizacoes = [
  "Backup diário concluído",
  "Servidor reiniciado",
  "Nova versão implantada",
  "Logs exportados",
  "Firewall atualizado",
  "Monitoramento ativado",
  "Banco de dados otimizado",
  "Script de segurança executado"
];

//Invertendo a ordem das atualizações
let atualizacoesInvertidas = atualizacoes.reverse();
console.log(`\nAtualizações começendo pelas mais recentes`);
console.table(atualizacoes);