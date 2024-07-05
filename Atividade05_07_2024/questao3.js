function contarOcorrencias(frase, letra) {
    let quantidade = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra) {
            quantidade++;
        }
    }
    return quantidade;
}

// Exemplo de uso:
const fraseExemplo = "Olá tudo bem com voce";
const letraExemplo = "o";
const ocorrencias = contarOcorrencias(fraseExemplo, letraExemplo);
console.log(`A letra "${letraExemplo}" aparece ${ocorrencias} vezes na frase "${fraseExemplo}."`);
