interface Repositorio {
    nome: string;
    linguagem: string;
    estrelas: number;
}

const repos: Repositorio = {
    nome: "Isaac",
    linguagem: "JavaScript",
    estrelas: 5
}

const reposParcial: Partial<Repositorio> = {
    linguagem: "TypeScript",
    estrelas: 4
} // Torna todas as propriedades opcionais

const RepoResumido: Pick<Repositorio, "nome" | "estrelas"> = {
    nome: "Isaac",
    estrelas: 5
} // Seleciona apenas as propriedades selecionadas

const RepoSemEstrelas: Omit<Repositorio, "estrelas"> = {
    nome: "Isaac",
    linguagem: "JavaScript"
} // Exclui as propriedades selecionadas

function atualizarRepo(repo: Repositorio, updates: Omit<Repositorio, "estrelas">): Repositorio {
    return {...repo, ...updates};
}

console.log(atualizarRepo(repos, RepoSemEstrelas))
