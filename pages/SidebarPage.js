class SidebarPage {
    constructor(page){
        this.page = page
        
        this.expandirsidebar = page.getByRole('button', { name: 'Expandir barra lateral' })
        this.tarefas = page.getByLabel('Tarefas')
        this.agentes = page.getByLabel('Agentes')
        this.outreach = page.getByLabel('Outreach')
        this.clientes = page.getByLabel('Clientes')
        this.reunioes = page.getByLabel('Reuniões')
    }

    async clicarReunioes() {
        await this.reunioes.click();
    }

    async expandirBarra() {
        await this.expandirsidebar.click();
    }
}


module.exports = SidebarPage