function ordenarTabela() {
    let tabela = document.getElementById("dadosTabela");
    Array.from(tabela.rows)
      .sort((a, b) => a.cells[0].textContent.localeCompare(b.cells[0].textContent))
      .forEach(tr => tabela.appendChild(tr));
  }
  
  function buscarTabela() {
    let filtro = document.getElementById("busca").value.toUpperCase();
    let tabela = document.getElementById("dadosTabela");
  
    Array.from(tabela.rows).forEach(row => {
      let nome = row.cells[0].textContent.toUpperCase();
      let idade = row.cells[1].textContent.toUpperCase();
  
      if (nome.includes(filtro) || idade.includes(filtro)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }
  
  