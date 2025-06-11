/*
  OBJETIVOS

    1) Criar Array de objetos com os dados da tabela            (V)
      1.1) Criar variáveis para controle de paginação           (V)
        * guardar a página a ser exibida                        (V)
        * definir quantos itens mostrar por página              (V)
        * armaeznar os dados após a aplicação de filtros        (V)
        
    2) Carregamento inicial                                     (V)
      * Limpar o conteúdo atual da tabela                       (V)
      * Calcular o intervalo de registros para a página atual   (V)
      * Popular a tabela com registros de página                (V)
      * Atualizar o contador de paginas                         (V)
      
    3) Paginação
      * Dar a opção de próxima página (+1) ou página anterior (-1)  (V)
      * Verificar se a nova página é válida                         (V)
      * Atualizar página atual e recarregar tabela                  (V)
      * Calcular o total de páginas                                 (V)
      * Atualizar o texto "Página X e Y"                            (V)
      * Desabilita botões quando não há mais páginas                (V)
    
    4) Filtro/Busca
      * Obter termo de busca do input                           (V)
      * Filtrar os dados originais por nome ou idade            (V)
      * Resetar para a primeira página                          (V)
      * Recarregar a tabela com resultados filtrados            (V)
    
    5) Ordenar  
      * Ordernar por nome (A-Z)                                 (V)
      * Recarregar a tabela com dados ordenados                 (V)  

*/  


const dados = [
  { nome: "Carlos", idade: 30 },
  { nome: "Ana", idade: 25 },
  { nome: "Bruno", idade: 28 },
  { nome: "Carla", idade: 22 },
  { nome: "dado dolabela", idade: 45 },
  { nome: "enzo", idade: 13},
  { nome: "fernanda Montenegro", idade: 28}
];

let paginaAtual = 1;
const registrosPorPagina = 5;
let dadosFiltrados = [...dados];

function carregarTabela() {
  const tabela = document.getElementById("dadosTabela");
  tabela.innerHTML = "";

  //calcular registros para página atual
  const inicio = (paginaAtual - 1) * registrosPorPagina;
  const fim = inicio + registrosPorPagina;
  const dadosPagina = dadosFiltrados.slice(inicio, fim);

  // preencher a tabela

  dadosPagina.forEach(pessoa => {
    const linha = document.createElement("tr");
    linha.innerHTML = `<td>${pessoa.nome}</td><td>${pessoa.idade}</td>`;
    tabela.appendChild(linha);
  });

  atualizarInformacao();
}

function atualizarInformacao() {
  const totalPaginas = Math.ceil(dadosFiltrados.length / registrosPorPagina);
  document.getElementById("infoPagina").textContent = `Página ${paginaAtual} de ${totalPaginas}`;

  //desabilitar botões dependendo do estado da informação
  const botoes = document.querySelectorAll(".paginacao button");
  botoes[0].disabled = paginaAtual === 1;
  botoes[1].disabled = paginaAtual === totalPaginas || totalPaginas === 0;
}

//mudar página
function mudarPagina(direcao) {
  const totalPaginas = Math.ceil(dadosFiltrados.length / registrosPorPagina);
  const novaPagina = paginaAtual + direcao;
  
  if(novaPagina > 0 && novaPagina <= totalPaginas) {
    paginaAtual = novaPagina;
    carregarTabela();
  }
}

//filtrar os dados da tabela com base no nome e idade
function filtrarTabela() {
  const filtro = document.getElementById("busca").value.toLowerCase();

  dadosFiltrados = dados.filter(pessoa =>
    pessoa.nome.toLowerCase().includes(filtro) || 
    pessoa.idade.toString().includes(filtro)
  );

  paginaAtual = 1;
  carregarTabela();
}

// ordenar tabela (A-Z)
function ordenarTabela() {
  dadosFiltrados.sort((a, b) => a.nome.localeCompare(b.nome));
  carregarTabela();
}

window.onload = carregarTabela;