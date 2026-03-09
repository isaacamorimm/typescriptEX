import axios from 'axios';

interface GitHubUser {
    login: string;
    id: number;
    public_repos:number;
    bio: string | null;
}

async function buscarUsuarioGithub(username: string): Promise<GitHubUser> {
    try {
        const response = await axios.get<GitHubUser>(`https://api.github.com/users/${username}`);

        return response.data
    } catch (error) {
        throw new Error(`Erro ao buscar usuário: ${error}`);
    }

};

buscarUsuarioGithub("isaacamorim").then(user => {
    console.log(`Utilizador: ${user.login}, Repos Públicos: ${user.public_repos}, Bio: ${user.bio}, id: ${user.id}`)
}).catch(error => {
    console.error(error.message);
});