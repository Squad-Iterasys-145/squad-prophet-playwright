const { expect } = require('@playwright/test');

class ReunioesPage {
    constructor(page){
        this.page = page;
        
        this.sincronizarCalendario = page.getByRole('button', { name: 'Sincronizar calendário' });
        this.novaReuniao = page.getByRole('button', { name: 'Nova Reunião' });
        this.reuniaoAgora = page.getByRole('button', { name: 'Reunião Agora' });
        this.tituloReuniao = page.getByPlaceholder('Título da Reunião');
        this.urlReuniao = page.getByPlaceholder('https://meet.google.com/xxx-xxxx-xxx');
        this.plataforma = page.getByRole('combobox');
        this.btnCancelar = page.getByRole('button', { name: 'Cancelar' });
        this.btnEnviarBot = page.getByRole('button', { name: 'Enviar bot agora'});
        this.agendarReuniao = page.getByRole('button', { name: 'Agendar Reunião' });
        this.agendarData = page.locator('input[type="datetime-local"]');
        this.gravarTranscrever = page.getByRole('switch');
        
    }

    async validarPaginaReunioes(){
        await expect(this.page).toHaveURL(/.*meetings/);
    }

    async clicarNovaReuniao() {
        await this.novaReuniao.click();
    }

    async clicarReuniaoAgora() {
        await this.reuniaoAgora.click();
    }

    // async clicarTituloReuniao() {
    //     await this.tituloreuniao.click();
    // }
    
    async preencherTitulo(titulo) {
        await this.tituloReuniao.fill(titulo);
    }

    // async clicarUrlReuniao() {
    //     await this.urlreuniao.click();
    // }

        async preencherUrl(url) {
        await this.urlReuniao.fill(url);
    }

    async clicarEnviarBot() {
        await this.btnEnviarBot.click();
    }

    async clicarCancelar() {
        await this.btnCancelar.click();
    }


}

module.exports = ReunioesPage