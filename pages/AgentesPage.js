class AgentesPage {
    constructor(page) {
        this.page = page;

        this.meus = page.getByRole('button', { name: 'Meus' });
        this.automacoes = page.getByRole('button', { name: 'Automações' });
        this.adicionarworkers = page.getByRole('button', { name: 'Adicionar Workers' });
        this.gerenciarautomacoes = page.getByRole('button', { name: 'Gerenciar Automações' });
        this.createnew = page.getByRole('button', { name: 'Create new' });
    }

    async abrirMeus() {
        await this.meus.click();
    }

    async abrirAutomacoes() {
        await this.automacoes.click();
    }

    async adicionarWorker() {
        await this.adicionarworkers.click();
    }

    async gerenciarAutomacao() {
        await this.gerenciarautomacoes.click();
    }

    async criarNovo() {
        await this.createnew.click();
    }
}

module.exports = AgentesPage;