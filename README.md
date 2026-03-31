# XMS - X-Men Streaming

Projeto acadêmico fictício de uma plataforma de streaming inspirada no universo dos X-Men, desenvolvido com **HTML**, **CSS** e **JavaScript**.

A proposta do projeto é simular uma plataforma de streaming com:
- área pública
- autenticação de usuários
- diferenciação entre planos
- controle de acesso a conteúdos
- páginas individuais para cada título
- catálogo visual com identidade própria

---

## Objetivo do projeto

Desenvolver um site temático com aparência de plataforma de streaming, aplicando conceitos de:

- estruturação semântica em HTML
- organização visual e responsividade com CSS
- manipulação de dados com JavaScript
- autenticação simulada com `localStorage`
- controle de sessão
- diferenciação de acesso entre usuários Basic e Premium

---

## Tema

A plataforma fictícia se chama **XMS - X-Men Streaming** e apresenta filmes, séries e conteúdos especiais inspirados no universo mutante, com identidade visual cinematográfica e interface semelhante a serviços reais de streaming.

---

## Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **Google Fonts**
- **localStorage** para persistência de dados no navegador

---

## Funcionalidades implementadas

### Área pública
- Página inicial com banner principal
- Catálogo de conteúdos em destaque
- Exibição de conteúdos Basic e Premium
- Navegação entre páginas

### Autenticação
- Cadastro de novo usuário
- Login
- Logout
- Persistência de sessão com `localStorage`

### Controle de usuários
- Limite de até 2 usuários cadastrados no navegador
- Validação de e-mail
- Validação de senha
- Impedimento de e-mail duplicado
- Exibição dos dados do usuário logado

### Planos de acesso
- **Basic**: acesso aos conteúdos básicos
- **Premium**: acesso a todos os conteúdos

### Controle de acesso aos conteúdos
- Usuário **não logado**: não acessa páginas de detalhes
- Usuário **Basic**: acessa apenas conteúdos Basic
- Usuário **Premium**: acessa conteúdos Basic e Premium

### Catálogo
- Página individual para cada título
- Informações como:
  - sinopse
  - elenco
  - avaliação
  - categoria
  - disponibilidade
  - trailer em vídeo

---

## Estrutura do projeto

```bash
xms-streaming/
│
├── index.html
├── login.html
├── register.html
├── subscriber.html
│
├── first-mutation.html
├── storm-rising-thunder.html
├── school-of-power.html
├── mutant-origins.html
├── wolverine-classified.html
├── magneto-rebellion.html
├── phoenix-protocol.html
├── cerebro-secret-files.html
│
├── css/
│   ├── global.css
│   ├── media-assets.css
│   ├── home.css
│   ├── auth.css
│   ├── subscriber.css
│   └── details.css
│
├── js/
│   ├── data.js
│   ├── auth.js
│   ├── session.js
│   └── details-access.js
│
├── assets/
│   ├── images/
│   └── videos/
│
└── README.md