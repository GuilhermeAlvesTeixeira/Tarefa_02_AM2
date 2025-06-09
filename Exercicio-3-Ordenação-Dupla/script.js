const individuos = [
    { nome: "Chico Gavião", idade: 49 },
    { nome: "Yudi Tamashiro", idade: 30 },
    { nome: "Super Mario", idade: 80 },
    { nome: "Emma Frost", idade: 40 },
    { nome: "Galinho Ticoliro", idade: 8 },
    { nome: "Chaves", idade: 8}
];

function ordernarIndividuos(individuos){
    return individuos.sort((a, b) => {
        //Idade
        if(a.idade != b.idade) {
            return a.idade - b.idade;
        }
        //
        return a.nome.localeCompare(b.nome);
    });
}

const ordem = ordernarIndividuos(individuos).map(ind => ind.nome);
console.log(`Indivíduos ordenados:\n\n ${ordem.join(", ")}`);