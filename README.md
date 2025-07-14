# 🌦️ Previsão do Tempo – Projeto de Engenharia de Software

Este é um projeto desenvolvido na disciplina **Engenharia de Software – IFCE – 2025.1**, com foco na aplicação prática dos conceitos de **DevOps**, **Integração Contínua (CI)** e **Entrega Contínua (CD)**. A aplicação fornece a previsão do tempo atual para uma cidade informada pelo usuário, consumindo dados da API pública **OpenWeatherMap**.

---

## 📌 Objetivo

O projeto tem como principal objetivo **demonstrar na prática um pipeline CI/CD completo**, contemplando:

- Desenvolvimento de uma aplicação funcional (frontend + lógica)
- Conteinerização com Docker
- Automatização de testes e deploy com **GitHub Actions**
- Documentação técnica em conformidade com padrões acadêmicos
- Distribuição colaborativa de tarefas entre os membros

---

## 🚀 Funcionalidade principal

A aplicação permite consultar a previsão do tempo de uma cidade via rota:

```
/weather?city=nome_da_cidade
```

### Dados retornados:

- Temperatura atual
- Sensação térmica
- Umidade relativa do ar
- Descrição do clima
- Ícone correspondente ao clima atual

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React + CSS Modules
- **API pública:** OpenWeatherMap
- **Gerenciamento de estado:** Hooks (`useState`, `useEffect`)
- **Testes:** ----
- **CI/CD:** GitHub Actions
- **Conteinerização:** Docker + Nginx
- **Deploy:** [Vercel](https://engenharia-de-software-beta.vercel.app/)

---

## 👥 Equipe e Distribuição de Tarefas

| Integrante | Responsabilidades |
|------------|--------------------|
| **Kelly** | Desenvolvimento da interface (UI), responsividade e integração com o estado |
| **Raynara** | Lógica de consumo da API, gerenciamento de estado, testes de unidade e integração |
| **Martenier** | CI/CD com GitHub Actions, criação do Dockerfile, configuração de deploy automático |
| **Alana** | Documentação técnica no padrão ABNT, detalhamento do funcionamento da aplicação |
| **Soraia** | Relatório teórico sobre DevOps, CI/CD, justificativa das ferramentas, preparação da apresentação final |

---

## 📂 Estrutura de Diretórios

```
clima-app/
├── public/
├── src/
│   ├── components/
│   │   ├── CitySearch.jsx
│   │   ├── WeatherCard.jsx
│   │   └── ErrorMessage.jsx
│   ├── services/
│   │   └── weatherService.js
│   ├── mocks/
│   │   └── mockData.json
│   ├── App.jsx
│   └── index.js
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── cd.yml
├── Dockerfile
├── .env
└── README.md
```

---

## 🧪 Testes Automatizados

Os testes cobrem os principais fluxos da aplicação:

- Renderização correta de componentes
- Comportamento com dados válidos e inválidos
- Mock da API e resposta em caso de erro

Para rodar os testes:

```bash
npm test
```

---

## 🐳 Docker

Para executar via Docker:

```bash
docker build -t engenhariadesoftware-1 .
docker run -p 3000:80 engenhariadesoftware-1
```   
---

## 🧬 CI/CD

O projeto utiliza **GitHub Actions** para automação de:

- `CI`: Lint, Testes, Build
- `CD`: Build da imagem Docker, push para container registry e deploy automático

---

## 🌐 Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/raynaraglit23/EngenhariaDeSoftware.git
   cd 3.
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie a aplicação:
   ```bash
   npm start
   ```

---

## 📚 Documentação Técnica

- [ ] Guia de instalação local
- [ ] Guia de uso via Docker
- [ ] Explicação do pipeline CI/CD
- [ ] Esquema de fallback com mock
- [ ] Instruções de rollback e monitoramento (logs)

---

## 🎥 Apresentação

📽️ **Link para o vídeo de demonstração:** [Em breve]

📊 **Slides de apresentação final:** [Em breve]
