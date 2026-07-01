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
`Crie um worker e uma automação por evento com as seguintes configurações:

Worker:
- Nome: Cadastro Automático de Leads
- Ferramentas: web_search e Outlook

Automação por evento:
- Trigger: novo email recebido no Outlook
- Filtro: assunto contendo "marketing" ou "publicidade"

Ao ser acionada, a automação deve:

1. Ler remetente, assunto e corpo do email
2. Extrair: nome, empresa, email e necessidade principal
3. Classificar o lead como: ALTO, MÉDIO ou BAIXO
4. Salvar o lead no CRM (action="save")
5. Criar cliente no Prophet (action="create")
6. Enviar notificação via WhatsApp com resumo do lead

Importante:
- Não criar arquivos
- Não executar ações fora das listadas
- Ser direto e objetivo

Ao final responda exatamente:
WORKER E AUTOMAÇÃO CRIADOS COM SUCESSO`
    );

    console.log('Prompt enviado');

    // Ajuste conforme o tempo necessário
    await chat.aguardarRespostaIA(90000);

    await chat.validarResposta();

    console.log('IA finalizou — fazendo logout');

    await chat.logout();

    console.log('Logout realizado');
});