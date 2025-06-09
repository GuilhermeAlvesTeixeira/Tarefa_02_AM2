let paginaAtual = 1;
const linhasPorPagina = 5;

function ordenarTabela() {
  let tabela = document.getElementById("dadosTabela");
  Array.from(tabela.rows)
    .sort((a, b) => a.cells[0].textContent.localeCompare(b.cells[0].textContent))
    .forEach(tr => tabela.appendChild(tr));
  mostrarPagina(paginaAtual); 
}

function buscarTabela() {
  paginaAtual = 1; 
  mostrarPagina(paginaAtual);
}

function mostrarPagina(pagina) {
  let filtro = document.getElementById("busca").value.toUpperCase();
  let tabela = document.getElementById("dadosTabela");
  let linhas = Array.from(tabela.rows);
  let linhasFiltradas = [];

  for (let row of linhas) {
    let nome = row.cells[0].textContent.toUpperCase();
    let idade = row.cells[1].textContent.toUpperCase();

    if (nome.includes(filtro) || idade.includes(filtro)) {
      linhasFiltradas.push(row);
    } else {
      row.style.display = "none";
    }
  }

  linhas.forEach(row => row.style.display = "none");

  let inicio = (pagina - 1) * linhasPorPagina;
  let fim = inicio + linhasPorPagina;

  let totalPaginas = Math.ceil(linhasFiltradas.length / linhasPorPagina);
  if (pagina > totalPaginas) paginaAtual = totalPaginas;

  for (let i = inicio; i < fim && i < linhasFiltradas.length; i++) {
    linhasFiltradas[i].style.display = "";
  }

  document.getElementById("infoPagina").textContent = `Página ${paginaAtual} de ${totalPaginas || 1}`;
}

function paginaAnterior() {
  if (paginaAtual > 1) {
    paginaAtual--;
    mostrarPagina(paginaAtual);
  }
}

function proximaPagina() {
  let filtro = document.getElementById("busca").value.toUpperCase();
  let tabela = document.getElementById("dadosTabela");
  let linhas = Array.from(tabela.rows);
  let linhasFiltradas = linhas.filter(row => {
    let nome = row.cells[0].textContent.toUpperCase();
    let idade = row.cells[1].textContent.toUpperCase();
    return nome.includes(filtro) || idade.includes(filtro);
  });

  let totalPaginas = Math.ceil(linhasFiltradas.length / linhasPorPagina);

  if (paginaAtual < totalPaginas) {
    paginaAtual++;
    mostrarPagina(paginaAtual);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarPagina(paginaAtual);
});
