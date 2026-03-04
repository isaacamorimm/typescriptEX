const nomes: string[] = [
    "Isaac",
    "Giovana",
    "André"
]

const idades: number[] = [
    17,
    16,
    18
]

const tupla: [string, number, string, number] = [
    "Isaac",
    17,
    "Giovana",
    16
]

function mediaIdades(idades: number[]): number {
    const total = idades.reduce((acc, idade) => acc + idade, 0);
    return  total / idades.length;
}

console.log(`A média das idades é: ${mediaIdades(idades)}, ${tupla[0]} tem ${tupla[1]} anos, ${tupla[2]} tem ${tupla[3]} anos.`);