interface Repositorio {
    nome: string;
    linguagem: string;
    estrelas: number;
    descricao?: string;
}

const repo: Repositorio = {
    nome: "Isaac",
    linguagem: "TypeScript",
    estrelas: 5,
    descricao: "adadsd"
}

function exibirRepositorio(repo: Repositorio): void {
    console.log(`Repositório: ${repo.nome}, Linguagem: ${repo.linguagem}, Estrelas: ${repo.estrelas}, Descrição: ${repo.descricao || "N/A"}`)
}

exibirRepositorio(repo);
        




