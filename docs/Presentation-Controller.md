# Aula 3: O Controller (Presentation) - O Cérebro da UI

## O Que Foi Feito?

Criei um "Controller" na forma de um Custom Hook do React chamado `useTodosController`. Este hook é responsável por toda a lógica de estado e interação do usuário para a tela de To-Do.

1. **Instanciação das Camadas:** Dentro do hook, instanciei o repositório (`AsyncStorageTodoRepository`) e os casos de uso (`GetTodos`, `AddTodo`, `DeleteTodo` e `UpdateTodo`.), conectando efetivamente a camada de `infra` com a de `domain`.

2. **Gerenciamento de Estado:** Utilizei os hooks `useState` e `useEffect` para gerenciar o estado da UI, incluindo a lista de tarefas, o status de carregamento e mensagens de erro.

3. **Exposição de Ações:** Criei e exportei as funções (`addTodo`, `toggleTodo`, `deleteTodo`) que serão chamadas pelos componentes visuais (a View) em resposta às interações do usuário.

## Como Foi Feito?

- O hook `useTodosController` encapsula a lógica.
- A **Injeção de Dependência** foi feita manualmente, criando as instâncias das classes no escopo do hook.
- `useEffect` é usado para disparar a busca inicial de dados assim que a tela é montada.
- `useCallback` foi utilizado para memorizar as funções de ação, otimizando a performance e evitando recriações desnecessárias em cada renderização.
- O hook retorna um objeto contendo os estados (`todos`, `isLoading`) e um objeto de `actions` para a View consumir.

## Por Que Foi Feito?

- **Separação de Responsabilidades (SoC):** Esta abordagem separa completamente a lógica de apresentação (o "como" as coisas funcionam na tela) da renderização da UI (o "o que" é exibido). Os componentes visuais ficarão muito mais simples e focados apenas em exibir dados.

- **Testabilidade:** O hook `useTodosController` pode ser testado de forma isolada, sem a necessidade de renderizar componentes visuais. É possível simular chamadas de função e verificar se os estados mudam conforme o esperado.

- **Reutilização e Clareza:** A lógica fica centralizada em um único lugar. Se outra tela precisasse da mesma lógica no futuro, o hook poderia ser reutilizado. Fica claro para qualquer desenvolvedor onde encontrar a lógica de funcionamento da tela.
