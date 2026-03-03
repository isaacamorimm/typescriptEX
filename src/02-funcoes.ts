const preco: number = 100;
const desconto: number = 200;

function calcularDesconto(preco: number, desconto: number): number {
    return preco - preco * (desconto / 100)
}

console.log(calcularDesconto(preco, desconto));