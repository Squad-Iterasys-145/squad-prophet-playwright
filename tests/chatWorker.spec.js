const { test } = require('@playwright/test');
const { getProphetPage } = require('../helpers/cdp');
const ChatPage = require('../pages/ChatPage');

test('Chat - criar worker agendado', async () => {

    test.setTimeout(300000); // 5 minutos

    const page = await getProphetPage();

    await page.locator('a[href="/dashboard"]').click();

    const chat = new ChatPage(page);

    await chat.abrirChat();

    await chat.enviarPrompt(
`Crie um worker e uma automação agendada que execute a cada 1 hora com as seguintes configurações:

Nome: Monitor de Marketing & Publicidade

A cada execução o agente deve:

• Utilizar web_search para buscar as 3 principais notícias ou tendências sobre marketing digital e publicidade das últimas horas.
• Utilizar no máximo 2 buscas por execução para economizar créditos.
• Gerar um resumo executivo contendo no máximo 5 tópicos.
• Enviar esse resumo por email utilizando Outlook para felipesizoto@outlook.com.
• Assunto do email:
    Resumo de Marketing - [hora atual]
• O corpo do email deve estar em HTML simples.
• Não criar arquivos.
• Não salvar informações no CRM.

Ao concluir a criação da automação, responda apenas com: "Automação criada com sucesso".`
    );

    console.log('Prompt enviado');

    // Ajuste conforme o tempo necessário
    await chat.aguardarRespostaIA(75000);

    await chat.validarResposta();

    console.log('IA finalizou — fazendo logout');

    await chat.logout();

    console.log('Logout realizado');
});