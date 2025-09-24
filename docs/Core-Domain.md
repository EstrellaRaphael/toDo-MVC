# Camada de Domínio

## O Que Foi Feito?

Defini as regras de negócio e as estruturas de dados fundamentais do projeto, de forma totalmente independente de qualquer tecnologia externa.

1. **Entidade `Todo`:** Criei a interface `Todo` (`/entities/Todo.ts`), que define a estrutura de uma tarefa.

2. **Interface do Repositório:** Defini o contrato `TodoRepository` (`/domain/repositories/TodoRepository.ts`). Esta interface dita quais métodos uma camada de dados *deve* implementar para ser compatível com nosso domínio (ex: `getAll`, `add`, `update`, `delete`).

3. **Casos de Uso (Use Cases):** Criei classes para cada ação que o usuário pode realizar(CRUD), contendo a lógica de negócio pura.
    - `GetTodos`: Busca e ordena a lista de tarefas.
    - `AddTodo`: Valida e cria uma nova tarefa.
    - `UpdateTodo`: Orquestra a atualização de uma tarefa.
    - `DeleteTodo`: Orquestra a remoção de uma tarefa.

## Como Foi Feito?

Utilizei interfaces e classes TypeScript puras, sem nenhuma importação do React Native, Expo ou qualquer outra biblioteca de UI ou de acesso a dados.

Os Casos de Uso recebem a `TodoRepository` por meio de **injeção de dependência** em seus construtores. Isso significa que eles não criam a instância do repositório, apenas trabalham com a interface (o contrato) que lhes é fornecida.

## Por Que Foi Feito?

Para seguir os princípios da Clean Architecture.

- **Princípio da Inversão de Dependência:** O `domain` (camada de alto nível) não depende da `infra` (camada de baixo nível). Ambos dependem de abstrações (a interface `TodoRepository`). Isso "inverte" o fluxo tradicional de dependência e desacopla as camadas.

- **Pureza:** O `domain` contém apenas a lógica que define o que o projeto *é*. Ele não se preocupa com *como* as coisas são salvas ou exibidas.

- **Reutilização:** Esta lógica de negócio poderia ser facilmente transportada para uma aplicação web (React) ou backend (Node.js) com o mínimo de alterações.
