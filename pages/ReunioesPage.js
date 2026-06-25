const { expect } = require('@playwright/test');

class ReunioesPage {
    constructor(page){
        this.page = page;
        
        this.sincronizarcalendario = page.getByRole('button', { name: 'Sincronizar calendário' });
        this.novareuniao = page.getByRole('button', { name: 'Nova Reunião' });
        this.reuniaoagora = page.getByRole('button', { name: 'Reunião Agora' });
        this.tituloreuniao = page.getByPlaceholder('Título da Reunião');
        this.urlreuniao = page.getByPlaceholder('https://meet.google.com/xxx-xxxx-xxx');
        this.plataforma = page.getByRole('combobox');
        this.btncancelar = page.getByRole('button', { name: 'Cancelar' });
        this.btnenviarbot = page.getByRole('button', { name: 'Enviar bot agora'});
        this.agendarreuniao = page.getByRole('button', { name: 'Agendar Reunião' });
        this.agendardata = page.locator('input[type="datetime-local"]');
        this.gravaretranscrever = page.getByRole('switch');
        
    }

    async validarPaginaReunioes(){
        await expect(this.page).toHaveURL(/.*meetings/);
    }

    async clicarNovaReuniao() {
        await this.novareuniao.click();
    }

    async clicarReuniaoAgora() {
        await this.reuniaoagora.click();
    }

    // async clicarTituloReuniao() {
    //     await this.tituloreuniao.click();
    // }
    
    async preencherTitulo(titulo) {
        await this.tituloreuniao.fill(titulo);
    }

    // async clicarUrlReuniao() {
    //     await this.urlreuniao.click();
    // }

        async preencherUrl(url) {
        await this.urlreuniao.fill(url);
    }

    async clicarEnviarBot() {
        await this.btnenviarbot.click();
    }

    async clicarCancelar() {
        await this.btncancelar.click();
    }


}

module.exports = ReunioesPage