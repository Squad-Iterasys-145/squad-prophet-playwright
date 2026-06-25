class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async acessar() {
        await this.page.goto('https://www.prophet.build/');
    }
}

module.exports = LoginPage;