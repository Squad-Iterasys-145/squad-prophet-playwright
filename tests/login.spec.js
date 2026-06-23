const { test, chromium, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('login prophet via Google OAuth (manual 2FA)', async () => {

    const browser = await chromium.launch({
        headless: false,
        channel: 'chrome'
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    const login = new LoginPage(page);

    // 1. abre Prophet
    await login.acessar();

    // 2. Começar
    const btnComecar = page.locator('a', { hasText: 'Começar' });
    await btnComecar.click();

    console.log('➡️ Começar clicado');

    // 3. Continuar com Google
    const btnGoogle = page.locator('button', {
        hasText: 'Continuar com Google'
    });

    await btnGoogle.click();

    console.log('🔵 Google login iniciado');

    // 4. email
    const emailInput = page.locator('#identifierId');
    await emailInput.fill(process.env.EMAIL);
    await page.keyboard.press('Enter');

    console.log('📧 email enviado');

    // 5. senha
    const passwordInput = page.locator('input[type="password"]');
    await passwordInput.fill(process.env.PASSWORD);
    await page.keyboard.press('Enter');

    console.log('🔑 senha enviada');

    // 6. 🔥 ESPERA NATURAL (2FA + redirect automático)
    console.log('📲 aguardando login completo no Google...');

    await page.waitForURL(/prophet|dashboard|auth/, {
        timeout: 180000 // 3 minutos
    });

    // 7. valida que entrou no Prophet
    const textarea = page.getByPlaceholder(
        'Descreva com o que precisa de ajuda...'
    );

    await expect(textarea).toBeVisible({ timeout: 60000 });

    console.log('✅ login concluído');

    await browser.close();
});