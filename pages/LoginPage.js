class LoginPage {
    constructor(page) {
        this.page = page;

        this.btnComecar = page.getByRole('link', { name: 'Começar' });

        this.emailInput = page.locator('#email');

        this.checkboxGdpr = page.locator('#gdprConsent');

        this.btnEnviarLink = page.getByRole('button', {
            name: /enviar magic link/i
        });
    }

    async acessar() {
        await this.page.goto(process.env.BASE_URL, {
            waitUntil: 'domcontentloaded'
        });
    }

    async clicarComecar() {
        await this.btnComecar.waitFor({ state: 'visible' });
        await this.btnComecar.click();
    }

    async preencherEmail(email) {
        await this.emailInput.waitFor({ state: 'visible' });
        await this.emailInput.fill(email);
    }

    async aceitarPrivacidade() {
        await this.checkboxGdpr.waitFor({ state: 'visible' });
        await this.checkboxGdpr.check();
    }

    async enviarMagicLink() {
        await this.btnEnviarLink.waitFor({ state: 'visible' });
        await this.btnEnviarLink.click();
    }
}

module.exports = LoginPage;