# Setup do Ambiente e Estrutura do Projeto

## O Que Foi Feito?

Nesse primeiro momento, preparei todo o ambiente para o desenvolvimento do projeto To-Do.

1. **Criação do Projeto:** Iniciei um novo projeto React Native utilizando `create-expo-app` com o template "Blank (TypeScript)".

2. **Instalação de Dependências:** Adicionei a biblioteca `@react-native-async-storage/async-storage`, que será usada para persistir os dados localmente no dispositivo.

3. **Estrutura de Pastas:** Defini uma estrutura de diretórios baseada nos princípios da Clean Architecture, separando claramente as responsabilidades da aplicação.

## Como Foi Feito?

A estrutura de pastas principal foi criada dentro de `src/`:

- `src/core`: Onde reside toda a lógica de negócio e as regras da aplicação.
  - `domain`: Contém o código mais puro, sem dependências de frameworks ou tecnologias externas.
  - `infra`: Contém a implementação técnica dos detalhes (acesso a dados, APIs, etc.).
- `src/presentation`: Responsável pela camada de interface com o usuário (UI).
  - `screens`, `components`, `hooks`.

O ponto de entrada da aplicação, `App.tsx`, foi simplificado para apenas renderizar nossa tela principal, `HomeScreen`.

## Por Que Foi Feito?

A escolha de uma arquitetura limpa desde o início, mesmo para um projeto simples, traz benefícios a longo prazo:

- **Testabilidade:** Isolar a lógica de negócio em `core/domain` torna extremamente fácil escrever testes unitários para as regras mais importantes da aplicação.

- **Manutenibilidade:** A separação clara de responsabilidades impede que o código se torne um "macarrão". É fácil encontrar onde cada coisa está e como ela funciona.

- **Flexibilidade:** A camada `domain` não sabe se os dados vêm do AsyncStorage, de uma API REST ou de um banco de dados local. Se necessário trocar a tecnologia de armazenamento no futuro, apenas a camada de `infra` será modificada, sem impactar o resto do app.
