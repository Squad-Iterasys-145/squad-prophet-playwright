class ReunioesPage {
    constructor(page){
        this.page = Page
        
        this.sincronizarcalendario = page.getByRole('button', { name: 'Sincronizar calendário' })
        this.novareuniao = page.getByRole('button', { name: 'Nova Reunião' })
        this.reuniaoagora = page.getByRole('button', { name: 'Reunião Agora' })
        this.tituloreuniao = page.getByPlaceholder('Título da Reunião')
        this.urlreuniao = page.getByPlaceholder('https://meet.google.com/xxx-xxxx-xxx')
        this.plataforma = page.getByRole('combobox')
        this.btncancelar = page.getByRole('button', { name: 'Cancelar' })
        this.btnenviarbot = page.getByRole('button', { name: 'Enviar bot agora'})
        this.agendarreuniao = page.getByRole('button', { name: 'Agendar Reunião' })
        this.agendardata = page.locator('input[type="datetime-local"]')
        this.gravaretranscrever = page.getByRole('switch')
        
    }
}

module.exports = ReunioesPage