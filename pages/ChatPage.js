const { expect } = require('@playwright/test');

class ChatPage {
    constructor(page) {
        this.page = page;

        this.chatButton = page.locator('button', {
            hasText: 'Outlook CRM Automation'
        });

        // ✔ evita pegar chat errado
        this.textarea = page.locator('textarea[data-slot="textarea"]').first();
    }

    async abrirChat() {
        await this.chatButton.click();

        await this.page.waitForLoadState('networkidle');

        await this.textarea.waitFor({ state: 'visible' });

        // ✔ garante foco no chat correto
        await this.textarea.click();
    }

    async validarAberto() {
        await this.textarea.waitFor({ state: 'visible' });
    }

    async enviarPrompt(texto) {
        await this.textarea.click();
        await this.textarea.fill(texto);
        await this.page.keyboard.press('Enter');
    }

    async aguardarRespostaIA(ms = 60000) {
        console.log(`Aguardando ${ms / 1000}s para a IA finalizar...`);
        await this.page.waitForTimeout(ms);
        console.log('Tempo de espera concluído');
    }

    async validarResposta() {
        await this.textarea.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.textarea).toBeEnabled({ timeout: 10000 });
        console.log('Validação OK — chat disponível após resposta da IA');
    }

    async logout() {

    // abre menu do usuário (clicável real)
    const userMenu = this.page.locator('button:has-text("Felipe Augusto Sizoto")');

    await userMenu.waitFor({ state: 'visible', timeout: 10000 });
    await userMenu.click();

    // clicar em sair
    const sair = this.page.locator('div[role="menuitem"]:has-text("Sair")');

    await sair.waitFor({ state: 'visible', timeout: 10000 });
    await sair.click();

    console.log('Logout realizado com sucesso');
}
}

module.exports = ChatPage;