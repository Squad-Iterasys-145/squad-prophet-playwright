const { test } = require('@playwright/test');
const { getProphetPage } = require('../helpers/cdp');
const ChatPage = require('../pages/ChatPage');

test('Chat - campanha marketing', async () => {

    test.setTimeout(300000); // 5 minutos de margem total

    const page = await getProphetPage();

    await page.locator('a[href="/dashboard"]').click();

    const chat = new ChatPage(page);

    await chat.abrirChat();

    await chat.enviarPrompt(
        'Crie uma campanha de marketing curta para uma loja de suplementos esportivos ' +
        'e envie o resultado por email no Outlook.'
    );

    console.log('Prompt enviado');

    // Ajuste o tempo conforme necessário:
    // 30s  → await chat.aguardarRespostaIA(30000)
    // 1min → await chat.aguardarRespostaIA(60000)
    // 2min → await chat.aguardarRespostaIA(120000)
    // 3min → await chat.aguardarRespostaIA(180000)
    // 5min → await chat.aguardarRespostaIA(300000)
    await chat.aguardarRespostaIA(60000);

    await chat.validarResposta();

    console.log('IA finalizou — fazendo logout');

    await chat.logout();
});