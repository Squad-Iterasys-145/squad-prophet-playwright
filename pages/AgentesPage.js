class AgentesPage {
    constructor(page){
        this.page = Page
        
        this.meus = page.getByRole('button', { name: 'Meus' })
        this.automacoes = page.getByRole('button', { name: 'Automações' })
        this.adicionarworkers = page.getByRole('button', { name: 'Adicionar Workers' })
        this.gerenciarautomacoes = page.getByRole('button', { name: 'Gerenciar Automações' })

        this.createnew = page.getByRole('button', { name: 'Create new'})
    }
}


module.exports = AgentesPage