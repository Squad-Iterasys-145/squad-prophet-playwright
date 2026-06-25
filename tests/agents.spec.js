const { test } = require('@playwright/test');
const { getProphetPage } = require('../helpers/cdp');
const AgentesPage = require('../pages/AgentesPage');

test('Agents - criar automação', async () => {

    const page = await getProphetPage();

    await page.locator('a[href="/dashboard"]').click();

    const agents = new AgentesPage(page);

    await agents.abrirAutomacoes();

    await agents.criarNovo();

    console.log('Worker iniciado');
});