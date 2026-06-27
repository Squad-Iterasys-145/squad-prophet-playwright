const { test, expect } = require('@playwright/test');
const { getProphetPage } = require('../helpers/cdp');
const ChatPage = require('../pages/ChatPage');
const SidebarPage = require('../pages/SidebarPage')

test('Enviar o resumo de uma reunião via e-mail', async () => {

    test.setTimeout(300000); // 5 minutos de margem total

    const page = await getProphetPage();

    await page.locator('a[href="/dashboard"]').click();

    const chat = new ChatPage(page);

    await chat.digitarTexto(
        'Com base na reunião "TESTE DE TRANSCRIÇÃO", analise a transcrição e estruture um e-mail contendo um titulo para a reunião, itens de ação, resumo explicativo do que foi tratado e quem são os responsáveis com datas de entrega propostas. Necessito que seja enviado para o meu próprio e-mail cadastrado aqui na plataforma ainda hoje as 16h10'
    );

    await chat.enviarMensagem();  


});