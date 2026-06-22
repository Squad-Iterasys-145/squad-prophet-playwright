class LoginPage {
    constructor(page) {
        this.page = page;

        this.elementos = {
            btnComecar: page.getByRole('link', {
                name: 'Começar',
                exact: true
            }),

            btnGoogle: page.getByRole('button', {
                name: 'Continuar com Google'
            })
        };
    }

    async acessar() {
        await this.page.goto('https://prophet.build/');
    }

    async clicarComecar() {
        await this.elementos.btnComecar.click();
    }

    async clicarGoogle() {
        await this.elementos.btnGoogle.click();
    }
}

module.exports = LoginPage;