interface TemNome {
    nome: string;
}

const repo: Repositorio = {
    nome: "Isaac",
    linguagem: "TypeScript",
    estrelas: 10
};

function exibirNome<T extends TemNome>(objeto: T): void {
    console.log(`Nome: ${objeto.nome}`)
}

exibirNome(repo)