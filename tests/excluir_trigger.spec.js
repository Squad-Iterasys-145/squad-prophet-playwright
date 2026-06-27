const { test, expect } = require('@playwright/test');
const { getProphetPage } = require('../helpers/cdp');
const ChatPage = require('../pages/ChatPage');
const SidebarPage = require('../pages/SidebarPage')
const AgentesPage = require('../pages/AgentesPage')

test('Excluir Trigger agendado', async () => {

    test.setTimeout(300000); // 5 minutos de margem total

    const page = await getProphetPage();

    await page.locator('a[href="/dashboard"]').click();

    const sidebarpage = new SidebarPage(page);

    await sidebarpage.clicarAgentes();

    const agentespage = new AgentesPage(page);

    await agentespage.clicarProphet();

    await agentespage.excluirAutomacao('Envio de Resumo - TESTE DE TRANSCRIÇÃO');

    //await agentespage.clicarBtnDeletarTrigger();





});