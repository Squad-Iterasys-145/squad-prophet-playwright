const { test, expect } = require('@playwright/test');
const { getProphetPage } = require('../helpers/cdp');
const LoginPage = require('../pages/LoginPage');

test('Acessar Prophet via CDP', async () => {

    const page = await getProphetPage();

    const login = new LoginPage(page);

    await login.acessar();

    console.log('Prophet aberto com sessão autenticada');

    await page.locator('a[href="/dashboard"]').click();

    console.log('Painel clicado');

});