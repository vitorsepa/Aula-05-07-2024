function Despesa(descricao, valor, data) {
    this.descricao = descricao;
    this.valor = valor;
    this.data = data;
}

const minhaDespesa = new Despesa("Cinema", 30.00, "2024-07-10");

console.log(minhaDespesa.descricao); // Saída: Cinema
console.log(minhaDespesa.valor);     // Saída: 30.00
console.log(minhaDespesa.data);      // Saída: 2024-07-10
