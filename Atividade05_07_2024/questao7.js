function contarPalavrasUnicas(frase) {
    const palavras = frase.split(/\s+/);

    const palavrasUnicas = new Set(palavras);

    return palavrasUnicas.size;
}
const minhaFrase = "Eu comi bolo ontem, o bolo estava muito bom. Gosto de bolo demais.";
const numeroPalavrasUnicas = contarPalavrasUnicas(minhaFrase);

console.log(`Número de palavras únicas na frase: ${numeroPalavrasUnicas}`);
