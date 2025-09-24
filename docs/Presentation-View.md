# A View (Presentation) - Componentes Visuais

## O Que Foi Feito?

Construi a interface do usuário (UI) do projeto, a camada com a qual o usuário interage diretamente.

1. **Componentização:** Dividi a UI em componentes lógicos e reutilizáveis:
    - `AddTodoForm`: Um formulário com `TextInput` e `Button` para adicionar novas tarefas.
    - `TodoItem`: A renderização de um único item da lista, com botões de ação (toggle, delete).
    - `TodoList`: Utiliza uma `FlatList` para exibir a lista de componentes `TodoItem` de forma performática.

2. **Montagem da Tela:** Na `HomeScreen`, organizei a montagem desses componentes.

3. **Conexão com o Controller:** A `HomeScreen` utiliza o hook `useTodosController` para obter o estado (`todos`, `isLoading`, `error`) e as ações (`addTodo`, `toggleTodo`, `deleteTodo`).

4. **Renderização Condicional:** A tela agora exibe um indicador de carregamento (`ActivityIndicator`) enquanto os dados são buscados, uma mensagem de erro caso a busca falhe, e a lista de tarefas quando os dados estão disponíveis.

## Como Foi Feito?

- Utilizei componentes fundamentais do React Native como `View`, `Text`, `SafeAreaView`, `TouchableOpacity`, `FlatList` e `Button`.
- A comunicação entre os componentes pais e filhos foi feita exclusivamente via **props**. A `HomeScreen` passa os dados e as funções de callback para os componentes filhos.
- Os componentes como `TodoItem` e `AddTodoForm` são "burros" (dumb/presentational). Eles não contêm lógica de negócio; apenas recebem dados via props e emitem eventos para seus pais através de funções de callback (ex: `onAdd`, `onToggle`).

## Por Que Foi Feito?

- **Declaratividade:** A UI é um reflexo direto do estado gerenciado pelo controller. Se o estado `todos` muda, a `FlatList` re-renderiza automaticamente.

- **Reutilização:** O `TodoItem` ou `AddTodoForm` poderiam ser facilmente reutilizados em outras telas da aplicação com mínima ou nenhuma modificação.

- **Manutenibilidade:** Se necessário alterar o visual de um item da lista, sei que o único arquivo a ser modificado é o `TodoItem.tsx`. A lógica de negócio permanece intacta. Essa separação clara cumpre perfeitamente o papel da "View" no padrão MVC.
