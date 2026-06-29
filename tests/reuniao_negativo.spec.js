const { test, expect } = require('@playwright/test');
const { getProphetPage } = require('../helpers/cdp');
const SidebarPage = require('../pages/SidebarPage');
const ReunioesPage = require('../pages/ReunioesPage');

test('Enviar bot via Reunião Agora', async () => {

    test.setTimeout(300000); // 5 minutos de margem total

    const page = await getProphetPage();

    await page.locator('a[href="/dashboard"]').click();

    const sidebarpage = new SidebarPage(page);

    await sidebarpage.clicarReunioes();

    const reunioespage = new ReunioesPage(page);

    await reunioespage.validarPaginaReunioes();

    await reunioespage.clicarNovaReuniao();

    await reunioespage.clicarReuniaoAgora();

    await reunioespage.preencherTitulo('Reunião de Teste');

    await reunioespage.preencherUrl('https://linkfake');

    await reunioespage.clicarEnviarBot();

    await expect(page.getByText(/invalid|falhou|400/i)).toBeVisible();
    
    await reunioespage.clicarCancelar();


});