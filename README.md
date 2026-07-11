# 🏆 Championship Manager

Projeto pessoal desenvolvido para **consolidar meu aprendizado em TypeScript**, construindo uma aplicação full stack completa: API com Node.js + TypeScript, front-end em React e testes de rotas via Postman.

O sistema gerencia campeonatos e eventos de robótica (estilo Rescue Line), cobrindo desde o cadastro de equipes até a apuração de rankings.

## 🎯 Objetivo do projeto
- Tipagem forte em entidades, DTOs, requests/responses e regras de negócio
- Arquitetura em camadas no back-end (controller / service / repository)
- Modelagem de banco de dados relacional (MySQL) com relacionamentos complexos (N:N, FKs polimórficas, constraints de integridade)
- Consumo de API RESTful em um front-end React com TypeScript
- Testes e validação de rotas via Postman antes da integração com o front

## 📌 Sobre o sistema

O sistema organiza campeonatos em múltiplos níveis — **campeonato → evento → categoria → equipe** — e cobre todo o ciclo de um torneio:

- Cadastro de campeonatos e eventos, com controle de status 
- Organização por categorias dentro de cada evento
- Inscrição de equipes, vinculadas a instituições, responsáveis e participantes
- Gestão de responsáveis legais e participantes
- Cadastro de juízes, vinculados às categorias que avaliam
- Avaliações por equipe/evento/juiz, com regra de unicidade 
- Cálculo e persistência de rankings por categoria/evento
- Agendamento de apresentações (data, horário, local)
- Upload de documentos (por equipe, evento ou campeonato)
- Emissão de credenciais (badges) para participantes, voluntários, administradores e responsáveis
- Gestão de voluntários e administradores

## 🛠️ Tecnologias

- **Back-end:** Node.js + TypeScript + Express
- **Front-end:** React + TypeScript
- **Banco de dados:** MySQL
- **Testes de API:** Postman
- **Arquitetura:** camadas (controller / service / repository)

## 📂 Estrutura do projeto

```
/backend   → API em Node.js + TypeScript
/frontend  → Aplicação React + TypeScript
```

> Em construção — este README será atualizado conforme o projeto avança.

## ▶️ Como rodar o projeto

### Back-end

```bash
cd backend
npm install
npm run dev
```

### Front-end

```bash
cd frontend
npm install
npm run dev
```

### Testando a API

As rotas da API podem ser testadas via Postman. A collection do projeto está disponível em /postman. 

## 🚧 Status

Em desenvolvimento — projeto pessoal de estudo, com foco em praticar TypeScript de ponta a ponta (API + front-end).
