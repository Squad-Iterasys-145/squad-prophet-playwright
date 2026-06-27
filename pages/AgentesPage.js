class AgentesPage {
    constructor(page) {
        this.page = page;

        this.meus = page.getByRole('button', { name: 'Meus' });
        this.automacoes = page.getByRole('button', { name: 'Automações' });
        this.adicionarWorkers = page.getByRole('button', { name: 'Adicionar Workers' });
        this.gerenciarAutomacoes = page.getByRole('button', { name: 'Gerenciar Automações' });
        this.createNew = page.getByRole('button', { name: 'Create new' });
        this.prophetAgent = this.prophet = page.getByRole('option').filter({ hasText: 'Prophet' });
        this.btnExcluir = page.locator('button').filter({ has: page.locator('svg.lucide-trash2')});
        this.btnDeleteTrigger = page.getByRole('button', {name: 'Delete Trigger'});
        
    }

    async clicarProphet() {
        await this.prophetAgent.click();
    }

    async abrirMeus() {
        await this.meus.click();
    }

    async abrirAutomacoes() {
        await this.automacoes.click();
    }

    async adicionarWorker() {
        await this.adicionarWorkers.click();
    }

    async gerenciarAutomacao() {
        await this.gerenciarAutomacoes.click();
    }

    async criarNovo() {
        await this.createNew.click();
    }

    async excluirAutomacao(nomeAutomacao) {
    const card = this.page.locator('div').filter({
        has: this.page.getByRole('heading', { name: new RegExp(nomeAutomacao) })
    });
        await card.locator('button:has(svg.lucide-trash2)').click();
    }

    async clicarBtnDeletarTrigger(){
        await this.btnDeleteTrigger.click();
    }
}

module.exports = AgentesPage;