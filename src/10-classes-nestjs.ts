class LoggerService {
    log(message: string): void {
        console.log(`[data: ${new Date().toISOString()}] - ${message}`)
    }
}

class RepositorioController {
    constructor(private readonly logger: LoggerService) {}
    adicionar(nome: string): void {
        this.logger.log(`Repositório ${nome} adicionado`)
    }
}

const meuLogger = new LoggerService();
const meuController = new RepositorioController(meuLogger);

meuController.adicionar("MeuProjeto");