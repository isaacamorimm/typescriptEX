// const lista: number[] = [2,3,4]
const lista: string[] = [
    "Isaac",
    "Giovana",
    "André"
]

function obterPrimeiro <T> (lista: T[]): T {
    return lista[2];
}

console.log(obterPrimeiro(lista))

interface RespostaAPI<T> {
    data: T;
    status: number;
    mensagem: string;
}

const minhaResposta: RespostaAPI<string> = {
    data: "Dados recebidos com sucesso",
    status: 200,
    mensagem: "Tudo certo"
}

function processarResposta<T>(resposta: RespostaAPI<T>): void {
    console.log(`Data: ${resposta.data}, Status: ${resposta.status}, Mensagem: ${resposta.mensagem}`)
}

processarResposta(minhaResposta)