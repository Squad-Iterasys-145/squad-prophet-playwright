# Prophet — Test Automation

Projeto de automação de testes da plataforma **Prophet**, focado na validação de rotinas de IA, gerenciamento de reuniões, automação de agentes e comunicação integrada através de navegadores com sessões previamente autenticadas. Desenvolvido utilizando Playwright no modelo de *Page Object Model* (POM).

---

## 🛠 Stack

| Ferramenta | Versão |
|---|---|
| Node.js | 20+ |
| Playwright | `^1.61.0` |
| dotenv | `^17.4.2` |

---

## 📁 Estrutura do Projeto


```

prophet-automation/
├── helpers/
│   └── cdp.js                   # Gerenciador de conexão com o navegador (Chrome DevTools Protocol)
├── pages/
│   ├── AgentesPage.js           # Mapeamento do gerenciamento de Workers, automações e triggers
│   ├── ChatPage.js              # Mapeamento da interface de chat de IA e automação do CRM Outlook
│   ├── LoginPage.js             # Mapeamento do portal de login institucional
│   ├── ReunioesPage.js          # Mapeamento do módulo de reuniões agendadas ou instantâneas
│   └── SidebarPage.js           # Elementos globais de navegação da barra lateral
└── tests/
    ├── agents.spec.js           # Testes de criação de automações e inicialização de Workers
    ├── chat.spec.js             # Testes de prompts de IA e validação de fluxos de marketing
    ├── chatWorker.spec.js       # Testes de automação para Monitorar notícias de Marketing & Publicidade
    ├── chatWorkerEvent.spec.js  # Testes de automação para cadastro automático de leads (Outlook + CRM)
    ├── enviar_resumo.spec.js    # Testes de requisição de análise e envio de sumários por e-mail
    ├── excluir_trigger.spec.js  # Testes de deleção de agendamentos dentro de agentes
    ├── login.spec.js            # Validação de acesso à plataforma via sessão CDP ativa
    └── reuniao_negativo.spec.js # Validação de comportamento de exceção e falhas em bots

```

---

## ⚙️ Configuração e Pré-requisitos

### 1. Clonar o repositório

```bash
git clone [https://github.com/seu-usuario/prophet-automation](https://github.com/seu-usuario/prophet-automation)
cd prophet-automation

```

### 2. Instalar dependências

```bash
npm install

```

### 3. Sessão do Navegador (Requisito Principal do Projeto)

Esta automação se conecta a uma instância existente do Google Chrome com uma sessão já autenticada na plataforma para contornar barreiras de login tradicionais e capturar o estado do perfil.

Antes de rodar os testes, inicie o seu navegador via terminal habilitando a porta de depuração `9222`:

**No Windows:**

```cmd
chrome.exe --remote-debugging-port=9222 --user-data-dir="C:\\selenium\\AutomationProfile"

```

**No macOS:**

```bash
/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --remote-debugging-port=9222 --user-data-dir="/tmp/ctx"

```

---

## ▶️ Como Executar os Testes

### Rodar todos os testes (Modo Headless/Padrão conforme config)

```bash
npx playwright test

```

### Rodar em modo interativo (UI Mode do Playwright)

```bash
npx playwright test --ui

```

### Rodar um arquivo de teste específico

```bash
npx playwright test tests/chat.spec.js

```

---

## 🎯 Executar por Módulo

Como o projeto usa scripts puros do Playwright em vez de Cucumber, a execução segmentada pode ser feita apontando diretamente para as especificações correspondentes:

| Módulo | Descrição | Comando de Execução |
| --- | --- | --- |
| **🔐 Autenticação** | Login via sessão CDP ativa | `npx playwright test tests/login.spec.js` |
| **📹 Reuniões** | Validação de fluxos negativos de bots | `npx playwright test tests/reuniao_negativo.spec.js` |
| **🤖 Agentes / Workers** | Criação de novas automações e exclusão | `npx playwright test tests/agents.spec.js tests/excluir_trigger.spec.js` |
| **💬 Chat de IA** | Campanhas de marketing e envio de resumos | `npx playwright test tests/chat.spec.js tests/enviar_resumo.spec.js` |

---

## 👥 Time de QA

| Membro | Responsabilidade |
| --- | --- |
| **Felipe Augusto / Diego** | Automação de Core Business, Mapeamento de POM e Integrações de IA |

---

## 🔀 Fluxo Git

```
feature/branch → PR para develop → revisão (Code Review) → merge
develop → PR para main → deploy / entrega de sprint

```

### Convenção de Commits

| Prefixo | Quando usar |
| --- | --- |
| `feat:` | Criação de uma nova Page Object, helper ou fluxo de automação |
| `fix:` | Correção de seletores quebrados ou ajustes em tempos de timeout |
| `test:` | Escrita de novos cenários de testes ou arquivos `.spec.js` |
| `docs:` | Atualizações no arquivo de README ou documentações técnicas |
| `chore:` | Atualização de pacotes do `package.json` ou ajustes de infraestrutura |

---

## 🏢 Projeto

* **Empresa Cliente:** Prophet Build
* **Plataforma:** Prophet Web Automation Framework
* **Tecnologia Base:** Playwright Automation Server (CDP Mode)