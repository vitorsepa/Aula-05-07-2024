function calcularSoma(array) {
    return array.reduce((total, elemento) => total + elemento, 0);
}

// Exemplo de uso:
const numeros = [1, 2, 3, 4, 5];
const soma = calcularSoma(numeros);
console.log(`A soma dos elementos é: ${soma}`);
