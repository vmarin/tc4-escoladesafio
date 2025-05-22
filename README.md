# Tech Challenge 4 - Pós Tech FIAP

# Manual do App - Escola Desafio

## Introdução

Este documento detalha a estrutura, configuração e uso do aplicativo desenvolvido pelo **Grupo 17** com React Native para a Escola Desafio.

### Participantes:

- Fernanda Vaz - RM359195
- Guilherme Dourado - RM358544
- Luis Machado - RM358956
- Vinícius Marin - RM359384
- Yuri Costa - RM358924

---

## 1. Configuração Inicial

### Base URL.

- **Backend em execução:**
  ```
  # URL GERADA PELO EXPO EX: http://192.168.0.0:3000
  # Manter porta 3000 que é onde o backend está rodando.
  ```

### Requisitos.

- Conexão HTTPS.

## Instalação

### Clone o repositório:

```bash
git clone *link*
```

### Instale as dependências:

### Dependências do backend

```bash
cd backend/
npm install
```

### Dependências do frontend

```bash
cd frontend/
npm install
```

### Inicialize o backend

```bash
cd backend/
npm run start:dev
```

### Inicialize o frontend

```bash
cd frontend/
npm start
```

A aplicação estará disponível em:

```bash
http://<seu-ip>:3000
```

## Login

As alterações de edição, exclusão e criação de postagens e usuários só podem ser efetuadas por um professor cadastrado.

### Dados para login:

```
Usuário: admin
Senha: admin
```

---

## 2. Arquitetura da Aplicação

### Estrutura de Pastas

```plaintext

 ├── assets/               - Arquivos estáticos (imagens, fonts, ícones, etc.)
 ├── constants/            - Constantes globais (cores, configurações fixas)
 ├── src/                  - Código-fonte principal da aplicação
 │   ├── app/              - Configuração de rotas e layouts principais
 │   │   ├── (app)/        - Rotas protegidas/autenticadas
 │   │   ├── (auth)/       - Fluxo de autenticação (login, registro, etc.)
 │   │   ├── (public)/     - Rotas públicas acessíveis sem autenticação
 │   │   └── _layout.tsx   - Layout raiz da aplicação
 │   │
 │   ├── components/       - Componentes reutilizáveis da UI
 │   ├── contexts/         - Contextos React para estado global
 │   ├── services/         - Lógica de negócio, chamadas API e integrações
 │   ├── types/            - Tipos TypeScript e interfaces
 │   └── utils/            - Utilitários e funções auxiliares

```

---

## Tecnologias Utilizadas

### Frontend Mobile

- **Framework**: Expo + React Native
- **Roteamento**: Expo Router
- **Estilização**: StyleSheet do React Native
- **Ícones**: @expo/vector-icons
- **Navegação**: @react-navigation/native
- **HTTP Client**: Axios
- **Manipulação de Datas**: date-fns

### Ferramentas

- **Linguagem**: TypeScript (v5.3)
- **Testes**: Jest (v29) + jest-expo (v52)

### Padrões Arquiteturais

- **Componentização**: Header, Modal e componentes reutilizáveis
- **Organização**: Pastas por função (components, services, contexts, etc.)
- **Estado**: Context API para gerenciamento global
- **Segurança**: expo-secure-store para dados sensíveis
- **Responsividade**: Layouts adaptáveis para mobile
