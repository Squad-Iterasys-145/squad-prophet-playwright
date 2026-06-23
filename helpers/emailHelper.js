process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const imaps = require('imap-simple');
const { simpleParser } = require('mailparser');

async function getMagicLink(email, password) {

    const config = {
        imap: {
            user: email,
            password: password,
            host: 'imap.gmail.com',
            port: 993,
            tls: true,
            authTimeout: 15000
        }
    };

    const connection = await imaps.connect(config);
    await connection.openBox('INBOX');

    console.log('📬 Aguardando email do Prophet...');

    let magicLink = null;

    for (let i = 0; i < 10; i++) {

        const messages = await connection.search(['ALL'], {
            bodies: [''],
            markSeen: false
        });

        const latest = messages[messages.length - 1];

        if (!latest) {
            await new Promise(r => setTimeout(r, 3000));
            continue;
        }

        const all = latest.parts.find(p => p.which === '');
        const parsed = await simpleParser(all.body);

        const subject = parsed.subject || '';
        const body = parsed.html || parsed.text || '';

        // filtra Prophet
        if (!subject.toLowerCase().includes('prophet') &&
            !body.toLowerCase().includes('prophet')) {
            console.log('⏭ ignorando email não Prophet');
            continue;
        }

        console.log('email Prophet encontrado');

        // extrai link do botão
        let match =
            body.match(/href="(https:\/\/prophet\.build[^"]+)"/) ||
            body.match(/https:\/\/prophet\.build\/auth\/confirm[^\s"'<>]+/);

        if (match) {
            magicLink = match[1] || match[0];
            console.log('magic link capturado');
            break;
        }

        console.log('tentando novamente...');
        await new Promise(r => setTimeout(r, 3000));
    }

    await connection.end();

    if (!magicLink) {
        throw new Error('Magic link não encontrado');
    }

    return magicLink;
}

module.exports = { getMagicLink };