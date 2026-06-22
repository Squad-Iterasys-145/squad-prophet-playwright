class SidebarPage {
    constructor(page){
        this.page = Page
        
        this.expandirsidebar = page.getByRole('button', { name: 'Expandir barra lateral' })
        this.tarefas = page.getByLabel('Tarefas')
        this.agentes = page.getByLabel('Agentes')
        this.outreach = page.getByLabel('Outreach')
        this.clientes = page.getByLabel('Clientes')
        this.reunioes = page.getByLabel('Reuniões')
    }
}


module.exports = SidebarPage