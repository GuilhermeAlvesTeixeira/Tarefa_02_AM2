function buscaLinear(arr,valor) {
    let indices = [];

    for (let i = 0; i < arr.length; i++) {
        
        if(arr[i] == valor) {
            indices.push(i);
        }
    }

    if(indices.length == 0) {
        return -1;
    }

    return indices;
}

const arrayTeste = [2,4,6,8,4,10,4,12];
const valorProcurado = 4;

const resultados = buscaLinear(arrayTeste, valorProcurado);

console.log(`${valorProcurado} aparece nos índices: ${resultados}`);
